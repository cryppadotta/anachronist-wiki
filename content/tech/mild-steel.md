---
id: tech_mild_steel
slug: mild-steel
title: Mild steel
aliases: []
node_type: material
secondary_node_types: []
status: draft
summary: Low-carbon steel that is tough, workable, weldable or rivetable, and
  central to industrial machine and vehicle production.
safety_class: allowed
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: city
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: iron-ore
    title: Iron ore
    kind: material_source
    role: Provides iron feedstock.
  - slug: steelmaking
    title: Steelmaking
    kind: refining
    role: Controls carbon and impurities.
  - slug: standard-weights
    title: Standard weights
    kind: measurement
    role: Supports batch and charge consistency.
  - slug: quality-control-records
    title: Quality-control records
    kind: test
    role: Tracks heats, suppliers, and defects.
unlocks:
  - slug: chassis-frame
    title: Chassis frame
    kind: hard
    role: "Enables Chassis frame: Provides a tough frame material."
  - slug: rolling-mill
    title: Rolling mill
    kind: hard
    role: "Enables Rolling mill: Provides roll and frame material."
  - slug: sheet-steel
    title: Sheet steel
    kind: hard
    role: "Enables Sheet steel: Provides workable steel stock."
missing_prerequisites:
  - slug: steelmaking
    title: Steelmaking
    reason: A metallurgy process page should cover steel production at a high level.
material_dependencies:
  - slug: iron-ore
    title: Iron ore
    importance: hard
    availability_note: Iron supply is foundational.
  - slug: charcoal
    title: Charcoal
    importance: substitute
    availability_note: Early iron processes can use charcoal before coke-based industry.
images:
  header:
    src: /images/tech/mild-steel-header.webp
    alt: Field sketch of Mild steel, highlighting iron ore, charcoal, steelmaking,
      material.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 35ce1fc23606de162c225b2f8681492ef810a39f83a9926216569d91cd055ef3
    generated_at: 2026-05-05T20:05:31.937Z
  schematic:
    src: /images/tech/mild-steel-schematic.webp
    alt: Schematic diagram of Mild steel, highlighting iron ore, charcoal,
      steelmaking, material and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 4a7ab0326b5c4e182017552801b1bfb2a46497a2610dbcd8459006c1d00f08ed
    generated_at: 2026-05-05T20:06:32.964Z
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
  practicality: 0.46
  historical_plausibility: 0.8
  completeness: 0.52
---
## Field briefing

Low-carbon steel that is tough, workable, weldable or rivetable, and central to industrial machine and vehicle production.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of mild steel that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[iron-ore|Iron ore]] (hard): Iron supply is foundational.
- [[charcoal|Charcoal]] (substitute): Early iron processes can use charcoal before coke-based industry.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[iron-ore|Iron ore]]: Provides iron feedstock.
- [[steelmaking|Steelmaking]]: Controls carbon and impurities.
- [[standard-weights|Standard weights]]: Supports batch and charge consistency.
- [[quality-control-records|Quality-control records]]: Tracks heats, suppliers, and defects.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Edges left as empty pages

- [[steelmaking|Steelmaking]]: A metallurgy process page should cover steel production at a high level.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
