---
id: tech_cart
slug: cart
title: Cart
aliases:
  - handcart
node_type: artifact
secondary_node_types: []
status: draft
page_treatment: practical_with_cautions
summary: A wheeled load carrier that combines wheels, axle support, frame, load
  bed, pulling method, and maintenance habits.
safety_class: caution
era_floor: ancient
difficulty: intermediate
precision_required: medium
minimum_social_scale: household
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: hard
    role: Provides the rolling support.
  - slug: woodworking
    title: Woodworking
    kind: tooling
    role: Builds the frame, bed, axle supports, and handles.
  - slug: plain-bearing
    title: Plain bearing
    kind: soft
    role: Reduces axle wear for repeated use.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Keeps wheels parallel enough to roll without dragging.
unlocks:
  - slug: automobile
    title: Automobile
    kind: hard
    role: "Enables Automobile: Provides load paths, wheels, axles, and road-use
      habits."
  - slug: bicycle
    title: Bicycle
    kind: soft
    role: Cart work teaches wheel maintenance, load paths, and transport repair
      culture.
missing_prerequisites: []
material_dependencies:
  - slug: timber
    title: Timber
    importance: hard
    availability_note: Frame and bed need tough stock matched to load.
  - slug: rope
    title: Rope
    importance: soft
    availability_note: Useful for lashing loads, pulling, and field repair.
images:
  header:
    src: /images/tech/cart-header.webp
    alt: Field sketch of Cart, highlighting timber, rope, wheel and axle,
      woodworking.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 837b449541dcb776ee869ea2eacc23f4e60e286224d6fe1b18cf1383ae4e032c
    generated_at: 2026-05-04T23:02:54.751Z
  schematic:
    src: /images/tech/cart-schematic.webp
    alt: Schematic diagram of Cart, highlighting timber, rope, wheel and axle,
      woodworking and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 26aacb7c04cbe355ba945108c2534b447dc41b5c1c0bddc974b3dddc44f0ea92
    generated_at: 2026-05-04T23:03:46.158Z
tags:
  - transport
  - logistics
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
    - No source pack was used; vehicle history and regional road assumptions
      need human source review.
confidence:
  practicality: 0.76
  historical_plausibility: 0.82
  completeness: 0.56
---
## Field briefing

A cart turns the [[wheel-and-axle|wheel and axle]] into a useful transport system. It needs a frame that holds load, wheels that stay aligned, a pulling method, and ground that rewards rolling instead of dragging.

## What you are trying to make

Make a wheeled carrier that moves repeated loads with less effort than carrying or dragging them.

## Minimum viable version

A two-wheeled handcart with solid or spoked wooden wheels, a simple bed, and handles can be useful around a workshop, field, or road.

## Better versions

Better carts add stronger hubs, better bearings, draft-animal harness points, brakes, removable sides, and standardized repair parts.

## Prerequisite tree

- [[wheel-and-axle|Wheel and axle]] for rolling support.
- [[woodworking|Woodworking]] for the frame and bed.
- [[plain-bearing|Plain bearing]] for repeated use.
- [[alignment-checking|Alignment checking]] for parallel wheels.
- [[rope|Rope]] for load security and field repair.

## Materials and sourcing

Timber choice controls durability. Axle supports and wheel hubs need stronger stock than side boards. Rope, leather, pegs, wedges, and metal straps can all help secure loads or reinforce weak joints.

## Tools and workshop requirements

Tools include woodworking tools, boring tools, wedges, cord, straightedge, and a test path. A mature cart culture also needs storage, repair habits, and rules about load limits.

## Hazards and controls

Heavy loads can crush feet, run downhill, or break frames. Test on level ground, keep people out of the path, and secure loads before moving.

## Procedure

1. Build and test the wheels.
2. Build a frame that holds the axle square.
3. Fit the load bed over the axle line.
4. Add handles, shafts, or pulling rope.
5. Test unloaded, then with small repeated loads.
6. Inspect joints and hubs after every early run.

## Mechanism

The cart concentrates rubbing at the axle and rolling contact at the wheels. It works best when the load sits where the frame can carry it without twisting.

## Verification and quality control

Pull the cart empty and loaded over the same path. Watch for wheel scrub, axle heating, frame twist, load shifting, and handle strain.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Cart drags sideways | Wheels not parallel | Re-align axle supports |
| Hub heats | Bearing rough or overloaded | Smooth, lubricate, or reduce load |
| Frame cracks | Load concentrated badly | Add braces or change bed layout |
| Load spills | No tie-down habit | Add sides or lashings |

## Maintenance, repair, and iteration

Keep hubs clean, tighten wedges, inspect frame corners, and store the cart dry. Track which loads break which parts.

## Teaching it to local collaborators

Teach loading first. A good cart used badly fails like a bad cart.

## Historical plausibility

Carts are plausible in settled settings with paths, workshops, repeated loads, and animals or labor organization. Rough ground can erase the advantage.

## What this unlocks

Carts unlock heavier workshop supply chains, road maintenance incentives, market transport, and wheelwright specialization.

## Open questions and uncertainties

- Local terrain and draft-animal availability need source review.
- Future pages should split harness, brake, road building, and wheelwright guild practice.

## Sources and provenance

Generated expansion for [ANA-34](/ANA/issues/ANA-34). No source pack was used; specific historical and technical claims need human source review.
