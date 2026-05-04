import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseDocument, stringify } from "yaml";
import { normalizeSlug } from "../src/lib/content-schema.ts";

type ImageKind = "header" | "schematic";
type ImageFormat = "png" | "jpeg" | "webp";
type Provider = "openai" | "fixture";
type JsonMap = Record<string, any>;

type CliOptions = {
  all: boolean;
  slug?: string;
  limit?: number;
  kinds: ImageKind[];
  provider: Provider;
  model: string;
  size: string;
  quality: string;
  outputFormat: ImageFormat;
  outputCompression: number;
  contentDir: string;
  outDir: string;
  artifactsDir: string;
  force: boolean;
  dryRun: boolean;
};

type Page = {
  file: string;
  frontmatter: JsonMap;
  body: string;
};

const promptFiles: Record<ImageKind, string> = {
  header: "header-image.v1.md",
  schematic: "schematic-image.v1.md"
};

const options = parseArgs(process.argv.slice(2));
const pages = await selectPages(options);
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const artifactRoot = path.resolve(process.cwd(), options.artifactsDir, timestamp);

if (pages.length === 0) {
  throw new Error("No pages matched the requested image generation scope.");
}

const results: JsonMap[] = [];

for (const page of pages) {
  const slug = normalizeSlug(page.frontmatter.slug ?? path.basename(page.file, path.extname(page.file)));
  if (!slug) {
    throw new Error(`Could not derive a valid slug for ${path.relative(process.cwd(), page.file)}.`);
  }

  const images = page.frontmatter.images ?? {};
  const generatedForPage: Record<string, JsonMap> = {};

  for (const kind of options.kinds) {
    if (images[kind]?.src && !options.force) {
      results.push({ slug, kind, skipped: true, reason: "frontmatter already has an image" });
      continue;
    }

    const promptFile = promptFiles[kind];
    const templatePath = path.join(process.cwd(), "content", "prompts", promptFile);
    const template = await readFile(templatePath, "utf8");
    const renderedPrompt = renderPrompt(template, promptVariables(page.frontmatter, kind));
    const promptHash = hash(renderedPrompt);
    const promptVersion = promptFile;
    const extension = options.provider === "fixture" ? "svg" : options.outputFormat;
    const outputPath = path.resolve(process.cwd(), options.outDir, `${slug}-${kind}.${extension}`);
    const artifactDir = path.join(artifactRoot, slug);
    await mkdir(artifactDir, { recursive: true });
    await writeFile(path.join(artifactDir, `${kind}.prompt.txt`), renderedPrompt, "utf8");

    if (options.dryRun) {
      results.push({
        slug,
        kind,
        dry_run: true,
        output: path.relative(process.cwd(), outputPath),
        prompt: path.relative(process.cwd(), path.join(artifactDir, `${kind}.prompt.txt`))
      });
      continue;
    }

    await mkdir(path.dirname(outputPath), { recursive: true });
    if (options.provider === "fixture") {
      await writeFixtureSvg(outputPath, page.frontmatter, kind);
    } else {
      await writeOpenAiImage(outputPath, renderedPrompt, options);
    }

    const generatedAt = new Date().toISOString();
    const metadata = {
      slug,
      kind,
      provider: options.provider,
      model: options.model,
      output_format: options.provider === "fixture" ? "svg" : options.outputFormat,
      output_compression: options.provider === "fixture" ? undefined : options.outputCompression,
      prompt_version: promptVersion,
      prompt_hash: promptHash,
      generated_at: generatedAt,
      output: path.relative(process.cwd(), outputPath)
    };
    await writeFile(path.join(artifactDir, `${kind}.metadata.json`), `${JSON.stringify(metadata, null, 2)}\n`, "utf8");

    generatedForPage[kind] = {
      src: publicSrc(outputPath),
      alt: altText(page.frontmatter, kind),
      provider: options.provider,
      model: options.model,
      prompt_version: promptVersion,
      prompt_hash: promptHash,
      generated_at: generatedAt
    };
    results.push(metadata);
  }

  if (!options.dryRun && Object.keys(generatedForPage).length > 0) {
    const mergedImages = { ...(page.frontmatter.images ?? {}), ...generatedForPage };
    const nextFrontmatter = { ...page.frontmatter, images: mergedImages };
    await writeMarkdown(page.file, nextFrontmatter, page.body);
  }
}

console.log(JSON.stringify({ pages: pages.length, results }, null, 2));

function parseArgs(args: string[]): CliOptions {
  const values = new Map<string, string | boolean>();

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (!arg.startsWith("--")) {
      throw new Error(`Unexpected argument "${arg}".`);
    }
    const key = arg.slice(2);
    if (["all", "force", "dry-run"].includes(key)) {
      values.set(key, true);
      continue;
    }
    const next = args[index + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for --${key}.`);
    }
    values.set(key, next);
    index += 1;
  }

  const slug = stringValue(values, "slug");
  const all = values.get("all") === true;
  if (!all && !slug) {
    throw new Error("Pass --slug kebab-case-slug or --all.");
  }

  return {
    all,
    slug,
    limit: numberValue(values, "limit"),
    kinds: parseKinds(stringValue(values, "kind") ?? "both"),
    provider: parseProvider(stringValue(values, "provider") ?? "openai"),
    model: stringValue(values, "model") ?? "gpt-image-2",
    size: stringValue(values, "size") ?? "1536x1024",
    quality: stringValue(values, "quality") ?? "medium",
    outputFormat: parseOutputFormat(stringValue(values, "output-format") ?? "webp"),
    outputCompression: compressionValue(values, "output-compression") ?? 85,
    contentDir: stringValue(values, "content-dir") ?? path.join("content", "tech"),
    outDir: stringValue(values, "out-dir") ?? path.join("public", "images", "tech"),
    artifactsDir: stringValue(values, "artifacts-dir") ?? path.join("generated", "images"),
    force: values.get("force") === true,
    dryRun: values.get("dry-run") === true
  };
}

function stringValue(values: Map<string, string | boolean>, key: string): string | undefined {
  const value = values.get(key);
  return typeof value === "string" ? value : undefined;
}

function numberValue(values: Map<string, string | boolean>, key: string): number | undefined {
  const value = stringValue(values, key);
  if (!value) return undefined;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) {
    throw new Error(`--${key} must be a positive integer.`);
  }
  return parsed;
}

function parseProvider(value: string): Provider {
  if (value === "openai" || value === "fixture") return value;
  throw new Error('Unknown image provider. Use "openai" or "fixture".');
}

function parseOutputFormat(value: string): ImageFormat {
  if (value === "png" || value === "jpeg" || value === "webp") return value;
  throw new Error('Unknown image output format. Use "png", "jpeg", or "webp".');
}

function compressionValue(values: Map<string, string | boolean>, key: string): number | undefined {
  const value = stringValue(values, key);
  if (!value) return undefined;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 0 || parsed > 100) {
    throw new Error(`--${key} must be an integer from 0 to 100.`);
  }
  return parsed;
}

function parseKinds(value: string): ImageKind[] {
  if (value === "both") return ["header", "schematic"];
  if (value === "header" || value === "schematic") return [value];
  throw new Error('Unknown image kind. Use "header", "schematic", or "both".');
}

async function selectPages(options: CliOptions): Promise<Page[]> {
  const contentRoot = path.resolve(process.cwd(), options.contentDir);
  if (options.slug) {
    return [await readMarkdown(path.join(contentRoot, `${normalizeSlug(options.slug)}.md`))];
  }

  const files = (await readdir(contentRoot))
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .sort()
    .map((file) => path.join(contentRoot, file));
  const selected = options.limit ? files.slice(0, options.limit) : files;
  return Promise.all(selected.map(readMarkdown));
}

async function readMarkdown(file: string): Promise<Page> {
  const raw = await readFile(file, "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    throw new Error(`Missing YAML frontmatter: ${path.relative(process.cwd(), file)}`);
  }
  const doc = parseDocument(match[1], { prettyErrors: false });
  if (doc.errors.length > 0) {
    throw new Error(`Invalid YAML frontmatter: ${path.relative(process.cwd(), file)}`);
  }
  return {
    file,
    frontmatter: (doc.toJSON() as JsonMap) ?? {},
    body: raw.slice(match[0].length)
  };
}

async function writeMarkdown(file: string, frontmatter: JsonMap, body: string): Promise<void> {
  await writeFile(file, `---\n${stringify(frontmatter).trim()}\n---\n\n${body.trim()}\n`, "utf8");
}

function renderPrompt(template: string, variables: Record<string, string>): string {
  return template.replace(/\{\{([A-Z_]+)\}\}/g, (_, key: string) => variables[key] ?? "");
}

function promptVariables(frontmatter: JsonMap, kind: ImageKind): Record<string, string> {
  const title = String(frontmatter.title ?? "Untitled technology");
  const partLabels = labelList(frontmatter);
  return {
    OBJECT_NAME: title,
    BRIEF_DESCRIPTION: String(frontmatter.summary ?? title),
    PART_LABELS: partLabels,
    DIMENSION_LABELS: dimensionLabels(frontmatter, kind),
    FUNCTIONAL_TAGLINE: tagline(frontmatter),
    SAFETY_CLASS: String(frontmatter.safety_class ?? "allowed"),
    PAGE_TREATMENT: String(frontmatter.page_treatment ?? "practical")
  };
}

function labelList(frontmatter: JsonMap): string {
  const labels = [
    ...titles(frontmatter.material_dependencies).slice(0, 2),
    ...titles(frontmatter.prerequisites).slice(0, 2),
    String(frontmatter.node_type ?? "working form")
  ]
    .map((value) => value.trim())
    .filter(Boolean);
  return Array.from(new Set(labels)).slice(0, 5).join(", ");
}

function titles(values: unknown): string[] {
  if (!Array.isArray(values)) return [];
  return values.map((value) => String(value?.title ?? value?.slug ?? "")).filter(Boolean);
}

function dimensionLabels(frontmatter: JsonMap, kind: ImageKind): string {
  const safetyClass = String(frontmatter.safety_class ?? "allowed");
  if (safetyClass === "restricted" || safetyClass === "blocked") {
    return "overall form, relationship of major parts, non-operational scale marker";
  }
  if (kind === "schematic") {
    return "overall length, working face width, clearance or reach";
  }
  return "overall form, working surface, handling area";
}

function tagline(frontmatter: JsonMap): string {
  const type = String(frontmatter.node_type ?? "technology").replace(/_/g, " ");
  const difficulty = String(frontmatter.difficulty ?? "practical").replace(/_/g, " ");
  return `${difficulty} ${type} reference`;
}

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

async function writeOpenAiImage(outputPath: string, prompt: string, options: CliOptions): Promise<void> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required for --provider openai.");
  }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: options.model,
      prompt,
      n: 1,
      size: options.size,
      quality: options.quality,
      background: "opaque",
      output_format: options.outputFormat,
      ...(options.outputFormat === "png" ? {} : { output_compression: options.outputCompression })
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI image request failed (${response.status}): ${await response.text()}`);
  }

  const payload = await response.json();
  const image = payload.data?.[0];
  if (typeof image?.b64_json === "string") {
    await writeFile(outputPath, Buffer.from(image.b64_json, "base64"));
    return;
  }
  if (typeof image?.url === "string") {
    const imageResponse = await fetch(image.url);
    if (!imageResponse.ok) {
      throw new Error(`Failed to download generated image (${imageResponse.status}).`);
    }
    await writeFile(outputPath, Buffer.from(await imageResponse.arrayBuffer()));
    return;
  }

  throw new Error("OpenAI image response did not contain b64_json or url data.");
}

async function writeFixtureSvg(outputPath: string, frontmatter: JsonMap, kind: ImageKind): Promise<void> {
  const title = escapeXml(String(frontmatter.title ?? "Technology"));
  const label = kind === "header" ? "FIELD SKETCH" : "TECHNICAL SCHEMATIC";
  const drawing =
    kind === "header"
      ? '<path d="M340 278c76-46 174-45 246 0m-286 128c104 52 244 52 348 0M376 268l-38 172m288-172 38 172" />'
      : '<rect x="278" y="250" width="364" height="188" /><path d="M278 470h364M246 250v188m428-188v188M278 218h364" />';
  await writeFile(
    outputPath,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 620" role="img" aria-label="${label} ${title}">
  <rect width="920" height="620" fill="#f7f3e8"/>
  <g fill="none" stroke="#202018" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    ${drawing}
  </g>
  <g fill="#202018" font-family="Georgia, serif" text-anchor="middle">
    <text x="460" y="82" font-size="34">${title}</text>
    <text x="460" y="540" font-size="20">${label}</text>
  </g>
</svg>
`,
    "utf8"
  );
}

function publicSrc(outputPath: string): string {
  const publicRoot = path.resolve(process.cwd(), "public");
  const relative = path.relative(publicRoot, outputPath);
  if (!relative.startsWith("..") && !path.isAbsolute(relative)) {
    return `/${relative.split(path.sep).join("/")}`;
  }
  return path.relative(process.cwd(), outputPath).split(path.sep).join("/");
}

function altText(frontmatter: JsonMap, kind: ImageKind): string {
  const title = String(frontmatter.title ?? "technology");
  const labels = imageLabels(frontmatter);
  const detail = labels.length > 0 ? `, highlighting ${labels.join(", ")}` : "";
  if (kind === "header") {
    return `Field sketch of ${title}${detail}.`;
  }
  return `Schematic diagram of ${title}${detail} and major working relationships.`;
}

function imageLabels(frontmatter: JsonMap): string[] {
  const values = [
    ...titles(frontmatter.material_dependencies).slice(0, 2),
    ...titles(frontmatter.prerequisites).slice(0, 2),
    String(frontmatter.node_type ?? "")
  ]
    .map((value) => value.trim().toLowerCase().replace(/_/g, " "))
    .filter(Boolean);
  return Array.from(new Set(values)).slice(0, 4);
}

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
