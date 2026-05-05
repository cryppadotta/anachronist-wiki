---
id: tech_gasoline
slug: gasoline
title: Gasoline
aliases: []
node_type: material
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A volatile petroleum fuel fraction used in spark-ignition engines,
  treated here as a supply-chain and safety node rather than a recipe.
safety_class: caution
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: trade_network
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: petroleum
    title: Petroleum
    kind: material_source
    role: Provides the crude source.
  - slug: oil-refining
    title: Oil refining
    kind: refining
    role: Separates useful petroleum fractions.
  - slug: fuel-storage
    title: Fuel storage
    kind: safety
    role: Requires labeled, ventilated, fire-aware handling.
  - slug: quality-control-records
    title: Quality-control records
    kind: test
    role: Tracks source, contamination, and engine behavior.
unlocks:
  - slug: carburetor
    title: Carburetor
    kind: hard
    role: "Enables Carburetor: Defines the fuel behavior being handled."
  - slug: gasoline-engine
    title: Gasoline engine
    kind: hard
    role: "Enables Gasoline engine: Supplies the fuel family."
missing_prerequisites:
  - slug: fuel-storage
    title: Fuel storage
    reason: A dedicated flammable-liquid storage page should be safety-focused and
      non-operational.
material_dependencies:
  - slug: petroleum
    title: Petroleum
    importance: hard
    availability_note: Gasoline depends on crude petroleum access.
  - slug: storage-jar
    title: Storage jar
    importance: soft
    availability_note: Containers must be chosen for compatibility and sealing.
images:
  header:
    src: /images/tech/gasoline-header.webp
    alt: Field sketch of Gasoline, highlighting petroleum, storage jar, oil
      refining, material.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 680e2b2d77ca5e3ea6dab179fb36d73c2f17d921dd51c002f6b8196cef321cb8
    generated_at: 2026-05-05T20:01:46.051Z
  schematic:
    src: /images/tech/gasoline-schematic.webp
    alt: Schematic diagram of Gasoline, highlighting petroleum, storage jar, oil
      refining, material and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 6140508067cef5f7481aa6b6ddb1dccf151126a9df468e0d930293a90d90da5e
    generated_at: 2026-05-05T20:02:36.492Z
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
  practicality: 0.24
  historical_plausibility: 0.78
  completeness: 0.42
---
## Field briefing

A volatile petroleum fuel fraction used in spark-ignition engines, treated here as a supply-chain and safety node rather than a recipe.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of gasoline that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[petroleum|Petroleum]] (hard): Gasoline depends on crude petroleum access.
- [[storage-jar|Storage jar]] (soft): Containers must be chosen for compatibility and sealing.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[petroleum|Petroleum]]: Provides the crude source.
- [[oil-refining|Oil refining]]: Separates useful petroleum fractions.
- [[fuel-storage|Fuel storage]]: Requires labeled, ventilated, fire-aware handling.
- [[quality-control-records|Quality-control records]]: Tracks source, contamination, and engine behavior.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[fuel-storage|Fuel storage]]: A dedicated flammable-liquid storage page should be safety-focused and non-operational.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
