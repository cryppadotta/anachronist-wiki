---
id: tech_crankshaft
slug: crankshaft
title: Crankshaft
aliases: []
node_type: artifact
status: draft
summary: A shaped rotating shaft that turns piston motion into rotary power
  while surviving repeated bending and torsion.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: machining
    title: Machining
    kind: hard
    role: Forms journals, throws, and shoulders.
  - slug: lathe
    title: Lathe
    kind: tooling
    role: Keeps journals concentric.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Finds runout and straightness faults.
  - slug: lubricating-oil
    title: Lubricating oil
    kind: hard
    role: Protects loaded journals in use.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: A tough shaft material is required.
  - slug: plain-bearing
    title: Plain bearing
    importance: hard
    availability_note: Crankshaft journals need bearing surfaces.
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
  practicality: 0.4
  historical_plausibility: 0.76
  completeness: 0.54
images:
  header:
    src: /images/tech/crankshaft-header.webp
    alt: Field sketch of Crankshaft, highlighting mild steel, plain bearing,
      machining, lathe.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 0e595e9cc8bac2438f78962ec3e9b73db99823e6effc597f8b279e1ea44dbb4e
    generated_at: 2026-05-05T19:58:12.248Z
  schematic:
    src: /images/tech/crankshaft-schematic.webp
    alt: Schematic diagram of Crankshaft, highlighting mild steel, plain bearing,
      machining, lathe and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: e63ea5b22f6d4d93a73a689b5b5625191cbdf8fb59105cc13b9eb0349cd13083
    generated_at: 2026-05-05T19:58:54.057Z
---

## Field briefing

A shaped rotating shaft that turns piston motion into rotary power while surviving repeated bending and torsion.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of crankshaft that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): A tough shaft material is required.
- [[plain-bearing|Plain bearing]] (hard): Crankshaft journals need bearing surfaces.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[machining|Machining]]: Forms journals, throws, and shoulders.
- [[lathe|Lathe]]: Keeps journals concentric.
- [[alignment-checking|Alignment checking]]: Finds runout and straightness faults.
- [[lubricating-oil|Lubricating oil]]: Protects loaded journals in use.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
