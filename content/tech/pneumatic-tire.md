---
id: tech_pneumatic_tire
slug: pneumatic-tire
title: Pneumatic tire
aliases: []
node_type: artifact
status: draft
summary: An air-filled tire that cushions a wheel, improves traction, and
  protects a vehicle from road shock.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: city
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: vulcanized-rubber
    title: Vulcanized rubber
    kind: hard
    role: Provides durable elastic tire material.
  - slug: spoked-wheel
    title: Spoked wheel
    kind: soft
    role: Provides a light wheel foundation.
  - slug: pressure-measurement
    title: Pressure measurement
    kind: test
    role: Checks inflation and leakage.
  - slug: leak-test
    title: Leak test
    kind: test
    role: Finds punctures and bad seams.
unlocks: []
missing_prerequisites:
  - slug: pressure-measurement
    title: Pressure measurement
    reason: A pressure gauge page is needed for tire and boiler checks.
  - slug: textile-cord
    title: Textile cord
    reason: A textile reinforcement page should connect cordage and tires.
  - slug: leak-test
    title: Leak test
    reason: A generic leak inspection page remains to be written.
material_dependencies:
  - slug: vulcanized-rubber
    title: Vulcanized rubber
    importance: hard
    availability_note: Tread and tube depend on durable rubber.
  - slug: textile-cord
    title: Textile cord
    importance: hard
    availability_note: Carcass reinforcement needs strong cord or fabric.
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
  practicality: 0.36
  historical_plausibility: 0.78
  completeness: 0.5
images:
  header:
    src: /images/tech/pneumatic-tire-header.webp
    alt: Field sketch of Pneumatic tire, highlighting vulcanized rubber, textile
      cord, spoked wheel, artifact.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 413609813f1e4a2a2bada2fb170671b94e3d017b2e250c0c4fc0ed9925b87a80
    generated_at: 2026-05-05T20:04:15.739Z
  schematic:
    src: /images/tech/pneumatic-tire-schematic.webp
    alt: Schematic diagram of Pneumatic tire, highlighting vulcanized rubber,
      textile cord, spoked wheel, artifact and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 4c54b21e4e0655a38e5eccd509fc591ff578a2c66f3c3d879ebbb0d4819d8efd
    generated_at: 2026-05-05T20:05:12.774Z
---

## Field briefing

An air-filled tire that cushions a wheel, improves traction, and protects a vehicle from road shock.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of pneumatic tire that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[vulcanized-rubber|Vulcanized rubber]] (hard): Tread and tube depend on durable rubber.
- [[textile-cord|Textile cord]] (hard): Carcass reinforcement needs strong cord or fabric.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[vulcanized-rubber|Vulcanized rubber]]: Provides durable elastic tire material.
- [[spoked-wheel|Spoked wheel]]: Provides a light wheel foundation.
- [[pressure-measurement|Pressure measurement]]: Checks inflation and leakage.
- [[leak-test|Leak test]]: Finds punctures and bad seams.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[pressure-measurement|Pressure measurement]]: A pressure gauge page is needed for tire and boiler checks.
- [[textile-cord|Textile cord]]: A textile reinforcement page should connect cordage and tires.
- [[leak-test|Leak test]]: A generic leak inspection page remains to be written.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
