---
id: tech_lead_acid_battery
slug: lead-acid-battery
title: Lead-acid battery
aliases: []
node_type: artifact
status: draft
summary: A rechargeable storage battery using lead plates and acid electrolyte,
  included here as a high-level prerequisite for vehicle electrical systems.
safety_class: caution
page_treatment: practical_with_cautions
era_floor: industrial
difficulty: advanced
precision_required: medium
minimum_social_scale: workshop
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: lead-ore
    title: Lead ore
    kind: material_source
    role: Provides the lead supply chain.
  - slug: acid-handling
    title: Acid handling
    kind: safety
    role: Requires protective habits, labeling, and storage.
  - slug: container-sealing
    title: Container sealing
    kind: hard
    role: Prevents leaks and contamination.
  - slug: quality-control-records
    title: Quality-control records
    kind: test
    role: Tracks charging behavior and failures.
unlocks: []
missing_prerequisites:
  - slug: acid-handling
    title: Acid handling
    reason: A safety-focused page should cover acids without operational recipes.
  - slug: container-sealing
    title: Container sealing
    reason: A sealing page should cover acid-resistant containers.
  - slug: glass
    title: Glass
    reason: Glassmaking and glass vessels are not expanded in this pack.
material_dependencies:
  - slug: lead-ore
    title: Lead ore
    importance: hard
    availability_note: Lead supply is foundational.
  - slug: glass
    title: Glass
    importance: soft
    availability_note: Jars and inspection vessels can support early cells.
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
  practicality: 0.3
  historical_plausibility: 0.76
  completeness: 0.42
images:
  header:
    src: /images/tech/lead-acid-battery-header.webp
    alt: Field sketch of Lead-acid battery, highlighting lead ore, glass, acid
      handling, artifact.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: a4bf1c7d1d8a56fb034029ebf009362c379285c4407434f1be2a2edeaf1ab3c1
    generated_at: 2026-05-05T20:00:11.674Z
  schematic:
    src: /images/tech/lead-acid-battery-schematic.webp
    alt: Schematic diagram of Lead-acid battery, highlighting lead ore, glass, acid
      handling, artifact and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: a34f756b735d077db9e904fbd1bc50d5b5aad4f0d2b90203eee370ddce2d8f21
    generated_at: 2026-05-05T20:01:12.732Z
---

## Field briefing

A rechargeable storage battery using lead plates and acid electrolyte, included here as a high-level prerequisite for vehicle electrical systems.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of lead-acid battery that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[lead-ore|Lead ore]] (hard): Lead supply is foundational.
- [[glass|Glass]] (soft): Jars and inspection vessels can support early cells.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[lead-ore|Lead ore]]: Provides the lead supply chain.
- [[acid-handling|Acid handling]]: Requires protective habits, labeling, and storage.
- [[container-sealing|Container sealing]]: Prevents leaks and contamination.
- [[quality-control-records|Quality-control records]]: Tracks charging behavior and failures.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Hazards and controls

Treat this page as graph and workshop-planning context. Avoid exact settings, fuel handling recipes, ignition timing recipes, pressure targets, or troubleshooting steps that would turn a hazardous system into operational instructions without expert review. Keep guards, labels, ventilation, fire separation, conservative proof tests, and shutdown procedures visible wherever the node touches moving machinery, fuel, stored energy, hot surfaces, or heavy loads.

## Edges left as empty pages

- [[acid-handling|Acid handling]]: A safety-focused page should cover acids without operational recipes.
- [[container-sealing|Container sealing]]: A sealing page should cover acid-resistant containers.
- [[glass|Glass]]: Glassmaking and glass vessels are not expanded in this pack.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
