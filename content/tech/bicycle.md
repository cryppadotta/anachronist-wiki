---
id: tech_bicycle
slug: bicycle
title: Bicycle
aliases:
  - bike
node_type: artifact
status: draft
summary: A narrow human-powered vehicle that turns balancing, light wheels, low-friction bearings, steering, and workshop alignment into efficient personal transport.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: early_modern_to_industrial
difficulty: advanced
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: wheel-and-axle
    title: Wheel and axle
    kind: hard
    role: Supplies the rotating transport foundation.
  - slug: spoked-wheel
    title: Spoked wheel
    kind: hard
    role: Makes wheels light enough for human-powered transport.
  - slug: plain-bearing
    title: Plain bearing
    kind: hard
    role: Reduces hub and steering friction enough for repeatable riding.
  - slug: alignment-checking
    title: Alignment checking
    kind: test
    role: Keeps wheels, frame, and steering from fighting each other.
  - slug: woodworking
    title: Woodworking
    kind: tooling
    role: Enables early wooden frames, wheel parts, jigs, and repair fixtures.
  - slug: technical-drawing
    title: Technical drawing
    kind: soft
    role: Helps a workshop copy frame geometry and improve revisions.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: timber
    title: Timber
    importance: hard
    availability_note: Early frames, jigs, rims, and handles can be made from straight, tough, seasoned wood.
  - slug: metal-strip
    title: Metal strip
    importance: soft
    availability_note: Tires, hub sleeves, fasteners, or tension hardware become much easier with wrought iron or similar metal stock.
  - slug: leather
    title: Leather
    importance: optional
    availability_note: Useful for saddle, grips, straps, and bearing dust covers, but substitutes exist.
tags:
  - transport
  - mechanics
  - workshop
generation:
  created_by: llm
  provider: OpenAI Codex
  model: GPT-5
  prompt_version: ANA-34 manual content expansion
  generated_at: "2026-05-04"
  request_issue: ANA-34
  reviewed_by: []
  source_review_notes:
    - No source pack was used; bicycle history, material choices, and regional feasibility need human source review.
confidence:
  practicality: 0.58
  historical_plausibility: 0.5
  completeness: 0.54
---

## Field briefing

A bicycle is not just two wheels in a line. The practical version depends on several quieter prerequisites: light wheels, low-friction hubs, a frame that stays aligned, steering that does not bind, and enough road or yard surface for testing.

For an anachronist technology tree, the first useful target is closer to a steerable running machine or simple pedal cycle than a modern bicycle. It proves balance, rolling efficiency, and frame geometry before adding chains, pneumatic tires, precision ball bearings, or mass production.

## What you are trying to make

Make a human-powered single-track vehicle that can carry one rider across a prepared surface with less effort than walking while remaining steerable and repairable.

## Minimum viable version

A crude first version can use two wooden or wood-rimmed wheels, a rigid frame, a steering fork, plain bearings, and foot propulsion against the ground or a very simple crank drive. It is successful if a trained rider can coast, steer, stop, and repeat short trips without the frame loosening or the wheels rubbing.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Running machine | Coasting and steering | Frame alignment and low-friction hubs |
| Pedal front wheel | Continuous rider input | Stronger fork and crank fitting |
| Chain drive | Better gearing and rider position | Metal chain, sprockets, and higher precision |
| Pneumatic safety bicycle | Speed and comfort | Rubber supply chain and tighter wheel building |

## Prerequisite tree

- [[wheel-and-axle|Wheel and axle]] for the core rolling machine.
- [[spoked-wheel|Spoked wheel]] for light wheels that do not exhaust the rider.
- [[plain-bearing|Plain bearing]] for hubs, fork pivots, and early crank pivots.
- [[alignment-checking|Alignment checking]] for frame, wheel, and fork setup.
- [[woodworking|Woodworking]] for early frames, rims, jigs, handles, and repairs.
- [[technical-drawing|Technical drawing]] for repeatable frame geometry.
- [[standard-weights|Standard weights]] and [[tensile-test|tensile tests]] for checking parts and ties before riding.

## Materials and sourcing

Wood is the most plausible early structural material. Look for straight-grained, seasoned stock that resists splitting around joints. Bent or laminated rims require better selection and drying than a cart wheel because unnecessary weight punishes the rider.

Metal is not strictly required for a demonstration machine, but it quickly becomes the difference between a toy and a useful vehicle. Metal tires reduce rim wear. Sleeves, pins, straps, and fasteners strengthen small contact points. Later versions need wire, chain, sprockets, and springs.

Leather, cord, wax, fat, or plant oil support saddles, grips, lashings, dust covers, and lubrication. The material choice should match the available repair culture: a slightly heavier vehicle that can be fixed locally is more useful than a clever one that fails at the first worn pivot.

## Tools and workshop requirements

The workshop needs saws, boring tools, rasps or planes, straightedges, cords, wedges, clamps, and a safe test yard. A bicycle also benefits from jigs that hold two wheels in one line while the frame is fitted around them.

The social prerequisite is training. Riders must learn balance, steering correction, mounting, braking, and inspection habits. Maintainers need a shared vocabulary for fork, hub, rim, frame, bearing, alignment, and looseness.

## Hazards and controls

Falls, wheel collapse, steering jams, and failed forks can injure the rider. Test at walking speed, use a clear surface, inspect wheels before every trial, and keep bystanders out of the path.

Do not approve a new rider or design after one lucky coast. Require repeated starts, turns, stops, and post-ride inspection.

## Procedure

1. Build and test the wheels as independent parts.
2. Fit bearings and axles so each wheel turns freely without severe wobble.
3. Build the frame around a straight reference line.
4. Fit the steering fork and check that it turns without binding.
5. Add saddle, grips, and stops appropriate to the first version.
6. Run unloaded roll and steering tests.
7. Train a rider in short, low-speed trials before extending range.

## Mechanism

The bicycle trades rider balance and workshop precision for low rolling resistance. A wheel that is heavy, crooked, or badly lubricated steals energy immediately. A frame that points the wheels in different directions makes the rider fight the machine.

## Verification and quality control

Spin each wheel, then load it and spin again. Check whether the rim wanders side to side, whether the hub warms, and whether the wheel stops at the same heavy point. Place the finished vehicle over a straight mark and confirm both wheels track the same line.

After every test ride, inspect hub looseness, fork cracks, frame joints, rubbing marks, and saddle movement. A useful bicycle improves after inspection; a fragile one hides damage until the next ride.

## Failure modes

| Failure | Likely cause | Fix |
| --- | --- | --- |
| Rider cannot coast straight | Frame or fork misaligned | Recheck wheel line and steering pivot |
| Wheel rubs under load | Weak rim, loose hub, or side-flex | Strengthen wheel and improve bearing fit |
| Hub heats quickly | Dirty, dry, or tight bearing | Clean, smooth, lubricate, and refit |
| Fork loosens | Small joint carrying shock | Reinforce joint and reduce test speed |

## Maintenance, repair, and iteration

Keep a pre-ride inspection habit: wheel true, axle fit, steering freedom, frame cracks, saddle security, and stopping method. Keep spare wedges, lashings, lubricant, and bearing sleeves near the test yard.

The main improvement path is lighter wheels, more reliable bearings, a stiffer frame, better steering geometry, and eventually a more efficient drive.

## Teaching it to local collaborators

Teach the bicycle as three linked skills: wheel building, alignment, and riding. Start with pushing and coasting before power. Make riders describe what changed after each adjustment so workshop learning becomes visible.

## Historical plausibility

A bicycle is much later than most foundational wheel technologies because it concentrates many precision problems into one object. The idea is simple; the reliable artifact depends on materials, roads, workshop measurement, bearing habits, and rider training.

## What this unlocks

Bicycles unlock fast local travel, courier work, patrol routes, lightweight hauling attachments, and new demands for roads, repair shops, standard parts, and rider instruction.

## Open questions and uncertainties

- Source review should separate running machines, velocipedes, high-wheelers, and safety bicycles.
- Local feasibility depends heavily on metalworking, road surfaces, and rubber substitutes.
- Future pages should split chain drive, pneumatic tire, wire drawing, and ball bearing as higher-tier prerequisites.

## Sources and provenance

Generated expansion for [ANA-34](/ANA/issues/ANA-34). No source pack was used; specific historical and technical claims need human source review.
