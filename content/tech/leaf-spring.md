---
id: tech_leaf_spring
slug: leaf-spring
title: Leaf spring
aliases: []
node_type: artifact
status: draft
summary: A stack or strip of spring metal that flexes under load to soften
  vehicle shock and keep wheels in contact with the road.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: spring-steel
    title: Spring steel
    kind: material_source
    role: Provides resilient metal stock.
  - slug: annealing
    title: Annealing
    kind: soft
    role: Supports heat-treatment practice.
  - slug: proof-load-test
    title: Proof load test
    kind: test
    role: Checks resilience and permanent set.
  - slug: chassis-frame
    title: Chassis frame
    kind: soft
    role: Provides mounting points and load paths.
unlocks: []
missing_prerequisites:
  - slug: spring-steel
    title: Spring steel
    reason: A metallurgy page should cover spring stock and heat treatment.
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: substitute
    availability_note: Simple low-performance springs can start from workable steel.
  - slug: spring-steel
    title: Spring steel
    importance: hard
    availability_note: Durable versions require better spring stock.
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
  practicality: 0.48
  historical_plausibility: 0.8
  completeness: 0.48
images:
  header:
    src: /images/tech/leaf-spring-header.webp
    alt: Field sketch of Leaf spring, highlighting mild steel, spring steel,
      annealing, artifact.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 0d56e1717bf75603183fddde489fc93e20923e22fe780f4922a350c3ab8a8e64
    generated_at: 2026-05-05T20:03:54.596Z
  schematic:
    src: /images/tech/leaf-spring-schematic.webp
    alt: Schematic diagram of Leaf spring, highlighting mild steel, spring steel,
      annealing, artifact and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: a98f49e9cd19346c2a76a256665adfa47c3a6909178ee2dc3dc82c89faea9e35
    generated_at: 2026-05-05T20:05:24.178Z
---

## Field briefing

A stack or strip of spring metal that flexes under load to soften vehicle shock and keep wheels in contact with the road.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of leaf spring that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (substitute): Simple low-performance springs can start from workable steel.
- [[spring-steel|Spring steel]] (hard): Durable versions require better spring stock.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[spring-steel|Spring steel]]: Provides resilient metal stock.
- [[annealing|Annealing]]: Supports heat-treatment practice.
- [[proof-load-test|Proof load test]]: Checks resilience and permanent set.
- [[chassis-frame|Chassis frame]]: Provides mounting points and load paths.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[spring-steel|Spring steel]]: A metallurgy page should cover spring stock and heat treatment.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
