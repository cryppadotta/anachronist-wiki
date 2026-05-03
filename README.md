# Anachronist Wiki

Static-first, Git-backed technology tree wiki scaffolded from the approved [Anachronist Wiki Plan](/ANA/issues/ANA-2#document-plan) and [Source Conversation Markdown Archive](/ANA/issues/ANA-2#document-source-conversation).

## Commands

- `npm run dev` starts the local Astro dev server.
- `npm run build` emits the static Cloudflare Pages artifact in `dist/`.
- `npm run check` runs Astro and TypeScript checks.

## Content

Technology pages live in `content/tech`. Internal prose links use Obsidian wikilinks:

```md
[[wheel-and-axle|Wheel and axle]]
```

The renderer maps wikilinks to `/tech/{slug}/` and annotates them with `data-wikilink`. Known missing prerequisites are declared in frontmatter and render as red links to `/missing/{slug}/`.

