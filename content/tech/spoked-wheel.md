---
id: tech_spoked_wheel
slug: spoked-wheel
title: Spoked wheel
aliases:
  - light wheel
node_type: artifact
status: draft
summary: A wheel built from hub, spokes, and rim so it can stay large while using less material than a solid disk.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: ancient
difficulty: intermediate
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: hard
    role: Supplies the hub, rim, and rolling-load problem.
  - slug: woodworking
    title: Woodworking
    kind: tooling
    role: Shapes hub, spokes, rim segments, joints, and repair wedges.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: A light wheel must be checked for wobble and roundness.
  - slug: tensile-test
    title: Tensile test
    kind: optional
    role: Useful for checking lashings, ties, or later wire spokes.
unlocks:
  - slug: bicycle
    title: Bicycle
    kind: enables
    role: Light wheels make rider-powered transport much more plausible.
  - slug: cart
    title: Cart
    kind: enables
    role: Lighter wheels reduce draft effort and improve speed.
missing_prerequisites: []
material_dependencies:
  - slug: timber
    title: Timber
    importance: hard
    availability_note: Hub, spoke, and rim stock must be selected for grain and toughness.
  - slug: hide-glue
    title: Hide glue
    importance: optional
    availability_note: Adhesives help some rim and spoke assemblies but wedges and compression joints can substitute.
tags:
  - transport
  - mechanics
  - woodworking
generation:
  created_by: llm
  provider: OpenAI Codex
  model: GPT-5
  prompt_version: ANA-34 manual content expansion
  generated_at: "2026-05-04"
  request_issue: ANA-34
  reviewed_by: []
  source_review_notes:
    - No source pack was used; wheel-building chronology and joinery details need human source review.
confidence:
  practicality: 0.68
  historical_plausibility: 0.76
  completeness: 0.55
---

## Field briefing

A spoked wheel solves the weight problem created by solid wheels. It keeps the rim large while putting material mainly where it carries load: hub, spokes, and rim.

## What you are trying to make

Make a wheel that is round, strong, and lighter than a solid disk, with a hub that accepts the axle and spokes that hold the rim in shape.

## Minimum viable version

A first version can use a thick hub, several wooden spokes, and joined rim segments. It is not a modern tension-spoked wheel. It succeeds if it rolls under load without the hub splitting, spokes loosening, or rim wandering badly.

## Better versions

Better wheels add more accurate spoke sockets, stronger rim joints, iron tires, replaceable hubs, and eventually tensioned wire spokes.

## Prerequisite tree

- [[wheel-and-axle|Wheel and axle]] for the basic rolling machine.
- [[woodworking|Woodworking]] for hub, spoke, and rim construction.
- [[alignment-checking|Alignment checking]] for truing and wobble checks.
- [[tensile-test|Tensile testing]] for lashings or later wire spokes.

## Materials and sourcing

The hub needs tough stock that resists splitting. Spokes need straight grain and similar stiffness. Rim pieces should bend or join without opening under load. If metal strip is available, a tire can protect the rim, but it adds another fitting problem.

## Tools and workshop requirements

Tools include boring tools, saws, chisels, marking cord, wedges, clamps, and a truing stand or temporary axle. The workshop must keep parts labeled so mismatched spokes do not produce a crooked wheel.

## Hazards and controls

A failed wheel can drop a cart or rider. Test with low loads first, stand aside during load tests, and inspect the hub after each trial.

## Procedure

1. Shape the hub and mark spoke positions evenly.
2. Prepare spokes from similar stock.
3. Fit spokes before final rim assembly.
4. Join rim segments around the spokes.
5. Mount on a temporary axle and true the wheel.
6. Test with light load before service.

## Mechanism

The rim carries contact with the ground, the spokes transfer load to the hub, and the hub transfers load to the axle. Weight removed from the disk reduces the energy needed to start, stop, and steer.

## Verification and quality control

Spin the wheel next to a fixed pointer. Check side wobble, up-and-down hop, loose spokes, hub cracks, and rim joint movement. Repeat after loading because a wheel can look true while unloaded and fail under stress.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Hub split | Weak grain or tight spoke sockets | Use tougher stock and adjust socket fit |
| Rim opens | Poor joint or dry shrinkage | Improve joint and season stock |
| Spokes loosen | Uneven fit or load | Refit spokes and true wheel again |
| Wheel hops | Uneven rim | Shave high spots or rebuild rim |

## Maintenance, repair, and iteration

Inspect spoke tightness and rim joints after each heavy use. Keep replacement spokes and wedges near vehicles.

## Teaching it to local collaborators

Compare a solid disk and a spoked wheel of the same diameter. The lesson is that saved weight matters most at the rim.

## Historical plausibility

Spoked wheels are ancient but require better woodworking than solid wheels. They become especially valuable for speed, human power, and draft efficiency.

## What this unlocks

Spoked wheels unlock faster [[cart|carts]], chariots, lighter wheelbarrows, and early [[bicycle|bicycles]].

## Open questions and uncertainties

- Future pages should split tension spokes, metal tires, rim bending, and wheelwright organization.

## Sources and provenance

Generated expansion for [ANA-34](/ANA/issues/ANA-34). No source pack was used; specific historical and technical claims need human source review.
