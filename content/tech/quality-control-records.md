---
id: tech_quality_control_records
slug: quality-control-records
title: Quality-control records
aliases: []
node_type: institution
status: draft
summary: A recordkeeping practice that connects batches, inspections, defects,
  repairs, and design changes across a workshop or factory.
safety_class: allowed
era_floor: industrial
difficulty: intermediate
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: workshop-records
    title: Workshop records
    kind: institutional
    role: Provides durable production notes.
  - slug: writing
    title: Writing
    kind: knowledge
    role: Allows shared labels and instructions.
  - slug: batch-labeling
    title: Batch labeling
    kind: test
    role: Connects parts and materials to records.
  - slug: tally-stick
    title: Tally stick
    kind: alternative
    role: Provides a low-literacy counting fallback.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: paper
    title: Paper
    importance: soft
    availability_note: Records are easier to duplicate and file on paper.
  - slug: ink
    title: Ink
    importance: soft
    availability_note: Durable marks help long-running production.
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
  practicality: 0.76
  historical_plausibility: 0.84
  completeness: 0.62
images:
  header:
    src: /images/tech/quality-control-records-header.webp
    alt: Field sketch of Quality-control records, highlighting paper, ink, workshop
      records, writing.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: dc6ef79bfe55132434399c8324c09729ec8c5c28d24ab62dc6e7e06e6b0cf418
    generated_at: 2026-05-05T20:08:02.559Z
  schematic:
    src: /images/tech/quality-control-records-schematic.webp
    alt: Schematic diagram of Quality-control records, highlighting paper, ink,
      workshop records, writing and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 0693bf45dab10beef83b16e30ce64a3f83d82622545b679ce2229c3797850600
    generated_at: 2026-05-05T20:09:04.952Z
---

## Field briefing

A recordkeeping practice that connects batches, inspections, defects, repairs, and design changes across a workshop or factory.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of quality-control records that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[paper|Paper]] (soft): Records are easier to duplicate and file on paper.
- [[ink|Ink]] (soft): Durable marks help long-running production.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[workshop-records|Workshop records]]: Provides durable production notes.
- [[writing|Writing]]: Allows shared labels and instructions.
- [[batch-labeling|Batch labeling]]: Connects parts and materials to records.
- [[tally-stick|Tally stick]]: Provides a low-literacy counting fallback.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
