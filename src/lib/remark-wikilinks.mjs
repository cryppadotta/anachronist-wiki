const WIKILINK = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

function normalizeWikiSlug(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function wikiUrl(slug) {
  return `/tech/${normalizeWikiSlug(slug)}/`;
}

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

    if (match.index > cursor) {
      nextNodes.push({ type: "text", value: node.value.slice(cursor, match.index) });
    }

    nextNodes.push({
      type: "link",
      url: wikiUrl(slug),
      title: null,
      data: {
        hProperties: {
          className: ["wikilink"],
          dataWikilink: slug,
          dataWikilinkTarget: "tech"
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
