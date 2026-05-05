---
id: tech_poppet_valve
slug: poppet-valve
title: Poppet valve
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A stemmed valve that opens against a seat and closes to control intake,
  exhaust, steam, air, or liquid flow.
safety_class: caution
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: machining
    title: Machining
    kind: hard
    role: Makes stems, heads, and seats fit.
  - slug: spring-making
    title: Spring making
    kind: hard
    role: Returns the valve closed after actuation.
  - slug: camshaft
    title: Camshaft
    kind: soft
    role: Provides timed opening in engines.
  - slug: leak-test
    title: Leak test
    kind: test
    role: Checks whether the valve seals.
unlocks:
  - slug: internal-combustion-engine
    title: Internal combustion engine
    kind: hard
    role: "Enables Internal combustion engine: Controls gas exchange."
missing_prerequisites:
  - slug: spring-making
    title: Spring making
    reason: A spring process page is needed for valve return springs.
  - slug: leak-test
    title: Leak test
    reason: A generic pressure/leak inspection page can be added later.
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Early valve hardware needs workable steel.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: soft
    availability_note: Guides and stems wear less when lubricated.
images:
  header:
    src: /images/tech/poppet-valve-header.webp
    alt: Field sketch of Poppet valve, highlighting mild steel, lubricating oil,
      machining, spring making.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 3d4c7c133589ef838a29d14c65c86c3641e65288f0d16fc74cd308115f958e47
    generated_at: 2026-05-05T20:00:00.837Z
  schematic:
    src: /images/tech/poppet-valve-schematic.webp
    alt: Schematic diagram of Poppet valve, highlighting mild steel, lubricating
      oil, machining, spring making and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: db4d2e0036fa1c371ef3898b601a5cd33ae721663630e3c7ea90a3d95a09509a
    generated_at: 2026-05-05T20:01:00.597Z
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
  practicality: 0.5
  historical_plausibility: 0.7
  completeness: 0.5
---
## Field briefing

A stemmed valve that opens against a seat and closes to control intake, exhaust, steam, air, or liquid flow.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of poppet valve that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Early valve hardware needs workable steel.
- [[lubricating-oil|Lubricating oil]] (soft): Guides and stems wear less when lubricated.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[machining|Machining]]: Makes stems, heads, and seats fit.
- [[spring-making|Spring making]]: Returns the valve closed after actuation.
- [[camshaft|Camshaft]]: Provides timed opening in engines.
- [[leak-test|Leak test]]: Checks whether the valve seals.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[spring-making|Spring making]]: A spring process page is needed for valve return springs.
- [[leak-test|Leak test]]: A generic pressure/leak inspection page can be added later.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
