---
id: tech_service_manual
slug: service-manual
title: Service manual
aliases: []
node_type: knowledge
status: draft
summary: A standardized maintenance document that turns a complex vehicle into a
  repairable public technology rather than a one-off artifact.
safety_class: allowed
era_floor: industrial
difficulty: intermediate
precision_required: medium
minimum_social_scale: city
time_to_first_working_version: days_to_weeks
prerequisites:
  - slug: writing
    title: Writing
    kind: knowledge
    role: Enables repeatable instructions.
  - slug: technical-drawing
    title: Technical drawing
    kind: knowledge
    role: Explains assemblies and part locations.
  - slug: interchangeable-parts
    title: Interchangeable parts
    kind: hard
    role: Makes replacement instructions meaningful.
  - slug: quality-control-records
    title: Quality-control records
    kind: institutional
    role: Feeds known faults and revisions back into service practice.
unlocks: []
missing_prerequisites: []
material_dependencies:
  - slug: paper
    title: Paper
    importance: hard
    availability_note: Manuals need portable durable pages.
  - slug: ink
    title: Ink
    importance: hard
    availability_note: Printed or copied instructions need readable marks.
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
  practicality: 0.72
  historical_plausibility: 0.84
  completeness: 0.56
images:
  header:
    src: /images/tech/service-manual-header.webp
    alt: Field sketch of Service manual, highlighting paper, ink, writing, technical
      drawing.
    provider: openai
    model: gpt-image-2
    prompt_version: header-image.v1.md
    prompt_hash: 6602b360830f6d48754540f010c1d16c0824fc6c59f5e8f1c38a59f486aa6198
    generated_at: 2026-05-05T20:09:23.824Z
  schematic:
    src: /images/tech/service-manual-schematic.webp
    alt: Schematic diagram of Service manual, highlighting paper, ink, writing,
      technical drawing and major working relationships.
    provider: openai
    model: gpt-image-2
    prompt_version: schematic-image.v1.md
    prompt_hash: 5be7aa05a7dc9f6669828727f3a5ba60e423a5b9b4619c2d629cabb475c93e77
    generated_at: 2026-05-05T20:10:16.520Z
---

## Field briefing

A standardized maintenance document that turns a complex vehicle into a repairable public technology rather than a one-off artifact.

For an anachronist technology tree, the useful target is not a museum-perfect reproduction. It is a path through materials, tools, measurements, records, and institutions that makes the capability understandable and auditable.

## What you are trying to make

Build or specify a dependable early version of service manual that can be inspected, repaired, and taught in a workshop or factory setting. The first version should prove the core relationship before chasing speed, power, comfort, or mass production.

## Minimum viable version

A minimum version demonstrates the working principle with conservative loads, visible parts, and simple access for inspection. It should use known materials, avoid hidden failure modes, and leave enough records that another workshop can repeat the successful parts of the build.

## Better versions

| Version | Added capability | Main new dependency |
| --- | --- | --- |
| Bench or pattern version | Proves geometry, fit, and sequence without full service loads | [[technical-drawing|Technical drawing]] |
| Workshop version | Works repeatedly with inspection and repair access | [[quality-control-records|Quality-control records]] |
| Factory version | Can be made and serviced in quantity | [[interchangeable-parts|Interchangeable parts]] |

## Materials and sourcing

- [[paper|Paper]] (hard): Manuals need portable durable pages.
- [[ink|Ink]] (hard): Printed or copied instructions need readable marks.

Materials should be tracked by source, batch, preparation, substitutes, storage limits, and local geography. For vehicle-scale work, the social supply chain matters as much as the physical stock.

## Prerequisite tree

- [[writing|Writing]]: Enables repeatable instructions.
- [[technical-drawing|Technical drawing]]: Explains assemblies and part locations.
- [[interchangeable-parts|Interchangeable parts]]: Makes replacement instructions meaningful.
- [[quality-control-records|Quality-control records]]: Feeds known faults and revisions back into service practice.

These edges are explicit graph relationships. Prose wikilinks provide reading paths, but the frontmatter edges are the source of graph truth.

## Verification and quality control

Use fit checks, visual inspection, batch labels, and conservative proof tests before trusting this node in a larger vehicle. Keep inspection records close to the part or process so failures can be traced back to material, tooling, training, or design changes.

## Where it leads

This node supports later automobile, factory, repair, and transport systems. It is most useful when paired with [[workshop-organization|Workshop organization]], [[technical-drawing|Technical drawing]], and [[quality-control-records|Quality-control records]].
