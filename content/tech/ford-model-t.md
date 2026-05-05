---
id: tech_ford_model_t
slug: ford-model-t
title: Ford Model T
aliases: []
node_type: artifact
status: draft
summary: A mass-produced early automobile that combines a gasoline engine,
  planetary transmission, steel chassis, rubber tires, factory inspection, and
  service culture.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: city
time_to_first_working_version: months_to_years
prerequisites:
  - slug: automobile
    title: Automobile
    kind: hard
    role: Provides the general self-propelled road vehicle pattern.
  - slug: gasoline-engine
    title: Gasoline engine
    kind: hard
    role: Supplies compact mobile power.
  - slug: planetary-transmission
    title: Planetary transmission
    kind: hard
    role: Gives the early driver controllable speed ranges without a sliding-gear
      gearbox.
  - slug: differential-gear
    title: Differential gear
    kind: hard
    role: Lets driven wheels turn at different speeds through corners.
  - slug: pneumatic-tire
    title: Pneumatic tire
    kind: hard
    role: Carries road shock and gives usable traction.
  - slug: chassis-frame
    title: Chassis frame
    kind: hard
    role: Holds engine, axles, body, and passengers in alignment.
  - slug: factory-assembly-line
    title: Factory assembly line
    kind: institutional
    role: Turns the design into repeatable, low-cost production.
  - slug: interchangeable-parts
    title: Interchangeable parts
    kind: test
    role: Makes service and mass production practical.
  - slug: quality-control-records
    title: Quality-control records
    kind: institutional
    role: Keeps defects traceable across a large factory.
  - slug: road-building
    title: Road building
    kind: soft
    role: Provides surfaces suitable for repeated driving and delivery.
unlocks: []
missing_prerequisites:
  - slug: coachbuilding
    title: Coachbuilding
    reason: Bodywork, seats, trim, and weather protection are a related craft
      cluster not expanded here.
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Frame, axles, gears, shafts, and fasteners need repeatable steel stock.
  - slug: gasoline
    title: Gasoline
    importance: hard
    availability_note: The engine depends on a volatile petroleum fuel supply
      handled with caution.
  - slug: vulcanized-rubber
    title: Vulcanized rubber
    importance: hard
    availability_note: Tires, belts, seals, and vibration isolation need durable rubber goods.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: hard
    availability_note: Bearings, gears, and engine surfaces require steady lubrication.
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
  practicality: 0.42
  historical_plausibility: 0.82
  completeness: 0.62
images:
  header:
    src: /images/tech/ford-model-t-header.webp
    alt: Field sketch of Ford Model T, highlighting mild steel, gasoline,
      automobile, gasoline engine.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: fa4de901837398a5afd90324817530c36e09b9672d93780ef65ce648cb58efa8
    generated_at: 2026-05-05T19:58:13.031Z
  schematic:
    src: /images/tech/ford-model-t-schematic.webp
    alt: Schematic diagram of Ford Model T, highlighting mild steel, gasoline,
      automobile, gasoline engine and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: a355c1db5299bb035705ae626cb33e0d81f763624b912966d4338f8f913d9093
    generated_at: 2026-05-05T19:59:47.914Z
---

## Field briefing

A mass-produced early automobile that combines a gasoline engine, planetary transmission, steel chassis, rubber tires, factory inspection, and service culture.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of ford model t that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Frame, axles, gears, shafts, and fasteners need repeatable steel stock.
- [[gasoline|Gasoline]] (hard): The engine depends on a volatile petroleum fuel supply handled with caution.
- [[vulcanized-rubber|Vulcanized rubber]] (hard): Tires, belts, seals, and vibration isolation need durable rubber goods.
- [[lubricating-oil|Lubricating oil]] (hard): Bearings, gears, and engine surfaces require steady lubrication.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[automobile|Automobile]]: Provides the general self-propelled road vehicle pattern.
- [[gasoline-engine|Gasoline engine]]: Supplies compact mobile power.
- [[planetary-transmission|Planetary transmission]]: Gives the early driver controllable speed ranges without a sliding-gear gearbox.
- [[differential-gear|Differential gear]]: Lets driven wheels turn at different speeds through corners.
- [[pneumatic-tire|Pneumatic tire]]: Carries road shock and gives usable traction.
- [[chassis-frame|Chassis frame]]: Holds engine, axles, body, and passengers in alignment.
- [[factory-assembly-line|Factory assembly line]]: Turns the design into repeatable, low-cost production.
- [[interchangeable-parts|Interchangeable parts]]: Makes service and mass production practical.
- [[quality-control-records|Quality-control records]]: Keeps defects traceable across a large factory.
- [[road-building|Road building]]: Provides surfaces suitable for repeated driving and delivery.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[coachbuilding|Coachbuilding]]: Bodywork, seats, trim, and weather protection are a related craft cluster not expanded here.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
