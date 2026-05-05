---
id: tech_camshaft
slug: camshaft
title: Camshaft
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
summary: A timed shaft with lobes that open valves or actuate mechanisms in
  repeatable sequence.
safety_class: allowed
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: machining
    title: Machining
    kind: hard
    role: Shapes lobes and journals.
  - slug: gear-cutting
    title: Gear cutting
    kind: soft
    role: Synchronizes cam timing with a crankshaft.
  - slug: technical-drawing
    title: Technical drawing
    kind: soft
    role: Records lobe order and timing relationships.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks journals and follower fits.
unlocks:
  - slug: poppet-valve
    title: Poppet valve
    kind: soft
    role: "Enables Poppet valve: Provides timed opening in engines."
missing_prerequisites: []
material_dependencies:
  - slug: mild-steel
    title: Mild steel
    importance: hard
    availability_note: The shaft and lobes need wear-resistant stock.
  - slug: lubricating-oil
    title: Lubricating oil
    importance: hard
    availability_note: Cam and follower contact requires lubrication.
images:
  header:
    src: /images/tech/camshaft-header.webp
    alt: Field sketch of Camshaft, highlighting mild steel, lubricating oil,
      machining, gear cutting.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 24f5d774b8b519c05215c3cc2e24c830dce65e85d4a3538cf6366aa62d93c155
    generated_at: 2026-05-05T19:59:57.838Z
  schematic:
    src: /images/tech/camshaft-schematic.webp
    alt: Schematic diagram of Camshaft, highlighting mild steel, lubricating oil,
      machining, gear cutting and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 29fa1cfb77e94e1e260037ab9cde5dcb824270ac21a47c58f848b9e3921511bf
    generated_at: 2026-05-05T20:00:53.178Z
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
  practicality: 0.44
  historical_plausibility: 0.74
  completeness: 0.52
---
## Field briefing

A timed shaft with lobes that open valves or actuate mechanisms in repeatable sequence.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of camshaft that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[mild-steel|Mild steel]] (hard): The shaft and lobes need wear-resistant stock.
- [[lubricating-oil|Lubricating oil]] (hard): Cam and follower contact requires lubrication.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[machining|Machining]]: Shapes lobes and journals.
- [[gear-cutting|Gear cutting]]: Synchronizes cam timing with a crankshaft.
- [[technical-drawing|Technical drawing]]: Records lobe order and timing relationships.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks journals and follower fits.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
