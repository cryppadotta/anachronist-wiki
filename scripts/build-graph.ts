import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { analyzeContent } from "./content-utils.ts";
import { graphCyclePolicy } from "../src/lib/content-schema.ts";

const outputPath = path.join(process.cwd(), "generated", "tech-graph.json");
const analysis = await analyzeContent();
const errors = analysis.diagnostics.filter((diagnostic) => diagnostic.severity === "error");

if (errors.length > 0) {
  for (const error of errors) {
    const location = [error.file, error.slug].filter(Boolean).join(" ");
    console.error(`ERROR: ${location ? `${location}: ` : ""}${error.message}`);
  }
  process.exit(1);
}

const graph = {
  schema_version: 1,
  cycle_policy: graphCyclePolicy,
  nodes: analysis.pages.map((page) => ({
    slug: page.data.slug,
    title: page.data.title,
    aliases: [...page.data.aliases].sort(),
    node_type: page.data.node_type,
    status: page.data.status,
    safety_class: page.data.safety_class,
    summary: page.data.summary,
    era_floor: page.data.era_floor,
    difficulty: page.data.difficulty,
    precision_required: page.data.precision_required,
    time_to_first_working_version: page.data.time_to_first_working_version,
    tags: [...page.data.tags].sort(),
    path: `/tech/${page.data.slug}/`,
    source_file: page.file,
    confidence: page.data.confidence,
    generation: page.data.generation
  })),
  edges: analysis.edges,
  missing_nodes: analysis.missingNodes,
  diagnostics: analysis.diagnostics
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(graph, null, 2)}\n`, "utf8");

console.log(`Wrote ${path.relative(process.cwd(), outputPath)}`);
console.log(
  JSON.stringify(
    {
      nodes: graph.nodes.length,
      edges: graph.edges.length,
      missing_nodes: graph.missing_nodes.length,
      warnings: graph.diagnostics.filter((diagnostic) => diagnostic.severity === "warning").length
    },
    null,
    2
  )
);
