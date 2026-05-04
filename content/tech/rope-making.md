---
id: tech_rope_making
slug: rope-making
title: Rope making
aliases:
  - cordage making
node_type: process
status: draft
summary: The process of preparing fibers and laying them into cord, line, or rope with enough consistency for tying, hauling, and lifting tests.
safety_class: allowed
era_floor: prehistoric
difficulty: basic
precision_required: low
minimum_social_scale: household
time_to_first_working_version: hours_to_days
prerequisites:
  - slug: tensile-test
    title: Tensile test
    kind: test
    role: Pull testing reveals whether the process makes useful cordage.
  - slug: counting
    title: Counting
    kind: knowledge
    role: Strand count, sample labels, and batch comparisons need number.
unlocks:
  - slug: rope
    title: Rope
    kind: refining
    role: Turns loose fiber into usable rope.
  - slug: pulley
    title: Pulley
    kind: material_source
    role: Supplies the flexible tension member.
missing_prerequisites: []
material_dependencies:
  - slug: plant-fiber
    title: Plant fiber
    importance: hard
    availability_note: Long, tough fibers from flax, hemp, nettle, bast, grasses, or similar local plants are the main input.
tags:
  - process
  - cordage
  - quality-control
generation:
  created_by: llm
  provider: OpenAI
  model: GPT-5 Codex
  prompt_version: ANA-13 seed-content manual draft
  generated_at: "2026-05-03"
  request_issue: ANA-13
  reviewed_by: []
  source_review_notes:
    - No source pack was used; fiber preparation and regional availability need human source review.
confidence:
  practicality: 0.76
  historical_plausibility: 0.84
  completeness: 0.58
---

## Field briefing

Rope making is the repeatable process behind [[rope|rope]]. A good process matters more than a clever knot: weak sorting or uneven twist turns strong fiber into unreliable cord.

## What you are trying to make

Prepare loose fibers, align them, twist or braid them into strands, combine strands into rope, and prove that the finished batch survives its intended use.

## Minimum viable version

Hand-twisted two-strand cord is enough for binding bundles and teaching tension. It becomes rope only when the maker can repeat length, twist, and strength across samples.

## Better versions

Better rope making uses combed fiber, fixed hooks, steady tension, opposing twist, sample labels, and proof loads from [[tensile-test|tensile testing]].

## Prerequisite tree

- [[counting|Counting]] for strand counts and batch labels.
- [[tensile-test|Tensile test]] for comparing samples.
- [[standard-weights|Standard weights]] when proof loads need to be repeatable.

## Materials and sourcing

Start with long fibers that bend without snapping. Candidate sources include retted flax, hemp if cultivated or traded, nettle, tree bast, grasses, animal hair, or sinew. Each source needs local testing because strength, rot resistance, and preparation labor vary.

In Arthurian Britain-like settings, flax and nettle are plausible candidates; hemp and high-quality bast depend on local cultivation, trade, and season.

## Tools and workshop requirements

Hands are sufficient for small cord. A production process benefits from combs, drying racks, hooks, a turning stick, a measured path, and a clean storage area.

## Procedure

1. Sort fibers by length and reject rotten or brittle material.
2. Clean, dry, and align fibers before twisting.
3. Twist small strands evenly under tension.
4. Combine strands with opposing twist so the rope balances.
5. Bind the ends and label the batch.
6. Pull-test samples before using the batch for lifting or hauling.

## Mechanism

Twist and friction make many fibers share load. Opposing twist in strands keeps the finished rope from immediately unwinding.

## Verification and quality control

Compare several samples from the same batch. Useful rope fails at similar loads and fails in the body rather than always at the knot or end binding.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Uneven diameter | Poor fiber sorting | Sort by length and thickness |
| Rope unwinds | Twist not balanced | Relay with opposing twist |
| Breaks at many weak spots | Rotten fiber | Improve sourcing and drying |
| Batch cannot be trusted | No records | Label samples and record tests |

## Maintenance, repair, and iteration

Keep process samples. Store good and bad examples together with notes so apprentices learn the difference by sight and by test.

## Teaching it to local collaborators

Teach with three samples: loose fiber, badly twisted cord, and tested rope. The contrast makes process discipline visible.

## Historical plausibility

Rope making is highly plausible, but dependable production requires labor organization, fiber supply, drying space, and quality norms.

## What this unlocks

Rope making unlocks [[rope|rope]], [[pulley|pulley]] systems, lifting gear, hauling, nets, rigging, and many temporary workshop fixtures.

## Open questions and uncertainties

- Regional fiber candidates need source review.
- Future material pages should split flax, hemp, nettle, bast, hair, and sinew.

## Sources and provenance

Generated seed draft for [ANA-13](/ANA/issues/ANA-13). No source pack was used; specific claims need human source review.
