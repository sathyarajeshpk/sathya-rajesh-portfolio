import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";

/**
 * Competencies grouped, not scored. The previous version rated each area out of
 * 100, which is precision nobody can substantiate.
 */
const groups = [
  {
    title: "Data engineering",
    items: ["Azure Data Factory", "Azure Databricks", "PySpark", "Spark SQL", "Delta Lake", "ETL/ELT design"],
  },
  {
    title: "Cloud platforms",
    items: ["Data Lake Storage Gen2", "Synapse Analytics", "Azure SQL", "Azure Monitor", "Key Vault", "BigQuery"],
  },
  {
    title: "Business intelligence",
    items: ["Power BI", "DAX", "Power Query", "Apache Superset", "Tableau", "KPI reporting"],
  },
  {
    title: "Programming",
    items: ["Python", "SQL", "Pandas", "NumPy", "PySpark", "Bash"],
  },
  {
    title: "AI & automation",
    items: ["Claude API", "NL2SQL", "Power Automate", "Logic Apps", "RPA", "Predictive modelling"],
  },
  {
    title: "Architecture",
    items: ["Dimensional modelling", "Schema design", "Data governance", "Warehousing", "Star schema", "OLAP"],
  },
  {
    title: "Delivery",
    items: ["Git", "CI/CD", "Azure DevOps", "Docker", "Linux", "Autosys"],
  },
  {
    title: "Governance",
    items: ["Access control", "Data quality", "Lineage", "Compliance", "Auditability", "Documentation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-sunken py-20 lg:py-28">
      <div className="shell">
        <SectionHeader index="05" label="Capabilities" title="The working toolkit." />

        <div className="mt-14 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={0.03 * i}>
              <div className="border-t border-rule py-7">
                <h3 className="label mb-4 text-accent">{group.title}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[0.9375rem] leading-snug text-muted">
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
