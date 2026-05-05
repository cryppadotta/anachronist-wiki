---
id: tech_spark_plug
slug: spark-plug
title: Spark plug
aliases: []
node_type: artifact
status: draft
summary: A heat-resistant insulated electrode assembly that delivers a spark
  inside a gasoline engine cylinder.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: ceramic-insulator
    title: Ceramic insulator
    kind: material_source
    role: Separates the live conductor from the shell.
  - slug: threaded-fastener
    title: Threaded fastener
    kind: hard
    role: Lets the plug seal and be replaced.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks thread and gap acceptability.
unlocks: []
missing_prerequisites:
  - slug: ceramic-insulator
    title: Ceramic insulator
    reason: A fired electrical insulator page remains to be written.
  - slug: electrode-alloy
    title: Electrode alloy
    reason: A future metallurgy page should cover spark erosion resistance.
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: The shell and threaded portion need metal stock.
  - slug: copper-wire
    title: Copper wire
    importance: soft
    availability_note: Conductors and leads need reliable metal.
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
  practicality: 0.42
  historical_plausibility: 0.76
  completeness: 0.5
images:
  header:
    src: /images/tech/spark-plug-header.webp
    alt: Field sketch of Spark plug, highlighting mild steel, copper wire, ceramic
      insulator, threaded fastener.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 75bfad8b1f6c729fb399cb68b908acada7216897510d9cdca0ce89c08b8ecaba
    generated_at: 2026-05-05T20:00:02.007Z
  schematic:
    src: /images/tech/spark-plug-schematic.webp
    alt: Schematic diagram of Spark plug, highlighting mild steel, copper wire,
      ceramic insulator, threaded fastener and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 48bae6ce2a7a794790386e984e60d8ccee0a3f6066741191c24ec9d9783a3cc6
    generated_at: 2026-05-05T20:00:58.971Z
---

## Field briefing

A heat-resistant insulated electrode assembly that delivers a spark inside a gasoline engine cylinder.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of spark plug that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): The shell and threaded portion need metal stock.
- [[copper-wire|Copper wire]] (soft): Conductors and leads need reliable metal.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[ceramic-insulator|Ceramic insulator]]: Separates the live conductor from the shell.
- [[threaded-fastener|Threaded fastener]]: Lets the plug seal and be replaced.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks thread and gap acceptability.
- [[spark-ignition|Spark ignition]]: Defines the electrical role of the plug.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[ceramic-insulator|Ceramic insulator]]: A fired electrical insulator page remains to be written.
- [[electrode-alloy|Electrode alloy]]: A future metallurgy page should cover spark erosion resistance.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
