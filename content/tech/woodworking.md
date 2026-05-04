---
id: tech_woodworking
slug: woodworking
title: Woodworking
aliases:
  - carpentry
  - joinery
node_type: process
secondary_node_types:
  - tool
status: draft
summary: The practical craft of selecting, shaping, joining, boring, smoothing, and repairing wood for tools, frames, wheels, fixtures, and buildings.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: prehistoric
difficulty: basic
precision_required: medium
minimum_social_scale: household
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: technical-drawing
    title: Technical drawing
    kind: optional
    role: Drawings help repeat parts and teach joinery once the workshop grows.
  - slug: tensile-test
    title: Tensile test
    kind: optional
    role: Pull tests help compare lashings, pegs, and joints.
unlocks:
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: tooling
    role: Shapes wheels, hubs, axles, and frames.
  - slug: cart
    title: Cart
    kind: tooling
    role: Supplies the frame, bed, axle supports, and repairs.
  - slug: bicycle
    title: Bicycle
    kind: tooling
    role: Supports early frames, rims, jigs, and handles.
missing_prerequisites: []
material_dependencies:
  - slug: timber
    title: Timber
    importance: hard
    availability_note: Straight, sound, seasonable wood is the core input; species choice changes strength, wear, and workability.
  - slug: abrasive-grit
    title: Abrasive grit
    importance: optional
    availability_note: Sand, stone, or other grit improves smoothing when edged tools are crude.
tags:
  - workshop
  - material-processing
  - tools
generation:
  created_by: llm
  provider: OpenAI Codex
  model: GPT-5
  prompt_version: ANA-34 manual content expansion
  generated_at: "2026-05-04"
  request_issue: ANA-34
  reviewed_by: []
  source_review_notes:
    - No source pack was used; regional timber and tool-history claims need human source review.
confidence:
  practicality: 0.78
  historical_plausibility: 0.82
  completeness: 0.58
---

## Field briefing

Woodworking turns trees into repeatable parts. It is a prerequisite for many machines because wood is available, repairable, and strong enough for early frames, wheels, levers, handles, benches, and jigs.

## What you are trying to make

Create a workshop practice that can choose useful wood, dry it enough for the job, shape it predictably, join pieces without immediate failure, and repair mistakes.

## Minimum viable version

The first useful version can split, trim, bore, lash, and wedge simple parts. It does not need fine cabinetry. It needs enough control to make a straight handle, a square frame, a round wheel blank, and a joint that survives testing.

## Better versions

Better woodworking adds seasoned stock, saw pits or frames, planes, augers, drawknives, templates, clamps, glue where available, and named joint patterns.

## Prerequisite tree

- [[tensile-test|Tensile testing]] for comparing lashings, pegs, and sample joints.
- [[technical-drawing|Technical drawing]] for repeatable shapes and teaching patterns.
- [[standard-weights|Standard weights]] for proof loads when parts carry carts, pulleys, or riders.

## Materials and sourcing

Wood is a supply chain, not a generic block. Source, season, grain, knots, moisture, and defects decide whether a part bends, splits, or wears. Straight-grained stock is best for axles, handles, and frame rails. Tough, curved, or naturally bent pieces can be valuable for rims, forks, and braces.

Recognition begins with sight and sound: avoid rot, large knots at stress points, insect-damaged areas, and checks that run through a joint. Green wood can be easier to shape but may shrink. Seasoned wood is more stable but harder to work.

## Tools and workshop requirements

Useful tools include wedges, axes, knives, adzes, saws, chisels, boring tools, rasps, planes, clamps, cords, and marking points. A small workshop also needs dry storage and a habit of separating stock by intended use.

## Hazards and controls

Edges cut, wedges fly, wood can spring under load, and failed joints can drop weight. Keep hands out of tool paths, clamp or brace work when possible, and test loaded parts away from bystanders.

## Procedure

1. Select stock for the job rather than taking the nearest piece.
2. Rough shape oversized blanks.
3. Mark reference faces, centerlines, and joint locations.
4. Bore and cut before final fitting.
5. Dry-fit the assembly.
6. Peg, wedge, lash, or glue as appropriate.
7. Test the part under a small load before trusting it.

## Mechanism

Wood is anisotropic: it behaves differently along and across the grain. Good woodworking aligns grain with load and avoids forcing short grain to hold tension.

## Verification and quality control

Check straightness, squareness, tightness, and movement after loading. A wheel blank should rotate without obvious heavy spots. A frame should return to shape after a light load. A joint should fail in the test piece before the production piece is trusted.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Split at peg | Hole too near edge or weak grain | Move joint, enlarge member, or change fastening |
| Warped frame | Green or mismatched stock | Season longer and pair similar pieces |
| Loose joint | Shrinkage or poor fit | Refit with wedges or redesign joint |
| Rapid wear | Soft wood at rubbing surface | Add sleeve, lubricant, or harder bearing material |

## Maintenance, repair, and iteration

Save templates and failed parts. The fastest workshop improvement is learning which local wood works for which job.

## Teaching it to local collaborators

Teach grain direction, reference faces, square checking, boring straight, and test-before-use. A bad joint broken in a safe test teaches more than a lecture.

## Historical plausibility

Basic woodworking is very early. Precision joinery and repeatable machine frames require accumulated tools, storage, apprenticeship, and measurement habits.

## What this unlocks

Woodworking unlocks [[wheel-and-axle|wheel and axle]], [[cart|carts]], [[spoked-wheel|spoked wheels]], [[plain-bearing|bearing housings]], [[potters-wheel|potter's wheels]], and early [[bicycle|bicycle]] frames.

## Open questions and uncertainties

- Local timber species need source review.
- Future pages should split saw, auger, plane, glue, and timber seasoning.

## Sources and provenance

Generated expansion for [ANA-34](/ANA/issues/ANA-34). No source pack was used; specific historical and technical claims need human source review.
