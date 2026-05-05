---
id: tech_interchangeable_parts
slug: interchangeable-parts
title: Interchangeable parts
aliases: []
node_type: knowledge
status: draft
summary: A manufacturing discipline where parts made at different times or
  stations fit without individual hand matching.
safety_class: allowed
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_years
prerequisites:
  - slug: technical-drawing
    title: Technical drawing
    kind: knowledge
    role: Defines shapes and tolerances.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Enforces accepted fit limits.
  - slug: quality-control-records
    title: Quality-control records
    kind: institutional
    role: Tracks batches, defects, and changes.
  - slug: machining
    title: Machining
    kind: tooling
    role: Makes controlled surfaces and holes.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Industrial interchangeable parts often use metal stock.
  - slug: paper
    title: Paper
    importance: soft
    availability_note: Drawings, travelers, and inspection records benefit from durable records.
tags:
  - transport
  - industrial
  - ANA-37
generation:
  created_by: llm
  provider: OpenAI Codex
  model: GPT-5
  prompt_version: ANA-37 Ford Model T prerequisite expansion
  generated_at: 2026-05-05
  request_issue: ANA-37
  reviewed_by: []
  source_review_notes:
    - No source pack was used; specific historical, regional, and technical
      claims need human source review.
confidence:
  practicality: 0.58
  historical_plausibility: 0.86
  completeness: 0.6
images:
  header:
    src: /images/tech/interchangeable-parts-header.webp
    alt: Field sketch of Interchangeable parts, highlighting mild steel, paper,
      technical drawing, go/no-go gauge.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 3de28886dc36d35961cec2476aa84231d49bebe859655465f7b0be2096b22546
    generated_at: 2026-05-05T20:07:33.156Z
  schematic:
    src: /images/tech/interchangeable-parts-schematic.webp
    alt: Schematic diagram of Interchangeable parts, highlighting mild steel, paper,
      technical drawing, go/no-go gauge and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: dc2f05b7629440961adddd02bee32b2d41e389e28baa2aa77e9546109a649e4e
    generated_at: 2026-05-05T20:08:18.961Z
---

## Field briefing

A manufacturing discipline where parts made at different times or stations fit without individual hand matching.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of interchangeable parts that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (soft): Industrial interchangeable parts often use metal stock.
- [[paper|Paper]] (soft): Drawings, travelers, and inspection records benefit from durable records.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[technical-drawing|Technical drawing]]: Defines shapes and tolerances.
- [[go-no-go-gauge|Go/no-go gauge]]: Enforces accepted fit limits.
- [[quality-control-records|Quality-control records]]: Tracks batches, defects, and changes.
- [[machining|Machining]]: Makes controlled surfaces and holes.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
