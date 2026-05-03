import assert from "node:assert/strict";
import { validatePageSafety } from "./content-utils.ts";
import type { TechFrontmatter } from "../src/lib/content-schema.ts";

const restrictedFrontmatter: TechFrontmatter = {
  id: "tech_restricted_fixture",
  slug: "restricted-fixture",
  title: "Restricted Fixture",
  aliases: [],
  node_type: "knowledge",
  secondary_node_types: [],
  status: "restricted",
  page_treatment: "non_operational_context",
  summary: "Regression fixture for restricted content validation.",
  safety_class: "restricted",
  era_floor: "unknown",
  difficulty: "intermediate",
  precision_required: "medium",
  time_to_first_working_version: "not applicable",
  prerequisites: [],
  unlocks: [],
  missing_prerequisites: [],
  material_dependencies: [],
  tags: ["restricted"],
  generation: {
    created_by: "human",
    reviewed_by: [],
    source_review_notes: []
  },
  confidence: {
    practicality: 0.1,
    historical_plausibility: 0.1,
    completeness: 0.1
  }
};

const bypassBody = [
  "## Field briefing",
  "",
  "This page is contextual only.",
  "",
  "## Historical role",
  "",
  "[redacted unsafe operational procedure marker]"
].join("\n");

const bypassDiagnostics = validatePageSafety({
  file: "scripts/fixtures/restricted-content-bypass.md",
  data: restrictedFrontmatter,
  body: bypassBody
});

assert(
  bypassDiagnostics.some((diagnostic) => diagnostic.severity === "error" && /operational reproduction indicators/.test(diagnostic.message)),
  "restricted pages must reject operational markers outside banned headings"
);
assert(
  bypassDiagnostics.every((diagnostic) => !/redacted unsafe/i.test(diagnostic.message)),
  "diagnostics must not repeat unsafe marker text"
);

const treatmentDiagnostics = validatePageSafety({
  data: {
    ...restrictedFrontmatter,
    page_treatment: "practical"
  },
  body: "## Field briefing\n\nContext only."
});

assert(
  treatmentDiagnostics.some((diagnostic) => diagnostic.message === "Restricted pages must use page_treatment: non_operational_context."),
  "restricted pages must enforce non-operational page treatment"
);

const blockedDiagnostics = validatePageSafety({
  data: {
    ...restrictedFrontmatter,
    slug: "blocked-fixture",
    title: "Blocked Fixture",
    status: "stub",
    page_treatment: "non_operational_context",
    safety_class: "blocked"
  },
  body: "## Field briefing\n\nPlaceholder only."
});

assert(
  blockedDiagnostics.some((diagnostic) => diagnostic.message === "Blocked pages must use page_treatment: placeholder_only."),
  "blocked pages must enforce placeholder-only page treatment"
);

console.log("Restricted content regression checks passed.");
