---
id: tech_internal_combustion_engine
slug: internal-combustion-engine
title: Internal combustion engine
aliases: []
node_type: artifact
status: draft
summary: A heat engine that burns fuel inside a cylinder to push a piston,
  requiring precise containment, ignition, cooling, and lubrication.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: months_to_years
prerequisites:
  - slug: piston-cylinder
    title: Piston and cylinder
    kind: hard
    role: Converts pressure pulses into reciprocating motion.
  - slug: crankshaft
    title: Crankshaft
    kind: hard
    role: Turns reciprocating motion into rotary output.
  - slug: poppet-valve
    title: Poppet valve
    kind: hard
    role: Controls gas exchange.
  - slug: spark-ignition
    title: Spark ignition
    kind: hard
    role: Provides timed ignition for light-fuel engines.
  - slug: water-jacket-cooling
    title: Water-jacket cooling
    kind: safety
    role: Removes heat to protect moving parts.
  - slug: lubricating-oil
    title: Lubricating oil
    kind: hard
    role: Reduces destructive friction and wear.
unlocks: []
missing_prerequisites:
  - slug: cast-iron
    title: Cast iron
    reason: A full foundry material page is needed for engine blocks and housings.
material_dependencies:
  - slug: cast-iron
    title: Cast iron
    importance: hard
    availability_note: Cylinder blocks and heads historically often used cast iron.
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Shafts, fasteners, and valve gear require tough steel.
  - slug: gasoline
    title: Gasoline
    importance: soft
    availability_note: One common fuel path, handled here only at a high level.
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
  completeness: 0.56
images:
  header:
    src: /images/tech/internal-combustion-engine-header.webp
    alt: Field sketch of Internal combustion engine, highlighting cast iron, mild
      steel, piston and cylinder, crankshaft.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 9957ca68beec76611d28962299d2b5e2aece1292dc57fc4a8b21d762c5d533b9
    generated_at: 2026-05-05T19:58:17.410Z
  schematic:
    src: /images/tech/internal-combustion-engine-schematic.webp
    alt: Schematic diagram of Internal combustion engine, highlighting cast iron,
      mild steel, piston and cylinder, crankshaft and major working
      relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 31985985eb4230fed8b0bf9743e3d44eaa04bd7f8193d18e46a5d781053080be
    generated_at: 2026-05-05T19:59:11.744Z
---

## Field briefing

A heat engine that burns fuel inside a cylinder to push a piston, requiring precise containment, ignition, cooling, and lubrication.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of internal combustion engine that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[cast-iron|Cast iron]] (hard): Cylinder blocks and heads historically often used cast iron.
- [[mild-steel|Mild steel]] (hard): Shafts, fasteners, and valve gear require tough steel.
- [[gasoline|Gasoline]] (soft): One common fuel path, handled here only at a high level.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[piston-cylinder|Piston and cylinder]]: Converts pressure pulses into reciprocating motion.
- [[crankshaft|Crankshaft]]: Turns reciprocating motion into rotary output.
- [[poppet-valve|Poppet valve]]: Controls gas exchange.
- [[spark-ignition|Spark ignition]]: Provides timed ignition for light-fuel engines.
- [[water-jacket-cooling|Water-jacket cooling]]: Removes heat to protect moving parts.
- [[lubricating-oil|Lubricating oil]]: Reduces destructive friction and wear.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[cast-iron|Cast iron]]: A full foundry material page is needed for engine blocks and housings.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
