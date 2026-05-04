---
id: tech_pulley
slug: pulley
title: Pulley
aliases:
  - sheave
node_type: tool
secondary_node_types:
  - artifact
status: draft
summary: A grooved wheel or roller that guides rope, changes force direction, and can combine with other pulleys for lifting advantage.
safety_class: caution
era_floor: ancient
difficulty: basic
precision_required: medium
minimum_social_scale: household
time_to_first_working_version: days
prerequisites:
  - slug: rope
    title: Rope
    kind: hard
    role: Carries the tension through the pulley.
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: hard
    role: Provides the rotating sheave and bearing idea.
  - slug: lever
    title: Lever
    kind: knowledge
    role: Helps reason about load and support forces.
unlocks:
  - slug: simple-pump
    title: Simple pump
    kind: optional
    role: Lifting and tension systems support pump construction and maintenance.
missing_prerequisites:
  - slug: simple-pump
    title: Simple pump
    reason: Planned MVP node that can depend on lifting and workshop mechanics.
material_dependencies:
  - slug: rope
    title: Rope
    importance: hard
    availability_note: Rope must be proof-tested for the intended load.
  - slug: wood
    title: Wood
    importance: hard
    availability_note: Tough wood can make early pulley blocks and sheaves.
tags:
  - lifting
  - mechanics
  - simple-machines
generation:
  created_by: llm
  provider: OpenAI
  model: GPT-5 Codex
  prompt_version: ANA-13 seed-content manual draft
  generated_at: "2026-05-03"
  request_issue: ANA-13
  reviewed_by: []
  source_review_notes:
    - No source pack was used; load claims and historical details need human source review.
confidence:
  practicality: 0.7
  historical_plausibility: 0.78
  completeness: 0.58
---

## Field briefing

A pulley moves force through [[rope|rope]]. One pulley can change direction; several can trade longer rope travel for lifting advantage.

## What you are trying to make

Make a grooved wheel or smooth roller in a frame so rope moves under load without sawing itself apart.

## Minimum viable version

A smooth rounded peg or roller can redirect a light rope. A better first pulley uses a wooden wheel with a shallow groove and a frame that keeps the rope captured.

## Better versions

Better pulleys have truer sheaves, harder bearing surfaces, side plates, hooks or pins sized for load, and proof-tested rope.

## Prerequisite tree

- [[rope|Rope]] for tension.
- [[wheel-and-axle|Wheel and axle]] for rotation.
- [[standard-weights|Standard weights]] and [[tensile-test|tensile test]] for proof loading.

## Materials and sourcing

Use tough straight-grained wood for the sheave and block. The axle can be wood, bone, or metal depending on available materials. Rope quality is the main safety material: old, wet, abraded, or untested rope is not acceptable for lifting people or valuable loads.

Lubricant can reduce wear, but grit in lubricant damages both rope and sheave.

## Tools and workshop requirements

Tools include boring tools, shaping tools, cordage tools, a frame, and an overhead support that is stronger than the intended lift. The workshop needs a rule that lifting gear is inspected before use.

## Hazards and controls

Dropped loads kill and destroy tools. Keep people out from under suspended loads. Proof-test with low-value loads first. Retire damaged rope and cracked blocks.

## Procedure

1. Shape a smooth sheave or roller with no sharp edge.
2. Bore and fit an axle that turns under light load.
3. Build side plates that prevent rope escape.
4. Mount the pulley to a support stronger than the test load.
5. Test with increasing ordinary loads before production use.

## Mechanism

The pulley changes the direction of rope tension. Multiple supporting rope segments can share load, but the rope must move farther.

## Verification and quality control

Watch the rope path under load. Good pulleys turn without binding, keep rope centered, and do not heat or shed fibers quickly.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Rope frays | Sharp groove or rough axle | Smooth the sheave and clean grit |
| Sheave binds | Bad axle or side loading | Refit axle and align frame |
| Block cracks | Weak grain or overload | Use stronger stock and proof-test |
| Support fails | Mount weaker than load | Rebuild support before lifting |

## Maintenance, repair, and iteration

Inspect rope, axle, frame, and mounting before each heavy use. Store rope dry and pulley blocks off the ground.

## Teaching it to local collaborators

Use a light basket to show direction change first. Only after that demonstrate load sharing with multiple rope segments.

## Historical plausibility

Pulleys are plausible wherever rope, woodworking, and lifting needs meet. Reliable heavy lifting also needs inspection norms and trained workers.

## What this unlocks

Pulleys unlock hoists, well buckets, construction lifting, crane ideas, rigging, and safer handling of heavy kiln or mill parts.

## Open questions and uncertainties

- Load limits need empirical testing and source review.
- Future pages should cover cranes, blocks and tackle, and lifting safety norms.

## Sources and provenance

Generated seed draft for [ANA-13](/ANA/issues/ANA-13). No source pack was used; specific claims need human source review.
