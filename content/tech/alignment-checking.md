---
id: tech_alignment_checking
slug: alignment-checking
title: Alignment checking
aliases:
  - straightness checking
  - truing
node_type: test
status: draft
summary: A workshop test practice for checking whether wheels, shafts, frames,
  holes, and guide surfaces point where they should.
safety_class: allowed
era_floor: ancient
difficulty: basic
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: hours_to_days
prerequisites:
  - slug: counting
    title: Counting
    kind: knowledge
    role: Repeated marks, comparisons, and records benefit from number.
  - slug: technical-drawing
    title: Technical drawing
    kind: optional
    role: Drawings define the intended line before the test checks it.
unlocks:
  - slug: plain-bearing
    title: Plain bearing
    kind: test
    role: Bearings fail quickly when shafts are crooked.
  - slug: bicycle
    title: Bicycle
    kind: test
    role: Single-track vehicles are intolerant of frame and wheel misalignment.
missing_prerequisites: []
material_dependencies:
  - slug: cord
    title: Cord
    importance: hard
    availability_note: A taut cord can act as a straight reference line.
  - slug: straightedge
    title: Straightedge
    importance: soft
    availability_note: A prepared board, rod, or rule improves repeatability.
tags:
  - testing
  - measurement
  - workshop
generation:
  created_by: llm
  provider: OpenAI Codex
  model: GPT-5
  prompt_version: ANA-34 manual content expansion
  generated_at: 2026-05-04
  request_issue: ANA-34
  reviewed_by: []
  source_review_notes:
    - No source pack was used; historical workshop testing practices need human
      source review.
confidence:
  practicality: 0.82
  historical_plausibility: 0.7
  completeness: 0.56
images:
  header:
    src: /images/tech/alignment-checking-header.webp
    alt: Field sketch of Alignment checking, highlighting cord, straightedge,
      counting, technical drawing.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 304cb8af2fe85ec6f3ba9098bd6980208a072c67437860690583ce25bca07deb
    generated_at: 2026-05-04T22:59:43.605Z
  schematic:
    src: /images/tech/alignment-checking-schematic.webp
    alt: Schematic diagram of Alignment checking, highlighting cord, straightedge,
      counting, technical drawing and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 05aec0fe01b0ce15bfd0d7eea5fd28d4e6a147c2339e5e1713a1e22f6959ddbf
    generated_at: 2026-05-04T23:00:41.491Z
---

## Field briefing

Alignment checking is a small workshop habit with large effects. A crooked axle, fork, frame, or bearing wastes effort and breaks parts even when every individual part looks sound.

## What you are trying to make

Create repeatable ways to compare the intended line of a part with its actual line.

## Minimum viable version

A taut cord, plumb line, straight board, and repeated marks can detect many problems: a wheel that wobbles, two axles that are not parallel, a frame that twists, or a hole that was bored off-line.

## Better versions

Better checking uses jigs, fixed reference faces, dividers, marked rods, flat benches, templates, and written records of corrections.

## Prerequisite tree

- [[counting|Counting]] for repeated comparisons and labels.
- [[technical-drawing|Technical drawing]] when the intended geometry is more complex than a single line.
- [[standard-weights|Standard weights]] where loaded alignment matters.

## Materials and sourcing

The main materials are reference objects: cord, rods, straight boards, marked sticks, chalk or charcoal, and a stable surface. The reference must be protected from ordinary use or it stops being a reference.

## Tools and workshop requirements

Tools include cord, plumb bob, straightedge, square-like corner reference, marking point, and a slow way to rotate wheels while observing the rim.

## Procedure

1. Decide which line matters: axle, rim, frame center, fork, or bearing.
2. Set a stable reference line.
3. Mark the part at several points.
4. Rotate or load the part if movement matters.
5. Record where it deviates.
6. Correct a little, then repeat the check.

## Mechanism

Alignment tests make hidden geometry visible by comparing a moving or assembled part against a simpler reference.

## Verification and quality control

A good check gives the same result when repeated by another worker. If two people read the same frame differently, the reference setup is unclear.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Reference moves | Poor setup | Anchor the cord or board better |
| Test gives different answers | Ambiguous marks | Label points and repeat from both sides |
| Loaded part changes shape | Weak frame | Test under realistic load before approval |
| Correction over-shoots | Too much material removed | Correct in small passes |

## Maintenance, repair, and iteration

Store straightedges and jigs carefully. Mark damaged references as scrap so they do not silently corrupt future work.

## Teaching it to local collaborators

Show a wheel that looks round by eye but wobbles against a fixed pointer. The demonstration makes checking feel useful instead of fussy.

## Historical plausibility

Alignment checking is plausible wherever workshops make wheels, looms, doors, frames, mills, or vehicles. Formal precision tools come later, but reference lines are early.

## What this unlocks

Alignment checking unlocks more reliable [[plain-bearing|plain bearings]], [[spoked-wheel|spoked wheels]], [[cart|carts]], [[potters-wheel|potter's wheels]], and [[bicycle|bicycles]].

## Open questions and uncertainties

- Future pages should cover straightedge making, squares, plumb bobs, and surface plates.

## Sources and provenance

Generated expansion for [ANA-34](/ANA/issues/ANA-34). No source pack was used; specific historical and technical claims need human source review.
