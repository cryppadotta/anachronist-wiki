import { defineConfig } from "astro/config";
import { remarkWikilinks } from "./src/lib/remark-wikilinks.mjs";

export default defineConfig({
  output: "static",
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: {
      theme: "github-light"
    }
  }
});

