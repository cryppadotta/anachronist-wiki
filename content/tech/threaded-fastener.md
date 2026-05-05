---
id: tech_threaded_fastener
slug: threaded-fastener
title: Threaded fastener
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
summary: A standardized screw, bolt, nut, or stud that joins parts while
  allowing disassembly and replacement.
safety_class: allowed
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: lathe
    title: Lathe
    kind: tooling
    role: Cuts accurate threads in early versions.
  - slug: standard-weights
    title: Standard weights
    kind: measurement
    role: Supports metal batch consistency.
  - slug: interchangeable-parts
    title: Interchangeable parts
    kind: test
    role: Requires standard thread forms and tolerances.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks whether threads fit accepted limits.
unlocks:
  - slug: drive-shaft
    title: Drive shaft
    kind: soft
    role: "Enables Drive shaft: Secures couplings and joints."
  - slug: fuel-tank
    title: Fuel tank
    kind: soft
    role: "Enables Fuel tank: Secures fittings and mounts."
  - slug: spark-plug
    title: Spark plug
    kind: hard
    role: "Enables Spark plug: Lets the plug seal and be replaced."
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: Bolts and nuts require tough metal.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: soft
    availability_note: Thread cutting and assembly benefit from lubrication.
images:
  header:
    src: /images/tech/threaded-fastener-header.webp
    alt: Field sketch of Threaded fastener, highlighting mild steel, lubricating
      oil, lathe, standard weights.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: e6aadc89c445647956b0d2eff1ca645e059818d2c3c81825fe4b90ef2898f40e
    generated_at: 2026-05-05T20:07:00.340Z
  schematic:
    src: /images/tech/threaded-fastener-schematic.webp
    alt: Schematic diagram of Threaded fastener, highlighting mild steel,
      lubricating oil, lathe, standard weights and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: da46eedc666b53d52f461b916859b39a7dd030035bbeb4da64450946e634af5d
    generated_at: 2026-05-05T20:07:57.242Z
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
  practicality: 0.56
  historical_plausibility: 0.84
  completeness: 0.54
---
## Field briefing

A standardized screw, bolt, nut, or stud that joins parts while allowing disassembly and replacement.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of threaded fastener that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): Bolts and nuts require tough metal.
- [[lubricating-oil|Lubricating oil]] (soft): Thread cutting and assembly benefit from lubrication.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[lathe|Lathe]]: Cuts accurate threads in early versions.
- [[standard-weights|Standard weights]]: Supports metal batch consistency.
- [[interchangeable-parts|Interchangeable parts]]: Requires standard thread forms and tolerances.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks whether threads fit accepted limits.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
