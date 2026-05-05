---
id: tech_go_no_go_gauge
slug: go-no-go-gauge
title: Go/no-go gauge
aliases: []
node_type: test
secondary_node_types: []
status: draft
summary: A fixed inspection tool with accepting and rejecting sides that quickly
  sorts parts by whether they fall within useful limits.
safety_class: allowed
era_floor: industrial
difficulty: intermediate
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: standard-weights
    title: Standard weights
    kind: measurement
    role: Supports standardization culture.
  - slug: measuring-rod
    title: Measuring rod
    kind: measurement
    role: Provides length comparison practice.
  - slug: technical-drawing
    title: Technical drawing
    kind: knowledge
    role: Defines the accepted limits.
  - slug: scratch-hardness-test
    title: Scratch hardness test
    kind: test
    role: Screens gauge material durability.
unlocks:
  - slug: ball-bearing
    title: Ball bearing
    kind: test
    role: "Enables Ball bearing: Sorts balls and races by fit."
  - slug: camshaft
    title: Camshaft
    kind: test
    role: "Enables Camshaft: Checks journals and follower fits."
  - slug: carburetor
    title: Carburetor
    kind: test
    role: "Enables Carburetor: Checks fittings and orifices within accepted limits."
  - slug: cylinder-boring
    title: Cylinder boring
    kind: test
    role: "Enables Cylinder boring: Checks whether a bore falls inside accepted
      limits."
  - slug: gear-cutting
    title: Gear cutting
    kind: test
    role: "Enables Gear cutting: Checks tooth form and fit against a mate."
  - slug: interchangeable-parts
    title: Interchangeable parts
    kind: test
    role: "Enables Interchangeable parts: Enforces accepted fit limits."
  - slug: machining
    title: Machining
    kind: test
    role: "Enables Machining: Separates acceptable from unacceptable fits."
  - slug: magneto
    title: Magneto
    kind: test
    role: "Enables Magneto: Checks shaft, bearing, and contact fits."
  - slug: planetary-transmission
    title: Planetary transmission
    kind: test
    role: "Enables Planetary transmission: Checks gear and shaft fits."
  - slug: rolling-mill
    title: Rolling mill
    kind: test
    role: "Enables Rolling mill: Checks output thickness and section."
  - slug: sheet-steel
    title: Sheet steel
    kind: test
    role: "Enables Sheet steel: Checks thickness and fit."
  - slug: spark-plug
    title: Spark plug
    kind: test
    role: "Enables Spark plug: Checks thread and gap acceptability."
  - slug: threaded-fastener
    title: Threaded fastener
    kind: test
    role: "Enables Threaded fastener: Checks whether threads fit accepted limits."
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Gauges need stable, wear-resistant stock.
  - slug: stone
    title: Stone
    importance: substitute
    availability_note: Simple gauge blocks and templates can start from stable hard materials.
images:
  header:
    src: /images/tech/go-no-go-gauge-header.webp
    alt: Field sketch of Go/no-go gauge, highlighting mild steel, stone, standard
      weights, measuring rod.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: d71ae5dc9033ee0c523033082c0ecd55694030502262d96cdb03a54c1fc2a324
    generated_at: 2026-05-05T20:07:34.799Z
  schematic:
    src: /images/tech/go-no-go-gauge-schematic.webp
    alt: Schematic diagram of Go/no-go gauge, highlighting mild steel, stone,
      standard weights, measuring rod and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: e87820fd3af038a925869b02a0ec1c1412b330b003b013af29941d4b86e1b994
    generated_at: 2026-05-05T20:08:26.059Z
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
  practicality: 0.72
  historical_plausibility: 0.82
  completeness: 0.58
---
## Field briefing

A fixed inspection tool with accepting and rejecting sides that quickly sorts parts by whether they fall within useful limits.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of go/no-go gauge that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (soft): Gauges need stable, wear-resistant stock.
- [[stone|Stone]] (substitute): Simple gauge blocks and templates can start from stable hard materials.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[standard-weights|Standard weights]]: Supports standardization culture.
- [[measuring-rod|Measuring rod]]: Provides length comparison practice.
- [[technical-drawing|Technical drawing]]: Defines the accepted limits.
- [[scratch-hardness-test|Scratch hardness test]]: Screens gauge material durability.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
