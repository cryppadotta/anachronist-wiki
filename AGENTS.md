# Agent Contribution Guide

Anachronist Wiki is a static, GitHub-backed technology-tree wiki. The public site has no app auth, backend submission queue, public live LLM generation, or web-triggered generation path. Page requests belong in GitHub Issues. Content changes belong in GitHub pull requests.

## Required Context

- Approved plan: [ANA-2 plan](/ANA/issues/ANA-2#document-plan)
- Full source archive: [ANA-2 source conversation](/ANA/issues/ANA-2#document-source-conversation)
- Prompt contract: `content/prompts/README.md`
- Schema: `src/lib/content-schema.ts`

When the plan and archive differ, follow the later plan direction: static GitHub-only contribution workflow, maintainer-controlled generation, Obsidian wikilinks, first-class material supply chains/social technologies, and non-operational treatment for restricted topics.

## Content Rules

- Technology pages live in `content/tech`.
- Internal prose links use Obsidian wikilinks: `[[slug|Title]]` or `[[slug]]`.
- Graph relationships are explicit frontmatter edges, not inferred from prose.
- Valid node types are `artifact`, `process`, `material`, `tool`, `measurement`, `knowledge`, `institution`, and `test`.
- Valid safety classes are `allowed`, `caution`, `restricted`, and `blocked`.
- Practical physical pages must cover materials and sourcing, prerequisite tree, and verification/quality control.
- Materials are supply chains: source, recognition, acquisition, preparation/refining, tests, substitutes, and geography.
- Social technologies are real prerequisites when literacy, training, standards, records, workshop organization, trade, or quality-control norms affect feasibility.

## Safety Rules

Restricted and blocked topics may stay in the graph, but they must not publish operational reproduction. Do not add recipes, ratios, exact operational quantities, actionable temperatures, pressures, timings, precursor acquisition, purification, equipment configuration, optimization, deployment, or troubleshooting for restricted topics.

Use restricted pages for high-level graph context and safer adjacent prerequisites. Use blocked pages as short placeholders only.

## Generation Rules

Generation is maintainer-only. Do not add public endpoints, issue-comment bots, scheduled crawlers, or automatic generation from visitor traffic.

Use prompts in this order when drafting with an LLM:

1. `content/prompts/graph-planner.v1.md`
2. `content/prompts/safety-classifier.v1.md`
3. `content/prompts/material-sourcing.v1.md`
4. `content/prompts/page-writer.v1.md`
5. `content/prompts/practicality-reviewer.v1.md`
6. `content/prompts/link-repair.v1.md`
7. `content/prompts/reviewer.v1.md`

Generated pages must include provenance frontmatter and confidence fields. If no source pack was used, say that specific historical and technical claims need human source review.

## Image Generation Rules

Technology pages should use the reusable image pipeline, not hand-written placeholder art. The approved prompts are:

1. `content/prompts/header-image.v1.md`
2. `content/prompts/schematic-image.v1.md`

Generate static assets with `npm run generate:images -- --slug <slug> --provider openai --model gpt-image-2` for a single page, or `npm run backfill:images:openai` for a full backfill. This writes assets under `public/images/tech/` and records image provenance in frontmatter under `images.header` and `images.schematic`.

Use the fixture image provider only for local script tests. Do not publish fixture SVGs or `provider: fixture` image metadata.

## Validation

Run the smallest checks that cover your change:

- `npm run validate:content` for content/frontmatter/graph diagnostics.
- `npm run build:graph` after content graph changes.
- `npm run build` for route, rendering, or CI changes.
- `npm run check` when touching Astro or TypeScript behavior.

Do not mark a content PR ready if validation fails or if generated graph changes are not committed.
