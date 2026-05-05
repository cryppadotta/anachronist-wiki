---
id: tech_plain_bearing
slug: plain-bearing
title: Plain bearing
aliases:
  - bearing surface
  - bushing
node_type: artifact
secondary_node_types: []
status: draft
summary: A low-friction rubbing surface or sleeve that lets a shaft turn or
  pivot with controlled wear.
safety_class: allowed
era_floor: ancient
difficulty: intermediate
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days
prerequisites:
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: hard
    role: Provides the rotating shaft problem that bearings solve.
  - slug: woodworking
    title: Woodworking
    kind: tooling
    role: Makes early wooden housings, shafts, and replaceable sleeves.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Misalignment turns a bearing into a brake.
unlocks:
  - slug: bicycle
    title: Bicycle
    kind: enables
    role: Hubs, steering pivots, and early cranks need controlled friction.
  - slug: cart
    title: Cart
    kind: soft
    role: "Enables Cart: Reduces axle wear for repeated use."
  - slug: clutch
    title: Clutch
    kind: soft
    role: "Enables Clutch: Supports rotating elements."
  - slug: drive-shaft
    title: Drive shaft
    kind: hard
    role: "Enables Drive shaft: Supports rotation."
  - slug: lathe
    title: Lathe
    kind: hard
    role: "Enables Lathe: Supports spindle rotation."
  - slug: potters-wheel
    title: Potter's wheel
    kind: enables
    role: Smooth rotation improves wheel control and durability.
  - slug: rolling-mill
    title: Rolling mill
    kind: hard
    role: "Enables Rolling mill: Supports heavy rotating rolls."
  - slug: steering-gear
    title: Steering gear
    kind: hard
    role: "Enables Steering gear: Supports pivots and shafts."
  - slug: water-pump
    title: Water pump
    kind: soft
    role: "Enables Water pump: Supports rotating or sliding pump parts."
missing_prerequisites: []
material_dependencies:
  - slug: hardwood
    title: Hardwood
    importance: hard
    availability_note: Hard, close-grained wood can serve as an early bushing or shaft surface.
  - slug: animal-fat
    title: Animal fat
    importance: soft
    availability_note: Fat, wax, or plant oil can lubricate if kept clean.
  - slug: bronze
    title: Bronze
    importance: optional
    availability_note: Metal bushings improve wear resistance where metal supply exists.
images:
  header:
    src: /images/tech/plain-bearing-header.webp
    alt: Field sketch of Plain bearing, highlighting hardwood, animal fat, wheel and
      axle, woodworking.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 3ea540ca9ee64cd4f86e519a4c5a00fd118586026a6ad89a5dd682fa3dd015e5
    generated_at: 2026-05-04T23:20:33.359Z
  schematic:
    src: /images/tech/plain-bearing-schematic.webp
    alt: Schematic diagram of Plain bearing, highlighting hardwood, animal fat,
      wheel and axle, woodworking and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 01e380a769c649580ba8232ebeaf31fb5fec4dc98b7e0c2bd50b395430e9a109
    generated_at: 2026-05-04T23:21:27.268Z
tags:
  - mechanics
  - friction
  - workshop
generation:
  created_by: llm
  model: GPT-5
  provider: OpenAI Codex
  prompt_version: ANA-34 manual content expansion
  generated_at: 2026-05-04
  request_issue: ANA-34
  reviewed_by: []
  source_review_notes:
    - No source pack was used; historical bearing materials and chronology need
      human source review.
confidence:
  practicality: 0.7
  historical_plausibility: 0.74
  completeness: 0.56
---
## Field briefing

A plain bearing is the simplest answer to controlled rotation: let a shaft rub against a prepared surface that can be smoothed, lubricated, inspected, and replaced.

## What you are trying to make

Make a hub, sleeve, or pivot surface that turns freely under load without quickly heating, binding, or destroying the surrounding frame.

## Minimum viable version

A smooth wooden axle turning in a smoother wooden hole can work for light duty if aligned and lubricated. The improvement is making the rubbing part replaceable so the whole machine is not ruined by wear.

## Better versions

Better versions use harder sleeves, cleaner lubricant, dust covers, larger bearing area, replaceable bushings, and more accurate alignment.

## Prerequisite tree

- [[wheel-and-axle|Wheel and axle]] for the rotating load.
- [[woodworking|Woodworking]] for housings and shafts.
- [[alignment-checking|Alignment checking]] because crooked shafts wear fast.

## Materials and sourcing

Hard, close-grained wood is available earlier than metal and can be polished by use. Bone, horn, bronze, or iron sleeves may improve wear when available. Lubricants can be animal fat, wax, plant oil, or graphite-like mineral where locally known.

Keep grit out. Dirty lubricant acts like abrasive paste and can destroy a bearing faster than no lubricant.

## Tools and workshop requirements

Tools include boring tools, smoothers, scrapers, marking cord, straightedge, wedges, and cleaning cloth. The workshop needs a habit of inspecting rubbing surfaces rather than treating them as hidden parts.

## Procedure

1. Bore the housing as straight as tools allow.
2. Smooth the shaft and bearing surface.
3. Fit with enough clearance to turn under load.
4. Lubricate lightly and keep grit away.
5. Test unloaded, then under working load.
6. Inspect heat, dust, and wear marks.

## Mechanism

The bearing concentrates sliding friction in a chosen place. A larger, smoother, cleaner, lubricated surface spreads load and slows wear.

## Verification and quality control

Spin the shaft by hand, then load it and repeat. Check for heat, dark dust, squeal, tight spots, and one-sided wear. A good bearing wears evenly and predictably.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Binding | Tight fit or misalignment | Refit and check the shaft line |
| Heat | Dry, dirty, or overloaded bearing | Clean, lubricate, widen, or reduce load |
| Oval hole | Soft housing material | Add a sleeve or harder insert |
| Grit wear | Poor cover or dirty lubricant | Clean and shield the bearing |

## Maintenance, repair, and iteration

Clean and relubricate on a schedule. Replace sleeves before the shaft or frame is damaged.

## Teaching it to local collaborators

Let apprentices compare a dry rough pivot with a smoothed lubricated one under the same small load. The difference makes friction visible.

## Historical plausibility

Plain bearings are plausible wherever wheels, pivots, mills, or potter's wheels are maintained. The hard part is not the concept; it is keeping alignment and grit under control.

## What this unlocks

Plain bearings unlock smoother [[cart|carts]], [[potters-wheel|potter's wheels]], pulleys, windlasses, and early [[bicycle|bicycle]] experiments.

## Open questions and uncertainties

- Local lubricants and bushing materials need source review.
- Future pages should split ball bearing, sleeve casting, and dust seals.

## Sources and provenance

Generated expansion for [ANA-34](/ANA/issues/ANA-34). No source pack was used; specific historical and technical claims need human source review.
