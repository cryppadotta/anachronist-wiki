---
id: tech_petroleum
slug: petroleum
title: Petroleum
aliases: []
node_type: material
status: draft
summary: Naturally occurring crude oil that becomes a family of fuels,
  lubricants, waxes, and industrial feedstocks after controlled processing.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: low
minimum_social_scale: trade_network
time_to_first_working_version: weeks_to_years
prerequisites:
  - slug: geological-survey
    title: Geological survey
    kind: knowledge
    role: Finds seep and well prospects.
  - slug: barrel
    title: Barrel
    kind: hard
    role: Provides transport and storage culture.
  - slug: trade-network
    title: Trade network
    kind: institutional
    role: Moves petroleum from source regions to workshops.
  - slug: quality-control-records
    title: Quality-control records
    kind: test
    role: Tracks source and contamination differences.
unlocks: []
missing_prerequisites:
  - slug: geological-survey
    title: Geological survey
    reason: A field geology page should cover finding deposits.
  - slug: trade-network
    title: Trade network
    reason: A trade institution page should connect long-distance supply chains.
material_dependencies:
  - slug: barrel
    title: Barrel
    importance: hard
    availability_note: Bulk liquid handling depends on containers and seals.
  - slug: clay
    title: Clay
    importance: soft
    availability_note: Clay-lined pits and seals appear in some early storage contexts.
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
  practicality: 0.26
  historical_plausibility: 0.84
  completeness: 0.4
images:
  header:
    src: /images/tech/petroleum-header.webp
    alt: Field sketch of Petroleum, highlighting barrel, clay, geological survey,
      material.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 1a1dce46a72579a5ce2d6f0e9e7da9a67e788befa2a6fc070695cccf1940d1fa
    generated_at: 2026-05-05T20:01:45.785Z
  schematic:
    src: /images/tech/petroleum-schematic.webp
    alt: Schematic diagram of Petroleum, highlighting barrel, clay, geological
      survey, material and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 40d58a420a91d0a702131722b3e1aca60aa5dbc26cda433403546a54d17a7210
    generated_at: 2026-05-05T20:02:48.525Z
---

## Field briefing

Naturally occurring crude oil that becomes a family of fuels, lubricants, waxes, and industrial feedstocks after controlled processing.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of petroleum that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[barrel|Barrel]] (hard): Bulk liquid handling depends on containers and seals.
- [[clay|Clay]] (soft): Clay-lined pits and seals appear in some early storage contexts.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[geological-survey|Geological survey]]: Finds seep and well prospects.
- [[barrel|Barrel]]: Provides transport and storage culture.
- [[trade-network|Trade network]]: Moves petroleum from source regions to workshops.
- [[quality-control-records|Quality-control records]]: Tracks source and contamination differences.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[geological-survey|Geological survey]]: A field geology page should cover finding deposits.
- [[trade-network|Trade network]]: A trade institution page should connect long-distance supply chains.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
