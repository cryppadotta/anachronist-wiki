---
id: tech_drive_shaft
slug: drive-shaft
title: Drive shaft
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A rotating shaft that carries torque between engine, transmission,
  axle, pump, or other separated mechanisms.
safety_class: caution
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: lathe
    title: Lathe
    kind: tooling
    role: Turns and trues shaft journals.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Finds runout and coupling errors.
  - slug: plain-bearing
    title: Plain bearing
    kind: hard
    role: Supports rotation.
  - slug: threaded-fastener
    title: Threaded fastener
    kind: soft
    role: Secures couplings and joints.
unlocks:
  - slug: differential-gear
    title: Differential gear
    kind: soft
    role: "Enables Differential gear: Feeds power into the axle assembly."
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Torque shafts need tough steel.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: soft
    availability_note: Bearings and joints need lubrication.
images:
  header:
    src: /images/tech/drive-shaft-header.webp
    alt: Field sketch of Drive shaft, highlighting mild steel, lubricating oil,
      lathe, alignment checking.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 74707eb3fd1453103cb5b5dd574f34c38e8cf118d0b26781153faadc3cbf7271
    generated_at: 2026-05-05T20:03:55.458Z
  schematic:
    src: /images/tech/drive-shaft-schematic.webp
    alt: Schematic diagram of Drive shaft, highlighting mild steel, lubricating oil,
      lathe, alignment checking and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 46aa885fb1b384918a57217ab40f4e8b29d5f59d5c715a1ce2d4615bf91b5093
    generated_at: 2026-05-05T20:04:52.741Z
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
  practicality: 0.5
  historical_plausibility: 0.78
  completeness: 0.5
---
## Field briefing

A rotating shaft that carries torque between engine, transmission, axle, pump, or other separated mechanisms.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of drive shaft that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Torque shafts need tough steel.
- [[lubricating-oil|Lubricating oil]] (soft): Bearings and joints need lubrication.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[lathe|Lathe]]: Turns and trues shaft journals.
- [[alignment-checking|Alignment checking]]: Finds runout and coupling errors.
- [[plain-bearing|Plain bearing]]: Supports rotation.
- [[threaded-fastener|Threaded fastener]]: Secures couplings and joints.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
