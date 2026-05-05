---
id: tech_ignition_coil
slug: ignition-coil
title: Ignition coil
aliases: []
node_type: artifact
status: draft
summary: An electromagnetic winding assembly that turns low-voltage pulses into
  higher-voltage ignition pulses.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: copper-wire
    title: Copper wire
    kind: material_source
    role: Windings require insulated conductive wire.
  - slug: iron-core
    title: Iron core
    kind: material_source
    role: Magnetic cores improve coil action.
  - slug: insulating-varnish
    title: Insulating varnish
    kind: material_source
    role: Coils require insulation between turns.
  - slug: battery
    title: Battery
    kind: soft
    role: A source of electrical pulses is needed for battery ignition.
unlocks: []
missing_prerequisites:
  - slug: iron-core
    title: Iron core
    reason: A magnetic core page can be added later.
  - slug: insulating-varnish
    title: Insulating varnish
    reason: A dedicated electrical insulation page is still needed.
  - slug: battery
    title: Battery
    reason: A generic battery page should connect non-lead-acid cells.
material_dependencies:
  - slug: copper-wire
    title: Copper wire
    importance: hard
    availability_note: Conductive windings are the core material.
  - slug: iron-ore
    title: Iron ore
    importance: soft
    availability_note: Iron supply underlies core stock.
  - slug: resin
    title: Resin
    importance: soft
    availability_note: Early insulation and potting may use resinous materials.
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
  practicality: 0.4
  historical_plausibility: 0.78
  completeness: 0.48
images:
  header:
    src: /images/tech/ignition-coil-header.webp
    alt: Field sketch of Ignition coil, highlighting copper wire, iron ore, iron
      core, artifact.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: e937d05854227eadbc244fbd6d6f420377e4bd18b6c30c82e99303f39abac904
    generated_at: 2026-05-05T20:00:01.832Z
  schematic:
    src: /images/tech/ignition-coil-schematic.webp
    alt: Schematic diagram of Ignition coil, highlighting copper wire, iron ore,
      iron core, artifact and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: b9dc228aaeb96d9b6a4c7b10ac98549342db0ebfb14eecf15ba2f99c3e240cd3
    generated_at: 2026-05-05T20:00:57.112Z
---

## Field briefing

An electromagnetic winding assembly that turns low-voltage pulses into higher-voltage ignition pulses.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of ignition coil that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[copper-wire|Copper wire]] (hard): Conductive windings are the core material.
- [[iron-ore|Iron ore]] (soft): Iron supply underlies core stock.
- [[resin|Resin]] (soft): Early insulation and potting may use resinous materials.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[copper-wire|Copper wire]]: Windings require insulated conductive wire.
- [[iron-core|Iron core]]: Magnetic cores improve coil action.
- [[insulating-varnish|Insulating varnish]]: Coils require insulation between turns.
- [[battery|Battery]]: A source of electrical pulses is needed for battery ignition.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[iron-core|Iron core]]: A magnetic core page can be added later.
- [[insulating-varnish|Insulating varnish]]: A dedicated electrical insulation page is still needed.
- [[battery|Battery]]: A generic battery page should connect non-lead-acid cells.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
