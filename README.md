# Anachronist Wiki

Static-first, Git-backed technology tree wiki scaffolded from the approved [Anachronist Wiki Plan](/ANA/issues/ANA-2#document-plan) and [Source Conversation Markdown Archive](/ANA/issues/ANA-2#document-source-conversation).

## Commands

- `npm run dev` starts the local Astro dev server.
- `npm run build` emits the static Cloudflare Pages artifact in `dist/`.
- `npm run check` runs Astro and TypeScript checks.
- `npm run validate:content` validates Markdown frontmatter, graph metadata, safety rules, and missing-node declarations.
- `npm run build:graph` writes `generated/tech-graph.json`.

## Content

Technology pages live in `content/tech`. Internal prose links use Obsidian wikilinks:

```md
[[wheel-and-axle|Wheel and axle]]
```

The renderer maps wikilinks to `/tech/{slug}/` and annotates them with `data-wikilink`. Known missing prerequisites are declared in frontmatter and render as red links to `/missing/{slug}/`.

## Contributing

- Request pages through the [GitHub page request form](https://github.com/cryppadotta/anachronist-wiki/issues/new?template=page-request.yml).
- Submit edits through pull requests. The PR template covers content, graph, provenance, and safety review.
- Generation is maintainer-only and must not be triggered by public site traffic.
