---
id: tech_oil_refining
slug: oil-refining
title: Oil refining
aliases: []
node_type: process
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A controlled petroleum separation and purification practice, included
  as a high-level graph node for fuel and lubricant supply chains.
safety_class: caution
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: petroleum
    title: Petroleum
    kind: material_source
    role: Supplies crude feedstock.
  - slug: distillation
    title: Distillation
    kind: refining
    role: Provides the general separation principle.
  - slug: temperature-measurement
    title: Temperature measurement
    kind: measurement
    role: Monitors process zones and product consistency.
  - slug: public-safety
    title: Public safety
    kind: safety
    role: Keeps fire, vapor, and waste risks governed.
unlocks:
  - slug: gasoline
    title: Gasoline
    kind: refining
    role: "Enables Gasoline: Separates useful petroleum fractions."
missing_prerequisites:
  - slug: distillation
    title: Distillation
    reason: A non-recipe separation page should cover stills and fractions safely.
  - slug: temperature-measurement
    title: Temperature measurement
    reason: A measurement page is needed for thermometers and heat scales.
material_dependencies:
  - slug: petroleum
    title: Petroleum
    importance: hard
    availability_note: The feedstock defines the operation.
  - slug: clay
    title: Clay
    importance: soft
    availability_note: Some purification and sealing practices use clay materials.
images:
  header:
    src: /images/tech/oil-refining-header.webp
    alt: Field sketch of Oil refining, highlighting petroleum, clay, distillation,
      process.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 2cc426160ebf1b7a0d7054185b0797c051763edaccc9414f955751c236c2cb36
    generated_at: 2026-05-05T20:01:51.494Z
  schematic:
    src: /images/tech/oil-refining-schematic.webp
    alt: Schematic diagram of Oil refining, highlighting petroleum, clay,
      distillation, process and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: ba366336b1c671ac5dfcdfee6ec6192a2a80e9a5fabdd63b910296b9f71b5101
    generated_at: 2026-05-05T20:02:54.239Z
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
  practicality: 0.2
  historical_plausibility: 0.78
  completeness: 0.38
---
## Field briefing

A controlled petroleum separation and purification practice, included as a high-level graph node for fuel and lubricant supply chains.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of oil refining that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[petroleum|Petroleum]] (hard): The feedstock defines the operation.
- [[clay|Clay]] (soft): Some purification and sealing practices use clay materials.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[petroleum|Petroleum]]: Supplies crude feedstock.
- [[distillation|Distillation]]: Provides the general separation principle.
- [[temperature-measurement|Temperature measurement]]: Monitors process zones and product consistency.
- [[public-safety|Public safety]]: Keeps fire, vapor, and waste risks governed.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[distillation|Distillation]]: A non-recipe separation page should cover stills and fractions safely.
- [[temperature-measurement|Temperature measurement]]: A measurement page is needed for thermometers and heat scales.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
