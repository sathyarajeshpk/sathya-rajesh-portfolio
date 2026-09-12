import Image from "next/image";
import ProfileSectionHeader from "@/components/site/ProfileSectionHeader";
import { C, MONO, SERIF, autoGrid, display, shell } from "@/components/site/profileStyles";

const projects = [
  { year: "2026", discipline: "Data engineering", title: "Pharma omnichannel lakehouse", image: "/images/projects/fabric-platform.svg",
    body: "100+ datasets across eight marketing and commercial domains, ingested from REST APIs and SFTP into a Landing → Bronze → Silver → Data Cloud medallion on Databricks and ADLS Gen2, with Key Vault-backed secret scopes throughout.",
    outcome: "New sources onboarded by configuration, not code", tags: ["Databricks", "ADLS Gen2", "Key Vault"] },
  { year: "2025", discipline: "AI operations", title: "AURA — root cause analyzer", image: "/images/projects/incident-analyzer.svg",
    body: "Pipeline logs land in ADLS Gen2, get parsed into failure signatures, and an LLM proposes probable root causes with supporting evidence. Validated resolutions feed back into a knowledge base.",
    outcome: "60% faster incident triage, less alert fatigue", tags: ["RAG", "LangChain", "Log analysis"] },
  { year: "2024", discipline: "Applied AI", title: "Natural language to SQL", image: "/images/projects/nl2sql.svg",
    body: "Plain-English questions become SQL, PySpark, and charts — grounded in a curated semantic layer, with the generated query and its assumptions always shown back to the user.",
    outcome: "Analyst queue bypassed for routine questions", tags: ["NL2SQL", "Python", "Semantic layer"] },
  { year: "2023", discipline: "Business intelligence", title: "Executive Power BI suite", image: "/images/projects/power-bi-dashboard.svg",
    body: "Star-schema model and a DAX measure library behind a C-suite dashboard set, replacing a monthly deck assembled by hand.",
    outcome: "~60% less manual reporting effort", tags: ["Power BI", "DAX", "Dimensional modelling"] },
  { year: "2026", discipline: "Full-stack", title: "Skyline Industries — hardening", image: "/images/projects/skyline-industries-light.png",
    body: "Security audit and visual rebuild of a construction company's site: hardcoded secrets removed, rate limiting and input validation added, layout defects fixed.",
    outcome: "Three critical vulnerabilities eliminated", tags: ["Next.js", "TypeScript", "Security"] },
  { year: "2022", discipline: "People analytics", title: "Workforce analytics", image: "/images/projects/hr-analytics.svg",
    body: "Attrition, hiring funnel, and performance reporting built on Apache Superset for a team without a Power BI licence.",
    outcome: "Attrition drivers identified by department", tags: ["Superset", "SQL", "Workforce planning"] },
];

export default function Projects() {
  return (
    <section id="work" style={shell}>
      <ProfileSectionHeader index="02" title="Selected work" />
      <h2 data-reveal="1" style={{ ...display, margin: "clamp(26px,4vw,44px) 0 0", maxWidth: "18ch" }}>
        Six builds, and what changed because of them.
      </h2>

      <div style={{ marginTop: "clamp(36px,5vw,60px)", ...autoGrid(340), gap: "clamp(24px,3vw,40px)" }}>
        {projects.map((p) => (
          <article key={p.title} data-card="1" data-reveal="1"
            style={{ position: "relative", overflow: "hidden", minWidth: 0, border: `1px solid ${C.rule}`, background: "rgba(16,18,22,.6)", padding: "clamp(20px,2.4vw,28px)", transition: "transform .5s cubic-bezier(.22,1,.36,1), border-color .5s ease" }}>
            {/* cursor spotlight target — filled by ProfileMotion */}
            <div data-spot="1" style={{ position: "absolute", inset: 0, opacity: 0, transition: "opacity .45s ease", pointerEvents: "none" }} />

            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: C.subtle }}>
              <span>{p.discipline}</span><span>{p.year}</span>
            </div>

            <div style={{ position: "relative", margin: "18px 0 22px", overflow: "hidden", aspectRatio: "16/9", border: `1px solid ${C.ruleSoft}`, background: C.sunken }}>
              <Image src={p.image} alt="" fill sizes="(max-width: 768px) 90vw, 44vw"
                     style={{ objectFit: "cover", objectPosition: "top", filter: "saturate(.85)", transition: "transform .8s cubic-bezier(.22,1,.36,1), filter .6s ease" }} />
            </div>

            <h3 style={{ position: "relative", margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "1.62rem", lineHeight: 1.16 }}>{p.title}</h3>
            <p style={{ position: "relative", margin: "12px 0 0", fontSize: ".95rem", lineHeight: 1.65, color: C.soft }}>{p.body}</p>
            <p style={{ position: "relative", display: "flex", gap: 12, alignItems: "baseline", margin: "18px 0 0", fontSize: ".95rem", color: C.fg }}>
              <span style={{ width: 18, height: 1, background: C.accent, flex: "none", transform: "translateY(-4px)" }} />
              <span>{p.outcome}</span>
            </p>
            <ul style={{ position: "relative", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px 16px", margin: "18px 0 0", padding: 0, fontFamily: MONO, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: C.subtle }}>
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
