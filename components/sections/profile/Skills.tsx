import ProfileSectionHeader from "@/components/site/ProfileSectionHeader";
import { C, MONO, autoGrid, display } from "@/components/site/profileStyles";
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
    <section id="skills" style={{ borderTop: `1px solid ${C.ruleSoft}`, background: "rgba(13,15,18,.72)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,56px)" }}>
        <ProfileSectionHeader index="04" title="Capabilities" />
        <h2 data-reveal="1" style={{ ...display, margin: "clamp(26px,4vw,44px) 0 clamp(32px,4vw,52px)" }}>The working toolkit.</h2>

        <div style={{ ...autoGrid(230), gap: "0 clamp(24px,3vw,48px)" }}>
          {groups.map((g) => (
            <div key={g.title} data-reveal="1" style={{ borderTop: `1px solid ${C.rule}`, padding: "24px 0" }}>
              <h3 style={{ margin: "0 0 14px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.accent }}>{g.title}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7, fontSize: ".95rem", color: C.soft }}>
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
          <div data-reveal="1" style={{ borderTop: `1px solid ${C.rule}`, padding: "24px 0" }}>
            <GitHubActivity accent={C.accent} ink={C.fg} muted={C.subtle} rule={C.rule} mono={MONO} />
          </div>
        </div>
      </div>
    </section>
  );
}
