---
id: tech_technical_drawing
slug: technical-drawing
title: Technical drawing
aliases:
  - workshop drawing
node_type: knowledge
secondary_node_types:
  - measurement
status: draft
summary: A shared drawing practice for communicating shape, size, parts,
  assembly, and revisions before or during construction.
safety_class: allowed
era_floor: ancient_to_medieval
difficulty: intermediate
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: writing
    title: Writing
    kind: knowledge
    role: Labels, dimensions, and revision notes make drawings durable.
  - slug: counting
    title: Counting
    kind: knowledge
    role: Parts lists and dimensions require number.
  - slug: standard-weights
    title: Standard weights
    kind: optional
    role: Measurement culture supports drawing discipline, though length standards
      are the direct need.
unlocks:
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: optional
    role: Drawings improve hub, axle, and frame repeatability.
  - slug: pulley
    title: Pulley
    kind: optional
    role: Drawings help groove shape and frame alignment.
missing_prerequisites: []
material_dependencies:
  - slug: paper
    title: Paper
    importance: optional
    availability_note: Paper is convenient but clay, wax, wood, parchment, or
      scratched boards can carry drawings.
  - slug: ink
    title: Ink
    importance: optional
    availability_note: Ink improves permanence; charcoal or incised marks can work
      for early drawings.
tags:
  - design
  - records
  - measurement
generation:
  created_by: llm
  provider: OpenAI
  model: GPT-5 Codex
  prompt_version: ANA-13 seed-content manual draft
  generated_at: 2026-05-03
  request_issue: ANA-13
  reviewed_by: []
  source_review_notes:
    - No source pack was used; history of drawing conventions needs human source
      review.
confidence:
  practicality: 0.76
  historical_plausibility: 0.68
  completeness: 0.58
images:
  header:
    src: /images/tech/technical-drawing-header.webp
    alt: Field sketch of Technical drawing, highlighting paper, ink, writing,
      counting.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 630ec79e0513e85a29ea3900083066912aa0204c5672c570abb0f2b1153b5be0
    generated_at: 2026-05-04T23:30:30.883Z
  schematic:
    src: /images/tech/technical-drawing-schematic.webp
    alt: Schematic diagram of Technical drawing, highlighting paper, ink, writing,
      counting and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: e3c824283c1289d6dfca1627b48661311746fd83a881ca15bb04cc1ba436a31f
    generated_at: 2026-05-04T23:31:21.551Z
---

## Field briefing

Technical drawing lets a workshop build from a shared picture instead of a single maker's memory. It is most useful when parts must be copied, repaired, or taught.

## What you are trying to make

Create drawings that preserve shape, relative size, assembly order, and important measurements well enough for another worker to act.

## Minimum viable version

A labeled sketch with a few checked dimensions can improve a [[wheel-and-axle|wheel and axle]] frame or [[pulley|pulley]] block.

## Better versions

Better drawings use standard views, scale marks, material notes, revision dates, and a filing habit.

## Prerequisite tree

- [[counting|Counting]] for dimensions and parts.
- [[writing|Writing]] for labels.
- [[paper|Paper]] and [[ink|ink]] where available, with alternatives for earlier contexts.

## Materials and sourcing

Drawing surfaces can be paper, parchment, wax tablet, smoothed board, scraped bone, or clay tablet. The supply chain depends on how long the drawing must last and how often it must be copied.

Ink, charcoal, scratched lines, and scored clay all work differently. A shop should choose marks that survive handling but can still be revised when the design changes.

## Tools and workshop requirements

Tools include straightedges, cords, dividers, marking points, measuring rods, and storage. The workshop requirement is agreement: the same mark must mean the same thing to different workers.

## Procedure

1. Draw the object from the side that matters most.
2. Add a second view when hidden shape matters.
3. Mark centerlines, holes, and contact surfaces.
4. Add dimensions only where the maker must match a size.
5. Label material, batch, and revision.
6. Check the drawing against the finished object.

## Mechanism

Drawing converts spatial memory into external records. It lowers the cost of copying and makes mistakes visible before labor is spent.

## Verification and quality control

Ask another worker to build a small part from the drawing. Any question they ask identifies a missing convention or note.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Ambiguous shape | One view only | Add a second view or section |
| Wrong scale | No reference mark | Add a scale bar or dimensions |
| Lost revisions | No date or author | Add revision records |
| Unbuildable drawing | No material or process note | Add shop constraints |

## Maintenance, repair, and iteration

Archive successful drawings near related tools. Mark obsolete drawings so they do not create bad copies.

## Teaching it to local collaborators

Begin with familiar objects: lever, wheel, rope hook, kiln shelf. Teach centerline, edge, hole, thickness, and note.

## Historical plausibility

Technical drawing can exist before modern projection systems, but it depends on literacy, measurement practice, and workshops that copy designs.

## What this unlocks

Technical drawing unlocks repeatable machines, repair manuals, templates, teaching diagrams, and safer construction review.

## Open questions and uncertainties

- Historical drawing conventions need source review.
- Future pages should cover length standards, compasses, straightedges, and scale models.

## Sources and provenance

Generated seed draft for [ANA-13](/ANA/issues/ANA-13). No source pack was used; specific claims need human source review.
