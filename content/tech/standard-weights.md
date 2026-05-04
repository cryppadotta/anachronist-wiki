---
id: tech_standard_weights
slug: standard-weights
title: Standard weights
aliases:
  - weights
  - weight standards
node_type: measurement
secondary_node_types:
  - institution
status: draft
summary: Agreed reference masses used to compare materials, loads, trade quantities, tests, and batch records.
safety_class: allowed
era_floor: ancient
difficulty: basic
precision_required: medium
minimum_social_scale: village
time_to_first_working_version: days
prerequisites:
  - slug: lever
    title: Lever
    kind: tooling
    role: A balance beam is a lever used for comparison.
  - slug: counting
    title: Counting
    kind: knowledge
    role: Weight sets need repeated units and multiples.
unlocks:
  - slug: tensile-test
    title: Tensile test
    kind: measurement
    role: Repeatable loads improve material tests.
  - slug: technical-drawing
    title: Technical drawing
    kind: measurement
    role: Weights support scale, material callouts, and quality records.
missing_prerequisites: []
material_dependencies:
  - slug: stone
    title: Stone
    importance: hard
    availability_note: Dense durable stones can be selected and marked where metal standards are unavailable.
  - slug: clay
    title: Clay
    importance: optional
    availability_note: Fired clay weights can work if the clay body is stable and protected from damage.
tags:
  - measurement
  - standards
  - trade
generation:
  created_by: llm
  provider: OpenAI
  model: GPT-5 Codex
  prompt_version: ANA-13 seed-content manual draft
  generated_at: "2026-05-03"
  request_issue: ANA-13
  reviewed_by: []
  source_review_notes:
    - No source pack was used; metrology history needs human source review.
confidence:
  practicality: 0.74
  historical_plausibility: 0.8
  completeness: 0.58
---

## Field briefing

Standard weights let people compare materials and tests without arguing over handfuls, baskets, or guesses. They are a measurement tool and an institution.

## What you are trying to make

Create reference masses that can be copied, protected, and used with a balance to compare unknown loads.

## Minimum viable version

Matched stones and a simple balance can support workshop comparisons even if they are not legal trade standards.

## Better versions

Better systems use durable marked weights, nested multiples, official custody, periodic comparison, and written records.

## Prerequisite tree

- [[lever|Lever]] for the balance principle.
- [[counting|Counting]] for units and multiples.
- [[writing|Writing]] for custody and calibration records.

## Materials and sourcing

Stone is easiest: select dense, hard pieces that do not flake. Fired [[clay|clay]] is possible but may chip or absorb moisture unless well made. Metal is excellent but demands more supply chain.

Recognition is practical: a candidate weight should survive handling, stay dry, take a mark, and balance the same reference repeatedly.

## Tools and workshop requirements

Tools include a balance beam, suspension cord, pans, marker, storage box, and a rule that master weights are not ordinary shop objects.

## Procedure

1. Select a master object for the first local unit.
2. Make duplicates by comparison on a balance.
3. Mark each weight clearly.
4. Store masters separately from working copies.
5. Recheck working weights against masters on a schedule.

## Mechanism

A balance compares gravitational pull on two sides of a lever. Equal arms make equal masses balance.

## Verification and quality control

Swap the pans and repeat the comparison. If the result changes, the balance is biased. Compare weights in combinations to catch drift or fraud.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Weights drift | Wear, chipping, moisture | Protect and recheck |
| Balance lies | Unequal arms or friction | Reverse loads and repair |
| Disputes persist | No custody rule | Assign keeper and records |

## Maintenance, repair, and iteration

Keep master weights wrapped, dry, and marked. Replace damaged working weights rather than silently correcting them.

## Teaching it to local collaborators

Show that one stone can stand for a repeatable amount only if everyone agrees to protect and copy it consistently.

## Historical plausibility

Weights arise naturally with trade, taxation, rations, medicine, and workshops. The bottleneck is authority and trust, not the physical stone.

## What this unlocks

Standard weights unlock trade measures, proof loads for [[tensile-test|tensile tests]], recipes where safe, and repeatable material comparisons.

## Open questions and uncertainties

- Local historical units and materials need source review.
- A future page should cover length standards and calibration chains.

## Sources and provenance

Generated seed draft for [ANA-13](/ANA/issues/ANA-13). No source pack was used; specific claims need human source review.
