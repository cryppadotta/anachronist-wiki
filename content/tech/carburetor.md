---
id: tech_carburetor
slug: carburetor
title: Carburetor
aliases: []
node_type: artifact
status: draft
summary: A mechanical fuel-and-air metering device that lets a gasoline engine
  draw a combustible mixture under changing load.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: expert
precision_required: high
minimum_social_scale: workshop
time_to_first_working_version: weeks_to_months
prerequisites:
  - slug: gasoline
    title: Gasoline
    kind: hard
    role: Defines the fuel behavior being handled.
  - slug: fluid-metering
    title: Fluid metering
    kind: hard
    role: Controls small flows repeatably.
  - slug: machining
    title: Machining
    kind: tooling
    role: Makes small passages, needles, and seats.
  - slug: go-no-go-gauge
    title: Go/no-go gauge
    kind: test
    role: Checks fittings and orifices within accepted limits.
unlocks: []
missing_prerequisites:
  - slug: fluid-metering
    title: Fluid metering
    reason: A measurement page should cover repeatable flow control.
  - slug: brass
    title: Brass
    reason: A copper-zinc alloy page remains to be added.
material_dependencies:
  - slug: brass
    title: Brass
    importance: soft
    availability_note: Many small fuel fittings and jets benefit from corrosion-resistant metal.
  - slug: mild-steel
    title: Mild steel
    importance: soft
    availability_note: Linkages and fasteners need steel stock.
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
  practicality: 0.36
  historical_plausibility: 0.78
  completeness: 0.52
images:
  header:
    src: /images/tech/carburetor-header.webp
    alt: Field sketch of Carburetor, highlighting brass, mild steel, gasoline, fluid
      metering.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 600233108419be19bdef063e95650e64a69a53377301db1ddf4a0ea6adbcff28
    generated_at: 2026-05-05T20:00:36.000Z
  schematic:
    src: /images/tech/carburetor-schematic.webp
    alt: Schematic diagram of Carburetor, highlighting brass, mild steel, gasoline,
      fluid metering and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: b019d6ddae9761eb0da32272ea81da7fd2bb1ded8dd96612e40bdbc1e751a0b5
    generated_at: 2026-05-05T20:01:40.837Z
---

## Field briefing

A mechanical fuel-and-air metering device that lets a gasoline engine draw a combustible mixture under changing load.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of carburetor that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[brass|Brass]] (soft): Many small fuel fittings and jets benefit from corrosion-resistant metal.
- [[mild-steel|Mild steel]] (soft): Linkages and fasteners need steel stock.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[gasoline|Gasoline]]: Defines the fuel behavior being handled.
- [[fluid-metering|Fluid metering]]: Controls small flows repeatably.
- [[machining|Machining]]: Makes small passages, needles, and seats.
- [[go-no-go-gauge|Go/no-go gauge]]: Checks fittings and orifices within accepted limits.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[fluid-metering|Fluid metering]]: A measurement page should cover repeatable flow control.
- [[brass|Brass]]: A copper-zinc alloy page remains to be added.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
