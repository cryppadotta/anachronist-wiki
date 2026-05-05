---
id: tech_water_jacket_cooling
slug: water-jacket-cooling
title: Water-jacket cooling
aliases: []
node_type: process
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A circulating water system that carries heat away from engine walls and
  into a radiator or tank.
safety_class: caution
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: water
    title: Water
    kind: material_source
    role: Provides coolant.
  - slug: water-pump
    title: Water pump
    kind: soft
    role: Can force circulation where thermosiphon is insufficient.
  - slug: leak-test
    title: Leak test
    kind: test
    role: Checks jackets, hoses, and fittings.
unlocks:
  - slug: internal-combustion-engine
    title: Internal combustion engine
    kind: safety
    role: "Enables Internal combustion engine: Removes heat to protect moving parts."
  - slug: radiator
    title: Radiator
    kind: hard
    role: "Enables Radiator: Defines the engine cooling loop."
missing_prerequisites:
  - slug: rubber-hose
    title: Rubber hose
    reason: A molded rubber goods page can connect tires, belts, and hoses.
  - slug: leak-test
    title: Leak test
    reason: A generic leak inspection page remains to be written.
material_dependencies:
  - slug: water
    title: Water
    importance: hard
    availability_note: Cooling requires a clean, available liquid.
  - slug: rubber-hose
    title: Rubber hose
    importance: soft
    availability_note: Flexible coolant joints benefit from rubber goods.
images:
  header:
    src: /images/tech/water-jacket-cooling-header.webp
    alt: Field sketch of Water-jacket cooling, highlighting water, rubber hose,
      water pump, process.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 019570f450f2d3e0815f1123efb0b5d51f332925dc0d035c655234beb5572dd0
    generated_at: 2026-05-05T20:02:07.421Z
  schematic:
    src: /images/tech/water-jacket-cooling-schematic.webp
    alt: Schematic diagram of Water-jacket cooling, highlighting water, rubber hose,
      water pump, process and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: f8ef1ab1b5292faef3c3cdaade7a94a97f732319668f3f7d9b74059d14ad0e06
    generated_at: 2026-05-05T20:03:05.082Z
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
  practicality: 0.48
  historical_plausibility: 0.78
  completeness: 0.5
---
## Field briefing

A circulating water system that carries heat away from engine walls and into a radiator or tank.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of water-jacket cooling that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[water|Water]] (hard): Cooling requires a clean, available liquid.
- [[rubber-hose|Rubber hose]] (soft): Flexible coolant joints benefit from rubber goods.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[water|Water]]: Provides coolant.
- [[radiator|Radiator]]: Rejects heat in many vehicle versions.
- [[water-pump|Water pump]]: Can force circulation where thermosiphon is insufficient.
- [[leak-test|Leak test]]: Checks jackets, hoses, and fittings.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[rubber-hose|Rubber hose]]: A molded rubber goods page can connect tires, belts, and hoses.
- [[leak-test|Leak test]]: A generic leak inspection page remains to be written.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
