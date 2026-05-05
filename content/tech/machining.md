---
id: tech_machining
slug: machining
title: Machining
aliases: []
node_type: process
status: draft
summary: Controlled cutting of metal, wood, or hard materials to produce
  repeatable fits, smooth surfaces, and interchangeable machine parts.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: lathe
    title: Lathe
    kind: tooling
    role: Provides one foundational machine-tool operation.
  - slug: drill-press
    title: Drill press
    kind: tooling
    role: Makes repeatable holes.
  - slug: cutting-edge
    title: Cutting edge
    kind: hard
    role: Tools need sharpened edges.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Separates acceptable from unacceptable fits.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Workpieces, tools, fixtures, and machines use steel.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: soft
    availability_note: Cutting and sliding ways benefit from oil.
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
  historical_plausibility: 0.84
  completeness: 0.62
images:
  header:
    src: /images/tech/machining-header.webp
    alt: Field sketch of Machining, highlighting mild steel, lubricating oil, lathe,
      drill press.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 6e168c2b3b0d48e0c9539158781d6097745d08f53b67c379ddce09df98665b87
    generated_at: 2026-05-05T20:05:46.150Z
  schematic:
    src: /images/tech/machining-schematic.webp
    alt: Schematic diagram of Machining, highlighting mild steel, lubricating oil,
      lathe, drill press and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: df63711afe44d6ad6be72f9102881d8f191219463043b0953fa341cb17e8e306
    generated_at: 2026-05-05T20:06:46.626Z
---

## Field briefing

Controlled cutting of metal, wood, or hard materials to produce repeatable fits, smooth surfaces, and interchangeable machine parts.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of machining that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Workpieces, tools, fixtures, and machines use steel.
- [[lubricating-oil|Lubricating oil]] (soft): Cutting and sliding ways benefit from oil.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[lathe|Lathe]]: Provides one foundational machine-tool operation.
- [[drill-press|Drill press]]: Makes repeatable holes.
- [[cutting-edge|Cutting edge]]: Tools need sharpened edges.
- [[go-no-go-gauge|Go/no-go gauge]]: Separates acceptable from unacceptable fits.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
