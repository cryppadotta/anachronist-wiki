---
id: tech_radiator
slug: radiator
title: Radiator
aliases: []
node_type: artifact
status: draft
summary: A heat exchanger that moves engine heat from circulating water to air
  through many thin passages or surfaces.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: water-jacket-cooling
    title: Water-jacket cooling
    kind: hard
    role: Defines the engine cooling loop.
  - slug: sheet-metal-working
    title: Sheet metal working
    kind: tooling
    role: Forms tanks, fins, and ducts.
  - slug: leak-test
    title: Leak test
    kind: test
    role: Finds coolant leaks before use.
  - slug: soldering
    title: Soldering
    kind: soft
    role: Joins thin metal cooling parts.
unlocks: []
missing_prerequisites:
  - slug: sheet-metal-working
    title: Sheet metal working
    reason: A general thin-metal forming page is needed.
  - slug: leak-test
    title: Leak test
    reason: A pressure/leak inspection page can be added later.
  - slug: soldering
    title: Soldering
    reason: A joining page should cover soldering safely.
  - slug: copper-sheet
    title: Copper sheet
    reason: A sheet copper supply page remains to be added.
material_dependencies:
  - slug: sheet-steel
    title: Sheet steel
    importance: soft
    availability_note: Tanks and brackets can use sheet metal.
  - slug: copper-sheet
    title: Copper sheet
    importance: soft
    availability_note: Many radiators benefit from conductive copper or brass sheet.
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
  practicality: 0.48
  historical_plausibility: 0.78
  completeness: 0.5
images:
  header:
    src: /images/tech/radiator-header.webp
    alt: Field sketch of Radiator, highlighting sheet steel, copper sheet,
      water-jacket cooling, sheet metal working.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 1a9ea6f3b76d53c711804ada23f7b0d48cd6eea4a418fdb5cf0123f944ec20bd
    generated_at: 2026-05-05T20:02:02.648Z
  schematic:
    src: /images/tech/radiator-schematic.webp
    alt: Schematic diagram of Radiator, highlighting sheet steel, copper sheet,
      water-jacket cooling, sheet metal working and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: de5b23c8310a073d64b75234c04da130625339d0567078e96c087141b366ea64
    generated_at: 2026-05-05T20:03:00.208Z
---

## Field briefing

A heat exchanger that moves engine heat from circulating water to air through many thin passages or surfaces.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of radiator that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[sheet-steel|Sheet steel]] (soft): Tanks and brackets can use sheet metal.
- [[copper-sheet|Copper sheet]] (soft): Many radiators benefit from conductive copper or brass sheet.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[water-jacket-cooling|Water-jacket cooling]]: Defines the engine cooling loop.
- [[sheet-metal-working|Sheet metal working]]: Forms tanks, fins, and ducts.
- [[leak-test|Leak test]]: Finds coolant leaks before use.
- [[soldering|Soldering]]: Joins thin metal cooling parts.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[sheet-metal-working|Sheet metal working]]: A general thin-metal forming page is needed.
- [[leak-test|Leak test]]: A pressure/leak inspection page can be added later.
- [[soldering|Soldering]]: A joining page should cover soldering safely.
- [[copper-sheet|Copper sheet]]: A sheet copper supply page remains to be added.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
