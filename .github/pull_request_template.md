## Summary

Describe the page, graph, validation, or site change.

Related issue:

## Page Type

- [ ] artifact
- [ ] process
- [ ] material
- [ ] tool
- [ ] measurement
- [ ] knowledge
- [ ] institution
- [ ] test
- [ ] not a content page change

## Safety Class

- [ ] allowed
- [ ] caution
- [ ] restricted
- [ ] blocked
- [ ] not applicable

## Content Checklist

- [ ] Markdown has valid YAML frontmatter matching the content schema.
- [ ] Internal links use Obsidian wikilinks such as `[[slug|Title]]` or `[[slug]]`.
- [ ] Prerequisites and unlocks are listed as explicit frontmatter graph edges.
- [ ] Missing prerequisites are declared in frontmatter when they do not exist yet.
- [ ] Important materials include sourcing, recognition, acquisition, preparation/refining, quality tests, substitutes, and geographic constraints.
- [ ] Social or institutional prerequisites are included where they affect feasibility.
- [ ] Verification and quality control are included for practical pages.
- [ ] Failure modes are included for allowed/caution practical pages.

## Provenance Checklist

- [ ] Human-authored or generated status is clear in frontmatter.
- [ ] Generated content names provider, model, prompt version, and generation date where applicable.
- [ ] Generated content includes confidence fields.
- [ ] Claims without source packs are marked for human source review.
- [ ] No fabricated citations are included.

## Safety Checklist

- [ ] Caution pages include a hazards and controls section.
- [ ] Restricted pages contain no procedure, recipes, ratios, exact operational quantities, temperatures, pressures, timings, precursor acquisition, purification, equipment configuration, optimization, deployment, or troubleshooting.
- [ ] Blocked pages are placeholder-only graph nodes.
- [ ] The change does not add app auth, backend submissions, public live generation, or crawler-triggered LLM calls.

## Validation

- [ ] `npm run validate:content`
- [ ] `npm run build:graph`
- [ ] `npm run build`
