---
id: tech_clutch
slug: clutch
title: Clutch
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A controllable coupling that lets a rotating power source connect to or
  disconnect from a driven load.
safety_class: caution
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: plain-bearing
    title: Plain bearing
    kind: soft
    role: Supports rotating elements.
  - slug: friction-material
    title: Friction material
    kind: material_source
    role: Provides controlled grip and wear.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Keeps discs, drums, or cones from grabbing unevenly.
  - slug: lever
    title: Lever
    kind: hard
    role: Provides controllable human actuation.
unlocks:
  - slug: transmission
    title: Transmission
    kind: hard
    role: "Enables Transmission: Lets power be engaged and disengaged."
missing_prerequisites:
  - slug: friction-material
    title: Friction material
    reason: A safe materials page should cover linings without hazardous modern
      substitutes.
material_dependencies:
  - slug: leather
    title: Leather
    importance: substitute
    availability_note: Early friction linings can use prepared leather in some contexts.
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Hubs, drums, and springs need metal stock.
images:
  header:
    src: /images/tech/clutch-header.webp
    alt: Field sketch of Clutch, highlighting leather, mild steel, plain bearing,
      friction material.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: e85d66ab22b2a35223545d18514e08e829e4f0bf1e6c476275c4d28cd55a7b56
    generated_at: 2026-05-05T20:03:53.601Z
  schematic:
    src: /images/tech/clutch-schematic.webp
    alt: Schematic diagram of Clutch, highlighting leather, mild steel, plain
      bearing, friction material and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 3e684edc5b5e80b849d4778ee33bd4dcf14d818591b3ff0561d7c644912eddf4
    generated_at: 2026-05-05T20:04:44.564Z
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
  practicality: 0.52
  historical_plausibility: 0.78
  completeness: 0.5
---
## Field briefing

A controllable coupling that lets a rotating power source connect to or disconnect from a driven load.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of clutch that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[leather|Leather]] (substitute): Early friction linings can use prepared leather in some contexts.
- [[mild-steel|Mild steel]] (hard): Hubs, drums, and springs need metal stock.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[plain-bearing|Plain bearing]]: Supports rotating elements.
- [[friction-material|Friction material]]: Provides controlled grip and wear.
- [[alignment-checking|Alignment checking]]: Keeps discs, drums, or cones from grabbing unevenly.
- [[lever|Lever]]: Provides controllable human actuation.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[friction-material|Friction material]]: A safe materials page should cover linings without hazardous modern substitutes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
