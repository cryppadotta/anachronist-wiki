import { z } from "zod";

export const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase kebab-case slugs.");

export const nodeTypeValues = [
  "artifact",
  "process",
  "material",
  "tool",
  "measurement",
  "knowledge",
  "institution",
  "test"
] as const;

export const safetyClassValues = ["allowed", "caution", "restricted", "blocked"] as const;

export const edgeKindValues = [
  "hard",
  "soft",
  "optional",
  "alternative",
  "enables",
  "knowledge",
  "measurement",
  "safety",
  "institutional",
  "material_source",
  "refining",
  "test",
  "tooling"
] as const;

export const pageTreatmentValues = ["practical", "practical_with_cautions", "non_operational_context", "placeholder_only"] as const;

export const socialScaleValues = ["individual", "household", "workshop", "village", "city", "state", "trade_network"] as const;

const stringOrDateSchema = z.preprocess((value) => {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}, z.string().min(1));

export const graphEdgeSchema = z
  .object({
    slug: slugSchema,
    title: z.string().min(1),
    kind: z.enum(edgeKindValues),
    role: z.string().min(1),
    cycle_ok: z.boolean().optional(),
    cycle_reason: z.string().min(12).optional()
  })
  .superRefine((edge, context) => {
    if (edge.cycle_ok && !edge.cycle_reason) {
      context.addIssue({
        code: "custom",
        path: ["cycle_reason"],
        message: "Edges marked cycle_ok must explain the co-evolutionary cycle."
      });
    }
  });

export const techImageAssetSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
  provider: z.string().min(1).optional(),
  model: z.string().min(1).optional(),
  prompt_version: z.string().min(1).optional(),
  prompt_hash: z.string().min(1).optional(),
  generated_at: stringOrDateSchema.optional()
});

export const missingNodeSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  reason: z.string().min(1)
});

export const techFrontmatterSchema = z
  .object({
    id: z.string().min(1),
    slug: slugSchema,
    title: z.string().min(1),
    aliases: z.array(z.string().min(1)).default([]),
    node_type: z.enum(nodeTypeValues),
    secondary_node_types: z.array(z.enum(nodeTypeValues)).default([]),
    status: z.enum(["stub", "draft", "generated", "reviewed", "curated", "restricted"]),
    page_treatment: z.enum(pageTreatmentValues).optional(),
    summary: z.string().min(1),
    safety_class: z.enum(safetyClassValues),
    era_floor: z.string().min(1),
    difficulty: z.enum(["trivial", "basic", "intermediate", "advanced", "expert"]),
    precision_required: z.enum(["none", "low", "medium", "high", "extreme"]),
    minimum_social_scale: z.enum(socialScaleValues).optional(),
    time_to_first_working_version: z.string().min(1),
    prerequisites: z.array(graphEdgeSchema).default([]),
    unlocks: z.array(graphEdgeSchema).default([]),
    missing_prerequisites: z.array(missingNodeSchema).default([]),
    material_dependencies: z
      .array(
        z.object({
          slug: slugSchema,
          title: z.string().min(1),
          importance: z.enum(["hard", "soft", "optional", "substitute"]),
          availability_note: z.string().min(1)
        })
      )
      .default([]),
    images: z
      .object({
        header: techImageAssetSchema.optional(),
        schematic: techImageAssetSchema.optional()
      })
      .optional(),
    tags: z.array(z.string().min(1)).default([]),
    generation: z.object({
      created_by: z.enum(["human", "llm"]),
      model: z.string().min(1).optional(),
      provider: z.string().min(1).optional(),
      prompt_version: z.string().min(1).optional(),
      prompt_hash: z.string().min(1).optional(),
      prompt_hashes: z.record(z.string(), z.string().min(1)).optional(),
      generated_at: stringOrDateSchema.optional(),
      request_issue: z.string().min(1).optional(),
      reviewed_by: z.array(z.string().min(1)).default([]),
      source_commit: z.string().min(1).optional(),
      source_review_notes: z.array(z.string().min(1)).default([])
    }),
    confidence: z.object({
      practicality: z.number().min(0).max(1),
      historical_plausibility: z.number().min(0).max(1),
      completeness: z.number().min(0).max(1)
    })
  })
  .strict();

export const graphCyclePolicy = {
  summary:
    "Cycles are allowed only when they describe co-evolutionary relationships, not circular build instructions.",
  nonBlockingEdgeKinds: ["soft", "optional", "alternative", "enables", "knowledge", "measurement", "institutional", "test"],
  strictEdgeKinds: ["hard", "material_source", "refining", "tooling", "safety"],
  strictCycleRule:
    "A cycle containing strict edges is invalid unless every strict edge in that cycle has cycle_ok: true and a cycle_reason explaining the historically plausible co-evolution."
} as const;

export type TechFrontmatter = z.infer<typeof techFrontmatterSchema>;
export type GraphEdge = z.infer<typeof graphEdgeSchema>;
export type EdgeKind = (typeof edgeKindValues)[number];
export type SafetyClass = (typeof safetyClassValues)[number];

export function normalizeSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatZodIssue(issue: z.core.$ZodIssue): string {
  const path = issue.path.length > 0 ? issue.path.join(".") : "frontmatter";
  return `${path}: ${issue.message}`;
}
