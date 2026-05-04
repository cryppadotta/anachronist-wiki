import { defineConfig } from "astro/config";
import { remarkWikilinks } from "./src/lib/remark-wikilinks.mjs";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://anachronist-wiki.pages.dev",
  output: "static",
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: {
      theme: "github-light"
    }
  }
});
