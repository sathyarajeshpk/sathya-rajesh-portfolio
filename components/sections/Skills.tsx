import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";

/**
 * Competencies grouped, not scored. The previous version rated each area out of
 * 100, which is precision nobody can substantiate.
 */
const groups = [
  {
    title: "Core Data Engineering",
    items: ["Azure Data Factory", "Azure Databricks", "Delta Lake", "PySpark", "Spark SQL", "ETL/ELT design"],
  },
  {
    title: "Microsoft Fabric",
    items: ["OneLake", "Fabric Analytics", "Data Warehousing", "Real-time analytics", "Fabric Pipelines"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "DAX", "Dimensional modelling", "Star schema", "KPI reporting", "Apache Superset"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["Azure SQL", "Synapse Analytics", "Data Lake Storage Gen2", "Azure Monitor", "Key Vault", "BigQuery"],
  },
  {
    title: "AI & Automation",
    items: ["Claude API", "NL2SQL", "LLM applications", "Power Automate", "Logic Apps", "Predictive modelling"],
  },
  {
    title: "Programming & Scripting",
    items: ["Python", "SQL", "PySpark", "Pandas", "NumPy", "Bash"],
  },
  {
    title: "Engineering & DevOps",
    items: ["Git", "CI/CD", "Azure DevOps", "Docker", "Linux", "Autosys"],
  },
  {
    title: "Data Governance",
    items: ["Data lineage", "Access control", "Data quality", "Compliance", "Auditability", "Documentation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-sunken py-20 lg:py-28">
      <div className="shell">
        <SectionHeader index="05" label="Capabilities" title="The working toolkit." />

        <div className="mt-14 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={0.05 * i}>
              <div className="border-t border-rule py-7 transition-all duration-300 hover:translate-y-[-2px]">
                <h3 className="label mb-4 text-accent transition-colors duration-300 hover:brightness-110">{group.title}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[0.9375rem] leading-snug text-muted transition-colors duration-200 hover:text-[var(--fg)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
