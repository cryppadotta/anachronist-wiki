import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseDocument, stringify } from "yaml";
import type { EdgeKind, GraphEdge, TechFrontmatter } from "../src/lib/content-schema.ts";
import { normalizeSlug, techFrontmatterSchema } from "../src/lib/content-schema.ts";

type PageFile = {
  file: string;
  rawFrontmatter: Record<string, unknown>;
  frontmatter: TechFrontmatter;
  body: string;
};

type CliOptions = {
  contentDir: string;
  write: boolean;
  check: boolean;
};

const frontmatterPattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const options = parseArgs(process.argv.slice(2));
const pages = await loadPages(options.contentDir);
const pagesBySlug = new Map(pages.map((page) => [page.frontmatter.slug, page]));
const additionsBySlug = new Map<string, GraphEdge[]>();

for (const consumer of pages) {
  for (const prerequisite of consumer.frontmatter.prerequisites) {
    const provider = pagesBySlug.get(prerequisite.slug);
    if (!provider || provider.frontmatter.slug === consumer.frontmatter.slug) {
      continue;
    }

    const unlocks = provider.frontmatter.unlocks ?? [];
    if (unlocks.some((unlock) => unlock.slug === consumer.frontmatter.slug)) {
      continue;
    }

    const pending = additionsBySlug.get(provider.frontmatter.slug) ?? [];
    if (pending.some((unlock) => unlock.slug === consumer.frontmatter.slug)) {
      continue;
    }

    pending.push({
      slug: consumer.frontmatter.slug,
      title: consumer.frontmatter.title,
      kind: unlockKind(prerequisite.kind),
      role: unlockRole(consumer.frontmatter.title, prerequisite.role)
    });
    additionsBySlug.set(provider.frontmatter.slug, pending);
  }
}

const updatedPages = Array.from(additionsBySlug.keys()).sort();
const addedEdges = Array.from(additionsBySlug.values()).reduce((sum, additions) => sum + additions.length, 0);

if (options.write) {
  for (const slug of updatedPages) {
    const page = pagesBySlug.get(slug);
    if (!page) continue;

    const nextFrontmatter = {
      ...page.rawFrontmatter,
      unlocks: sortUnlocks([...(page.frontmatter.unlocks ?? []), ...(additionsBySlug.get(slug) ?? [])])
    };
    await mkdir(path.dirname(page.file), { recursive: true });
    await writeFile(page.file, `---\n${stringify(nextFrontmatter)}---\n${page.body.trimStart()}`, "utf8");
  }
}

const summary = {
  content_dir: path.relative(process.cwd(), path.resolve(options.contentDir)),
  mode: options.write ? "write" : options.check ? "check" : "dry-run",
  updated_pages: updatedPages.length,
  added_unlock_edges: addedEdges,
  pages: updatedPages.map((slug) => ({
    slug,
    added: additionsBySlug.get(slug)?.map((edge) => edge.slug).sort() ?? []
  }))
};

console.log(JSON.stringify(summary, null, 2));

if (options.check && addedEdges > 0) {
  process.exitCode = 1;
}

function parseArgs(args: string[]): CliOptions {
  const values = new Map<string, string | boolean>();

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (!arg.startsWith("--")) {
      throw new Error(`Unexpected argument "${arg}".`);
    }

    const key = arg.slice(2);
    if (key === "write" || key === "check") {
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

  return {
    contentDir: stringValue(values, "content-dir") ?? path.join("content", "tech"),
    write: values.get("write") === true,
    check: values.get("check") === true
  };
}

function stringValue(values: Map<string, string | boolean>, key: string): string | undefined {
  const value = values.get(key);
  return typeof value === "string" ? value : undefined;
}

async function loadPages(contentDir: string): Promise<PageFile[]> {
  const absoluteDir = path.resolve(process.cwd(), contentDir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });
  const pages: PageFile[] = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) {
      continue;
    }

    const file = path.join(absoluteDir, entry.name);
    const raw = await readFile(file, "utf8");
    const match = raw.match(frontmatterPattern);
    if (!match) {
      throw new Error(`Missing YAML frontmatter block in ${path.relative(process.cwd(), file)}.`);
    }

    const document = parseDocument(match[1], { prettyErrors: false });
    if (document.errors.length > 0) {
      throw new Error(`Invalid YAML frontmatter in ${path.relative(process.cwd(), file)}: ${document.errors[0].message}`);
    }

    const rawFrontmatter = document.toJSON() as Record<string, unknown>;
    const parsed = techFrontmatterSchema.safeParse(rawFrontmatter);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      throw new Error(`Invalid frontmatter in ${path.relative(process.cwd(), file)}: ${issue.path.join(".")}: ${issue.message}`);
    }

    pages.push({
      file,
      rawFrontmatter,
      frontmatter: parsed.data,
      body: raw.slice(match[0].length)
    });
  }

  return pages;
}

function unlockKind(kind: EdgeKind): EdgeKind {
  return kind;
}

function unlockRole(consumerTitle: string, prerequisiteRole: string): string {
  return `Enables ${consumerTitle}: ${prerequisiteRole}`;
}

function sortUnlocks(unlocks: GraphEdge[]): GraphEdge[] {
  const bySlug = new Map<string, GraphEdge>();
  for (const unlock of unlocks) {
    const slug = normalizeSlug(unlock.slug);
    if (!slug || bySlug.has(slug)) {
      continue;
    }
    bySlug.set(slug, { ...unlock, slug });
  }
  return Array.from(bySlug.values()).sort((a, b) => `${a.slug}|${a.kind}`.localeCompare(`${b.slug}|${b.kind}`));
}
