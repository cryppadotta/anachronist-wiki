---
id: tech_rope
slug: rope
title: Rope
aliases:
  - cordage
  - cord
node_type: tool
secondary_node_types:
  - material
status: draft
summary: Twisted or braided fibers that carry tension for hauling, lifting,
  tying, measuring, and transmitting force.
safety_class: allowed
era_floor: prehistoric
difficulty: basic
precision_required: low
minimum_social_scale: household
time_to_first_working_version: hours
prerequisites:
  - slug: rope-making
    title: Rope making
    kind: refining
    role: Turns prepared fibers into usable cordage.
  - slug: tensile-test
    title: Tensile test
    kind: test
    role: Even crude pull tests separate useful cordage from decorative string.
unlocks:
  - slug: pulley
    title: Pulley
    kind: hard
    role: A pulley needs a flexible tension member.
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: optional
    role: Rope enables windlass and cart hauling applications.
missing_prerequisites: []
material_dependencies:
  - slug: plant-fiber
    title: Plant fiber
    importance: hard
    availability_note: Flax, hemp, nettle, lime bast, grasses, and bark fibers are
      possible depending on region and season.
tags:
  - cordage
  - materials
  - lifting
generation:
  created_by: llm
  provider: OpenAI
  model: GPT-5 Codex
  prompt_version: ANA-13 seed-content manual draft
  generated_at: 2026-05-03
  request_issue: ANA-13
  reviewed_by: []
  source_review_notes:
    - No source pack was used; fiber availability and preparation claims need
      human source review.
confidence:
  practicality: 0.78
  historical_plausibility: 0.86
  completeness: 0.64
images:
  header:
    src: /images/tech/rope-header.webp
    alt: Field sketch of rope, highlighting cordage fiber, knot tying, and process handling details.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: ff408c2c2a2d8f68a922fa90eab605d85b5793f4805a4398b3c598128456b095
    generated_at: 2026-05-04T20:27:28.737Z
  schematic:
    src: /images/tech/rope-schematic.webp
    alt: Schematic diagram of rope, highlighting cordage fiber, knot tying, and strand relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 106e794ab321de40ec2d27344f2ab6c0dd5160b2e5f6f61a20c44807863050a2
    generated_at: 2026-05-04T20:28:18.933Z
---

## Field briefing

Rope is a force path. It lets people pull from a safer place, bind parts together, hang weights, and use [[pulley|pulleys]] or [[wheel-and-axle|windlasses]].

## What you are trying to make

Make many weak fibers behave like one strong flexible member by twisting or braiding them so load spreads along the length.

## Minimum viable version

Hand-twisted cord from prepared plant fiber is enough for tying bundles and light hauling. A working rope needs consistent fiber, even twist, and a known safe load.

## Better versions

Better cordage uses longer fibers, even drying, opposing twists in strands, and a ropewalk or fixed hooks to maintain tension while laying the rope.

## Prerequisite tree

- [[tensile-test|Tensile test]] for checking batches.
- [[counting|Counting]] for tracking strand count and test results.
- [[standard-weights|Standard weights]] for repeatable proof loads.

## Materials and sourcing

Plant fibers are the main supply chain. Look for stems or bark that peel into long, tough strips. Useful fiber resists snapping when bent sharply and can be scraped clean without turning to powder.

In an Arthurian Britain-like setting, likely candidates include flax where cultivated, nettle, hemp if present through cultivation or trade, and bast from suitable tree bark. Animal hair and sinew work for smaller cords but are less convenient for long hauling rope.

Preparation usually means retting or soaking to loosen fiber, scraping away weak material, drying, combing, and sorting by length. The seed page does not settle exact species; each fiber source deserves its own page.

## Tools and workshop requirements

Hands can twist small cord. Longer rope benefits from hooks, a swivel or turning stick, a comb, a drying rack, and a clean place to keep grit out of the fibers.

## Procedure

1. Sort fibers by length and remove rotten or brittle pieces.
2. Twist a small strand and pull it until it fails.
3. Lay multiple strands with opposite twist so the rope does not immediately unwind.
4. Keep tension steady while twisting.
5. Finish the ends with binding so the rope does not unravel.

## Mechanism

Twist creates friction and geometry that keep fibers sharing load. Too little twist slips. Too much twist kinks and weakens the rope.

## Verification and quality control

Proof each rope with a repeatable load before trusting it overhead. Watch for necking, strand breakage, crackling fiber, sudden stretch, or unraveling at the ends.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Rope snaps suddenly | Rotten or short fibers | Improve sorting and use more strands |
| Rope stretches and thins | Weak preparation or wet fiber | Dry and retest before use |
| Rope kinks | Too much twist or uneven tension | Relay under steadier tension |
| Surface abrades | Rough pulley or grit | Smooth contact points and keep clean |

## Maintenance, repair, and iteration

Dry rope after use, store it off damp ground, and retire sections with broken strands. Splicing and whipping ends are early improvements.

## Teaching it to local collaborators

Start with two people twisting grass or bast, then show how opposite twist locks the rope. Keep a broken sample as a teaching aid.

## Historical plausibility

Cordage is ancient, but reliable lifting rope needs disciplined fiber preparation and batch testing. The bottleneck is often labor and quality control, not the idea.

## What this unlocks

Rope unlocks hauling systems, [[pulley|pulleys]], suspended [[standard-weights|standard weights]], traps, tents, rafts, and workshop lashing.

## Open questions and uncertainties

- Local species and cultivation history need source review.
- Future material pages should separate flax, hemp, nettle, bast, hair, and sinew.

## Sources and provenance

Generated seed draft for [ANA-13](/ANA/issues/ANA-13). No source pack was used; specific claims need human source review.
