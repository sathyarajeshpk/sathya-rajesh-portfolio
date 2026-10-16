import { ATELIER, SANS, SERIF, display, autoGrid, shell } from "@/components/site/atelierStyles";
import { MedallionDiagram } from "@/components/site/MedallionDiagram";

const principles = [
  { title: "Architecture before code", body: "Every engagement opens with the boring questions — data contracts, ownership, failure modes. The pipeline is the easy part once those are settled." },
  { title: "Config over bespoke code", body: "New sources should be onboarded through a metadata layer, not a fresh notebook. The hundredth dataset must cost less than the tenth." },
  { title: "Built to be handed over", body: "Runbooks, naming conventions, and a team that can extend the thing without me. I have inherited enough undocumented systems to know the cost." },
  { title: "Reporting people trust", body: "A dashboard nobody believes is worse than no dashboard. Lineage, reconciliation, and refresh transparency are part of the deliverable." },
];

const certs = [
  "Microsoft Fabric Data Engineer Associate (DP-700) · Sep 2026",
  "Databricks Fundamentals",
  "Analyzing & Visualizing Data with Power BI",
];

export default function About() {
  return (
    <section id="at-about" style={shell}>
      <div data-reveal-slow="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 18 }}>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: ATELIER.gold }}>I.</span>
        <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: ATELIER.muted }}>About</span>
      </div>

      <h2 data-reveal-slow="1" style={{ ...display, margin: "clamp(28px,4vw,44px) 0 0", maxWidth: "20ch", color: ATELIER.ink }}>
        Thirteen years in IT. Six turning reporting chaos into <em style={{ color: ATELIER.gold, fontStyle: "italic" }}>platforms</em>.
      </h2>

      <div data-reveal-slow="1" style={{ margin: "clamp(36px,5vw,56px) 0 0", padding: "24px clamp(16px,3vw,28px)", border: `1px solid ${ATELIER.rule}` }}>
        <MedallionDiagram accent={ATELIER.gold} ink={ATELIER.ink} muted={ATELIER.soft} rule={ATELIER.rule} panel={ATELIER.panelSoft} mono={SANS} />
      </div>

      <div style={{ marginTop: "clamp(36px,5vw,64px)", ...autoGrid(320), gap: "clamp(28px,4vw,64px)" }}>
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
          <p data-reveal-slow="1" style={{ margin: 0, fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.75, color: ATELIER.muted }}>
            I&rsquo;m currently at Agilisium, building an omnichannel data platform for a pharmaceutical client — 100+ datasets
            across eight marketing and commercial domains, landing into a Landing → Bronze → Silver → Data Cloud architecture
            on Databricks and ADLS Gen2. Sources run from REST APIs to SFTP drops, all onboarded through a config-driven
            framework rather than a notebook per source.
          </p>
          <p data-reveal-slow="1" style={{ margin: 0, fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.75, color: ATELIER.muted }}>
            Before that, six years at TransUnion&rsquo;s global technology centre — Analyst to Associate Lead to Lead. By the end
            I was mentoring a team of 20 across SQL data solutions, reporting automation, and Power BI, and we cut incident
            resolution time by 30% through process redesign and automation.
          </p>

          <div data-reveal-slow="1" style={{ marginTop: 8, borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 22 }}>
            <p style={{ margin: "0 0 14px", fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: ATELIER.soft }}>Certified</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {certs.map((c) => (
                <span key={c} style={{ fontFamily: SERIF, fontSize: ".98rem", color: ATELIER.ink }}>{c}</span>
              ))}
            </div>
          </div>

          <div data-reveal-slow="1" style={{ marginTop: 4, ...autoGrid(200), gap: "22px clamp(20px,3vw,40px)", borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 22 }}>
            <div>
              <p style={{ margin: "0 0 10px", fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: ATELIER.soft }}>Education</p>
              <p style={{ margin: 0, fontSize: ".98rem", lineHeight: 1.5, color: ATELIER.ink }}>B.E. Electrical &amp; Electronics Engineering</p>
              <p style={{ margin: "5px 0 0", fontSize: ".92rem", color: ATELIER.muted }}>Anna University, Chennai — 2012</p>
            </div>
            <div>
              <p style={{ margin: "0 0 10px", fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: ATELIER.soft }}>Mentoring</p>
              <p style={{ margin: 0, fontSize: ".98rem", lineHeight: 1.5, color: ATELIER.ink }}>Foundation for Excellence</p>
              <p style={{ margin: "5px 0 0", fontSize: ".92rem", lineHeight: 1.5, color: ATELIER.muted }}>Guiding students on career paths, analytics learning, and internship prep.</p>
            </div>
          </div>
        </div>

        <ul style={{ listStyle: "none", margin: 0, padding: 0, minWidth: 0 }}>
          {principles.map((p) => (
            <li key={p.title} data-reveal-slow="1" style={{ borderTop: `1px solid ${ATELIER.rule}`, padding: "24px 0" }}>
              <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 500, fontSize: "1.3rem", color: ATELIER.ink }}>{p.title}</h3>
              <p style={{ margin: "10px 0 0", fontSize: ".95rem", lineHeight: 1.65, color: ATELIER.muted }}>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
