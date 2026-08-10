const groups = [
  {
    title: "Data engineering",
    items: "Azure Data Factory, Azure Databricks, PySpark, Spark SQL, Delta Lake, ETL and ELT design",
  },
  {
    title: "Cloud",
    items: "Data Lake Storage Gen2, Synapse Analytics, Azure SQL, Azure Monitor, Key Vault, BigQuery",
  },
  {
    title: "Reporting",
    items: "Power BI, DAX, Power Query, Apache Superset, Tableau",
  },
  {
    title: "Programming",
    items: "Python, SQL, Pandas, NumPy, Bash",
  },
  {
    title: "AI and automation",
    items: "Claude API, NL2SQL, Power Automate, Logic Apps, predictive modelling",
  },
  {
    title: "Modelling and governance",
    items: "Dimensional modelling, star schema, OLAP, data quality, lineage, access control",
  },
  {
    title: "Delivery",
    items: "Git, CI/CD, Azure DevOps, Docker, Linux, Autosys",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="wrap border-t rule py-10">
      <h2 className="mb-4">Tools and skills</h2>

      <p className="muted text-[0.95rem]">
        Listed rather than rated. I have never found a percentage score on a CV to mean anything.
      </p>

      <dl className="mb-0">
        {groups.map((group) => (
          <div key={group.title} className="mb-3">
            <dt className="font-bold">{group.title}</dt>
            <dd className="muted">{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
