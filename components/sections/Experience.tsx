import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";

const experiences = [
  {
    company: "TransUnion Global Technology Center",
    location: "Chennai",
    role: "Lead",
    from: "Nov 2019",
    to: "Nov 2025",
    highlights: [
      "Architected 10+ production ETL/ELT pipelines on Azure Data Factory and Databricks, held to 99.5% SLA uptime",
      "Led migration of 50+ TB of legacy data to Azure Data Lake Storage Gen2 — 30% cost reduction, 40% faster queries",
      "Implemented Delta Lake with incremental load strategies for high-performance OLAP analytics",
      "Built the Power BI executive reporting suite, cutting manual reporting effort by roughly 60%",
      "Mentored 20+ data engineers and established proactive monitoring on Azure Monitor and Log Analytics",
    ],
    award: "Quarterly Best Performer — Feb 2024, Aug 2023, Nov 2022",
  },
  {
    company: "Tata Consultancy Services",
    location: "Chennai",
    role: "Senior Process Associate",
    from: "Jan 2018",
    to: "Nov 2019",
    highlights: [
      "Monitored batch ETL workflows and validated operational data for quality and reliability",
      "Optimised SQL queries and stored procedures, reducing execution time by 20%",
      "Investigated production pipeline failures and standardised resolution documentation",
    ],
    award: "Client Appreciation Award for technical delivery",
  },
  {
    company: "Sutherland Global Services",
    location: "Chennai",
    role: "Consultant",
    from: "Jan 2016",
    to: "Dec 2017",
    highlights: [
      "Analysed customer interaction data to generate service improvement insights",
      "Supported analytics teams with data access, extraction, and insight delivery",
    ],
    award: null,
  },
  {
    company: "Sitel India",
    location: "Chennai",
    role: "Senior Customer Service Representative",
    from: "May 2013",
    to: "Dec 2015",
    highlights: [
      "Maintained a 95% first-contact resolution rate across 400+ weekly interactions",
      "Tracked and improved key service performance metrics",
    ],
    award: "Wall of Fame — three consecutive quarters",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="04"
          label="Track record"
          title="Where the twelve years went."
        />

        <div className="mt-14">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={0.04 * i}>
              <article className="grid gap-x-10 gap-y-5 border-t border-rule py-10 md:grid-cols-12">
                <div className="md:col-span-3 lg:col-span-2">
                  <p className="label nums text-accent">
                    {exp.from}
                    <span className="text-subtle"> — </span>
                    {exp.to}
                  </p>
                  <p className="label mt-2 text-subtle">{exp.location}</p>
                </div>

                <div className="md:col-span-9 lg:col-span-4">
                  <h3 className="text-xl font-normal leading-snug sm:text-2xl">{exp.company}</h3>
                  <p className="mt-1.5 text-[0.9375rem] text-muted">{exp.role}</p>
                  {exp.award ? (
                    <p className="label mt-4 flex items-start gap-2 text-subtle">
                      <span aria-hidden="true" className="text-accent">
                        ★
                      </span>
                      {exp.award}
                    </p>
                  ) : null}
                </div>

                <div className="md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] inline-block h-px w-3 shrink-0"
                          style={{ background: "var(--rule-strong)" }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
