import { S, MONO, SLAB, shell } from "@/components/site/signatureStyles";

const roles = [
  { from: "AUG 2026 — PRESENT", current: true, company: "Agilisium Consulting", role: "Senior Data Engineer · Chennai", award: null, rotate: -2, lift: 0,
    points: [
      "Ingestion pipelines for a pharmaceutical omnichannel platform — 100+ datasets, eight domains, Databricks and ADLS Gen2.",
      "REST API and SFTP sources onboarded through a metadata-driven configuration layer.",
      "Credentials handled through Key Vault-backed secret scopes, to platform security standards.",
    ] },
  { from: "NOV 2019 — NOV 2025", current: false, company: "TransUnion", role: "Analyst → Associate Lead → Lead · Chennai", award: "Quarterly Best Performer ×3", rotate: 1.5, lift: 18,
    points: [
      "Led and mentored 20 engineers, owning delivery timelines and engineering standards.",
      "Drove a 30% reduction in incident resolution time through process redesign and automation.",
      "Designed SQL data solutions and the Power BI suite behind operational and commercial decisions.",
      "Migrated 50+ TB of legacy data to ADLS Gen2 — 30% cost reduction, 40% faster queries.",
      "Tracked MTTA and MTTR on Splunk, Autosys, Azure Monitor and Log Analytics for SLA management.",
    ] },
  { from: "JAN 2018 — NOV 2019", current: false, company: "Tata Consultancy Services", role: "Senior Process Associate · Chennai", award: null, rotate: -1.5, lift: -6,
    points: [
      "Monitored batch ETL workflows and validated operational data for quality and reliability.",
      "Optimised SQL queries and stored procedures, cutting execution time by 20%.",
    ] },
  { from: "MAY 2013 — JAN 2018", current: false, company: "Sutherland · Sitel", role: "Consultant, Senior Associate · Chennai", award: null, rotate: 2, lift: 14,
    points: [
      "Analysed customer interaction data and supported analytics teams with extraction and insight delivery.",
      "Where the operational instinct came from — five years of watching systems fail in production.",
    ] },
];

export default function Experience() {
  return (
    <section id="sg-track" style={{ background: S.panel, color: S.bg }}>
      <div style={{ ...shell, maxWidth: 1240, margin: "0 auto" }}>
        <div data-gs-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${S.ruleOnDark}`, paddingTop: 18 }}>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: S.accent, fontWeight: 700 }}>03</span>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: S.sage2 }}>Track record</span>
        </div>
        <h2 data-gs-reveal="1" style={{ fontFamily: SLAB, fontWeight: 900, textTransform: "uppercase", margin: "clamp(24px,4vw,40px) 0 clamp(48px,6vw,76px)", maxWidth: "16ch", fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.05 }}>
          From support floor to <span style={{ color: S.accent }}>data architecture</span>.
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,3vw,40px)", justifyContent: "center" }}>
          {roles.map((r) => (
            // data-gs-reveal animates y/opacity on this wrapper; the card's
            // constant rotate/lift lives on the inner element since GSAP
            // manages `transform` wholesale and would otherwise clobber it.
            <div key={r.company} data-gs-reveal="1" style={{ width: "min(100%, 320px)" }}>
              <article
                style={{
                  background: S.bg, color: S.ink, borderRadius: 4,
                  padding: "20px 22px 24px",
                  transform: `rotate(${r.rotate}deg) translateY(${r.lift}px)`,
                  boxShadow: "0 18px 36px rgba(0,0,0,.28)",
                }}
              >
                <p style={{ margin: 0, fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", color: r.current ? S.accentDeep : S.soft }}>{r.from}</p>
                <h3 style={{ margin: "10px 0 2px", fontFamily: SLAB, fontWeight: 700, fontSize: "1.2rem" }}>{r.company}</h3>
                <p style={{ margin: 0, fontSize: ".88rem", color: S.soft }}>{r.role}</p>
                {r.award && (
                  <p style={{ margin: "10px 0 0", display: "flex", gap: 6, fontFamily: MONO, fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase", color: S.accentDeep }}>
                    <span>★</span>{r.award}
                  </p>
                )}
                <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: ".83rem", lineHeight: 1.5, color: S.muted, borderTop: `1px solid ${S.rule}`, paddingTop: 12 }}>
                  {r.points.map((p) => (
                    <li key={p} style={{ display: "flex", gap: 8 }}>
                      <span style={{ width: 10, height: 1, background: S.accentDeep, flex: "none", marginTop: ".65em" }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
