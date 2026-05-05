---
id: tech_water_pump
slug: water-pump
title: Water pump
aliases: []
node_type: artifact
status: draft
summary: A mechanical device that moves water through a cooling loop, well,
  trough, or workshop process.
safety_class: allowed
era_floor: industrial
difficulty: intermediate
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: simple-pump
    title: Simple pump
    kind: hard
    role: Provides the basic fluid-moving pattern.
  - slug: plain-bearing
    title: Plain bearing
    kind: soft
    role: Supports rotating or sliding pump parts.
  - slug: leak-test
    title: Leak test
    kind: test
    role: Confirms seals and joints.
  - slug: machining
    title: Machining
    kind: soft
    role: Improves impellers, shafts, and housings.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Shafts and brackets need metal stock.
  - slug: leather
    title: Leather
    importance: soft
    availability_note: Early seals and valves can use leather.
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
  practicality: 0.58
  historical_plausibility: 0.74
  completeness: 0.5
images:
  header:
    src: /images/tech/water-pump-header.webp
    alt: Field sketch of Water pump, highlighting mild steel, leather, simple pump,
      plain bearing.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: a55bc550dec8225e4cda8d77b13ccd5812010fa94363babe658b9244f9baf10f
    generated_at: 2026-05-05T20:02:22.097Z
  schematic:
    src: /images/tech/water-pump-schematic.webp
    alt: Schematic diagram of Water pump, highlighting mild steel, leather, simple
      pump, plain bearing and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: b638042c3265e4fea92bec4b78e83dda076d12c2d3844d4f4258aaba8a41b1b2
    generated_at: 2026-05-05T20:03:16.057Z
---

## Field briefing

A mechanical device that moves water through a cooling loop, well, trough, or workshop process.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of water pump that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (soft): Shafts and brackets need metal stock.
- [[leather|Leather]] (soft): Early seals and valves can use leather.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[simple-pump|Simple pump]]: Provides the basic fluid-moving pattern.
- [[plain-bearing|Plain bearing]]: Supports rotating or sliding pump parts.
- [[leak-test|Leak test]]: Confirms seals and joints.
- [[machining|Machining]]: Improves impellers, shafts, and housings.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
