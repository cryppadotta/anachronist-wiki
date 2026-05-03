# Anachronist Wiki

Static-first, Git-backed technology tree wiki scaffolded from the approved [Anachronist Wiki Plan](/ANA/issues/ANA-2#document-plan) and [Source Conversation Markdown Archive](/ANA/issues/ANA-2#document-source-conversation).

## Commands

- `npm run dev` starts the local Astro dev server.
- `npm run build` emits the static Cloudflare Pages artifact in `dist/`.
- `npm run check` runs Astro and TypeScript checks.
- `npm run validate:content` validates frontmatter, graph edges, missing nodes, and safety metadata.
- `npm run build:graph` validates content and writes `generated/tech-graph.json`.
- `npm run generate:page -- --topic "Rope"` runs the maintainer-only local generation pipeline.

## Content

Technology pages live in `content/tech`. Internal prose links use Obsidian wikilinks:

```md
[[wheel-and-axle|Wheel and axle]]
```

The renderer maps wikilinks to `/tech/{slug}/` and annotates them with `data-wikilink`. Known missing prerequisites are declared in frontmatter and render as red links to `/missing/{slug}/`.

## Maintainer Draft Generation

Generation is local maintainer tooling only. The public site has no live generation path, no app auth, and no backend submission flow. Page requests should come through GitHub Issues; generated edits should land through reviewed GitHub PRs.

Set a provider key, then run the pipeline:

```sh
OPENAI_API_KEY=... npm run generate:page -- --topic "Rope" --provider openai --model gpt-5.5
```

The prompt order is fixed:

1. `graph-planner.v1.md`
2. `safety-classifier.v1.md`
3. `material-sourcing.v1.md`
4. `page-writer.v1.md`
5. `practicality-reviewer.v1.md`
6. `link-repair.v1.md`
7. `reviewer.v1.md`

By default, the command writes intermediate prompts and model outputs under `generated/drafts/`, validates the candidate page, asks the final reviewer prompt whether the draft is PR-ready, and only then writes `content/tech/{slug}.md`. Use `--draft-only` to validate and inspect artifacts without writing content, `--source-pack-file path/to/sources.md` when supplying sources, and `--request-issue URL` to preserve page-request provenance.

Provider options:

- `--provider openai` uses the direct OpenAI Responses API.
- `--provider openrouter` uses the small optional OpenRouter adapter.
- `--provider fixture` is deterministic and intended only for local CLI verification.

Generated frontmatter includes provider, model, prompt versions, prompt hashes, generation time, source commit, optional request issue, source-review notes, and confidence fields. Restricted or blocked topics must validate as non-operational graph/context pages before they are considered PR-ready.

## Contributing

- Request pages through the [GitHub page request form](https://github.com/cryppadotta/anachronist-wiki/issues/new?template=page-request.yml).
- Submit edits through pull requests. The PR template covers content, graph, provenance, and safety review.
- Generation is maintainer-only and must not be triggered by public site traffic.
