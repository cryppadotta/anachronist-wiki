---
id: tech_lathe
slug: lathe
title: Lathe
aliases: []
node_type: tool
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A machine tool that rotates work against a cutting tool to make round
  parts, true shafts, threads, bushings, and patterns.
safety_class: caution
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: workbench
    title: Workbench
    kind: tooling
    role: Provides stable support and layout culture.
  - slug: plain-bearing
    title: Plain bearing
    kind: hard
    role: Supports spindle rotation.
  - slug: straightedge
    title: Straightedge
    kind: test
    role: Checks ways and alignment.
  - slug: cutting-edge
    title: Cutting edge
    kind: hard
    role: Sharp tools are required.
unlocks:
  - slug: crankshaft
    title: Crankshaft
    kind: tooling
    role: "Enables Crankshaft: Keeps journals concentric."
  - slug: cylinder-boring
    title: Cylinder boring
    kind: tooling
    role: "Enables Cylinder boring: Provides rotary alignment and cutting feed."
  - slug: drive-shaft
    title: Drive shaft
    kind: tooling
    role: "Enables Drive shaft: Turns and trues shaft journals."
  - slug: machining
    title: Machining
    kind: tooling
    role: "Enables Machining: Provides one foundational machine-tool operation."
  - slug: threaded-fastener
    title: Threaded fastener
    kind: tooling
    role: "Enables Threaded fastener: Cuts accurate threads in early versions."
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Industrial lathes need metal beds, screws, and spindles.
  - slug: hardwood
    title: Hardwood
    importance: substitute
    availability_note: Early pole or bow lathes can use wooden structures.
images:
  header:
    src: /images/tech/lathe-header.webp
    alt: Field sketch of Lathe, highlighting mild steel, hardwood, workbench, plain
      bearing.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: fa2d4ee447fd7bd38005b4b358ae340f8fd93df43a44933c918d6d659432c819
    generated_at: 2026-05-05T20:06:04.994Z
  schematic:
    src: /images/tech/lathe-schematic.webp
    alt: Schematic diagram of Lathe, highlighting mild steel, hardwood, workbench,
      plain bearing and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 75a6bd93bfabad11d9d9b210a7f23251f3d527897466e6133da20ebbd75d71fd
    generated_at: 2026-05-05T20:07:00.148Z
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
  practicality: 0.54
  historical_plausibility: 0.86
  completeness: 0.58
---
## Field briefing

A machine tool that rotates work against a cutting tool to make round parts, true shafts, threads, bushings, and patterns.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of lathe that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (soft): Industrial lathes need metal beds, screws, and spindles.
- [[hardwood|Hardwood]] (substitute): Early pole or bow lathes can use wooden structures.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[workbench|Workbench]]: Provides stable support and layout culture.
- [[plain-bearing|Plain bearing]]: Supports spindle rotation.
- [[straightedge|Straightedge]]: Checks ways and alignment.
- [[cutting-edge|Cutting edge]]: Sharp tools are required.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
