---
id: tech_ball_bearing
slug: ball-bearing
title: Ball bearing
aliases: []
node_type: artifact
status: draft
summary: A rolling bearing using hardened balls between races to reduce friction
  in wheels, shafts, tools, and instruments.
safety_class: allowed
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: city
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: machining
    title: Machining
    kind: hard
    role: Creates races and retainers.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Sorts balls and races by fit.
  - slug: scratch-hardness-test
    title: Scratch hardness test
    kind: test
    role: Screens hardness and wear.
  - slug: lubricating-oil
    title: Lubricating oil
    kind: hard
    role: Protects rolling contact surfaces.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Early bearing races and balls need steel stock.
  - slug: abrasive-grit
    title: Abrasive grit
    importance: soft
    availability_note: Finishing round parts and races needs abrasives.
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
  practicality: 0.34
  historical_plausibility: 0.78
  completeness: 0.46
images:
  header:
    src: /images/tech/ball-bearing-header.webp
    alt: Field sketch of Ball bearing, highlighting mild steel, abrasive grit,
      machining, go/no-go gauge.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: e4f22753427144bd5b4e92d3d91e2594fd3720838224cfc8e084486547658cd4
    generated_at: 2026-05-05T20:07:25.893Z
  schematic:
    src: /images/tech/ball-bearing-schematic.webp
    alt: Schematic diagram of Ball bearing, highlighting mild steel, abrasive grit,
      machining, go/no-go gauge and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 53b9f4150d784c41df5cdd6297cac39b74fa94f5a735430921742e66a1a5257d
    generated_at: 2026-05-05T20:08:22.401Z
---

## Field briefing

A rolling bearing using hardened balls between races to reduce friction in wheels, shafts, tools, and instruments.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of ball bearing that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Early bearing races and balls need steel stock.
- [[abrasive-grit|Abrasive grit]] (soft): Finishing round parts and races needs abrasives.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[machining|Machining]]: Creates races and retainers.
- [[go-no-go-gauge|Go/no-go gauge]]: Sorts balls and races by fit.
- [[scratch-hardness-test|Scratch hardness test]]: Screens hardness and wear.
- [[lubricating-oil|Lubricating oil]]: Protects rolling contact surfaces.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
