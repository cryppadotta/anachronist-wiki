import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseDocument } from "yaml";
import {
  type EdgeKind,
  type GraphEdge,
  type TechFrontmatter,
  formatZodIssue,
  graphCyclePolicy,
  normalizeSlug,
  techFrontmatterSchema
} from "../src/lib/content-schema.ts";

export type Severity = "error" | "warning";

export type Diagnostic = {
  severity: Severity;
  file?: string;
  slug?: string;
  message: string;
};

export type LoadedPage = {
  file: string;
  body: string;
  data: TechFrontmatter;
};

export type GraphEdgeRecord = {
  from: string;
  to: string;
  kind: EdgeKind;
  role: string;
  source: "prerequisite" | "unlock";
  declared_in: string;
  title: string;
  cycle_ok?: boolean;
  cycle_reason?: string;
};

export type MissingNodeRecord = {
  slug: string;
  title: string;
  referenced_by: string[];
  reference_types: string[];
};

export type ContentAnalysis = {
  pages: LoadedPage[];
  edges: GraphEdgeRecord[];
  missingNodes: MissingNodeRecord[];
  diagnostics: Diagnostic[];
};

const techDir = path.join(process.cwd(), "content", "tech");
const frontmatterPattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const wikiLinkPattern = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;
const practicalPhysicalTypes = new Set(["artifact", "process", "material", "tool", "test"]);
const strictCycleEdgeKinds = new Set<string>(graphCyclePolicy.strictEdgeKinds);
const operationalHeadings = new Set([
  "procedure",
  "tools and workshop requirements",
  "failure modes",
  "maintenance, repair, and iteration"
]);

export async function analyzeContent(): Promise<ContentAnalysis> {
  const { pages, diagnostics } = await loadTechPages();
  diagnostics.push(...validateDuplicateSlugsAndAliases(pages));
  diagnostics.push(...validateSafetyMetadata(pages));

  const edges = buildEdges(pages);
  const missingNodes = detectMissingNodes(pages, edges);

  diagnostics.push(...missingNodeDiagnostics(pages, missingNodes));
  diagnostics.push(...validateCycles(edges, pages));

  return {
    pages: sortBy(pages, (page) => page.data.slug),
    edges: sortEdges(edges),
    missingNodes: sortBy(missingNodes, (node) => node.slug),
    diagnostics: sortDiagnostics(diagnostics)
  };
}

async function loadTechPages(): Promise<{ pages: LoadedPage[]; diagnostics: Diagnostic[] }> {
  const files = await walkMarkdown(techDir);
  const pages: LoadedPage[] = [];
  const diagnostics: Diagnostic[] = [];

  for (const absoluteFile of files) {
    const file = path.relative(process.cwd(), absoluteFile);
    const raw = await readFile(absoluteFile, "utf8");
    const match = raw.match(frontmatterPattern);

    if (!match) {
      diagnostics.push({ severity: "error", file, message: "Missing YAML frontmatter block." });
      continue;
    }

    const yaml = parseDocument(match[1], { prettyErrors: false });
    if (yaml.errors.length > 0) {
      diagnostics.push(
        ...yaml.errors.map((error) => ({
          severity: "error" as const,
          file,
          message: `Invalid YAML frontmatter: ${error.message}`
        }))
      );
      continue;
    }

    const parsed = techFrontmatterSchema.safeParse(yaml.toJSON());
    if (!parsed.success) {
      diagnostics.push(
        ...parsed.error.issues.map((issue) => ({
          severity: "error" as const,
          file,
          message: formatZodIssue(issue)
        }))
      );
      continue;
    }

    pages.push({
      file,
      body: raw.slice(match[0].length),
      data: parsed.data
    });
  }

  return { pages, diagnostics };
}

async function walkMarkdown(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walkMarkdown(absolutePath);
      }
      if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
        return [absolutePath];
      }
      return [];
    })
  );

  return files.flat().sort();
}

function validateDuplicateSlugsAndAliases(pages: LoadedPage[]): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const slugOwners = new Map<string, LoadedPage>();

  for (const page of pages) {
    const owner = slugOwners.get(page.data.slug);
    if (owner) {
      diagnostics.push({
        severity: "error",
        slug: page.data.slug,
        message: `Duplicate slug "${page.data.slug}" in ${owner.file} and ${page.file}.`
      });
    } else {
      slugOwners.set(page.data.slug, page);
    }
  }

  const aliasOwners = new Map<string, LoadedPage>();
  for (const page of pages) {
    for (const alias of page.data.aliases) {
      const normalizedAlias = normalizeSlug(alias);
      if (!normalizedAlias || normalizedAlias === page.data.slug) {
        continue;
      }

      const slugOwner = slugOwners.get(normalizedAlias);
      if (slugOwner && slugOwner.data.slug !== page.data.slug) {
        diagnostics.push({
          severity: "error",
          file: page.file,
          slug: page.data.slug,
          message: `Alias "${alias}" collides with slug "${slugOwner.data.slug}" in ${slugOwner.file}.`
        });
      }

      const aliasOwner = aliasOwners.get(normalizedAlias);
      if (aliasOwner && aliasOwner.data.slug !== page.data.slug) {
        diagnostics.push({
          severity: "error",
          file: page.file,
          slug: page.data.slug,
          message: `Alias "${alias}" duplicates an alias on ${aliasOwner.file}.`
        });
      } else {
        aliasOwners.set(normalizedAlias, page);
      }
    }
  }

  return diagnostics;
}

function validateSafetyMetadata(pages: LoadedPage[]): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];

  for (const page of pages) {
    const headings = extractHeadings(page.body);
    const headingSet = new Set(headings.map((heading) => normalizeHeading(heading)));
    const { data } = page;

    if (data.safety_class === "caution" && !headingSet.has("hazards and controls")) {
      diagnostics.push({
        severity: "error",
        file: page.file,
        slug: data.slug,
        message: "Caution pages must include a Hazards and controls section."
      });
    }

    if ((data.safety_class === "allowed" || data.safety_class === "caution") && practicalPhysicalTypes.has(data.node_type)) {
      for (const required of ["field briefing", "prerequisite tree", "materials and sourcing", "verification and quality control"]) {
        if (!headingSet.has(required)) {
          diagnostics.push({
            severity: "error",
            file: page.file,
            slug: data.slug,
            message: `Practical ${data.node_type} pages must include a "${titleCase(required)}" section.`
          });
        }
      }
    }

    if (data.safety_class === "restricted" || data.safety_class === "blocked") {
      for (const heading of headingSet) {
        if (operationalHeadings.has(heading)) {
          diagnostics.push({
            severity: "error",
            file: page.file,
            slug: data.slug,
            message: `${titleCase(data.safety_class)} pages must not include operational "${titleCase(heading)}" sections.`
          });
        }
      }
    }

    if (data.safety_class === "blocked" && data.status !== "stub" && data.status !== "restricted") {
      diagnostics.push({
        severity: "error",
        file: page.file,
        slug: data.slug,
        message: "Blocked pages must use stub or restricted status."
      });
    }
  }

  return diagnostics;
}

function buildEdges(pages: LoadedPage[]): GraphEdgeRecord[] {
  const edges: GraphEdgeRecord[] = [];

  for (const page of pages) {
    for (const edge of page.data.prerequisites) {
      edges.push(toEdgeRecord(edge, edge.slug, page.data.slug, "prerequisite", page.data.slug));
    }

    for (const edge of page.data.unlocks) {
      edges.push(toEdgeRecord(edge, page.data.slug, edge.slug, "unlock", page.data.slug));
    }
  }

  return sortEdges(dedupeEdges(edges));
}

function toEdgeRecord(
  edge: GraphEdge,
  from: string,
  to: string,
  source: GraphEdgeRecord["source"],
  declaredIn: string
): GraphEdgeRecord {
  return {
    from,
    to,
    kind: edge.kind,
    role: edge.role,
    source,
    declared_in: declaredIn,
    title: edge.title,
    ...(edge.cycle_ok ? { cycle_ok: edge.cycle_ok } : {}),
    ...(edge.cycle_reason ? { cycle_reason: edge.cycle_reason } : {})
  };
}

function detectMissingNodes(pages: LoadedPage[], edges: GraphEdgeRecord[]): MissingNodeRecord[] {
  const slugs = new Set(pages.map((page) => page.data.slug));
  const missing = new Map<string, MissingNodeRecord>();

  function addMissing(slug: string, title: string, referencedBy: string, referenceType: string) {
    if (!slug || slugs.has(slug)) {
      return;
    }

    const record = missing.get(slug) ?? {
      slug,
      title,
      referenced_by: [],
      reference_types: []
    };

    record.title = record.title || title;
    record.referenced_by = sortedUnique([...record.referenced_by, referencedBy]);
    record.reference_types = sortedUnique([...record.reference_types, referenceType]);
    missing.set(slug, record);
  }

  for (const edge of edges) {
    addMissing(edge.from, edge.title, edge.declared_in, `edge:${edge.source}:${edge.kind}`);
    addMissing(edge.to, edge.title, edge.declared_in, `edge:${edge.source}:${edge.kind}`);
  }

  for (const page of pages) {
    for (const node of page.data.missing_prerequisites) {
      addMissing(node.slug, node.title, page.data.slug, "declared_missing_prerequisite");
    }

    for (const link of extractWikiLinks(page.body)) {
      addMissing(link.slug, link.title, page.data.slug, "body_wikilink");
    }
  }

  return Array.from(missing.values()).map((node) => ({
    ...node,
    referenced_by: sortedUnique(node.referenced_by),
    reference_types: sortedUnique(node.reference_types)
  }));
}

function missingNodeDiagnostics(pages: LoadedPage[], missingNodes: MissingNodeRecord[]): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const missingBySlug = new Map(missingNodes.map((node) => [node.slug, node]));
  const declaredMissing = new Map<string, Set<string>>();

  for (const page of pages) {
    declaredMissing.set(page.data.slug, new Set(page.data.missing_prerequisites.map((node) => node.slug)));
  }

  for (const page of pages) {
    for (const edge of [...page.data.prerequisites, ...page.data.unlocks]) {
      if (!missingBySlug.has(edge.slug)) {
        continue;
      }

      const declared = declaredMissing.get(page.data.slug)?.has(edge.slug);
      diagnostics.push({
        severity: "warning",
        file: page.file,
        slug: page.data.slug,
        message: `Graph reference "${edge.slug}" has no page${declared ? "" : " and is not listed in missing_prerequisites"}.`
      });
    }

    const wikiLinks = new Map(extractWikiLinks(page.body).map((link) => [link.slug, link]));
    for (const link of wikiLinks.values()) {
      if (!missingBySlug.has(link.slug)) {
        continue;
      }

      diagnostics.push({
        severity: "warning",
        file: page.file,
        slug: page.data.slug,
        message: `Wikilink "${link.slug}" has no matching page.`
      });
    }
  }

  return diagnostics;
}

function validateCycles(edges: GraphEdgeRecord[], pages: LoadedPage[]): Diagnostic[] {
  const existingSlugs = new Set(pages.map((page) => page.data.slug));
  const existingEdges = edges.filter((edge) => existingSlugs.has(edge.from) && existingSlugs.has(edge.to));
  const cycles = findCycles(existingEdges);
  const diagnostics: Diagnostic[] = [];

  for (const cycle of cycles) {
    const strictEdges = cycle.filter((edge) => strictCycleEdgeKinds.has(edge.kind));
    const cyclePath = [...cycle.map((edge) => edge.from), cycle[0]?.from].join(" -> ");
    const accepted = strictEdges.length === 0 || strictEdges.every((edge) => edge.cycle_ok && edge.cycle_reason);

    diagnostics.push({
      severity: accepted ? "warning" : "error",
      message: accepted
        ? `Accepted co-evolutionary graph cycle: ${cyclePath}.`
        : `Invalid graph cycle: ${cyclePath}. Strict cycles need cycle_ok and cycle_reason on strict edges.`
    });
  }

  return diagnostics;
}

function findCycles(edges: GraphEdgeRecord[]): GraphEdgeRecord[][] {
  const outgoing = new Map<string, GraphEdgeRecord[]>();
  for (const edge of edges) {
    outgoing.set(edge.from, [...(outgoing.get(edge.from) ?? []), edge]);
  }

  const cycles = new Map<string, GraphEdgeRecord[]>();
  const nodes = Array.from(new Set(edges.flatMap((edge) => [edge.from, edge.to]))).sort();

  function visit(start: string, current: string, pathEdges: GraphEdgeRecord[], seen: Set<string>) {
    for (const edge of outgoing.get(current) ?? []) {
      if (edge.to === start) {
        const cycle = [...pathEdges, edge];
        cycles.set(cycleKey(cycle), cycle);
        continue;
      }

      if (seen.has(edge.to) || edge.to < start) {
        continue;
      }

      visit(start, edge.to, [...pathEdges, edge], new Set([...seen, edge.to]));
    }
  }

  for (const node of nodes) {
    visit(node, node, [], new Set([node]));
  }

  return Array.from(cycles.values());
}

function cycleKey(cycle: GraphEdgeRecord[]): string {
  const parts = cycle.map((edge) => `${edge.from}>${edge.to}:${edge.kind}`);
  const rotations = parts.map((_, index) => [...parts.slice(index), ...parts.slice(0, index)].join("|"));
  return rotations.sort()[0];
}

function extractWikiLinks(body: string): Array<{ slug: string; title: string }> {
  const links: Array<{ slug: string; title: string }> = [];

  for (const match of body.matchAll(wikiLinkPattern)) {
    const slug = normalizeSlug(match[1] ?? "");
    const title = (match[2] ?? match[1] ?? slug).trim();
    if (slug) {
      links.push({ slug, title });
    }
  }

  return links;
}

function extractHeadings(body: string): string[] {
  return Array.from(body.matchAll(/^##\s+(.+)$/gm), (match) => match[1]?.trim() ?? "");
}

function normalizeHeading(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function titleCase(value: string): string {
  return value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

function dedupeEdges(edges: GraphEdgeRecord[]): GraphEdgeRecord[] {
  const unique = new Map<string, GraphEdgeRecord>();
  for (const edge of edges) {
    unique.set(`${edge.from}|${edge.to}|${edge.kind}|${edge.source}|${edge.declared_in}`, edge);
  }
  return Array.from(unique.values());
}

function sortEdges(edges: GraphEdgeRecord[]): GraphEdgeRecord[] {
  return sortBy(edges, (edge) => `${edge.from}|${edge.to}|${edge.kind}|${edge.source}|${edge.declared_in}`);
}

function sortDiagnostics(diagnostics: Diagnostic[]): Diagnostic[] {
  return sortBy(diagnostics, (diagnostic) =>
    [diagnostic.severity, diagnostic.file ?? "", diagnostic.slug ?? "", diagnostic.message].join("|")
  );
}

function sortBy<T>(items: T[], keyFn: (item: T) => string): T[] {
  return [...items].sort((a, b) => keyFn(a).localeCompare(keyFn(b)));
}

function sortedUnique(values: string[]): string[] {
  return Array.from(new Set(values)).sort();
}
