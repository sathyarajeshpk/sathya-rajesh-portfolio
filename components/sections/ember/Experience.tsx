import { EMBER, MONO, GROTESK, shell } from "@/components/site/emberStyles";

const roles = [
  { from: "2026 — PRESENT", tag: "FULL-TIME · CHENNAI", company: "Agilisium Consulting", role: "Senior Data Engineer",
    body: "Building an omnichannel data platform for a pharmaceutical client — 100+ datasets across eight domains.",
    points: ["Landing → Bronze → Silver → Data Cloud medallion on Databricks and ADLS Gen2", "Config-driven onboarding for REST API and SFTP sources", "Key Vault-backed secret scopes throughout"] },
  { from: "2019 — 2025", tag: "FULL-TIME · CHENNAI", company: "TransUnion", role: "Analyst → Associate Lead → Lead",
    body: "Six years leading production data solutions for a global technology centre.",
    points: ["Mentored a team of 20 engineers", "Cut incident resolution time 30% through process redesign", "Migrated 50+ TB of legacy data to ADLS Gen2"] },
  { from: "2018 — 2019", tag: "FULL-TIME · CHENNAI", company: "Tata Consultancy Services", role: "Senior Process Associate",
    body: "Monitored batch ETL workflows and validated operational data quality.",
    points: ["Optimised SQL queries and stored procedures, cutting execution time 20%"] },
  { from: "2013 — 2018", tag: "FULL-TIME · CHENNAI", company: "Sutherland · Sitel", role: "Consultant, Senior Associate",
    body: "Five years of watching systems fail in production — where the operational instinct came from.",
    points: ["Analysed customer interaction data and supported analytics extraction"] },
];

export default function Experience() {
  return (
    <section id="em-experience" style={shell}>
      <p data-reveal="1" style={{ margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: EMBER.accent }}>Experience</p>
      <h2 data-reveal="1" style={{ fontFamily: GROTESK, fontWeight: 700, color: EMBER.ink, margin: "16px 0 8px", fontSize: "clamp(1.9rem,4vw,3rem)", lineHeight: 1.05 }}>
        Where I&rsquo;ve Been
      </h2>
      <p data-reveal="1" style={{ margin: 0, maxWidth: "48ch", fontSize: "1rem", color: EMBER.muted }}>
        My professional journey through different roles and environments.
      </p>

      <div style={{ marginTop: "clamp(36px,5vw,56px)", display: "flex", flexDirection: "column" }}>
        {roles.map((r) => (
          <article key={r.company} data-reveal="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)", gap: "8px clamp(20px,3vw,48px)", borderTop: `1px solid ${EMBER.rule}`, padding: "28px 0" }}>
            <div>
              <p style={{ margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", color: EMBER.accent }}>{r.from}</p>
              <p style={{ margin: "6px 0 0", fontFamily: MONO, fontSize: 10, letterSpacing: ".1em", color: EMBER.soft }}>{r.tag}</p>
            </div>
            <div>
              <h3 style={{ margin: 0, fontFamily: GROTESK, fontWeight: 700, fontSize: "1.3rem", color: EMBER.ink }}>{r.role}</h3>
              <p style={{ margin: "4px 0 0", fontSize: ".95rem", color: EMBER.muted }}>{r.company}</p>
              <p style={{ margin: "12px 0 0", fontSize: ".95rem", lineHeight: 1.6, color: EMBER.muted }}>{r.body}</p>
              <ul style={{ listStyle: "none", margin: "12px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 6, fontSize: ".9rem", lineHeight: 1.5, color: EMBER.soft }}>
                {r.points.map((p) => (
                  <li key={p} style={{ display: "flex", gap: 8 }}>
                    <span style={{ width: 10, height: 1, background: EMBER.accent, flex: "none", marginTop: ".7em" }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
