# Anachronist Wiki Prompt Contract

Source context:

- Approved plan: [ANA-2](/ANA/issues/ANA-2#document-plan)
- Source conversation archive: [ANA-2](/ANA/issues/ANA-2#document-source-conversation)

These prompts define the maintainer-only generation pipeline for Anachronist Wiki. The public site is static; page requests happen through GitHub Issues; edits happen through GitHub PRs; generation is local CLI or maintainer-triggered automation only.

## Approved Generation Order

Use the prompts in this exact order:

1. `graph-planner.v1.md`
2. `safety-classifier.v1.md`
3. `material-sourcing.v1.md`
4. `page-writer.v1.md`
5. `practicality-reviewer.v1.md`
6. `link-repair.v1.md`
7. `reviewer.v1.md`

The ordering matters. The page writer must receive explicit graph, safety, and material-sourcing context rather than inventing those decisions from scratch. Review and link repair happen after drafting, and the final reviewer is the strict gate before PR readiness.

## Shared Contract

Every prompt must preserve these product rules:

- Static GitHub-backed wiki; no app auth, backend submission flow, public live LLM generation, or web-triggered generation.
- Obsidian wikilinks for internal links, using `[[slug|Title]]` or `[[slug]]`.
- Explicit graph metadata in frontmatter; graph edges are not inferred from prose alone.
- First-class node types: `artifact`, `process`, `material`, `tool`, `measurement`, `knowledge`, `institution`, and `test`.
- First-class edge kinds: `hard`, `soft`, `optional`, `alternative`, `enables`, `knowledge`, `measurement`, `safety`, `institutional`, `material_source`, `refining`, `test`, and `tooling`.
- Materials are supply chains, not abstract inputs. Practical physical pages must cover sourcing, recognition, acquisition, preparation/refining, quality tests, substitutes, and geographic constraints such as Arthurian Britain availability where relevant.
- Social technologies are real prerequisites when they affect feasibility, such as literacy, apprenticeship, accounting, standards, workshop organization, trade, and quality-control norms.
- Restricted topics remain graph nodes when useful, but published pages must be non-operational context pages or placeholders.

## Safety Classes

- `allowed`: practical instructions allowed.
- `caution`: practical instructions allowed with explicit hazards and controls.
- `restricted`: graph/context page only; no operational reproduction.
- `blocked`: placeholder-only node for graph completeness.

Restricted and blocked pages must avoid recipes, ratios, exact quantities, actionable temperatures, pressures, timings, precursor acquisition, purification, equipment configuration, optimization, troubleshooting, deployment, or misuse guidance.

## CLI Handoff Shape

The generation CLI should persist each intermediate output as structured provenance so reviewers can inspect how the draft was produced:

- graph planner output: JSON
- safety classifier output: JSON
- material sourcing output: JSON
- page writer output: Markdown with YAML frontmatter
- practicality reviewer output: JSON
- link repair output: JSON, usually with corrected Markdown
- final reviewer output: JSON

Generated pages must include provenance frontmatter for provider, model, prompt version, prompt hash when available, generation date, source commit when available, request issue when available, reviewed-by list, and confidence fields.

## Image Prompt Contract

Page images are generated after the text page passes validation:

- `header-image.v1.md` produces the page header field sketch.
- `schematic-image.v1.md` produces the technical schematic.

Image generation remains maintainer-only local tooling. It must not be exposed through public routes, visitor traffic, issue comments, or scheduled web crawlers. Image assets are static files committed under `public/images/tech/`, and each page records image provenance in frontmatter under `images.header` and `images.schematic`.

Image prompts must preserve the same safety rules as text prompts. For restricted or blocked topics, images may provide high-level historical or graph context, but must not include operational reproduction details, exact recipes, ratios, actionable quantities, temperatures, pressures, timings, precursor acquisition, purification, equipment configuration, optimization, deployment, or troubleshooting.
