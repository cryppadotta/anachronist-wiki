---
id: tech_planetary_transmission
slug: planetary-transmission
title: Planetary transmission
aliases: []
node_type: artifact
status: draft
summary: A compact gear train with sun, planet, and ring gears that can provide
  multiple speed relationships through clutches or bands.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: transmission
    title: Transmission
    kind: hard
    role: Provides the power-transfer role.
  - slug: gear-cutting
    title: Gear cutting
    kind: hard
    role: Planetary gears demand repeatable tooth geometry.
  - slug: band-brake
    title: Band brake
    kind: hard
    role: Controls gear members in early vehicle designs.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks gear and shaft fits.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Gears and shafts require tough steel.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: hard
    availability_note: Gear trains must be lubricated.
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
  historical_plausibility: 0.8
  completeness: 0.48
images:
  header:
    src: /images/tech/planetary-transmission-header.webp
    alt: Field sketch of Planetary transmission, highlighting mild steel,
      lubricating oil, transmission, gear cutting.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 7031765cfd825363c0eff2406d584599c75603ec0adad7e8e28ba7ab5088aaa8
    generated_at: 2026-05-05T20:03:18.789Z
  schematic:
    src: /images/tech/planetary-transmission-schematic.webp
    alt: Schematic diagram of Planetary transmission, highlighting mild steel,
      lubricating oil, transmission, gear cutting and major working
      relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: ee3c214c54825f7695f5ac55272bc4bc3a50e5dfc423b9aac4fa676bf469d976
    generated_at: 2026-05-05T20:04:19.716Z
---

## Field briefing

A compact gear train with sun, planet, and ring gears that can provide multiple speed relationships through clutches or bands.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of planetary transmission that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Gears and shafts require tough steel.
- [[lubricating-oil|Lubricating oil]] (hard): Gear trains must be lubricated.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[transmission|Transmission]]: Provides the power-transfer role.
- [[gear-cutting|Gear cutting]]: Planetary gears demand repeatable tooth geometry.
- [[band-brake|Band brake]]: Controls gear members in early vehicle designs.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks gear and shaft fits.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
