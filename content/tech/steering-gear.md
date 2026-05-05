---
id: tech_steering_gear
slug: steering-gear
title: Steering gear
aliases: []
node_type: artifact
status: draft
summary: A control linkage and gear set that turns driver input into predictable
  wheel angle without binding or dangerous looseness.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: hard
    role: Provides vehicle wheel geometry.
  - slug: gear-cutting
    title: Gear cutting
    kind: soft
    role: Supports worm, sector, or reduction gears.
  - slug: plain-bearing
    title: Plain bearing
    kind: hard
    role: Supports pivots and shafts.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Confirms steering geometry and free movement.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Shafts, arms, and links require steel.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: soft
    availability_note: Pivots and gears need lubrication.
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
  historical_plausibility: 0.78
  completeness: 0.5
images:
  header:
    src: /images/tech/steering-gear-header.webp
    alt: Field sketch of Steering gear, highlighting mild steel, lubricating oil,
      wheel and axle, gear cutting.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 6f329686f9f494d12e6b9ab9cdfa6758ebab27fe041c6f41e0ef3b58e4bed582
    generated_at: 2026-05-05T20:08:31.437Z
  schematic:
    src: /images/tech/steering-gear-schematic.webp
    alt: Schematic diagram of Steering gear, highlighting mild steel, lubricating
      oil, wheel and axle, gear cutting and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: fa1ef60988fe0a2ca24ec6394cb38dcbde7fcdd096108e2428467cf0f8bc0b33
    generated_at: 2026-05-05T20:09:29.954Z
---

## Field briefing

A control linkage and gear set that turns driver input into predictable wheel angle without binding or dangerous looseness.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of steering gear that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Shafts, arms, and links require steel.
- [[lubricating-oil|Lubricating oil]] (soft): Pivots and gears need lubrication.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[wheel-and-axle|Wheel and axle]]: Provides vehicle wheel geometry.
- [[gear-cutting|Gear cutting]]: Supports worm, sector, or reduction gears.
- [[plain-bearing|Plain bearing]]: Supports pivots and shafts.
- [[alignment-checking|Alignment checking]]: Confirms steering geometry and free movement.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
