---
id: tech_transmission
slug: transmission
title: Transmission
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A gear and clutch system that adapts engine speed and torque to the
  driven wheels.
safety_class: caution
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: gear-cutting
    title: Gear cutting
    kind: hard
    role: Creates repeatable gear teeth.
  - slug: clutch
    title: Clutch
    kind: hard
    role: Lets power be engaged and disengaged.
  - slug: lubricating-oil
    title: Lubricating oil
    kind: hard
    role: Prevents rapid gear and bearing failure.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Keeps shafts and gears from binding.
unlocks:
  - slug: planetary-transmission
    title: Planetary transmission
    kind: hard
    role: "Enables Planetary transmission: Provides the power-transfer role."
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Gears, shafts, and cases need metal stock.
  - slug: band-brake
    title: Band brake
    importance: soft
    availability_note: Some early transmissions use bands as control elements.
images:
  header:
    src: /images/tech/transmission-header.webp
    alt: Field sketch of Transmission, highlighting mild steel, band brake, gear
      cutting, clutch.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: d7b926fe40f4c880b1b740e4a43033bdf83b409ea64244b22b1adb7050302098
    generated_at: 2026-05-05T20:02:32.976Z
  schematic:
    src: /images/tech/transmission-schematic.webp
    alt: Schematic diagram of Transmission, highlighting mild steel, band brake,
      gear cutting, clutch and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: d7e6b94025b87654ccdeb4d3f8cf8bd32fc2548c3fceff6b1fd35b7f92ebbbaf
    generated_at: 2026-05-05T20:03:34.899Z
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
  practicality: 0.44
  historical_plausibility: 0.78
  completeness: 0.52
---
## Field briefing

A gear and clutch system that adapts engine speed and torque to the driven wheels.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of transmission that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Gears, shafts, and cases need metal stock.
- [[band-brake|Band brake]] (soft): Some early transmissions use bands as control elements.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[gear-cutting|Gear cutting]]: Creates repeatable gear teeth.
- [[clutch|Clutch]]: Lets power be engaged and disengaged.
- [[lubricating-oil|Lubricating oil]]: Prevents rapid gear and bearing failure.
- [[alignment-checking|Alignment checking]]: Keeps shafts and gears from binding.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
