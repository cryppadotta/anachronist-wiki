export type WikiTargetKind = "tech" | "missing";

export const githubRepositoryUrl = "https://github.com/cryppadotta/anachronist-wiki";

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

export function pageRequestUrl(title?: string): string {
  const params = new URLSearchParams({
    template: "page-request.yml"
  });

  if (title) {
    params.set("title", `Request page: ${title}`);
  }

  return `${githubRepositoryUrl}/issues/new?${params.toString()}`;
}
