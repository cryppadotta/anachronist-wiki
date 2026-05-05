---
id: tech_piston_cylinder
slug: piston-cylinder
title: Piston and cylinder
aliases: []
node_type: artifact
status: draft
summary: A close-fitting sliding chamber that converts expanding gas or fluid
  pressure into controlled reciprocating motion.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: cylinder-boring
    title: Cylinder boring
    kind: hard
    role: Creates round, smooth bores.
  - slug: machining
    title: Machining
    kind: tooling
    role: Shapes piston, rings, and bearing surfaces.
  - slug: scratch-hardness-test
    title: Scratch hardness test
    kind: test
    role: Screens materials for wear resistance.
  - slug: lubricating-oil
    title: Lubricating oil
    kind: hard
    role: Prevents immediate scoring and seizure.
unlocks: []
missing_prerequisites:
  - slug: piston-ring
    title: Piston ring
    reason: A future page should cover sealing rings and wear control.
material_dependencies:
  - slug: cast-iron
    title: Cast iron
    importance: hard
    availability_note: Common cylinder material because it casts and wears well.
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Pins, rods, and hardware use tougher steel stock.
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
  practicality: 0.38
  historical_plausibility: 0.75
  completeness: 0.5
images:
  header:
    src: /images/tech/piston-cylinder-header.webp
    alt: Field sketch of Piston and cylinder, highlighting cast iron, mild steel,
      cylinder boring, machining.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: b7e17a18353516ed558329c95dbaf2d635cb9e8d3794b0e110485c48eb717591
    generated_at: 2026-05-05T19:58:14.372Z
  schematic:
    src: /images/tech/piston-cylinder-schematic.webp
    alt: Schematic diagram of Piston and cylinder, highlighting cast iron, mild
      steel, cylinder boring, machining and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: a917de2f0fea4974223fc8d69fadeed4c4a64955b58a773335b305872a58f935
    generated_at: 2026-05-05T19:59:09.861Z
---

## Field briefing

A close-fitting sliding chamber that converts expanding gas or fluid pressure into controlled reciprocating motion.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of piston and cylinder that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[cast-iron|Cast iron]] (hard): Common cylinder material because it casts and wears well.
- [[mild-steel|Mild steel]] (soft): Pins, rods, and hardware use tougher steel stock.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[cylinder-boring|Cylinder boring]]: Creates round, smooth bores.
- [[machining|Machining]]: Shapes piston, rings, and bearing surfaces.
- [[scratch-hardness-test|Scratch hardness test]]: Screens materials for wear resistance.
- [[lubricating-oil|Lubricating oil]]: Prevents immediate scoring and seizure.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[piston-ring|Piston ring]]: A future page should cover sealing rings and wear control.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
