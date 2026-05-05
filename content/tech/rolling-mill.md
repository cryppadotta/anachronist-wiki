---
id: tech_rolling_mill
slug: rolling-mill
title: Rolling mill
aliases: []
node_type: tool
status: draft
summary: A powered mill that passes metal between rolls to make bars, strip,
  rail, plate, or sheet of repeatable section.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: city
time_to_first_working_version: months_to_years
prerequisites:
  - slug: mild-steel
    title: Mild steel
    kind: hard
    role: Provides roll and frame material.
  - slug: plain-bearing
    title: Plain bearing
    kind: hard
    role: Supports heavy rotating rolls.
  - slug: waterwheel
    title: Waterwheel
    kind: alternative
    role: Can provide early mill power.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks output thickness and section.
unlocks: []
missing_prerequisites:
  - slug: waterwheel
    title: Waterwheel
    reason: A mill power page should connect water power to early factories.
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Rolls and frames require strong metal.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: hard
    availability_note: Bearings and screw adjustments need lubrication.
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
  completeness: 0.48
images:
  header:
    src: /images/tech/rolling-mill-header.webp
    alt: Field sketch of Rolling mill, highlighting mild steel, lubricating oil,
      plain bearing, tool.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 2c6bbb8c4a0df01ab353c9b4ed2be0df78c0de5f175a20f9606ef1e26fe0728a
    generated_at: 2026-05-05T20:05:40.437Z
  schematic:
    src: /images/tech/rolling-mill-schematic.webp
    alt: Schematic diagram of Rolling mill, highlighting mild steel, lubricating
      oil, plain bearing, tool and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: faa6b2361e154d9bb78831bad94ec9f5a80ee995150753d36c3f6217bb8fff1d
    generated_at: 2026-05-05T20:06:38.616Z
---

## Field briefing

A powered mill that passes metal between rolls to make bars, strip, rail, plate, or sheet of repeatable section.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of rolling mill that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Rolls and frames require strong metal.
- [[lubricating-oil|Lubricating oil]] (hard): Bearings and screw adjustments need lubrication.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[mild-steel|Mild steel]]: Provides roll and frame material.
- [[plain-bearing|Plain bearing]]: Supports heavy rotating rolls.
- [[waterwheel|Waterwheel]]: Can provide early mill power.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks output thickness and section.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[waterwheel|Waterwheel]]: A mill power page should connect water power to early factories.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
