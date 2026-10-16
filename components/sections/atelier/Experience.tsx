import { ATELIER, SANS, SERIF, display, autoGrid, shell } from "@/components/site/atelierStyles";

const roles = [
  { from: "AUG 2026 — PRESENT", current: true, company: "Agilisium Consulting", role: "Senior Data Engineer · Chennai", award: null,
    points: [
      "Ingestion pipelines for a pharmaceutical omnichannel platform — 100+ datasets, eight domains, Databricks and ADLS Gen2.",
      "REST API and SFTP sources onboarded through a metadata-driven configuration layer.",
      "Credentials handled through Key Vault-backed secret scopes, to platform security standards.",
    ] },
  { from: "NOV 2019 — NOV 2025", current: false, company: "TransUnion", role: "Analyst → Associate Lead → Lead · Chennai", award: "Quarterly Best Performer ×3",
    points: [
      "Led and mentored 20 engineers, owning delivery timelines and engineering standards.",
      "Drove a 30% reduction in incident resolution time through process redesign and automation.",
      "Migrated 50+ TB of legacy data to ADLS Gen2 — 30% cost reduction, 40% faster queries.",
    ] },
  { from: "JAN 2018 — NOV 2019", current: false, company: "Tata Consultancy Services", role: "Senior Process Associate · Chennai", award: null,
    points: [
      "Monitored batch ETL workflows and validated operational data for quality and reliability.",
      "Optimised SQL queries and stored procedures, cutting execution time by 20%.",
    ] },
  { from: "MAY 2013 — JAN 2018", current: false, company: "Sutherland · Sitel", role: "Consultant, Senior Associate · Chennai", award: null,
    points: [
      "Analysed customer interaction data and supported analytics teams with extraction and insight delivery.",
      "Where the operational instinct came from — five years of watching systems fail in production.",
    ] },
];

export default function Experience() {
  return (
    <section id="at-experience" style={{ ...shell, background: ATELIER.panel, borderTop: `1px solid ${ATELIER.ruleSoft}` }}>
      <div data-reveal-slow="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 18 }}>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: ATELIER.gold }}>III.</span>
        <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: ATELIER.muted }}>Track Record</span>
      </div>
      <h2 data-reveal-slow="1" style={{ ...display, margin: "clamp(28px,4vw,44px) 0 clamp(40px,5vw,64px)", maxWidth: "16ch", color: ATELIER.ink }}>
        From support floor to <em style={{ color: ATELIER.gold, fontStyle: "italic" }}>data architecture</em>.
      </h2>

      <div style={{ position: "relative", paddingLeft: "clamp(22px,3vw,40px)" }}>
        <div style={{ position: "absolute", left: 0, top: 6, bottom: 6, width: 1, background: ATELIER.rule }} />
        <div data-draw="1" style={{ position: "absolute", left: 0, top: 6, bottom: 6, width: 1, background: `linear-gradient(180deg,${ATELIER.gold},${ATELIER.goldDeep})` }} />

        {roles.map((r, i) => (
          <article key={r.company} data-reveal-slow="1"
            style={{ position: "relative", ...autoGrid(260), gap: "8px clamp(20px,3vw,48px)", padding: i === roles.length - 1 ? 0 : "0 0 clamp(36px,4vw,54px)" }}>
            <div style={{
              position: "absolute", left: `calc(-1 * clamp(22px,3vw,40px) - ${r.current ? 4 : 3}px)`, top: r.current ? 8 : 9,
              width: r.current ? 9 : 7, height: r.current ? 9 : 7, borderRadius: "50%",
              background: r.current ? ATELIER.gold : "#3A332A",
              boxShadow: r.current ? "0 0 0 5px rgba(201,169,97,.14)" : undefined,
            }} />
            <div>
              <p style={{ margin: 0, fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".16em", color: r.current ? ATELIER.gold : ATELIER.soft }}>{r.from}</p>
              <h3 style={{ margin: "12px 0 4px", fontFamily: SERIF, fontWeight: 500, fontSize: "1.5rem", color: ATELIER.ink }}>{r.company}</h3>
              <p style={{ margin: 0, fontSize: ".92rem", color: ATELIER.muted }}>{r.role}</p>
              {r.award && (
                <p style={{ margin: "14px 0 0", display: "flex", gap: 8, fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase", color: ATELIER.soft }}>
                  <span style={{ color: ATELIER.gold }}>★</span>{r.award}
                </p>
              )}
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, fontSize: ".92rem", lineHeight: 1.65, color: ATELIER.muted }}>
              {r.points.map((p) => (
                <li key={p} style={{ display: "flex", gap: 12 }}><span style={{ width: 10, height: 1, background: ATELIER.gold, flex: "none", marginTop: ".75em" }} /><span>{p}</span></li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
