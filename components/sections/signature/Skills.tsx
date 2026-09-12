import { S, MONO, SLAB, autoGrid } from "@/components/site/signatureStyles";
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
    <section id="sg-skills" style={{ borderTop: `1px solid ${S.rule}`, background: S.bgAlt }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,56px)" }}>
        <div data-gs-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${S.rule}`, paddingTop: 18 }}>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: S.accentDeep, fontWeight: 700 }}>04</span>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: S.muted }}>Capabilities</span>
        </div>
        <h2 data-gs-reveal="1" style={{ fontFamily: SLAB, fontWeight: 900, textTransform: "uppercase", color: S.ink, margin: "clamp(24px,4vw,40px) 0 clamp(32px,4vw,52px)", fontSize: "clamp(1.8rem,3.6vw,2.8rem)" }}>
          The working toolkit.
        </h2>

        <div style={{ ...autoGrid(230), gap: "0 clamp(24px,3vw,48px)" }}>
          {groups.map((g) => (
            <div key={g.title} data-gs-reveal="1" style={{ borderTop: `1px solid ${S.rule}`, padding: "24px 0" }}>
              <h3 style={{ margin: "0 0 14px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: S.accentDeep, fontWeight: 700 }}>{g.title}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7, fontSize: ".95rem", color: S.muted }}>
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
          <div data-gs-reveal="1" style={{ borderTop: `1px solid ${S.rule}`, padding: "24px 0" }}>
            <GitHubActivity accent={S.accentDeep} ink={S.ink} muted={S.muted} rule={S.rule} mono={MONO} />
          </div>
        </div>
      </div>
    </section>
  );
}
