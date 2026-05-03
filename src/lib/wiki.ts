export type WikiTargetKind = "tech" | "missing";

export function normalizeWikiSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function techPath(slug: string): string {
  return `/tech/${normalizeWikiSlug(slug)}/`;
}

export function missingPath(slug: string): string {
  return `/missing/${normalizeWikiSlug(slug)}/`;
}

