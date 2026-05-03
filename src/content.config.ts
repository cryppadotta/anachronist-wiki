import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

const edgeKind = z.enum([
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
]);

const graphEdge = z.object({
  slug,
  title: z.string(),
  kind: edgeKind,
  role: z.string()
});

const missingNode = z.object({
  slug,
  title: z.string(),
  reason: z.string()
});

const tech = defineCollection({
  loader: glob({
    base: "./content/tech",
    pattern: "**/*.{md,mdx}"
  }),
  schema: z.object({
    id: z.string(),
    slug,
    title: z.string(),
    aliases: z.array(z.string()).default([]),
    node_type: z.enum([
      "artifact",
      "process",
      "material",
      "tool",
      "measurement",
      "knowledge",
      "institution",
      "test"
    ]),
    status: z.enum(["stub", "draft", "generated", "reviewed", "curated", "restricted"]),
    summary: z.string(),
    safety_class: z.enum(["allowed", "caution", "restricted", "blocked"]),
    era_floor: z.string(),
    difficulty: z.enum(["trivial", "basic", "intermediate", "advanced", "expert"]),
    precision_required: z.enum(["none", "low", "medium", "high", "extreme"]),
    time_to_first_working_version: z.string(),
    prerequisites: z.array(graphEdge).default([]),
    unlocks: z.array(graphEdge).default([]),
    missing_prerequisites: z.array(missingNode).default([]),
    tags: z.array(z.string()).default([]),
    generation: z.object({
      created_by: z.enum(["human", "llm"]),
      model: z.string().optional(),
      provider: z.string().optional(),
      prompt_version: z.string().optional(),
      generated_at: z.string().optional(),
      reviewed_by: z.array(z.string()).default([]),
      source_commit: z.string().optional()
    }),
    confidence: z.object({
      practicality: z.number().min(0).max(1),
      historical_plausibility: z.number().min(0).max(1),
      completeness: z.number().min(0).max(1)
    })
  })
});

export const collections = { tech };

