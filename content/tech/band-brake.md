---
id: tech_band_brake
slug: band-brake
title: Band brake
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A flexible friction band that tightens around a drum to slow a shaft,
  wheel, or transmission member.
safety_class: caution
era_floor: industrial
difficulty: intermediate
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: friction-material
    title: Friction material
    kind: material_source
    role: Provides controlled drag and wear.
  - slug: lever
    title: Lever
    kind: hard
    role: Lets a person apply force.
  - slug: proof-load-test
    title: Proof load test
    kind: test
    role: Checks linkages and anchors before road use.
  - slug: quality-control-records
    title: Quality-control records
    kind: soft
    role: Tracks adjustment and wear.
unlocks:
  - slug: automobile
    title: Automobile
    kind: safety
    role: "Enables Automobile: Supplies controlled stopping."
  - slug: planetary-transmission
    title: Planetary transmission
    kind: hard
    role: "Enables Planetary transmission: Controls gear members in early vehicle
      designs."
missing_prerequisites:
  - slug: friction-material
    title: Friction material
    reason: A future page should compare early linings safely.
material_dependencies:
  - slug: leather
    title: Leather
    importance: substitute
    availability_note: Prepared leather can serve in early friction applications.
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Bands, pins, and anchors require metal stock.
images:
  header:
    src: /images/tech/band-brake-header.webp
    alt: Field sketch of Band brake, highlighting leather, mild steel, friction
      material, lever.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: b29590dad2ab4310066c96b4bd00faad5ee386e287f1b3d58fd8d90f851b9322
    generated_at: 2026-05-05T20:03:54.512Z
  schematic:
    src: /images/tech/band-brake-schematic.webp
    alt: Schematic diagram of Band brake, highlighting leather, mild steel, friction
      material, lever and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: d49ffa7fa5de3f2f475bc2706cbee6d464d0b7a43e0ccbdaf2b3dddc76fe1432
    generated_at: 2026-05-05T20:04:45.887Z
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
  practicality: 0.58
  historical_plausibility: 0.82
  completeness: 0.5
---
## Field briefing

A flexible friction band that tightens around a drum to slow a shaft, wheel, or transmission member.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of band brake that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[leather|Leather]] (substitute): Prepared leather can serve in early friction applications.
- [[mild-steel|Mild steel]] (hard): Bands, pins, and anchors require metal stock.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[friction-material|Friction material]]: Provides controlled drag and wear.
- [[lever|Lever]]: Lets a person apply force.
- [[proof-load-test|Proof load test]]: Checks linkages and anchors before road use.
- [[quality-control-records|Quality-control records]]: Tracks adjustment and wear.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[friction-material|Friction material]]: A future page should compare early linings safely.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
