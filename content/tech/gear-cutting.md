---
id: tech_gear_cutting
slug: gear-cutting
title: Gear cutting
aliases: []
node_type: process
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A repeatable cutting and indexing process for making gear teeth that
  mesh smoothly under load.
safety_class: caution
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: machining
    title: Machining
    kind: hard
    role: Provides cutting, feeds, and fixture practice.
  - slug: indexing
    title: Indexing
    kind: measurement
    role: Divides a circle into repeatable tooth positions.
  - slug: technical-drawing
    title: Technical drawing
    kind: soft
    role: Records tooth counts and centers.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks tooth form and fit against a mate.
unlocks:
  - slug: camshaft
    title: Camshaft
    kind: soft
    role: "Enables Camshaft: Synchronizes cam timing with a crankshaft."
  - slug: differential-gear
    title: Differential gear
    kind: hard
    role: "Enables Differential gear: Creates matched bevel or spur gears."
  - slug: planetary-transmission
    title: Planetary transmission
    kind: hard
    role: "Enables Planetary transmission: Planetary gears demand repeatable tooth
      geometry."
  - slug: steering-gear
    title: Steering gear
    kind: soft
    role: "Enables Steering gear: Supports worm, sector, or reduction gears."
  - slug: transmission
    title: Transmission
    kind: hard
    role: "Enables Transmission: Creates repeatable gear teeth."
missing_prerequisites:
  - slug: indexing
    title: Indexing
    reason: A dividing and indexing measurement page should be added.
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Gears require tough stock.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: soft
    availability_note: Cutting and testing need lubrication.
images:
  header:
    src: /images/tech/gear-cutting-header.webp
    alt: Field sketch of Gear cutting, highlighting mild steel, lubricating oil,
      machining, indexing.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 36b1636ac83a6da94214104800fafae528fcf800c984e33d1ff1d019f8529c7b
    generated_at: 2026-05-05T20:06:19.836Z
  schematic:
    src: /images/tech/gear-cutting-schematic.webp
    alt: Schematic diagram of Gear cutting, highlighting mild steel, lubricating
      oil, machining, indexing and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: b2acf1650c65652336af323e16f75be8dd02870c249d1b17cecff6527a70f012
    generated_at: 2026-05-05T20:07:23.205Z
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
  practicality: 0.42
  historical_plausibility: 0.78
  completeness: 0.5
---
## Field briefing

A repeatable cutting and indexing process for making gear teeth that mesh smoothly under load.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of gear cutting that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Gears require tough stock.
- [[lubricating-oil|Lubricating oil]] (soft): Cutting and testing need lubrication.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[machining|Machining]]: Provides cutting, feeds, and fixture practice.
- [[indexing|Indexing]]: Divides a circle into repeatable tooth positions.
- [[technical-drawing|Technical drawing]]: Records tooth counts and centers.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks tooth form and fit against a mate.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[indexing|Indexing]]: A dividing and indexing measurement page should be added.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
