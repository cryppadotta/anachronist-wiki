---
id: tech_wheel_and_axle
slug: wheel-and-axle
title: Wheel and axle
aliases:
  - wheel
  - axle
node_type: artifact
status: draft
summary: A rotating round member fixed to a central shaft, useful for carts, pulleys, windlasses, potter's wheels, and later transport systems.
safety_class: allowed
era_floor: ancient
difficulty: basic
precision_required: low
time_to_first_working_version: hours_to_days
prerequisites:
  - slug: woodworking
    title: Woodworking
    kind: hard
    role: Shape the wheel, axle, hub, and supporting frame.
  - slug: lever
    title: Lever
    kind: knowledge
    role: Understand how a longer radius trades force for distance.
  - slug: rope
    title: Rope
    kind: optional
    role: Useful for windlasses, carts, and load handling around the axle.
unlocks:
  - slug: cart
    title: Cart
    kind: enables
    role: The wheel and axle become a load-carrying transport system.
  - slug: pulley
    title: Pulley
    kind: enables
    role: A grooved wheel changes the direction of a rope force.
  - slug: bicycle
    title: Bicycle
    kind: enables
    role: Later human-powered transport depends on reliable wheels and axles.
missing_prerequisites:
  - slug: woodworking
    title: Woodworking
    reason: Needed as a hard prerequisite for shaping the first useful wheel and axle.
  - slug: standard-weights
    title: Standard weights
    reason: Useful for repeatable load testing, but not required for the first crude version.
tags:
  - mechanics
  - transport
  - workshop
generation:
  created_by: human
  reviewed_by: []
confidence:
  practicality: 0.72
  historical_plausibility: 0.86
  completeness: 0.58
---

## Field briefing

A wheel and axle turns sliding friction into rolling contact. The first useful version does not need metal bearings or mathematical theory. It needs a round-enough wheel, a straight-enough axle, a hub that does not split, and a frame that keeps the parts aligned.

Use this node whenever a later page says it needs [[wheel-and-axle|wheel-and-axle mechanics]], including carts, pulleys, windlasses, potter's wheels, simple mills, and eventually [[bicycle|bicycles]].

## What you are trying to make

Make a round member that turns around a central line while carrying load. In the simplest form, the wheel can be fixed to the axle and both rotate together. In a better form, the axle stays fixed and the wheel rotates around it on a lubricated bearing surface.

## Minimum viable version

The crudest useful version is a thick wooden disk with a centered hole and a wooden axle. It can carry small loads if the ground is firm and the frame keeps the axle from twisting out of line.

The first test is not speed. The first test is whether it rolls under load without splitting, binding, or wandering so badly that it becomes harder than dragging.

## Better versions

| Version | Added capability | What changes |
| --- | --- | --- |
| Solid disk | First rolling load | Heavy, simple, tolerant of rough making |
| Plank wheel | Larger wheel from smaller timber | Needs stronger joining and truer alignment |
| Spoked wheel | Lighter transport | Needs better joinery and rim construction |
| Bushed hub | Less wear | Needs a sleeve material, lubricant, and better fit |

## Prerequisite tree

- [[woodworking|Woodworking]] for shaping, boring, wedging, and joining.
- [[lever|Lever]] as the simple mechanical idea behind radius and torque.
- [[rope|Rope]] for hauling tests and windlass applications.
- [[standard-weights|Standard weights]] for repeatable testing once the workshop matures.

## Materials and sourcing

Choose tough, seasoned wood if available. A green wheel is easier to shape but may shrink, split, and loosen around the axle as it dries. A crude field version can start with a cross-section cut from a trunk, but better versions use joined boards or a rim made from curved segments.

Look for straight-grained timber without large knots near the hub. The hub carries concentrated stress, so weak grain there ruins the wheel before the rim does. If wood is scarce, fired clay can demonstrate the principle at small scale, but it is brittle and poor for transport.

Lubrication can be animal fat, wax, or plant oil. The point is to reduce heat and wear at the rubbing surface. Dirty lubricant becomes grinding paste, so keep grit away from the hub.

## Tools and workshop requirements

You need cutting tools, a boring tool, a way to mark a center, and a flat-enough working surface. A compass or fixed cord helps mark a circle, but a peg and string can be enough for the first layout.

The critical workshop habit is checking symmetry. Turn the wheel on a temporary peg and shave high spots. If the same part always drops to the bottom, that side is heavy.

## Procedure

1. Mark the intended center and outer radius.
2. Rough out the disk or rim blank larger than needed.
3. Bore the hub hole as straight as the available tools allow.
4. Fit the axle so it turns without severe wobble.
5. Round the outside by rotating the wheel and shaving high spots.
6. Mount it in a simple frame that prevents side loading.
7. Test with a light load before adding more weight.

## Mechanism

The wheel moves the main rubbing contact away from the ground. Instead of dragging a load across the whole surface, the system concentrates rubbing at the axle or bearing. The larger the wheel, the easier it crosses small bumps, but the harder it is to make round, strong, and light.

## Verification and quality control

Roll the wheel slowly under a known load or a repeated basket of stones. Watch for binding, hub heating, cracking, side wobble, and the frame pulling out of square.

If the wheel stops at the same point every time, one side is heavy. If the hub warms quickly, the fit is too tight, too rough, dirty, or dry. If the rim wanders, the axle hole is off-center or the frame is not aligned.

## Failure modes

| Failure | Likely cause | How to diagnose | Fix |
| --- | --- | --- | --- |
| Split hub | Hole too large, weak grain, sudden load | Crack radiates from the axle hole | Use tougher stock, add a thicker hub, reduce load |
| Binding | Axle rough or misaligned | Wheel turns freely by hand only when unloaded | Smooth the axle, widen the bearing, square the frame |
| Wobble | Off-center hole or uneven wheel | Rim moves side to side while turning | Re-bore if possible or shave the rim true |
| Rapid wear | Grit, dry bearing, soft material | Dust, heat, or dark paste at the hub | Clean, lubricate, and improve the bearing surface |

## Maintenance, repair, and iteration

Keep the axle surface clean and lubricated. Inspect the hub after every heavy use. A working cart or windlass should carry spare wedges, lashing, and a way to replace a cracked wheel before the entire device becomes useless.

The main improvement path is lighter construction without losing strength: better hub, truer axle, spoked rim, harder bearing surface, and a frame that keeps both wheels parallel.

## Teaching it to local collaborators

Demonstrate the difference between dragging a loaded sled and rolling the same load on a round log. Then show how a centered axle turns the log into a reusable machine.

Useful vocabulary: center, radius, axle, hub, rim, load, wobble, binding. Useful drawings: a side view of the wheel, a cross-section through the hub, and a frame holding two axles parallel.

## Historical plausibility

The wheel and axle is plausible in many ancient workshop settings, but it is not automatic. It benefits from settled roads or floors, draft animals or organized hauling, woodworking skill, and a reason to move loads repeatedly. The blocker is often not the idea alone; it is the surrounding transport and workshop system.

## What this unlocks

- [[cart|Cart]]: the obvious load-moving application.
- [[pulley|Pulley]]: a grooved wheel used with rope.
- [[potters-wheel|Potter's wheel]]: steady rotation as a workshop capability.
- [[bicycle|Bicycle]]: a much later use that demands better alignment, lighter wheels, and more reliable bearings.

## Open questions and uncertainties

- Exact timber choice depends on local species and seasoning practice.
- Long-term wear rates need field testing with real loads and ground conditions.
- A future page should split out [[woodworking|woodworking]] as a full prerequisite.

## Sources and provenance

Hand-written scaffold page for the first static content pipeline. Specific historical and technical claims need human source review.
