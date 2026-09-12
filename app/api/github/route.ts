import { NextResponse } from "next/server";

const USERNAME = "sathyarajeshpk";

type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  fork: boolean;
  html_url: string;
  pushed_at: string;
};

/**
 * Proxies GitHub's public repos API with server-side caching (1h). All four
 * homepage themes render inside SiteSwitcher, a client component, so a real
 * async Server Component fetch isn't available to them (async components
 * can't run in a client-rendered tree) — this route + a client-side
 * GitHubActivity component is the workaround, and it also means at most one
 * real GitHub call per hour regardless of visitor count, not one per visitor.
 */
export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=8`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
    const repos: GitHubRepo[] = await res.json();
    const data = repos
      .filter((r) => !r.fork)
      .slice(0, 4)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        url: r.html_url,
        updatedAt: r.pushed_at,
      }));
    return NextResponse.json({ repos: data });
  } catch {
    return NextResponse.json({ repos: [] });
  }
}
