"use client";

import { useEffect, useState } from "react";

type Repo = { name: string; description: string | null; language: string | null; url: string; updatedAt: string };

function timeAgo(iso: string) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return months < 12 ? `${months}mo ago` : `${Math.floor(months / 12)}y ago`;
}

/**
 * Recently-updated public repos, fetched client-side from /api/github (a
 * cached proxy — see app/api/github/route.ts for why this can't just be an
 * async Server Component here). Renders nothing if the API has no repos to
 * show, so a rate-limited or empty response doesn't leave a broken-looking
 * empty box on the page.
 */
export function GitHubActivity({ accent, ink, muted, rule, mono, username = "sathyarajeshpk" }: {
  accent: string; ink: string; muted: string; rule: string; mono: string; username?: string;
}) {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/github")
      .then((r) => r.json())
      .then((d) => { if (alive) setRepos(d.repos ?? []); })
      .catch(() => { if (alive) setRepos([]); });
    return () => { alive = false; };
  }, []);

  if (repos && repos.length === 0) return null;

  return (
    <div>
      <p style={{ margin: "0 0 14px", fontFamily: mono, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: muted }}>
        Recently on{" "}
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" style={{ color: accent }}>
          GitHub
        </a>
      </p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, minHeight: repos ? undefined : 60 }}>
        {(repos ?? [1, 2, 3]).map((r, i) =>
          typeof r === "number" ? (
            <li key={i} style={{ borderTop: `1px solid ${rule}`, paddingTop: 10, height: 18, opacity: 0.4 }} />
          ) : (
            <li key={r.name} style={{ borderTop: `1px solid ${rule}`, paddingTop: 10 }}>
              <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: ".92rem", color: ink }}>
                <span style={{ fontWeight: 600 }}>{r.name}</span>
                <span style={{ fontFamily: mono, fontSize: 10.5, color: muted, whiteSpace: "nowrap" }}>
                  {r.language ? `${r.language} · ` : ""}{timeAgo(r.updatedAt)}
                </span>
              </a>
              {r.description && <p style={{ margin: "4px 0 0", fontSize: ".85rem", lineHeight: 1.5, color: muted }}>{r.description}</p>}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
