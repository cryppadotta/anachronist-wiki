import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { techFrontmatterSchema } from "@lib/content-schema";

const tech = defineCollection({
  loader: glob({
    base: "./content/tech",
    pattern: "**/*.{md,mdx}"
  }),
  schema: techFrontmatterSchema
});

export const collections = { tech };
