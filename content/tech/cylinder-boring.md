---
id: tech_cylinder_boring
slug: cylinder-boring
title: Cylinder boring
aliases: []
node_type: process
status: draft
summary: A precision machining process for making round, straight internal bores
  in engine cylinders, pumps, and sliding parts.
safety_class: allowed
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: lathe
    title: Lathe
    kind: tooling
    role: Provides rotary alignment and cutting feed.
  - slug: machining
    title: Machining
    kind: hard
    role: Supplies tool grinding, feeds, and workholding practice.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks whether a bore falls inside accepted limits.
  - slug: lubricating-oil
    title: Lubricating oil
    kind: soft
    role: Helps cutting and inspection by controlling heat and friction.
unlocks: []
missing_prerequisites:
  - slug: boring-bar
    title: Boring bar
    reason: A detailed tool page can describe boring bars and fixtures later.
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Boring bars and fixtures need stiff metal.
  - slug: cast-iron
    title: Cast iron
    importance: hard
    availability_note: Engine blocks and sleeves are common workpieces.
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
  practicality: 0.52
  historical_plausibility: 0.72
  completeness: 0.52
images:
  header:
    src: /images/tech/cylinder-boring-header.webp
    alt: Field sketch of Cylinder boring, highlighting mild steel, cast iron, lathe,
      machining.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 1d9b2647e01ef96b224367ad0e76f39c59fe6c4d7513af7bc11bac83a86d2bf4
    generated_at: 2026-05-05T19:58:11.983Z
  schematic:
    src: /images/tech/cylinder-boring-schematic.webp
    alt: Schematic diagram of Cylinder boring, highlighting mild steel, cast iron,
      lathe, machining and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: fabdd19347cab16b548f2b6d8b5e2fd30f7dbf6c3a8149e5d86764ac7fa2927e
    generated_at: 2026-05-05T19:59:07.311Z
---

## Field briefing

A precision machining process for making round, straight internal bores in engine cylinders, pumps, and sliding parts.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of cylinder boring that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (soft): Boring bars and fixtures need stiff metal.
- [[cast-iron|Cast iron]] (hard): Engine blocks and sleeves are common workpieces.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[lathe|Lathe]]: Provides rotary alignment and cutting feed.
- [[machining|Machining]]: Supplies tool grinding, feeds, and workholding practice.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks whether a bore falls inside accepted limits.
- [[lubricating-oil|Lubricating oil]]: Helps cutting and inspection by controlling heat and friction.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Edges left as empty pages

- [[boring-bar|Boring bar]]: A detailed tool page can describe boring bars and fixtures later.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
