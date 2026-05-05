---
id: tech_automobile
slug: automobile
title: Automobile
aliases: []
node_type: artifact
status: draft
summary: A self-propelled road vehicle that combines power, steering, braking,
  load-bearing wheels, fuel handling, and road testing.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: months_to_years
prerequisites:
  - slug: cart
    title: Cart
    kind: hard
    role: Provides load paths, wheels, axles, and road-use habits.
  - slug: internal-combustion-engine
    title: Internal combustion engine
    kind: hard
    role: Provides compact motive power.
  - slug: steering-gear
    title: Steering gear
    kind: hard
    role: Turns front wheels predictably.
  - slug: band-brake
    title: Band brake
    kind: safety
    role: Supplies controlled stopping.
  - slug: technical-drawing
    title: Technical drawing
    kind: soft
    role: Keeps geometry and revisions reproducible.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Vehicle frames, axles, and brackets need reliable metal stock.
  - slug: hardwood
    title: Hardwood
    importance: soft
    availability_note: Early bodies, wheels, jigs, and patterns can use seasoned wood.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: hard
    availability_note: Moving parts require lubrication and contamination control.
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
  practicality: 0.48
  historical_plausibility: 0.78
  completeness: 0.58
images:
  header:
    src: /images/tech/automobile-header.webp
    alt: Field sketch of Automobile, highlighting mild steel, hardwood, cart,
      internal combustion engine.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 4ccf9b819d54640ea265e7e6ad31235d7403f54aefa5c3ae0ba0076aa89cb5aa
    generated_at: 2026-05-05T19:58:13.526Z
  schematic:
    src: /images/tech/automobile-schematic.webp
    alt: Schematic diagram of Automobile, highlighting mild steel, hardwood, cart,
      internal combustion engine and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 2c128478a528ca2d0a18061e2ffe8e11c0c55dfa98c5515bb618f0970bc1d0a1
    generated_at: 2026-05-05T19:59:08.452Z
---

## Field briefing

A self-propelled road vehicle that combines power, steering, braking, load-bearing wheels, fuel handling, and road testing.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of automobile that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Vehicle frames, axles, and brackets need reliable metal stock.
- [[hardwood|Hardwood]] (soft): Early bodies, wheels, jigs, and patterns can use seasoned wood.
- [[lubricating-oil|Lubricating oil]] (hard): Moving parts require lubrication and contamination control.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[cart|Cart]]: Provides load paths, wheels, axles, and road-use habits.
- [[internal-combustion-engine|Internal combustion engine]]: Provides compact motive power.
- [[steering-gear|Steering gear]]: Turns front wheels predictably.
- [[band-brake|Band brake]]: Supplies controlled stopping.
- [[technical-drawing|Technical drawing]]: Keeps geometry and revisions reproducible.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
