---
id: tech_spark_ignition
slug: spark-ignition
title: Spark ignition
aliases: []
node_type: process
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: An ignition system that creates a timed electric spark to start
  combustion in a controlled engine chamber.
safety_class: caution
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: spark-plug
    title: Spark plug
    kind: hard
    role: Delivers the spark across an insulated gap.
  - slug: ignition-coil
    title: Ignition coil
    kind: hard
    role: Raises voltage for spark production.
  - slug: technical-drawing
    title: Technical drawing
    kind: soft
    role: Records wiring and timing relationships.
  - slug: quality-control-records
    title: Quality-control records
    kind: test
    role: Tracks intermittent faults and replacements.
unlocks:
  - slug: internal-combustion-engine
    title: Internal combustion engine
    kind: hard
    role: "Enables Internal combustion engine: Provides timed ignition for
      light-fuel engines."
missing_prerequisites:
  - slug: copper-wire
    title: Copper wire
    reason: Wire-drawing exists, but a conductor-specific page should cover copper
      wire quality.
  - slug: ceramic-insulator
    title: Ceramic insulator
    reason: A ceramic insulation page should cover fired electrical insulators.
material_dependencies:
  - slug: copper-wire
    title: Copper wire
    importance: hard
    availability_note: Coils and leads need conductive wire.
  - slug: ceramic-insulator
    title: Ceramic insulator
    importance: hard
    availability_note: Spark parts need heat-resistant insulation.
images:
  header:
    src: /images/tech/spark-ignition-header.webp
    alt: Field sketch of Spark ignition, highlighting copper wire, ceramic
      insulator, spark plug, ignition coil.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: dbdc99d4c5ff8d425544b51180ed0f8b0844dc227fe83fcb0bb79f2af59982bc
    generated_at: 2026-05-05T20:00:01.029Z
  schematic:
    src: /images/tech/spark-ignition-schematic.webp
    alt: Schematic diagram of Spark ignition, highlighting copper wire, ceramic
      insulator, spark plug, ignition coil and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 0ce7134a4d6b2d9783381b6f9eed2087aced7285cd554fd04363e653d294b0b7
    generated_at: 2026-05-05T20:01:02.898Z
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
  historical_plausibility: 0.78
  completeness: 0.54
---
## Field briefing

An ignition system that creates a timed electric spark to start combustion in a controlled engine chamber.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of spark ignition that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[copper-wire|Copper wire]] (hard): Coils and leads need conductive wire.
- [[ceramic-insulator|Ceramic insulator]] (hard): Spark parts need heat-resistant insulation.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[spark-plug|Spark plug]]: Delivers the spark across an insulated gap.
- [[ignition-coil|Ignition coil]]: Raises voltage for spark production.
- [[technical-drawing|Technical drawing]]: Records wiring and timing relationships.
- [[quality-control-records|Quality-control records]]: Tracks intermittent faults and replacements.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[copper-wire|Copper wire]]: Wire-drawing exists, but a conductor-specific page should cover copper wire quality.
- [[ceramic-insulator|Ceramic insulator]]: A ceramic insulation page should cover fired electrical insulators.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
