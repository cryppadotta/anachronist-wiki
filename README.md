# Anachronist Wiki

Static-first, Git-backed technology tree wiki scaffolded from the approved [Anachronist Wiki Plan](/ANA/issues/ANA-2#document-plan) and [Source Conversation Markdown Archive](/ANA/issues/ANA-2#document-source-conversation).

## Commands

- `npm run dev` starts the local Astro dev server.
- `npm run build` emits the static Cloudflare Pages artifact in `dist/`.
- `npm run pages:build` runs the Cloudflare Pages build command.
- `npm run check` runs Astro and TypeScript checks.
- `npm run validate:content` validates frontmatter, graph edges, missing nodes, and safety metadata.
- `npm run build:graph` validates content and writes `generated/tech-graph.json`.
- `npm run generate:page -- --topic "Rope"` runs the maintainer-only local generation pipeline.
- `npm run generate:images -- --slug rope` generates the header and schematic images for one page.
- `npm run backfill:images` generates missing header and schematic images for existing pages.
- `npm run new:page -- --topic "Rope"` generates a page, validates content, and rebuilds `generated/tech-graph.json`.

## Deployment

The site is configured for Cloudflare Pages as a static Direct Upload deployment:

- Build command: `npm run build`
- Build output directory: `dist`
- Pages project name: `anachronist-wiki`
- Wrangler config: `wrangler.toml`
- GitHub Actions workflow: `.github/workflows/deploy-cloudflare-pages.yml`

The deploy workflow runs on pushes to `main` and can also be started manually with `workflow_dispatch`. It requires these GitHub repository secrets:

- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with permission to edit the Pages project.
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account ID for the Pages project.

To confirm deployments from CI, inspect the `Deploy Cloudflare Pages` workflow run and the GitHub deployment URL emitted by Wrangler.

## Content

Technology pages live in `content/tech`. Internal prose links use Obsidian wikilinks:

```md
[[wheel-and-axle|Wheel and axle]]
```

The renderer maps wikilinks to `/tech/{slug}/` and annotates them with `data-wikilink`. Known missing prerequisites are declared in frontmatter and render as red links to `/missing/{slug}/`.

## Maintainer Draft Generation

Generation is local maintainer tooling only. The public site has no live generation path, no app auth, and no backend submission flow. Page requests should come through GitHub Issues; generated edits should land through reviewed GitHub PRs.

Set a provider key, then run the full page command:

```sh
OPENAI_API_KEY=... npm run new:page -- --topic "Rope" --provider openai --model gpt-5.5
```

The prompt order is fixed:

1. `graph-planner.v1.md`
2. `safety-classifier.v1.md`
3. `material-sourcing.v1.md`
4. `page-writer.v1.md`
5. `practicality-reviewer.v1.md`
6. `link-repair.v1.md`
7. `reviewer.v1.md`

By default, the command writes intermediate prompts and model outputs under `generated/drafts/`, validates the candidate page, asks the final reviewer prompt whether the draft is PR-ready, writes `content/tech/{slug}.md`, validates the content tree, and rebuilds `generated/tech-graph.json`. Use `--draft-only` to validate and inspect artifacts without writing content, `--source-pack-file path/to/sources.md` when supplying sources, and `--request-issue URL` to preserve page-request provenance. Use `npm run generate:page` only when you intentionally want to run generation without the post-write validation and graph rebuild wrapper.

After a new page is written, `npm run new:page` also generates two static page images unless `--skip-images` is passed:

- a header field-sketch illustration from `content/prompts/header-image.v1.md`
- a technical schematic from `content/prompts/schematic-image.v1.md`

Image generation uses the OpenAI Image API with `gpt-image-2` by default and writes assets under `public/images/tech/`. The generated page frontmatter records each asset path, alt text, provider, model, prompt version, prompt hash, and generation timestamp. Use `npm run generate:images -- --slug rope` for one page, or `npm run backfill:images` to fill in missing images for existing pages. Add `--force` to replace existing image metadata, or `--provider fixture` for deterministic local verification without API calls.

Provider options:

- `--provider openai` uses the direct OpenAI Responses API.
- `--provider openrouter` uses the small optional OpenRouter adapter.
- `--provider fixture` is deterministic and intended only for local CLI verification.

Generated frontmatter includes provider, model, prompt versions, prompt hashes, generation time, source commit, optional request issue, source-review notes, and confidence fields. Restricted or blocked topics must validate as non-operational graph/context pages before they are considered PR-ready.

## Contributing

- Request pages through the [GitHub page request form](https://github.com/cryppadotta/anachronist-wiki/issues/new?template=page-request.yml).
- Submit edits through pull requests. The PR template covers content, graph, provenance, and safety review.
- Generation is maintainer-only and must not be triggered by public site traffic.
