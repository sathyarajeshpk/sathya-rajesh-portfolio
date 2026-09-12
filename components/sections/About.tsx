import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { MedallionDiagram } from "@/components/site/MedallionDiagram";

const principles = [
  {
    title: "Architecture before code",
    body: "Every engagement opens with the boring questions — data contracts, ownership, failure modes. The pipeline is the easy part once those are settled.",
  },
  {
    title: "Built to be handed over",
    body: "Runbooks, naming conventions, and a team that can extend the thing without me. I have inherited enough undocumented systems to know the cost.",
  },
  {
    title: "Cost is a design constraint",
    body: "Cloud spend is an architectural outcome, not a billing problem. Partitioning, file sizing, and cluster policy get decided early, not after the first invoice.",
  },
  {
    title: "Reporting people trust",
    body: "A dashboard nobody believes is worse than no dashboard. Lineage, reconciliation, and refresh transparency are part of the deliverable.",
  },
];

const stack = [
  "Azure Data Factory",
  "Databricks",
  "Microsoft Fabric",
  "Delta Lake",
  "Power BI",
  "PySpark",
  "Synapse",
  "Python",
  "SQL",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              Six years architecting data platforms that{" "}
              <em className="not-italic text-accent">scale</em>.
            </>
          }
        />

        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-9 md:col-start-4 lg:col-span-5 lg:col-start-3">
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  I spent six years at TransUnion&rsquo;s global technology centre leading the
                  design of production ETL and ELT pipelines — the kind that process millions of
                  records overnight and get noticed only when they break. They largely didn&rsquo;t:
                  we held 99.5% SLA uptime across the platform.
                </p>
                <p>
                  The work before that was less glamorous and more useful than it sounds. Years of
                  monitoring batch workflows and investigating production failures teach you which
                  architectural decisions cause 3am pages. I design against that list now.
                </p>
                <p className="text-[var(--fg)]">
                  My toolkit spans Azure Data Factory, Databricks, and Microsoft Fabric. I architect
                  end-to-end analytics platforms — lakehouse design, medallion architectures, real-time
                  ingestion, and semantic layers. I lead teams and mentor engineers in building systems
                  that scale.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 border-t border-rule pt-6">
                <MedallionDiagram
                  accent="var(--accent)"
                  ink="var(--fg)"
                  muted="var(--fg-muted)"
                  rule="var(--rule)"
                  panel="var(--bg-raised)"
                  mono="'JetBrains Mono', monospace"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 border-t border-rule pt-6">
                <p className="label mb-4 text-subtle">Principal tools</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {stack.map((item) => (
                    <li key={item} className="label text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-9 md:col-start-4 lg:col-span-4 lg:col-start-9">
            <ul>
              {principles.map((principle, i) => (
                <Reveal as="li" key={principle.title} delay={0.05 * i}>
                  <div className="border-t border-rule py-6 first:border-t-0 first:pt-0 transition-all duration-300 hover:border-accent">
                    <h3 className="text-xl font-bold leading-snug transition-colors duration-300 hover:text-accent">{principle.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-subtle transition-colors duration-300 hover:text-[var(--fg)]">
                      {principle.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
