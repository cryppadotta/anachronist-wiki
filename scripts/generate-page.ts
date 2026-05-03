import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { parseDocument, stringify } from "yaml";
import { analyzeContent, requiredPageTreatment, validatePageSafety } from "./content-utils.ts";
import {
  edgeKindValues,
  formatZodIssue,
  nodeTypeValues,
  normalizeSlug,
  pageTreatmentValues,
  safetyClassValues,
  socialScaleValues,
  techFrontmatterSchema
} from "../src/lib/content-schema.ts";
import { createProvider } from "./generation/providers.ts";

type JsonMap = Record<string, any>;

type CliOptions = {
  topic: string;
  slug?: string;
  nodeType?: string;
  requestContext: string;
  sourcePack: string;
  sourcePackFile?: string;
  requestIssue?: string;
  provider: string;
  model?: string;
  temperature: number;
  outDir: string;
  artifactsDir: string;
  draftOnly: boolean;
  force: boolean;
  allowReviewFail: boolean;
};

type PromptStage = {
  stage: string;
  file: string;
  output: "json" | "markdown" | "link-repair-json";
};

const execFileAsync = promisify(execFile);
const promptDir = path.join(process.cwd(), "content", "prompts");
const stageOrder: PromptStage[] = [
  { stage: "graph-planner", file: "graph-planner.v1.md", output: "json" },
  { stage: "safety-classifier", file: "safety-classifier.v1.md", output: "json" },
  { stage: "material-sourcing", file: "material-sourcing.v1.md", output: "json" },
  { stage: "page-writer", file: "page-writer.v1.md", output: "markdown" },
  { stage: "practicality-reviewer", file: "practicality-reviewer.v1.md", output: "json" },
  { stage: "link-repair", file: "link-repair.v1.md", output: "link-repair-json" },
  { stage: "reviewer", file: "reviewer.v1.md", output: "json" }
];

const allowedReviewDecisions = new Set(["approve", "approve_with_minor_edits"]);
const validNodeTypes = new Set<string>(nodeTypeValues);
const validSafetyClasses = new Set<string>(safetyClassValues);
const validEdgeKinds = new Set<string>(edgeKindValues);
const validPageTreatments = new Set<string>(pageTreatmentValues);
const validSocialScales = new Set<string>(socialScaleValues);

const options = await parseArgs(process.argv.slice(2));
const provider = createProvider(options);
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const sourceCommit = await getSourceCommit();
const analysis = await analyzeContent();
const existingPageIndex = JSON.stringify(
  analysis.pages.map((page) => ({
    slug: page.data.slug,
    title: page.data.title,
    aliases: page.data.aliases,
    node_type: page.data.node_type,
    safety_class: page.data.safety_class,
    file: page.file
  })),
  null,
  2
);
const existingGraphJson = JSON.stringify(
  {
    nodes: analysis.pages.map((page) => ({ slug: page.data.slug, title: page.data.title, node_type: page.data.node_type })),
    edges: analysis.edges,
    missing_nodes: analysis.missingNodes
  },
  null,
  2
);

const initialSlug = normalizeSlug(options.slug ?? options.topic);
if (!initialSlug) {
  throw new Error("Could not derive a valid slug. Pass --slug kebab-case-slug.");
}

const targetPath = path.join(process.cwd(), options.outDir, `${initialSlug}.md`);
if (!options.draftOnly && !options.force && (await exists(targetPath))) {
  throw new Error(`Refusing to overwrite ${path.relative(process.cwd(), targetPath)}. Use --force to replace it.`);
}

const artifactRoot = path.resolve(process.cwd(), options.artifactsDir, `${initialSlug}-${timestamp}`);
await mkdir(artifactRoot, { recursive: true });

const promptHashes: Record<string, string> = {};
const outputs: Record<string, string | JsonMap> = {};
let graphPlan: JsonMap = {};
let safetyClassification: JsonMap = {};
let materialSourcing: JsonMap = {};
let pageWriterMarkdown = "";
let practicalityReview: JsonMap = {};
let linkRepair: JsonMap = {};
let reviewer: JsonMap = {};

for (const stage of stageOrder) {
  const template = await readFile(path.join(promptDir, stage.file), "utf8");
  promptHashes[stage.file] = hash(template);
  const prompt = renderPrompt(template, {
    TOPIC: options.topic,
    SLUG: initialSlug,
    REQUEST_CONTEXT: options.requestContext,
    NODE_TYPE_HINT: options.nodeType ?? "",
    EXISTING_PAGE_INDEX: existingPageIndex,
    EXISTING_GRAPH_JSON: existingGraphJson,
    EXISTING_SAFETY_POLICY: safetyPolicySummary(),
    GRAPH_PLAN_JSON: toPromptJson(graphPlan),
    SAFETY_CLASSIFICATION_JSON: toPromptJson(safetyClassification),
    MATERIAL_SOURCING_JSON: toPromptJson(materialSourcing),
    DRAFT_PAGE_IF_ANY: pageWriterMarkdown,
    DRAFT_PAGE_MARKDOWN: pageWriterMarkdown,
    CANDIDATE_PAGE_MARKDOWN: currentCandidateMarkdown(),
    PRACTICALITY_REVIEW_JSON: toPromptJson(practicalityReview),
    VALIDATION_ERRORS: toPromptJson(validateCandidate(currentCandidateMarkdown()).errors),
    SOURCE_PACK: options.sourcePack,
    GENERATION_METADATA: toPromptJson({
      provider: provider.name,
      model: provider.model,
      generated_at: new Date().toISOString(),
      request_issue: options.requestIssue,
      source_commit: sourceCommit,
      prompt_hashes: promptHashes
    })
  });

  await writeFile(path.join(artifactRoot, `${stage.stage}.prompt.txt`), prompt, "utf8");
  console.log(`Running ${stage.file} with ${provider.name}/${provider.model}...`);

  const raw = await provider.complete({
    stage: stage.stage,
    prompt,
    temperature: options.temperature
  });

  await writeFile(path.join(artifactRoot, `${stage.stage}.raw.txt`), `${raw.trim()}\n`, "utf8");

  if (stage.output === "markdown") {
    pageWriterMarkdown = stripCodeFence(raw.trim());
    outputs[stage.stage] = pageWriterMarkdown;
    await writeFile(path.join(artifactRoot, `${stage.stage}.md`), `${pageWriterMarkdown.trim()}\n`, "utf8");
  } else {
    const parsed = parseJsonOutput(raw);
    outputs[stage.stage] = parsed;
    await writeFile(path.join(artifactRoot, `${stage.stage}.json`), `${JSON.stringify(parsed, null, 2)}\n`, "utf8");

    if (stage.stage === "graph-planner") graphPlan = parsed;
    if (stage.stage === "safety-classifier") safetyClassification = parsed;
    if (stage.stage === "material-sourcing") materialSourcing = parsed;
    if (stage.stage === "practicality-reviewer") practicalityReview = parsed;
    if (stage.stage === "link-repair") linkRepair = parsed;
    if (stage.stage === "reviewer") reviewer = parsed;
  }
}

const correctedMarkdown =
  linkRepair.mode === "corrected_page" && typeof linkRepair.corrected_markdown === "string" && linkRepair.corrected_markdown.trim()
    ? stripCodeFence(linkRepair.corrected_markdown.trim())
    : pageWriterMarkdown;

const finalMarkdown = sanitizeGeneratedMarkdown(correctedMarkdown, {
  topic: options.topic,
  slug: initialSlug,
  providerName: provider.name,
  model: provider.model,
  generatedAt: new Date().toISOString(),
  sourceCommit,
  requestIssue: options.requestIssue,
  promptHashes,
  graphPlan,
  safetyClassification,
  materialSourcing,
  reviewer
});

const directValidation = validateCandidate(finalMarkdown);
await writeFile(path.join(artifactRoot, "candidate.md"), `${finalMarkdown.trim()}\n`, "utf8");
await writeFile(path.join(artifactRoot, "validation.json"), `${JSON.stringify(directValidation, null, 2)}\n`, "utf8");

if (!isReadyForPr(reviewer) && !options.allowReviewFail) {
  throw new Error(`Final reviewer did not mark the draft PR-ready. Artifacts: ${path.relative(process.cwd(), artifactRoot)}`);
}

if (directValidation.errors.length > 0) {
  throw new Error(
    `Generated page failed validation:\n${directValidation.errors.map((error) => `- ${error}`).join("\n")}\nArtifacts: ${path.relative(
      process.cwd(),
      artifactRoot
    )}`
  );
}

if (!options.draftOnly) {
  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, `${finalMarkdown.trim()}\n`, "utf8");

  const postWriteAnalysis = await analyzeContent();
  const errors = postWriteAnalysis.diagnostics.filter((diagnostic) => diagnostic.severity === "error");
  if (errors.length > 0) {
    throw new Error(`Content validation failed after writing ${path.relative(process.cwd(), targetPath)}.`);
  }
}

console.log(
  JSON.stringify(
    {
      ready_for_pr: true,
      draft_only: options.draftOnly,
      candidate: path.relative(process.cwd(), path.join(artifactRoot, "candidate.md")),
      output: options.draftOnly ? null : path.relative(process.cwd(), targetPath),
      artifacts: path.relative(process.cwd(), artifactRoot),
      warnings: directValidation.warnings
    },
    null,
    2
  )
);

async function parseArgs(args: string[]): Promise<CliOptions> {
  const values = new Map<string, string | boolean>();

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (!arg.startsWith("--")) {
      throw new Error(`Unexpected argument "${arg}".`);
    }

    const key = arg.slice(2);
    if (["draft-only", "force", "allow-review-fail"].includes(key)) {
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

  const topic = stringValue(values, "topic");
  if (!topic) {
    throw new Error(
      [
        "Usage: npm run generate:page -- --topic \"Rope\" [--provider openai] [--model gpt-5.5]",
        "Optional: --slug rope --node-type artifact --request-context \"...\" --source-pack-file sources.md --request-issue URL --draft-only --force"
      ].join("\n")
    );
  }

  const sourcePackFile = stringValue(values, "source-pack-file");

  return {
    topic,
    slug: stringValue(values, "slug"),
    nodeType: stringValue(values, "node-type"),
    requestContext: stringValue(values, "request-context") ?? "",
    sourcePack: sourcePackFile ? await readFile(path.resolve(process.cwd(), sourcePackFile), "utf8") : "",
    sourcePackFile,
    requestIssue: stringValue(values, "request-issue"),
    provider: stringValue(values, "provider") ?? "openai",
    model: stringValue(values, "model"),
    temperature: Number(stringValue(values, "temperature") ?? "0.2"),
    outDir: stringValue(values, "out-dir") ?? path.join("content", "tech"),
    artifactsDir: stringValue(values, "artifacts-dir") ?? path.join("generated", "drafts"),
    draftOnly: values.get("draft-only") === true,
    force: values.get("force") === true,
    allowReviewFail: values.get("allow-review-fail") === true
  };
}

function stringValue(values: Map<string, string | boolean>, key: string): string | undefined {
  const value = values.get(key);
  return typeof value === "string" ? value : undefined;
}

function renderPrompt(template: string, variables: Record<string, string>): string {
  return template.replace(/\{\{([A-Z_]+)\}\}/g, (_, key: string) => variables[key] ?? "");
}

function parseJsonOutput(raw: string): JsonMap {
  const text = stripCodeFence(raw.trim());
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(text.slice(start, end + 1));
    }
    throw new Error(`Expected JSON output but received: ${text.slice(0, 160)}`);
  }
}

function stripCodeFence(value: string): string {
  return value
    .replace(/^```(?:json|md|markdown)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function sanitizeGeneratedMarkdown(markdown: string, context: JsonMap): string {
  const { frontmatter, body } = parseMarkdown(markdown);
  const graph = context.graphPlan ?? {};
  const safety = context.safetyClassification ?? {};
  const reviewer = context.reviewer ?? {};
  const canonical = graph.canonical ?? {};
  const safetyClass = enumValue(safety.safety_class ?? graph.safety?.preliminary_safety_class ?? frontmatter.safety_class, validSafetyClasses, "allowed");
  const slug = normalizeSlug(canonical.slug ?? safety.slug ?? frontmatter.slug ?? context.slug);
  const title = String(canonical.title ?? safety.title ?? frontmatter.title ?? titleize(context.topic));
  const status = safetyClass === "blocked" ? "stub" : safetyClass === "restricted" ? "restricted" : "generated";
  const pageTreatment =
    requiredPageTreatment(safetyClass) ??
    enumValue(safety.page_treatment ?? graph.safety?.page_treatment ?? frontmatter.page_treatment, validPageTreatments, undefined);
  const confidence = reviewer.confidence_updates ?? frontmatter.confidence ?? {};

  const sanitized = {
    id: `tech_${slug}`,
    slug,
    title,
    aliases: arrayOfStrings(canonical.aliases ?? frontmatter.aliases),
    node_type: enumValue(canonical.primary_node_type ?? frontmatter.node_type ?? context.nodeType, validNodeTypes, "artifact"),
    secondary_node_types: arrayOfStrings(canonical.secondary_node_types ?? frontmatter.secondary_node_types).filter((value) =>
      validNodeTypes.has(value)
    ),
    status,
    ...(pageTreatment ? { page_treatment: pageTreatment } : {}),
    summary: String(canonical.summary ?? frontmatter.summary ?? `${title} generated draft.`),
    safety_class: safetyClass,
    era_floor: String(frontmatter.era_floor ?? "unknown"),
    difficulty: enumValue(frontmatter.difficulty, new Set(["trivial", "basic", "intermediate", "advanced", "expert"]), "intermediate"),
    precision_required: enumValue(frontmatter.precision_required, new Set(["none", "low", "medium", "high", "extreme"]), "medium"),
    ...(validSocialScales.has(frontmatter.minimum_social_scale) ? { minimum_social_scale: frontmatter.minimum_social_scale } : {}),
    time_to_first_working_version: String(frontmatter.time_to_first_working_version ?? "unknown"),
    prerequisites: graphEdges(graph.prerequisites, frontmatter.prerequisites),
    unlocks: unlockEdges(graph.unlocks, frontmatter.unlocks),
    missing_prerequisites: missingNodes(graph, frontmatter.missing_prerequisites),
    material_dependencies: materialDependencies(graph.material_supply_chains, frontmatter.material_dependencies),
    tags: arrayOfStrings(frontmatter.tags),
    generation: {
      created_by: "llm",
      provider: context.providerName,
      model: context.model,
      prompt_version: stageOrder.map((stage) => stage.file).join(","),
      prompt_hashes: context.promptHashes,
      generated_at: context.generatedAt,
      ...(context.requestIssue ? { request_issue: context.requestIssue } : {}),
      ...(context.sourceCommit ? { source_commit: context.sourceCommit } : {}),
      reviewed_by: arrayOfStrings(frontmatter.generation?.reviewed_by),
      source_review_notes: sourceReviewNotes(context.materialSourcing, reviewer)
    },
    confidence: {
      practicality: score(confidence.practicality, 0.5),
      historical_plausibility: score(confidence.historical_plausibility, 0.5),
      completeness: score(confidence.completeness, 0.5)
    }
  };

  const bodyWithProvenance = ensureSourceReviewNote(body, context.sourcePack);
  return `---\n${stringify(sanitized).trim()}\n---\n\n${bodyWithProvenance.trim()}\n`;
}

function parseMarkdown(markdown: string): { frontmatter: JsonMap; body: string } {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { frontmatter: {}, body: markdown };
  }

  const doc = parseDocument(match[1], { prettyErrors: false });
  if (doc.errors.length > 0) {
    return { frontmatter: {}, body: markdown.slice(match[0].length) };
  }

  return { frontmatter: (doc.toJSON() as JsonMap) ?? {}, body: markdown.slice(match[0].length) };
}

function graphEdges(primary: any[] | undefined, fallback: any[] | undefined) {
  const source = Array.isArray(primary) && primary.length > 0 ? primary : fallback;
  return (Array.isArray(source) ? source : [])
    .map((edge) => ({
      slug: normalizeSlug(edge.slug ?? ""),
      title: String(edge.title ?? titleize(edge.slug ?? "")),
      kind: enumValue(edge.edge_kind ?? edge.kind, validEdgeKinds, "hard"),
      role: String(edge.role ?? edge.relationship ?? "Required by the generated graph plan.")
    }))
    .filter((edge) => edge.slug && edge.title && edge.role);
}

function unlockEdges(primary: any[] | undefined, fallback: any[] | undefined) {
  const source = Array.isArray(primary) && primary.length > 0 ? primary : fallback;
  return (Array.isArray(source) ? source : [])
    .map((edge) => ({
      slug: normalizeSlug(edge.slug ?? ""),
      title: String(edge.title ?? titleize(edge.slug ?? "")),
      kind: "enables",
      role: String(edge.relationship ?? edge.role ?? "Unlocked by this generated page.")
    }))
    .filter((edge) => edge.slug && edge.title && edge.role);
}

function missingNodes(graph: JsonMap, fallback: any[] | undefined) {
  const plannedMissing = [
    ...(Array.isArray(graph.graph_notes?.missing_but_recommended_pages) ? graph.graph_notes.missing_but_recommended_pages : []),
    ...(Array.isArray(graph.prerequisites) ? graph.prerequisites.filter((edge: JsonMap) => edge.existing_page_likely === false) : [])
  ];
  const source = [...plannedMissing, ...(Array.isArray(fallback) ? fallback : [])];
  const bySlug = new Map<string, { slug: string; title: string; reason: string }>();

  for (const node of source) {
    const slug = normalizeSlug(node.slug ?? "");
    if (!slug) continue;
    bySlug.set(slug, {
      slug,
      title: String(node.title ?? titleize(slug)),
      reason: String(node.reason ?? node.role ?? "Referenced by the generated draft.")
    });
  }

  return Array.from(bySlug.values()).sort((a, b) => a.slug.localeCompare(b.slug));
}

function materialDependencies(primary: any[] | undefined, fallback: any[] | undefined) {
  const source = Array.isArray(primary) && primary.length > 0 ? primary : fallback;
  return (Array.isArray(source) ? source : [])
    .map((material) => ({
      slug: normalizeSlug(material.material_slug ?? material.slug ?? ""),
      title: String(material.material_title ?? material.title ?? titleize(material.material_slug ?? material.slug ?? "")),
      importance: enumValue(material.importance, new Set(["hard", "soft", "optional", "substitute"]), "optional"),
      availability_note: String(
        material.availability_note ?? material.where_found?.join?.("; ") ?? "Availability needs human source review."
      )
    }))
    .filter((material) => material.slug && material.title && material.availability_note);
}

function sourceReviewNotes(materialSourcing: JsonMap, reviewer: JsonMap): string[] {
  const notes = [
    ...arrayOfStrings(materialSourcing.source_review_notes),
    ...arrayOfStrings(materialSourcing.human_review_notes),
    ...arrayOfStrings(reviewer.human_reviewer_checklist)
  ];
  return notes.length > 0 ? notes : ["Specific historical and technical claims need human source review."];
}

function ensureSourceReviewNote(body: string, sourcePack: string): string {
  if (/## Sources and provenance/i.test(body)) {
    return body;
  }

  const sourceNote = sourcePack.trim()
    ? "Generated draft from the supplied source pack. Human reviewers must confirm that listed sources were used accurately."
    : "Generated draft. Specific historical and technical claims need human source review.";

  return `${body.trim()}\n\n## Sources and provenance\n\n${sourceNote}\n`;
}

function validateCandidate(markdown: string): { errors: string[]; warnings: string[] } {
  if (!markdown.trim()) {
    return { errors: [], warnings: [] };
  }

  const { frontmatter, body } = parseMarkdown(markdown);
  const parsed = techFrontmatterSchema.safeParse(frontmatter);
  const errors = parsed.success ? [] : parsed.error.issues.map(formatZodIssue);
  const warnings: string[] = [];

  if (!parsed.success) {
    return { errors, warnings };
  }

  const data = parsed.data;
  const diagnostics = validatePageSafety({ data, body });
  errors.push(...diagnostics.filter((diagnostic) => diagnostic.severity === "error").map((diagnostic) => diagnostic.message));
  warnings.push(...diagnostics.filter((diagnostic) => diagnostic.severity === "warning").map((diagnostic) => diagnostic.message));

  return { errors, warnings };
}

function isReadyForPr(review: JsonMap): boolean {
  return review.ready_for_pr === true && allowedReviewDecisions.has(review.decision);
}

function currentCandidateMarkdown(): string {
  if (linkRepair.mode === "corrected_page" && typeof linkRepair.corrected_markdown === "string") {
    return linkRepair.corrected_markdown;
  }
  return pageWriterMarkdown;
}

function safetyPolicySummary(): string {
  return [
    "allowed: practical instructions allowed.",
    "caution: practical instructions with hazards and controls.",
    "restricted: graph/context page only; no operational reproduction.",
    "blocked: placeholder-only node for graph completeness."
  ].join("\n");
}

function toPromptJson(value: unknown): string {
  return JSON.stringify(value ?? {}, null, 2);
}

function enumValue(value: unknown, allowed: Set<string>, fallback: string): string;
function enumValue(value: unknown, allowed: Set<string>, fallback: undefined): string | undefined;
function enumValue(value: unknown, allowed: Set<string>, fallback: string | undefined): string | undefined {
  return typeof value === "string" && allowed.has(value) ? value : fallback;
}

function arrayOfStrings(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0) : [];
}

function score(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : fallback;
}

function titleize(value: string): string {
  return value
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getSourceCommit(): Promise<string | undefined> {
  try {
    const { stdout } = await execFileAsync("git", ["rev-parse", "--short", "HEAD"], { cwd: process.cwd() });
    return stdout.trim() || undefined;
  } catch {
    return undefined;
  }
}
