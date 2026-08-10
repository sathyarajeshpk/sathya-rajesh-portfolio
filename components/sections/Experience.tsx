const jobs = [
  {
    company: "TransUnion Global Technology Center, Chennai",
    role: "Lead",
    dates: "Nov 2019 to Nov 2025",
    points: [
      "Designed and ran more than ten production ETL and ELT pipelines on Azure Data Factory and Databricks, held at 99.5% uptime against SLA.",
      "Led the migration of over 50TB of legacy data to Azure Data Lake Storage Gen2. Costs came down about 30% and queries got roughly 40% faster.",
      "Moved us onto Delta Lake with incremental loads instead of full nightly reloads.",
      "Built the Power BI reporting the executive team used, which cut manual reporting work by around 60%.",
      "Mentored 20 or so data engineers, and set up monitoring on Azure Monitor and Log Analytics so we found out about failures before the business did.",
    ],
    note: "Quarterly Best Performer in Feb 2024, Aug 2023 and Nov 2022.",
  },
  {
    company: "Tata Consultancy Services, Chennai",
    role: "Senior Process Associate",
    dates: "Jan 2018 to Nov 2019",
    points: [
      "Monitored batch ETL workflows and checked operational data for quality problems.",
      "Tuned SQL queries and stored procedures, taking about 20% off execution time.",
      "Investigated pipeline failures and wrote up the fixes so the next person did not start from scratch.",
    ],
    note: "Client Appreciation Award for technical delivery.",
  },
  {
    company: "Sutherland Global Services, Chennai",
    role: "Consultant",
    dates: "Jan 2016 to Dec 2017",
    points: [
      "Analysed customer interaction data and turned it into something the service teams could act on.",
      "Helped analytics teams get at the data they needed.",
    ],
    note: null,
  },
  {
    company: "Sitel India, Chennai",
    role: "Senior Customer Service Representative",
    dates: "May 2013 to Dec 2015",
    points: [
      "Held a 95% first contact resolution rate across 400 or so interactions a week.",
      "Tracked and improved service performance metrics.",
    ],
    note: "Wall of Fame three quarters running.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="wrap border-t rule py-10">
      <h2 className="mb-4">Where I have worked</h2>

      {jobs.map((job) => (
        <div key={job.company} className="mb-8">
          <h3 className="mb-0.5">{job.company}</h3>
          <p className="muted mb-2 text-[0.95rem]">
            {job.role}, {job.dates}
          </p>
          <ul className="list">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {job.note ? <p className="muted mb-0 text-[0.95rem]">{job.note}</p> : null}
        </div>
      ))}
    </section>
  );
}
