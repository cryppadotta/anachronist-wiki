import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const WIKILINK = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;
const SLUG_LINE = /^slug:\s*['"]?([a-z0-9][a-z0-9-]*)['"]?\s*$/m;

function normalizeWikiSlug(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function loadKnownSlugs() {
  const contentDir = path.join(process.cwd(), "content", "tech");
  const slugs = new Set();
  let files = [];
  try {
    files = readdirSync(contentDir);
  } catch {
    return slugs;
  }
  for (const file of files) {
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue;
    let raw;
    try {
      raw = readFileSync(path.join(contentDir, file), "utf8");
    } catch {
      continue;
    }
    const match = FRONTMATTER.exec(raw);
    if (!match) continue;
    const slugMatch = SLUG_LINE.exec(match[1]);
    if (slugMatch) {
      slugs.add(normalizeWikiSlug(slugMatch[1]));
    } else {
      slugs.add(normalizeWikiSlug(file.replace(/\.(md|mdx)$/, "")));
    }
  }
  return slugs;
}

const knownSlugs = loadKnownSlugs();

function transformTextNode(node, index, parent) {
  if (!parent || typeof node.value !== "string" || !node.value.includes("[[")) {
    return;
  }

  const nextNodes = [];
  let cursor = 0;
  let match;

  WIKILINK.lastIndex = 0;
  while ((match = WIKILINK.exec(node.value)) !== null) {
    const [raw, target, label] = match;
    const slug = normalizeWikiSlug(target);
    const exists = knownSlugs.has(slug);
    const className = exists ? ["wikilink"] : ["wikilink", "missing-link"];

    if (match.index > cursor) {
      nextNodes.push({ type: "text", value: node.value.slice(cursor, match.index) });
    }

    nextNodes.push({
      type: "link",
      url: exists ? `/tech/${slug}/` : `/missing/${slug}/`,
      title: exists ? null : "Missing page — open to request it on GitHub",
      data: {
        hProperties: {
          className,
          dataWikilink: slug,
          dataWikilinkTarget: exists ? "tech" : "missing"
        }
      },
      children: [{ type: "text", value: label || target }]
    });

    cursor = match.index + raw.length;
  }

  if (cursor === 0) {
    return;
  }

  if (cursor < node.value.length) {
    nextNodes.push({ type: "text", value: node.value.slice(cursor) });
  }

  parent.children.splice(index, 1, ...nextNodes);
  return index + nextNodes.length;
}

function visit(node) {
  if (!node || !Array.isArray(node.children)) {
    return;
  }

  for (let index = 0; index < node.children.length; index += 1) {
    const child = node.children[index];
    if (child.type === "text") {
      const nextIndex = transformTextNode(child, index, node);
      if (typeof nextIndex === "number") {
        index = nextIndex - 1;
      }
      continue;
    }

    visit(child);
  }
}

export function remarkWikilinks() {
  return (tree) => visit(tree);
}
