---
id: tech_factory_assembly_line
slug: factory-assembly-line
title: Factory assembly line
aliases: []
node_type: institution
status: draft
summary: A workshop organization pattern that arranges people, fixtures, parts,
  records, and movement into a repeatable production flow.
safety_class: allowed
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: city
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: workshop-organization
    title: Workshop organization
    kind: institutional
    role: Provides task assignment and shared tools.
  - slug: interchangeable-parts
    title: Interchangeable parts
    kind: hard
    role: Allows parts to move between stations without custom fitting.
  - slug: quality-control-records
    title: Quality-control records
    kind: test
    role: Tracks defects and rework.
  - slug: standard-weights
    title: Standard weights
    kind: measurement
    role: Supports material and batch consistency.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: workbench
    title: Workbench
    importance: hard
    availability_note: Stations need benches, fixtures, and supports.
  - slug: tally-stick
    title: Tally stick
    importance: substitute
    availability_note: Simple counting systems can precede paper records.
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
  practicality: 0.62
  historical_plausibility: 0.86
  completeness: 0.58
images:
  header:
    src: /images/tech/factory-assembly-line-header.webp
    alt: Field sketch of Factory assembly line, highlighting workbench, tally stick,
      workshop organization, interchangeable parts.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 14cf57aa725efaf45f8fd19d7e88b89c1ee8e5ac4f46d88e54a33545fc9af361
    generated_at: 2026-05-05T20:07:39.275Z
  schematic:
    src: /images/tech/factory-assembly-line-schematic.webp
    alt: Schematic diagram of Factory assembly line, highlighting workbench, tally
      stick, workshop organization, interchangeable parts and major working
      relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 100b5645b9a6d8b0af19a7f08c4bd258f5d0e224392ecc24f581e6d6b4b1549a
    generated_at: 2026-05-05T20:08:41.958Z
---

## Field briefing

A workshop organization pattern that arranges people, fixtures, parts, records, and movement into a repeatable production flow.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of factory assembly line that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[workbench|Workbench]] (hard): Stations need benches, fixtures, and supports.
- [[tally-stick|Tally stick]] (substitute): Simple counting systems can precede paper records.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[workshop-organization|Workshop organization]]: Provides task assignment and shared tools.
- [[interchangeable-parts|Interchangeable parts]]: Allows parts to move between stations without custom fitting.
- [[quality-control-records|Quality-control records]]: Tracks defects and rework.
- [[standard-weights|Standard weights]]: Supports material and batch consistency.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
