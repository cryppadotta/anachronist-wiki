---
id: tech_differential_gear
slug: differential-gear
title: Differential gear
aliases: []
node_type: artifact
status: draft
summary: A gear assembly that splits drive torque while letting left and right
  wheels rotate at different speeds.
safety_class: allowed
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: gear-cutting
    title: Gear cutting
    kind: hard
    role: Creates matched bevel or spur gears.
  - slug: drive-shaft
    title: Drive shaft
    kind: soft
    role: Feeds power into the axle assembly.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Controls gear mesh and bearing alignment.
  - slug: lubricating-oil
    title: Lubricating oil
    kind: hard
    role: Protects loaded gear teeth and bearings.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Gears, shafts, and housings require metal stock.
  - slug: ball-bearing
    title: Ball bearing
    importance: soft
    availability_note: Bearings improve rotating support in refined versions.
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
  practicality: 0.4
  historical_plausibility: 0.76
  completeness: 0.5
images:
  header:
    src: /images/tech/differential-gear-header.webp
    alt: Field sketch of Differential gear, highlighting mild steel, ball bearing,
      gear cutting, drive shaft.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 9c2bb3242dad96256b9759a07c5360092b93e25d789e268e297f738c4f355c2d
    generated_at: 2026-05-05T20:03:51.759Z
  schematic:
    src: /images/tech/differential-gear-schematic.webp
    alt: Schematic diagram of Differential gear, highlighting mild steel, ball
      bearing, gear cutting, drive shaft and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: afe8c2a3a3dbd6a132bba26ea2d6e4f3d52ac333634b1af08b3ad66c32039af1
    generated_at: 2026-05-05T20:04:53.305Z
---

## Field briefing

A gear assembly that splits drive torque while letting left and right wheels rotate at different speeds.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of differential gear that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Gears, shafts, and housings require metal stock.
- [[ball-bearing|Ball bearing]] (soft): Bearings improve rotating support in refined versions.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[gear-cutting|Gear cutting]]: Creates matched bevel or spur gears.
- [[drive-shaft|Drive shaft]]: Feeds power into the axle assembly.
- [[alignment-checking|Alignment checking]]: Controls gear mesh and bearing alignment.
- [[lubricating-oil|Lubricating oil]]: Protects loaded gear teeth and bearings.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
