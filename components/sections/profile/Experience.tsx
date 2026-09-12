import ProfileSectionHeader from "@/components/site/ProfileSectionHeader";
import { C, MONO, autoGrid, bullet, display, shell } from "@/components/site/profileStyles";

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
      "Designed SQL data solutions and the Power BI suite behind operational and commercial decisions.",
      "Migrated 50+ TB of legacy data to ADLS Gen2 — 30% cost reduction, 40% faster queries.",
      "Tracked MTTA and MTTR on Splunk, Autosys, Azure Monitor and Log Analytics for SLA management.",
      "Contributed to architecture optimisation, governance compliance, and cloud migration.",
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
    <section id="experience" style={shell}>
      <ProfileSectionHeader index="03" title="Track record" />
      <h2 data-reveal="1" style={{ ...display, margin: "clamp(26px,4vw,44px) 0 clamp(36px,5vw,60px)", maxWidth: "16ch" }}>
        From support floor to <em style={{ color: C.accent }}>data architecture</em>.
      </h2>

      <div style={{ position: "relative", paddingLeft: "clamp(22px,3vw,40px)" }}>
        <div style={{ position: "absolute", left: 0, top: 6, bottom: 6, width: 1, background: C.rule }} />
        {/* draws in as the section scrolls through view */}
        <div data-draw="1" style={{ position: "absolute", left: 0, top: 6, bottom: 6, width: 1, background: `linear-gradient(180deg,${C.accent},${C.deep})` }} />

        {roles.map((r, i) => (
          <article key={r.company} data-reveal="1"
            style={{ position: "relative", ...autoGrid(260), gap: "8px clamp(20px,3vw,48px)", padding: i === roles.length - 1 ? 0 : "0 0 clamp(34px,4vw,52px)" }}>
            <div style={{
              position: "absolute", left: `calc(-1 * clamp(22px,3vw,40px) - ${r.current ? 4 : 3}px)`, top: r.current ? 8 : 9,
              width: r.current ? 9 : 7, height: r.current ? 9 : 7, borderRadius: "50%",
              background: r.current ? C.accent : "#3A4049",
              boxShadow: r.current ? "0 0 0 5px rgba(99,180,190,.14)" : undefined,
            }} />
            <div>
              <p style={{ margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", color: r.current ? C.accent : "#9AA2AE" }}>{r.from}</p>
              <h3 style={{ margin: "12px 0 4px", fontSize: "1.35rem", fontWeight: 500 }}>{r.company}</h3>
              <p style={{ margin: 0, fontSize: ".95rem", color: C.soft }}>{r.role}</p>
              {r.award && (
                <p style={{ margin: "14px 0 0", display: "flex", gap: 8, fontFamily: MONO, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: C.subtle }}>
                  <span style={{ color: C.accent }}>★</span>{r.award}
                </p>
              )}
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, fontSize: ".95rem", lineHeight: 1.6, color: C.soft }}>
              {r.points.map((p) => (
                <li key={p} style={{ display: "flex", gap: 12 }}><span style={bullet} /><span>{p}</span></li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
