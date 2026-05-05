---
id: tech_chassis_frame
slug: chassis-frame
title: Chassis frame
aliases: []
node_type: artifact
secondary_node_types: []
status: draft
summary: A rigid vehicle foundation that keeps axles, engine, body, and controls
  aligned under road loads.
safety_class: allowed
era_floor: industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: mild-steel
    title: Mild steel
    kind: hard
    role: Provides a tough frame material.
  - slug: riveting
    title: Riveting
    kind: soft
    role: Joins plates and brackets where welding is not available.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Confirms straightness, squareness, and axle location.
  - slug: technical-drawing
    title: Technical drawing
    kind: soft
    role: Preserves hole patterns and dimensions between builds.
unlocks:
  - slug: ford-model-t
    title: Ford Model T
    kind: hard
    role: "Enables Ford Model T: Holds engine, axles, body, and passengers in
      alignment."
  - slug: leaf-spring
    title: Leaf spring
    kind: soft
    role: "Enables Leaf spring: Provides mounting points and load paths."
missing_prerequisites:
  - slug: riveting
    title: Riveting
    reason: A future page should cover hot and cold rivet joining without modern
      welding assumptions.
material_dependencies:
  - slug: sheet-steel
    title: Sheet steel
    importance: hard
    availability_note: Pressed or cut frame members and brackets need consistent plate or sheet.
  - slug: threaded-fastener
    title: Threaded fastener
    importance: soft
    availability_note: Bolts simplify repairs and component mounting.
images:
  header:
    src: /images/tech/chassis-frame-header.webp
    alt: Field sketch of Chassis frame, highlighting sheet steel, threaded fastener,
      mild steel, riveting.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 156cca90ccf55e8083d1efd755ae6a43b3f2fe917f82cc7f040bc8437932ec6e
    generated_at: 2026-05-05T19:58:12.937Z
  schematic:
    src: /images/tech/chassis-frame-schematic.webp
    alt: Schematic diagram of Chassis frame, highlighting sheet steel, threaded
      fastener, mild steel, riveting and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 49755ee75aca47c626763c6384e488fd9a5717b6addf73409a98191e5fae1171
    generated_at: 2026-05-05T19:59:15.619Z
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
  historical_plausibility: 0.8
  completeness: 0.6
---
## Field briefing

A rigid vehicle foundation that keeps axles, engine, body, and controls aligned under road loads.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of chassis frame that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[sheet-steel|Sheet steel]] (hard): Pressed or cut frame members and brackets need consistent plate or sheet.
- [[threaded-fastener|Threaded fastener]] (soft): Bolts simplify repairs and component mounting.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[mild-steel|Mild steel]]: Provides a tough frame material.
- [[riveting|Riveting]]: Joins plates and brackets where welding is not available.
- [[alignment-checking|Alignment checking]]: Confirms straightness, squareness, and axle location.
- [[technical-drawing|Technical drawing]]: Preserves hole patterns and dimensions between builds.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Edges left as empty pages

- [[riveting|Riveting]]: A future page should cover hot and cold rivet joining without modern welding assumptions.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
