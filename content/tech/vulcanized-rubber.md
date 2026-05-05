---
id: tech_vulcanized_rubber
slug: vulcanized-rubber
title: Vulcanized rubber
aliases: []
node_type: material
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: Chemically treated natural rubber that resists heat, cold, tearing, and
  deformation better than raw rubber.
safety_class: caution
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: city
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: natural-rubber
    title: Natural rubber
    kind: material_source
    role: Provides latex or raw rubber feedstock.
  - slug: rubber-curing
    title: Rubber curing
    kind: refining
    role: Changes rubber properties under controlled processing.
  - slug: quality-control-records
    title: Quality-control records
    kind: test
    role: Tracks batches, aging, and failures.
  - slug: trade-network
    title: Trade network
    kind: institutional
    role: Connects tropical rubber sources to industrial factories.
unlocks:
  - slug: pneumatic-tire
    title: Pneumatic tire
    kind: hard
    role: "Enables Pneumatic tire: Provides durable elastic tire material."
missing_prerequisites:
  - slug: natural-rubber
    title: Natural rubber
    reason: A tropical rubber supply-chain page remains to be written.
  - slug: rubber-curing
    title: Rubber curing
    reason: A non-recipe rubber processing page is needed.
  - slug: trade-network
    title: Trade network
    reason: A social technology page should cover long-distance commodity supply.
material_dependencies:
  - slug: natural-rubber
    title: Natural rubber
    importance: hard
    availability_note: Raw rubber supply is foundational.
  - slug: textile-cord
    title: Textile cord
    importance: soft
    availability_note: Reinforced goods use fabric or cord.
images:
  header:
    src: /images/tech/vulcanized-rubber-header.webp
    alt: Field sketch of Vulcanized rubber, highlighting natural rubber, textile
      cord, rubber curing, material.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 0d79ab618f0baf626c977d5e0a33f81933e1f9d73224fa194fdc129db5036e19
    generated_at: 2026-05-05T20:04:29.465Z
  schematic:
    src: /images/tech/vulcanized-rubber-schematic.webp
    alt: Schematic diagram of Vulcanized rubber, highlighting natural rubber,
      textile cord, rubber curing, material and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 89eafe03e55b7844dc859732531092fea15af01b8adb404749867c3902153c02
    generated_at: 2026-05-05T20:05:25.320Z
tags:
  - transport
  - industrial
  - ANA-37
generation:
  created_by: llm
  model: GPT-5
  provider: OpenAI Codex
  prompt_version: ANA-37 Ford Model T prerequisite expansion
  generated_at: 2026-05-05
  request_issue: ANA-37
  reviewed_by: []
  source_review_notes:
    - No source pack was used; specific historical, regional, and technical
      claims need human source review.
confidence:
  practicality: 0.24
  historical_plausibility: 0.78
  completeness: 0.44
---
## Field briefing

Chemically treated natural rubber that resists heat, cold, tearing, and deformation better than raw rubber.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of vulcanized rubber that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[natural-rubber|Natural rubber]] (hard): Raw rubber supply is foundational.
- [[textile-cord|Textile cord]] (soft): Reinforced goods use fabric or cord.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[natural-rubber|Natural rubber]]: Provides latex or raw rubber feedstock.
- [[rubber-curing|Rubber curing]]: Changes rubber properties under controlled processing.
- [[quality-control-records|Quality-control records]]: Tracks batches, aging, and failures.
- [[trade-network|Trade network]]: Connects tropical rubber sources to industrial factories.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[natural-rubber|Natural rubber]]: A tropical rubber supply-chain page remains to be written.
- [[rubber-curing|Rubber curing]]: A non-recipe rubber processing page is needed.
- [[trade-network|Trade network]]: A social technology page should cover long-distance commodity supply.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
