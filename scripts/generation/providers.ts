export type ProviderRequest = {
  stage: string;
  prompt: string;
  temperature: number;
};

export type GenerationProvider = {
  name: string;
  model: string;
  complete(request: ProviderRequest): Promise<string>;
};

type ProviderOptions = {
  provider: string;
  model?: string;
  temperature: number;
};

export function createProvider(options: ProviderOptions): GenerationProvider {
  if (options.provider === "openai") {
    return new OpenAIProvider(options.model ?? "gpt-5.5", options.temperature);
  }
  if (options.provider === "openrouter") {
    return new OpenRouterProvider(options.model ?? "openai/gpt-5.5", options.temperature);
  }
  if (options.provider === "fixture") {
    return new FixtureProvider(options.model ?? "fixture-model");
  }

  throw new Error(`Unknown provider "${options.provider}". Use openai, openrouter, or fixture.`);
}

class OpenAIProvider implements GenerationProvider {
  name = "openai";
  model: string;
  private temperature: number;

  constructor(model: string, temperature: number) {
    this.model = model;
    this.temperature = temperature;
  }

  async complete(request: ProviderRequest): Promise<string> {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is required for --provider openai.");
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: this.model,
        temperature: request.temperature ?? this.temperature,
        input: [
          {
            role: "user",
            content: request.prompt
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI request failed (${response.status}): ${await response.text()}`);
    }

    const payload = await response.json();
    if (typeof payload.output_text === "string") {
      return payload.output_text;
    }

    const text = payload.output
      ?.flatMap((item: any) => item.content ?? [])
      ?.map((content: any) => content.text ?? "")
      ?.join("")
      ?.trim();

    if (!text) {
      throw new Error("OpenAI response did not contain text output.");
    }

    return text;
  }
}

class OpenRouterProvider implements GenerationProvider {
  name = "openrouter";
  model: string;
  private temperature: number;

  constructor(model: string, temperature: number) {
    this.model = model;
    this.temperature = temperature;
  }

  async complete(request: ProviderRequest): Promise<string> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error("OPENROUTER_API_KEY is required for --provider openrouter.");
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/cryppadotta/anachronist-wiki",
        "X-Title": "Anachronist Wiki"
      },
      body: JSON.stringify({
        model: this.model,
        temperature: request.temperature ?? this.temperature,
        messages: [{ role: "user", content: request.prompt }]
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter request failed (${response.status}): ${await response.text()}`);
    }

    const payload = await response.json();
    const text = payload.choices?.[0]?.message?.content;
    if (typeof text !== "string" || !text.trim()) {
      throw new Error("OpenRouter response did not contain message content.");
    }

    return text;
  }
}

class FixtureProvider implements GenerationProvider {
  name = "fixture";
  model: string;

  constructor(model: string) {
    this.model = model;
  }

  async complete(request: ProviderRequest): Promise<string> {
    const topic = extractTag(request.prompt, "TOPIC") || extractYamlField(request.prompt, "title") || "test article";
    const slug = slugify(extractTag(request.prompt, "SLUG") || extractYamlField(request.prompt, "slug") || topic);
    const title = titleize(topic);
    const restricted =
      /gunpowder|explosive|firearm|ammunition|toxin|poison|pathogen|sabotage/i.test(topic) ||
      /safety_class:\s*(restricted|blocked)/i.test(request.prompt);

    switch (request.stage) {
      case "graph-planner":
        return JSON.stringify(fixtureGraphPlan(slug, title, restricted), null, 2);
      case "safety-classifier":
        return JSON.stringify(fixtureSafety(slug, title, restricted), null, 2);
      case "material-sourcing":
        return JSON.stringify(fixtureMaterials(restricted), null, 2);
      case "page-writer":
        return fixturePage(slug, title, restricted);
      case "practicality-reviewer":
        return JSON.stringify(fixturePracticality(slug, title, restricted), null, 2);
      case "link-repair":
        return JSON.stringify(
          {
            mode: "corrected_page",
            corrected_markdown: fixturePage(slug, title, restricted),
            changes_made: [],
            remaining_issues: [],
            new_missing_pages: []
          },
          null,
          2
        );
      case "reviewer":
        return JSON.stringify(fixtureReviewer(slug, title), null, 2);
      default:
        return "{}";
    }
  }
}

function fixtureGraphPlan(slug: string, title: string, restricted: boolean) {
  return {
    canonical: {
      slug,
      title,
      aliases: [],
      primary_node_type: restricted ? "knowledge" : "artifact",
      secondary_node_types: [],
      summary: restricted
        ? `${title} is included only as a non-operational graph node for context.`
        : `${title} is a practical reconstruction target for the technology tree.`,
      scope_included: ["graph context", "safer adjacent prerequisites"],
      scope_excluded: ["modern industrial treatment"]
    },
    safety: {
      preliminary_safety_class: restricted ? "restricted" : "allowed",
      risk_rationale: restricted ? "The topic can enable dangerous operational misuse." : "Ordinary workshop risk only.",
      page_treatment: restricted ? "non_operational_context" : "practical",
      restricted_content_to_avoid: []
    },
    versions: [],
    prerequisites: restricted
      ? [
          {
            slug: "public-safety",
            title: "Public safety",
            node_type: "institution",
            edge_kind: "institutional",
            role: "Keeps the graph treatment non-operational and oriented toward safety.",
            needed_for_version: ["context"],
            existing_page_likely: false,
            confidence: 0.7
          }
        ]
      : [
          {
            slug: "woodworking",
            title: "Woodworking",
            node_type: "tool",
            edge_kind: "hard",
            role: "Shapes the first crude version.",
            needed_for_version: ["minimum_viable"],
            existing_page_likely: false,
            confidence: 0.8
          }
        ],
    material_supply_chains: restricted
      ? []
      : [
          {
            material_slug: "timber",
            material_title: "Timber",
            importance: "hard",
            where_found: ["woodland"],
            identification_methods: ["straight grain and sound stock"],
            harvesting_or_extraction_nodes: ["woodworking"],
            refining_or_preparation_nodes: ["seasoning-wood"],
            quality_tests: ["visual inspection"],
            substitutes: [],
            confidence: 0.7
          }
        ],
    social_or_institutional_prerequisites: [],
    tests_and_quality_control: [],
    unlocks: [
      {
        slug: "workshop-organization",
        title: "Workshop organization",
        node_type: "institution",
        relationship: "More repeatable work benefits from coordinated roles.",
        confidence: 0.5
      }
    ],
    alternative_paths: [],
    graph_notes: {
      possible_cycles: [],
      missing_but_recommended_pages: [
        {
          slug: restricted ? "public-safety" : "woodworking",
          title: restricted ? "Public safety" : "Woodworking",
          node_type: restricted ? "institution" : "tool",
          reason: "Referenced by the fixture draft."
        },
        {
          slug: "workshop-organization",
          title: "Workshop organization",
          node_type: "institution",
          reason: "Referenced by the fixture draft."
        }
      ],
      merge_candidates: []
    }
  };
}

function fixtureSafety(slug: string, title: string, restricted: boolean) {
  return {
    slug,
    title,
    safety_class: restricted ? "restricted" : "allowed",
    page_treatment: restricted ? "non_operational_context" : "practical",
    risk_summary: restricted ? "Non-operational treatment is required." : "Ordinary workshop risks apply.",
    allowed_content: restricted ? ["historical context", "safer adjacent links"] : ["practical field-manual guidance"],
    disallowed_content: restricted ? ["operational instructions"] : [],
    required_warnings: [],
    safe_adjacent_nodes: restricted ? [{ slug: "public-safety", title: "Public safety", reason: "Safer context node." }] : [],
    red_flags_for_reviewers: [],
    rewrite_guidance_for_page_writer: restricted ? "Use restricted headings only." : "Write a practical page.",
    confidence: 0.9
  };
}

function fixtureMaterials(restricted: boolean) {
  return {
    materials: restricted
      ? []
      : [
          {
            slug: "timber",
            title: "Timber",
            importance: "hard",
            sourcing_notes: "Use straight, seasoned wood where available."
          }
        ],
    source_review_notes: ["Fixture provider output. Specific historical and technical claims need human source review."]
  };
}

function fixturePage(slug: string, title: string, restricted: boolean): string {
  if (restricted) {
    return `---
id: tech_${slug}
slug: ${slug}
title: ${title}
aliases: []
node_type: knowledge
status: restricted
summary: ${title} is included for graph completeness as a non-operational context node.
safety_class: restricted
era_floor: historical
difficulty: expert
precision_required: extreme
time_to_first_working_version: unknown
prerequisites:
  - slug: public-safety
    title: Public safety
    kind: institutional
    role: Keeps the treatment oriented toward prevention and context.
unlocks:
  - slug: workshop-organization
    title: Workshop organization
    kind: enables
    role: Context for safer social handling of dangerous knowledge.
missing_prerequisites:
  - slug: public-safety
    title: Public safety
    reason: Safer adjacent node for restricted topics.
  - slug: workshop-organization
    title: Workshop organization
    reason: Referenced as a safer adjacent node.
tags:
  - restricted
generation:
  created_by: llm
  reviewed_by: []
confidence:
  practicality: 0.1
  historical_plausibility: 0.5
  completeness: 0.4
---

# ${title}

## Field briefing

${title} is present in the graph only so adjacent technologies can acknowledge its historical role without turning the page into a reproduction guide.

## Why this node exists in the graph

Some technologies affect institutions, workshop safety, law, and historical development. This page links that context to [[public-safety|Public safety]] and [[workshop-organization|Workshop organization]].

## Non-operational treatment

This draft intentionally omits recipes, quantities, construction steps, optimization advice, and troubleshooting. It should remain useful as graph context without enabling reproduction.

## High-level mechanism

At a high level, the topic belongs to the history of controlled energy and hazardous materials. The page should stay conceptual and point readers toward safer adjacent prerequisites.

## Historical role

Historical claims in this fixture draft need human source review before publication.

## Safer adjacent prerequisites

- [[public-safety|Public safety]]
- [[workshop-organization|Workshop organization]]

## What this unlocked historically

The historical downstream effects belong in reviewed, non-operational context pages.

## Open questions and uncertainties

- Human reviewers must verify the exact historical framing.

## Sources and provenance

Generated draft. Specific historical and technical claims need human source review.
`;
  }

  return `---
id: tech_${slug}
slug: ${slug}
title: ${title}
aliases: []
node_type: artifact
status: generated
summary: ${title} is a practical reconstruction target for the Anachronist Wiki technology tree.
safety_class: allowed
era_floor: ancient
difficulty: basic
precision_required: low
time_to_first_working_version: hours
prerequisites:
  - slug: woodworking
    title: Woodworking
    kind: hard
    role: Shapes and fits the first crude version.
unlocks:
  - slug: workshop-organization
    title: Workshop organization
    kind: enables
    role: Repeatable production benefits from coordinated workshop roles.
missing_prerequisites:
  - slug: woodworking
    title: Woodworking
    reason: Referenced by the generated draft.
  - slug: workshop-organization
    title: Workshop organization
    reason: Referenced by the generated draft.
tags:
  - fixture
generation:
  created_by: llm
  reviewed_by: []
confidence:
  practicality: 0.6
  historical_plausibility: 0.6
  completeness: 0.6
---

# ${title}

## Field briefing

${title} is treated as a field-manual target. The first useful version should be crude, testable, and repairable before later refinements are attempted.

## What you are trying to make

Make a working version that proves the core function with local materials and simple workshop habits.

## Minimum viable version

The minimum viable version uses straight, sound timber and simple [[woodworking|Woodworking]] to create a demonstrable object that can be inspected and repaired.

## Better versions

| Version | Additional prerequisites | Improvement | New failure modes |
|---|---|---|---|
| Crude | [[woodworking|Woodworking]] | Proves the mechanism | Poor alignment |
| Workshop | [[workshop-organization|Workshop organization]] | Repeatable production | More coordination failures |

## Prerequisite tree

### Hard prerequisites

- [[woodworking|Woodworking]]

### Useful but optional prerequisites

- [[workshop-organization|Workshop organization]]

### Measurement and testing prerequisites

- Repeated visual inspection and load testing.

### Social or institutional prerequisites

- A household can make the first version; a workshop improves repeatability.

### Substitute paths

- Substitute poorer materials only for demonstration, and expect a shorter working life.

## Materials and sourcing

### Timber

- **Use:** supplies the first structural parts.
- **Where to find it:** woodland, hedgerows, and salvaged building stock.
- **Arthurian Britain note:** likely local or regional, depending on species and rights of access.
- **How to recognize it:** look for straight grain, few knots, and no rot.
- **How to obtain it:** harvest or salvage sound pieces with permission and labor.
- **How to prepare or refine it:** season and shape it with [[woodworking|Woodworking]].
- **Quality test:** inspect for cracks after the first working trial.
- **Substitutes:** inferior wood can prove the concept but wears sooner.

## Tools and workshop requirements

Cutting, boring, marking, and holding tools are enough for the first attempt. The work is easier if one person marks and another holds the stock.

## Procedure

1. Select sound material.
2. Mark the important faces and centers.
3. Shape the crude parts.
4. Assemble loosely enough to adjust.
5. Test gently before applying full use.

## Mechanism

The useful lesson is that simple parts can be made repeatable by marking, testing, and improving one failure at a time.

## Verification and quality control

Test the first version under a repeated load or repeated use. Watch for cracking, looseness, and misalignment.

## Failure modes

| Failure | Likely cause | How to diagnose | Fix |
|---|---|---|---|
| Splitting | Weak stock | Crack after use | Choose better-grained timber |
| Looseness | Poor fit | Parts shift under hand pressure | Refit or wedge |

## Maintenance, repair, and iteration

Inspect after use, tighten loose joints, and replace cracked stock before scaling up.

## Teaching it to local collaborators

Teach the vocabulary of mark, fit, test, and repair. Demonstrate one bad part and one corrected part side by side.

## Historical plausibility

The fixture draft uses conservative assumptions and needs human source review before publication.

## What this unlocks

- [[workshop-organization|Workshop organization]]

## Open questions and uncertainties

- A human reviewer must replace this fixture draft with topic-specific material before merge.

## Sources and provenance

Generated draft. Specific historical and technical claims need human source review.
`;
}

function fixturePracticality(slug: string, title: string, restricted: boolean) {
  return {
    slug,
    title,
    overall_assessment: restricted ? "good" : "needs_revision",
    publish_recommendation: "publish_after_minor_edits",
    summary: "Fixture review output for CLI verification.",
    scores: {
      practicality: restricted ? 0.2 : 0.6,
      material_realism: restricted ? 0.5 : 0.6,
      tool_realism: 0.6,
      process_clarity: restricted ? 0.5 : 0.6,
      measurement_and_testing: 0.6,
      social_feasibility: 0.6,
      historical_plausibility: 0.6,
      safety_compliance: 0.9,
      graph_quality: 0.6
    },
    critical_issues: [],
    missing_practical_details: [],
    material_sourcing_gaps: [],
    unrealistic_assumptions: [],
    unsafe_or_restricted_content: [],
    graph_edge_corrections: [],
    section_rewrite_suggestions: [],
    human_review_notes: ["Fixture output requires human source review."]
  };
}

function fixtureReviewer(slug: string, title: string) {
  return {
    slug,
    title,
    decision: "approve_with_minor_edits",
    summary: "Fixture output is structurally ready for CLI validation.",
    required_changes: [],
    suggested_changes: [],
    safety_findings: [{ severity: "none", finding: "No fixture safety issue.", required_action: "none" }],
    graph_findings: [],
    material_sourcing_findings: [],
    obsidian_findings: [],
    confidence_updates: {
      practicality: 0.6,
      historical_plausibility: 0.6,
      completeness: 0.6
    },
    ready_for_pr: true,
    ready_for_merge: false,
    human_reviewer_checklist: ["Replace fixture claims with reviewed source-backed content before merge."]
  };
}

function extractTag(input: string, tag: string): string | null {
  const match = input.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match?.[1]?.trim() || null;
}

function extractYamlField(input: string, field: string): string | null {
  const match = input.match(new RegExp(`^${field}:\\s*(.+)$`, "im"));
  return match?.[1]?.trim().replace(/^["']|["']$/g, "") || null;
}

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleize(value: string): string {
  return value
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
