import { ATELIER, SANS, SERIF, display, autoGrid } from "@/components/site/atelierStyles";
import { GitHubActivity } from "@/components/site/GitHubActivity";

const groups = [
  { title: "Core data engineering", items: ["Azure Databricks", "PySpark · Spark SQL", "Delta Lake", "Azure Data Factory", "ETL / ELT design"] },
  { title: "Microsoft Fabric", items: ["OneLake", "Unity Catalog", "Fabric pipelines", "Real-time analytics", "Lakehouse / medallion"] },
  { title: "Analytics & BI", items: ["Power BI · DAX", "Dimensional modelling", "Star schema design", "Apache Superset", "KPI reporting"] },
  { title: "Platform & AI", items: ["ADLS Gen2 · Key Vault", "Azure DevOps · CI/CD", "Python · SQL", "LangChain · RAG · ChromaDB", "Data governance"] },
  { title: "Warehouses & ops", items: ["Snowflake · BigQuery", "Synapse Analytics · dbt", "Terraform", "Splunk · Autosys", "Tableau · Power Automate"] },
];

export default function Skills() {
  return (
    <section id="at-skills" style={{ borderTop: `1px solid ${ATELIER.ruleSoft}`, background: ATELIER.bgAlt }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,10vw,144px) clamp(20px,4vw,56px)" }}>
        <div data-reveal-slow="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 18 }}>
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: ATELIER.gold }}>IV.</span>
          <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: ATELIER.muted }}>Capabilities</span>
        </div>
        <h2 data-reveal-slow="1" style={{ ...display, margin: "clamp(28px,4vw,44px) 0 clamp(36px,4vw,56px)", color: ATELIER.ink }}>The working toolkit.</h2>

        <div style={{ ...autoGrid(230), gap: "0 clamp(24px,3vw,48px)" }}>
          {groups.map((g) => (
            <div key={g.title} data-reveal-slow="1" style={{ borderTop: `1px solid ${ATELIER.rule}`, padding: "26px 0" }}>
              <h3 style={{ margin: "0 0 16px", fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: ATELIER.gold }}>{g.title}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: ".95rem", color: ATELIER.muted }}>
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
          <div data-reveal-slow="1" style={{ borderTop: `1px solid ${ATELIER.rule}`, padding: "26px 0" }}>
            <GitHubActivity accent={ATELIER.gold} ink={ATELIER.ink} muted={ATELIER.soft} rule={ATELIER.rule} mono={SANS} />
          </div>
        </div>
      </div>
    </section>
  );
}
