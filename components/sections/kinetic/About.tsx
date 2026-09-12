import { K, MONO, ACCENT_SERIF, autoGrid, shell, Scribble } from "@/components/site/kineticStyles";
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
    <section id="kt-about" style={shell}>
      <div data-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${K.rule}`, paddingTop: 18 }}>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: K.accentDeep, fontWeight: 700 }}>01</span>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.muted }}>About</span>
      </div>

      <p data-zoom-in="1" style={{
        margin: "clamp(30px,5vw,52px) 0 0", maxWidth: "22ch", fontFamily: MONO, fontWeight: 700, textTransform: "uppercase",
        fontSize: "clamp(1.6rem,3.6vw,2.6rem)", lineHeight: 1.14, letterSpacing: "-.005em", color: K.ink,
      } as React.CSSProperties}>
        Thirteen years in IT. Six turning reporting chaos into{" "}
        <span style={{ fontFamily: ACCENT_SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "none", color: K.accentDeep }}>platforms</span>.
      </p>
      <Scribble
        style={{ marginTop: 10 }}
        viewBox="0 0 220 30"
        d="M6 20 C 40 4, 70 30, 108 12 S 170 6, 214 18"
      />

      <div data-reveal="1" style={{ margin: "clamp(36px,5vw,56px) 0 0", padding: "24px clamp(16px,3vw,28px)", border: `1px solid ${K.rule}`, background: K.bgSoft, borderRadius: 6 }}>
        <MedallionDiagram accent={K.accentDeep} ink={K.ink} muted={K.soft} rule={K.rule} panel={K.cream} mono={MONO} />
      </div>

      <div style={{ marginTop: "clamp(36px,5vw,64px)", ...autoGrid(320), gap: "clamp(28px,4vw,64px)" }}>
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          <p data-reveal="1" style={{ margin: 0, fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.68, color: K.muted }}>
            I&rsquo;m currently at Agilisium, building an omnichannel data platform for a pharmaceutical client — 100+ datasets
            across eight marketing and commercial domains, landing into a Landing → Bronze → Silver → Data Cloud architecture
            on Databricks and ADLS Gen2. Sources run from REST APIs to SFTP drops, all onboarded through a config-driven
            framework rather than a notebook per source.
          </p>
          <p data-reveal="1" style={{ margin: 0, fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.68, color: K.muted }}>
            Before that, six years at TransUnion&rsquo;s global technology centre — Analyst to Associate Lead to Lead. By the end
            I was mentoring a team of 20 across SQL data solutions, reporting automation, and Power BI, and we cut incident
            resolution time by 30% through process redesign and automation.
          </p>
          <p data-reveal="1" style={{ margin: 0, fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.68, color: K.ink }}>
            Outside client work I&rsquo;m on GenAI applied to data engineering — LangChain, RAG patterns, and a
            root-cause-analysis tool for pipeline failures. Not a job title yet, just where I think this work is heading.
          </p>

          <div data-reveal="1" style={{ marginTop: 8, borderTop: `1px solid ${K.rule}`, paddingTop: 20 }}>
            <p style={{ margin: "0 0 14px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.soft }}>Certified</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {certs.map((c) => (
                <span key={c} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", color: K.muted, border: `1px solid ${K.rule}`, borderRadius: 99, padding: "8px 14px" }}>{c}</span>
              ))}
            </div>
          </div>

          <div data-reveal="1" style={{ marginTop: 4, ...autoGrid(200), gap: "22px clamp(20px,3vw,40px)", borderTop: `1px solid ${K.rule}`, paddingTop: 20 }}>
            <div>
              <p style={{ margin: "0 0 10px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.soft }}>Education</p>
              <p style={{ margin: 0, fontSize: ".98rem", lineHeight: 1.5, color: K.ink }}>B.E. Electrical &amp; Electronics Engineering</p>
              <p style={{ margin: "5px 0 0", fontSize: ".92rem", color: K.soft }}>Anna University, Chennai — 2012</p>
            </div>
            <div>
              <p style={{ margin: "0 0 10px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.soft }}>Mentoring</p>
              <p style={{ margin: 0, fontSize: ".98rem", lineHeight: 1.5, color: K.ink }}>Foundation for Excellence</p>
              <p style={{ margin: "5px 0 0", fontSize: ".92rem", lineHeight: 1.5, color: K.soft }}>Guiding students on career paths, analytics learning, and internship prep.</p>
            </div>
          </div>
        </div>

        <ul style={{ listStyle: "none", margin: 0, padding: 0, minWidth: 0 }}>
          {principles.map((p) => (
            <li key={p.title} data-reveal-r="1" style={{ borderTop: `1px solid ${K.rule}`, padding: "22px 0" }}>
              <h3 style={{ margin: 0, fontSize: "1.18rem", fontWeight: 700, color: K.ink }}>{p.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: ".95rem", lineHeight: 1.6, color: K.soft }}>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
