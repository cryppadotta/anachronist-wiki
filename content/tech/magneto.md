---
id: tech_magneto
slug: magneto
title: Magneto
aliases: []
node_type: artifact
status: draft
summary: A rotating magnet and coil generator that can supply ignition pulses
  without depending on a charged storage battery.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: ignition-coil
    title: Ignition coil
    kind: hard
    role: Provides winding and insulation practice.
  - slug: permanent-magnet
    title: Permanent magnet
    kind: hard
    role: Supplies the magnetic field.
  - slug: machining
    title: Machining
    kind: tooling
    role: Keeps rotating parts aligned.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks shaft, bearing, and contact fits.
unlocks: []
missing_prerequisites:
  - slug: permanent-magnet
    title: Permanent magnet
    reason: A magnet material page should cover early magnetic steel and magnetization.
material_dependencies:
  - slug: copper-wire
    title: Copper wire
    importance: hard
    availability_note: Coils need conductive windings.
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Shafts, brackets, and magnetic parts need steel or iron.
tags:
  - transport
  - industrial
  - ANA-37
generation:
  created_by: llm
  provider: OpenAI Codex
  model: GPT-5
  prompt_version: ANA-37 Ford Model T prerequisite expansion
  generated_at: 2026-05-05
  request_issue: ANA-37
  reviewed_by: []
  source_review_notes:
    - No source pack was used; specific historical, regional, and technical
      claims need human source review.
confidence:
  practicality: 0.34
  historical_plausibility: 0.74
  completeness: 0.48
images:
  header:
    src: /images/tech/magneto-header.webp
    alt: Field sketch of Magneto, highlighting copper wire, mild steel, ignition
      coil, permanent magnet.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 155c2fd35190db6764a429d91f35d6665079a4388cc692b5389c5ed67e234a4c
    generated_at: 2026-05-05T20:00:34.549Z
  schematic:
    src: /images/tech/magneto-schematic.webp
    alt: Schematic diagram of Magneto, highlighting copper wire, mild steel,
      ignition coil, permanent magnet and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: b0cab2115d8155c70328d7d65a0896e570f03b72f004297a176b99b6190b096f
    generated_at: 2026-05-05T20:01:30.565Z
---

## Field briefing

A rotating magnet and coil generator that can supply ignition pulses without depending on a charged storage battery.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of magneto that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[copper-wire|Copper wire]] (hard): Coils need conductive windings.
- [[mild-steel|Mild steel]] (soft): Shafts, brackets, and magnetic parts need steel or iron.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[ignition-coil|Ignition coil]]: Provides winding and insulation practice.
- [[permanent-magnet|Permanent magnet]]: Supplies the magnetic field.
- [[machining|Machining]]: Keeps rotating parts aligned.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks shaft, bearing, and contact fits.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[permanent-magnet|Permanent magnet]]: A magnet material page should cover early magnetic steel and magnetization.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
