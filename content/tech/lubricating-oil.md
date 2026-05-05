---
id: tech_lubricating_oil
slug: lubricating-oil
title: Lubricating oil
aliases: []
node_type: material
status: draft
summary: A friction-control material for bearings, gears, engines, and sliding
  tools, sourced from animal, plant, mineral, or petroleum routes.
safety_class: allowed
era_floor: industrial
difficulty: intermediate
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: animal-fat
    title: Animal fat
    kind: alternative
    role: Provides one early lubricant family.
  - slug: flaxseed-oil
    title: Flaxseed oil
    kind: alternative
    role: Provides a plant oil path for light uses.
  - slug: petroleum
    title: Petroleum
    kind: soft
    role: Provides mineral oil feedstock for industrial lubrication.
  - slug: viscosity-comparison
    title: Viscosity comparison
    kind: test
    role: Screens flow and film behavior without modern instruments.
unlocks: []
missing_prerequisites:
  - slug: viscosity-comparison
    title: Viscosity comparison
    reason: A simple comparative test page should cover oil flow and film checks.
material_dependencies:
  - slug: animal-fat
    title: Animal fat
    importance: substitute
    availability_note: Available in many local economies.
  - slug: flaxseed-oil
    title: Flaxseed oil
    importance: substitute
    availability_note: Plant oils can serve some light-duty uses.
  - slug: petroleum
    title: Petroleum
    importance: optional
    availability_note: Industrial vehicles rely heavily on mineral oils.
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
  historical_plausibility: 0.82
  completeness: 0.5
images:
  header:
    src: /images/tech/lubricating-oil-header.webp
    alt: Field sketch of Lubricating oil, highlighting animal fat, flaxseed oil,
      material.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 75b5d9b30de4467a1287e7eb89b8d0e354a4b1ad8bed50a0b5945591ec40d582
    generated_at: 2026-05-05T20:02:00.575Z
  schematic:
    src: /images/tech/lubricating-oil-schematic.webp
    alt: Schematic diagram of Lubricating oil, highlighting animal fat, flaxseed
      oil, material and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: c34b871ade1c021ad67dbe5d69363a6d7b1f1b5cb2f61c911bf2eb84881bf4ed
    generated_at: 2026-05-05T20:02:56.845Z
---

## Field briefing

A friction-control material for bearings, gears, engines, and sliding tools, sourced from animal, plant, mineral, or petroleum routes.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of lubricating oil that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[animal-fat|Animal fat]] (substitute): Available in many local economies.
- [[flaxseed-oil|Flaxseed oil]] (substitute): Plant oils can serve some light-duty uses.
- [[petroleum|Petroleum]] (optional): Industrial vehicles rely heavily on mineral oils.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[animal-fat|Animal fat]]: Provides one early lubricant family.
- [[flaxseed-oil|Flaxseed oil]]: Provides a plant oil path for light uses.
- [[petroleum|Petroleum]]: Provides mineral oil feedstock for industrial lubrication.
- [[viscosity-comparison|Viscosity comparison]]: Screens flow and film behavior without modern instruments.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Edges left as empty pages

- [[viscosity-comparison|Viscosity comparison]]: A simple comparative test page should cover oil flow and film checks.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
