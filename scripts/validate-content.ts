import { analyzeContent } from "./content-utils.ts";

const analysis = await analyzeContent();
const errors = analysis.diagnostics.filter((diagnostic) => diagnostic.severity === "error");
const warnings = analysis.diagnostics.filter((diagnostic) => diagnostic.severity === "warning");

for (const diagnostic of analysis.diagnostics) {
  const location = [diagnostic.file, diagnostic.slug].filter(Boolean).join(" ");
  console.log(`${diagnostic.severity.toUpperCase()}: ${location ? `${location}: ` : ""}${diagnostic.message}`);
}

console.log(
  JSON.stringify(
    {
      valid: errors.length === 0,
      pages: analysis.pages.length,
      edges: analysis.edges.length,
      missing_nodes: analysis.missingNodes.length,
      errors: errors.length,
      warnings: warnings.length
    },
    null,
    2
  )
);

if (errors.length > 0) {
  process.exitCode = 1;
}
