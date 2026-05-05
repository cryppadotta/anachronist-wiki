---
id: tech_sheet_steel
slug: sheet-steel
title: Sheet steel
aliases: []
node_type: material
secondary_node_types: []
status: draft
summary: Thin, repeatable steel stock used for panels, tanks, brackets,
  stampings, guards, and early automobile bodywork.
safety_class: allowed
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: city
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: mild-steel
    title: Mild steel
    kind: hard
    role: Provides workable steel stock.
  - slug: rolling-mill
    title: Rolling mill
    kind: refining
    role: Reduces metal to controlled thickness.
  - slug: sheet-metal-working
    title: Sheet metal working
    kind: tooling
    role: Cuts, bends, and joins sheet into parts.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks thickness and fit.
unlocks:
  - slug: fuel-tank
    title: Fuel tank
    kind: hard
    role: "Enables Fuel tank: Provides tank and bracket stock."
  - slug: stamping-press
    title: Stamping press
    kind: hard
    role: "Enables Stamping press: Provides workable sheet stock."
missing_prerequisites:
  - slug: sheet-metal-working
    title: Sheet metal working
    reason: A general thin-metal craft page remains to be added.
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: The source stock must be workable and consistent.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: soft
    availability_note: Rolling and forming tools need lubrication.
images:
  header:
    src: /images/tech/sheet-steel-header.webp
    alt: Field sketch of Sheet steel, highlighting mild steel, lubricating oil,
      rolling mill, material.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: a70b721f1dbb3850c43849e21f4ea38be530c18cc59b9952c669545767480934
    generated_at: 2026-05-05T20:05:10.814Z
  schematic:
    src: /images/tech/sheet-steel-schematic.webp
    alt: Schematic diagram of Sheet steel, highlighting mild steel, lubricating oil,
      rolling mill, material and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 526a5e322a57a944b7052273969d2882a65fe3bee9a36776f60efb501941baf4
    generated_at: 2026-05-05T20:06:10.354Z
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
  practicality: 0.52
  historical_plausibility: 0.82
  completeness: 0.54
---
## Field briefing

Thin, repeatable steel stock used for panels, tanks, brackets, stampings, guards, and early automobile bodywork.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of sheet steel that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): The source stock must be workable and consistent.
- [[lubricating-oil|Lubricating oil]] (soft): Rolling and forming tools need lubrication.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[mild-steel|Mild steel]]: Provides workable steel stock.
- [[rolling-mill|Rolling mill]]: Reduces metal to controlled thickness.
- [[sheet-metal-working|Sheet metal working]]: Cuts, bends, and joins sheet into parts.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks thickness and fit.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Edges left as empty pages

- [[sheet-metal-working|Sheet metal working]]: A general thin-metal craft page remains to be added.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
