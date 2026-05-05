---
id: tech_gasoline_engine
slug: gasoline-engine
title: Gasoline engine
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A spark-ignition internal combustion engine optimized around volatile
  petroleum fuel, carburetion, cooling, and regular maintenance.
safety_class: caution
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: months_to_years
prerequisites:
  - slug: internal-combustion-engine
    title: Internal combustion engine
    kind: hard
    role: Provides the engine architecture.
  - slug: gasoline
    title: Gasoline
    kind: hard
    role: Supplies the fuel family.
  - slug: carburetor
    title: Carburetor
    kind: hard
    role: Meters and mixes fuel with incoming air.
  - slug: spark-plug
    title: Spark plug
    kind: hard
    role: Delivers ignition inside the cylinder.
  - slug: magneto
    title: Magneto
    kind: soft
    role: Can produce ignition current without a large battery.
  - slug: radiator
    title: Radiator
    kind: safety
    role: Rejects engine heat to air.
unlocks:
  - slug: ford-model-t
    title: Ford Model T
    kind: hard
    role: "Enables Ford Model T: Supplies compact mobile power."
missing_prerequisites: []
material_dependencies:
  - slug: lubricating-oil
    title: Lubricating oil
    importance: hard
    availability_note: The engine must be lubricated before repeated operation.
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Shafts, fasteners, valve parts, and brackets require steel.
images:
  header:
    src: /images/tech/gasoline-engine-header.webp
    alt: Field sketch of Gasoline engine, highlighting lubricating oil, mild steel,
      internal combustion engine, gasoline.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: d2589780c8cb4e4fc0fdb1e3b8f9cde03147db8507e3a41575fdbdf890ec7de7
    generated_at: 2026-05-05T19:58:14.266Z
  schematic:
    src: /images/tech/gasoline-engine-schematic.webp
    alt: Schematic diagram of Gasoline engine, highlighting lubricating oil, mild
      steel, internal combustion engine, gasoline and major working
      relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: df0f1df08aec8d9a0eb6f7d0c97d9f9ea51c3b67973ec6eade55c399699fb228
    generated_at: 2026-05-05T19:59:13.764Z
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
  practicality: 0.34
  historical_plausibility: 0.82
  completeness: 0.58
---
## Field briefing

A spark-ignition internal combustion engine optimized around volatile petroleum fuel, carburetion, cooling, and regular maintenance.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of gasoline engine that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[lubricating-oil|Lubricating oil]] (hard): The engine must be lubricated before repeated operation.
- [[mild-steel|Mild steel]] (hard): Shafts, fasteners, valve parts, and brackets require steel.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[internal-combustion-engine|Internal combustion engine]]: Provides the engine architecture.
- [[gasoline|Gasoline]]: Supplies the fuel family.
- [[carburetor|Carburetor]]: Meters and mixes fuel with incoming air.
- [[spark-plug|Spark plug]]: Delivers ignition inside the cylinder.
- [[magneto|Magneto]]: Can produce ignition current without a large battery.
- [[radiator|Radiator]]: Rejects engine heat to air.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
