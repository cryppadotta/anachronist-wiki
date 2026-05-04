---
id: tech_tensile_test
slug: tensile-test
title: Tensile test
aliases:
  - pull test
node_type: test
status: draft
summary: A controlled pull test for comparing rope, fiber, thread, straps,
  joints, and other materials that fail in tension.
safety_class: caution
era_floor: prehistoric_to_ancient
difficulty: basic
precision_required: medium
minimum_social_scale: household
time_to_first_working_version: hours
prerequisites:
  - slug: lever
    title: Lever
    kind: optional
    role: Levers can apply or multiply test force.
  - slug: standard-weights
    title: Standard weights
    kind: measurement
    role: Known loads make tests repeatable.
unlocks:
  - slug: rope
    title: Rope
    kind: test
    role: Cordage needs proof and comparison.
  - slug: pulley
    title: Pulley
    kind: safety
    role: Lifting systems need proof-tested rope and fittings.
missing_prerequisites: []
material_dependencies:
  - slug: standard-weights
    title: Standard weights
    importance: soft
    availability_note: Known weights improve repeatability, but comparative tests
      can start with repeated baskets of stones.
tags:
  - testing
  - materials
  - quality-control
generation:
  created_by: llm
  provider: OpenAI
  model: GPT-5 Codex
  prompt_version: ANA-13 seed-content manual draft
  generated_at: 2026-05-03
  request_issue: ANA-13
  reviewed_by: []
  source_review_notes:
    - No source pack was used; test method history and safety limits need human
      source review.
confidence:
  practicality: 0.76
  historical_plausibility: 0.75
  completeness: 0.58
images:
  header:
    src: /images/tech/tensile-test-header.webp
    alt: Field sketch of Tensile test, highlighting standard weights, lever, test.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 0e20e32ae877ec0a5dc353859f3c8c8383bf45aac52d39f876eb5d98442704e8
    generated_at: 2026-05-04T23:30:26.149Z
  schematic:
    src: /images/tech/tensile-test-schematic.webp
    alt: Schematic diagram of Tensile test, highlighting standard weights, lever,
      test and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 4fd364612c45ba64531de48ebd15b5eee1055d022b2bf664df30bf0fd63a900b
    generated_at: 2026-05-04T23:31:18.511Z
---

## Field briefing

A tensile test answers a simple question: how does this fail when pulled? It supports [[rope|rope]], bindings, straps, fibers, and lifting gear.

## What you are trying to make

Create a repeatable pull setup that compares samples without putting people in the line of failure.

## Minimum viable version

Tie two samples in the same way, pull each with the same basket of stones or body-weight method, and record which breaks first and where.

## Better versions

Better tests use [[standard-weights|standard weights]], marked sample lengths, protected test frames, and records by batch.

## Prerequisite tree

- [[counting|Counting]] for sample counts and results.
- [[standard-weights|Standard weights]] for repeatable loads.
- [[writing|Writing]] for batch records.

## Materials and sourcing

The test consumes samples. Each sample must represent the actual material batch: same fiber, same twist, same dryness, same knots or splices. Test weights can be stones, sandbags, water vessels, or formal weights.

## Tools and workshop requirements

Tools include a frame or overhead support, hooks or pins, a shield or clear safety zone, weights, labels, and a recording surface. The support must be stronger than the samples being tested.

## Hazards and controls

Breaking samples can whip, drop weights, or shatter fittings. Stand aside, keep faces and hands out of the line of pull, and use low-value loads while learning the test.

## Procedure

1. Prepare several similar samples from the same batch.
2. Mark each sample and record its source.
3. Attach without sharp bends unless that attachment is part of the real use.
4. Apply load gradually and consistently.
5. Record where and how failure occurs.
6. Compare batches before approving production use.

## Mechanism

Tension reveals weak fibers, poor twist, bad knots, cuts, rot, and uneven load sharing.

## Verification and quality control

A useful test produces repeatable failures for similar samples. If results scatter wildly, sample preparation or attachment is inconsistent.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Sample breaks at hook | Sharp attachment | Use smoother pins or test the knot separately |
| Frame moves | Weak support | Rebuild the test frame |
| Results vary wildly | Uneven samples | Standardize length and preparation |
| Recorder cannot compare | No labels | Mark every sample before testing |

## Maintenance, repair, and iteration

Inspect hooks, pins, and frame after each break. Keep failed samples tied to their records when possible.

## Teaching it to local collaborators

Break bad rope on purpose in a safe test area. The lesson is better remembered than a warning.

## Historical plausibility

Formal tensile testing is later, but comparative pull tests are plausible wherever lifting, cordage, or straps matter.

## What this unlocks

Tensile testing unlocks safer [[rope|rope]], [[pulley|pulley]] systems, harnesses, straps, and quality-control culture.

## Open questions and uncertainties

- Exact historical test rigs need source review.
- Later pages should cover compression, bending, abrasion, and water resistance tests.

## Sources and provenance

Generated seed draft for [ANA-13](/ANA/issues/ANA-13). No source pack was used; specific claims need human source review.
