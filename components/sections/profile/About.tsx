import ProfileSectionHeader from "@/components/site/ProfileSectionHeader";
import { C, MONO, SERIF, autoGrid, display, shell } from "@/components/site/profileStyles";

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
    <section id="about" style={shell}>
      <ProfileSectionHeader index="01" title="About" />
      <h2 data-reveal="1" style={{ ...display, margin: "clamp(26px,4vw,44px) 0 0", maxWidth: "20ch", textWrap: "balance" } as React.CSSProperties}>
        Thirteen years in IT. Six of them turning reporting chaos into <em style={{ color: C.accent }}>platforms</em>.
      </h2>

      <div style={{ marginTop: "clamp(36px,5vw,64px)", ...autoGrid(320), gap: "clamp(28px,4vw,64px)" }}>
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          <p data-reveal="1" style={{ margin: 0, fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.68, color: C.muted }}>
            I&rsquo;m currently at Agilisium, building an omnichannel data platform for a pharmaceutical client — 100+ datasets
            across eight marketing and commercial domains, landing into a Landing → Bronze → Silver → Data Cloud architecture
            on Databricks and ADLS Gen2. Sources run from REST APIs to SFTP drops, all onboarded through a config-driven
            framework rather than a notebook per source.
          </p>
          <p data-reveal="1" style={{ margin: 0, fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.68, color: C.muted }}>
            Before that, six years at TransUnion&rsquo;s global technology centre — Analyst to Associate Lead to Lead. By the end
            I was mentoring a team of 20 across SQL data solutions, reporting automation, and Power BI, and we cut incident
            resolution time by 30% through process redesign and automation.
          </p>
          <p data-reveal="1" style={{ margin: 0, fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.68, color: C.fg }}>
            Outside client work I&rsquo;m on GenAI applied to data engineering — LangChain, RAG patterns, and a
            root-cause-analysis tool for pipeline failures. Not a job title yet, just where I think this work is heading.
          </p>

          <div data-reveal="1" style={{ marginTop: 8, borderTop: `1px solid ${C.rule}`, paddingTop: 20 }}>
            <p style={{ margin: "0 0 14px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>Certified</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {certs.map((c) => (
                <span key={c} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", color: C.muted, border: "1px solid rgba(255,255,255,.12)", borderRadius: 99, padding: "8px 14px" }}>{c}</span>
              ))}
            </div>
          </div>

          <div data-reveal="1" style={{ marginTop: 4, ...autoGrid(200), gap: "22px clamp(20px,3vw,40px)", borderTop: `1px solid ${C.rule}`, paddingTop: 20 }}>
            <div>
              <p style={{ margin: "0 0 10px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>Education</p>
              <p style={{ margin: 0, fontSize: ".98rem", lineHeight: 1.5, color: C.fg }}>B.E. Electrical &amp; Electronics Engineering</p>
              <p style={{ margin: "5px 0 0", fontSize: ".92rem", color: C.soft }}>Anna University, Chennai — 2012</p>
            </div>
            <div>
              <p style={{ margin: "0 0 10px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>Mentoring</p>
              <p style={{ margin: 0, fontSize: ".98rem", lineHeight: 1.5, color: C.fg }}>Foundation for Excellence</p>
              <p style={{ margin: "5px 0 0", fontSize: ".92rem", lineHeight: 1.5, color: C.soft }}>Guiding students on career paths, analytics learning, and internship prep.</p>
            </div>
          </div>
        </div>

        <ul style={{ listStyle: "none", margin: 0, padding: 0, minWidth: 0 }}>
          {principles.map((p) => (
            <li key={p.title} data-reveal-r="1" style={{ borderTop: `1px solid ${C.rule}`, padding: "22px 0" }}>
              <h3 style={{ margin: 0, fontSize: "1.18rem", fontWeight: 500 }}>{p.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: ".95rem", lineHeight: 1.6, color: C.soft }}>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
