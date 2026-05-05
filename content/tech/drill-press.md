---
id: tech_drill_press
slug: drill-press
title: Drill press
aliases: []
node_type: tool
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A guided drilling tool that holds a rotating bit square to the work for
  repeatable holes and fastener patterns.
safety_class: caution
era_floor: industrial
difficulty: intermediate
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: hand-drill
    title: Hand drill
    kind: hard
    role: Provides basic rotary drilling practice.
  - slug: workbench
    title: Workbench
    kind: tooling
    role: Supports clamping and layout.
  - slug: straightedge
    title: Straightedge
    kind: test
    role: Checks table and guide alignment.
unlocks:
  - slug: machining
    title: Machining
    kind: tooling
    role: "Enables Machining: Makes repeatable holes."
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Columns, spindles, and feed parts benefit from steel.
  - slug: hardwood
    title: Hardwood
    importance: substitute
    availability_note: Simple frames and jigs can use wood.
images:
  header:
    src: /images/tech/drill-press-header.webp
    alt: Field sketch of Drill press, highlighting mild steel, hardwood, hand drill,
      workbench.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 43957a5a4fd47cb729a1326114d9cc8aa9669d0f66d8b32e4e8db6a06d138ef6
    generated_at: 2026-05-05T20:06:19.527Z
  schematic:
    src: /images/tech/drill-press-schematic.webp
    alt: Schematic diagram of Drill press, highlighting mild steel, hardwood, hand
      drill, workbench and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: fbc5606fd079e5680fe8251b72f84a36d7be4cb3bbd8405658e12c36406f6c2f
    generated_at: 2026-05-05T20:07:17.933Z
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
  practicality: 0.62
  historical_plausibility: 0.82
  completeness: 0.54
---
## Field briefing

A guided drilling tool that holds a rotating bit square to the work for repeatable holes and fastener patterns.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of drill press that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (soft): Columns, spindles, and feed parts benefit from steel.
- [[hardwood|Hardwood]] (substitute): Simple frames and jigs can use wood.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[hand-drill|Hand drill]]: Provides basic rotary drilling practice.
- [[workbench|Workbench]]: Supports clamping and layout.
- [[straightedge|Straightedge]]: Checks table and guide alignment.
- [[threaded-fastener|Threaded fastener]]: Creates demand for repeatable holes.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
