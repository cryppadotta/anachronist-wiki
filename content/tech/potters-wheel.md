---
id: tech_potters_wheel
slug: potters-wheel
title: Potter's wheel
aliases:
  - pottery wheel
node_type: tool
status: draft
summary: A rotating work platform that lets a potter shape clay symmetrically with steady hand pressure.
safety_class: allowed
era_floor: ancient
difficulty: intermediate
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: hard
    role: Provides the rotating platform and shaft idea.
  - slug: clay
    title: Clay
    kind: material_source
    role: Supplies the plastic material being shaped.
  - slug: woodworking
    title: Woodworking
    kind: tooling
    role: Builds the turntable, support frame, and shaft parts.
  - slug: plain-bearing
    title: Plain bearing
    kind: soft
    role: Improves smoothness and reduces wear.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: clay
    title: Clay
    importance: hard
    availability_note: Wheel work needs clay prepared to a consistent plastic state.
  - slug: timber
    title: Timber
    importance: hard
    availability_note: Early wheels and frames can be built from stable wood.
tags:
  - ceramics
  - workshop
  - rotation
generation:
  created_by: llm
  provider: OpenAI Codex
  model: GPT-5
  prompt_version: ANA-34 manual content expansion
  generated_at: "2026-05-04"
  request_issue: ANA-34
  reviewed_by: []
  source_review_notes:
    - No source pack was used; ceramic chronology and wheel forms need human source review.
confidence:
  practicality: 0.74
  historical_plausibility: 0.78
  completeness: 0.55
---

## Field briefing

A potter's wheel applies [[wheel-and-axle|wheel and axle]] mechanics to clay shaping. It is a workshop tool for symmetry, speed, and repeatable vessel forms.

## What you are trying to make

Make a stable rotating platform that can spin smoothly enough for a potter to shape prepared [[clay|clay]] with both hands.

## Minimum viable version

A slow hand-turned wheel or tournette can support finishing and symmetrical shaping. A heavier kick wheel or flywheel gives steadier rotation but demands better bearings and frame strength.

## Better versions

Better versions add heavier flywheels, smoother bearings, foot drive, level work surfaces, splash control, and standardized clay preparation.

## Prerequisite tree

- [[wheel-and-axle|Wheel and axle]] for the rotating platform.
- [[clay|Clay]] for the material supply.
- [[woodworking|Woodworking]] for the frame and disk.
- [[plain-bearing|Plain bearing]] for smoother rotation.
- [[alignment-checking|Alignment checking]] for wobble control.

## Materials and sourcing

The wheel can be wood, stone, or fired clay, depending on local materials and desired mass. The frame must resist rocking. Clay must be cleaned and wedged enough that hard inclusions do not spoil the vessel while spinning.

## Tools and workshop requirements

Tools include shaping tools, water vessel, prepared clay storage, wheel frame, bearing surface, and drying shelves. The workshop needs a clean floor and enough teaching time for hand pressure control.

## Procedure

1. Build a stable base and vertical shaft or pivot.
2. Fit a round work surface to the shaft.
3. Smooth and lubricate the bearing surface.
4. Check wobble with the wheel empty.
5. Test with scrap clay before production.
6. Clean clay and grit from the bearing area after use.

## Mechanism

Rotation lets the potter apply steady pressure around the full circumference. A heavier wheel stores momentum and smooths uneven pushes.

## Verification and quality control

Spin the wheel empty and watch the edge against a fixed point. Then center scrap clay and check whether the wheel slows, wobbles, or shifts under hand pressure.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Wobble | Off-center disk or shaft | Recenter and check alignment |
| Stops quickly | High bearing friction | Smooth, clean, and lubricate |
| Frame rocks | Weak base | Widen or brace frame |
| Clay scratches | Poor preparation | Clean and wedge clay better |

## Maintenance, repair, and iteration

Keep grit out of the bearing. Flatten or replace the work surface when it warps. Save successful vessel profiles as teaching references.

## Teaching it to local collaborators

Teach centering first. Without centering, speed only makes mistakes happen faster.

## Historical plausibility

Potter's wheels are ancient, but useful production depends on prepared clay, workshop training, drying space, and firing capacity.

## What this unlocks

Potter's wheels unlock more repeatable vessels, faster ceramic production, mold making, and stronger demand for [[kiln|kiln]] control.

## Open questions and uncertainties

- Future pages should split tournette, kick wheel, clay wedging, and ceramic firing schedules.

## Sources and provenance

Generated expansion for [ANA-34](/ANA/issues/ANA-34). No source pack was used; specific historical and technical claims need human source review.
