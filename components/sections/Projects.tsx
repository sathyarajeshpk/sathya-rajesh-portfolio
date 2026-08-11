"use client";

import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { prefillContact } from "@/lib/prefill";

const projects = [
  {
    year: "2024",
    title: "Microsoft Fabric data platform",
    discipline: "Data engineering",
    description:
      "End-to-end analytics platform on OneLake — medallion layers, real-time ingestion, and Power BI reporting reading directly from the lakehouse with no intermediate extract.",
    outcome: "Single source of truth across four regional reporting teams",
    tags: ["Microsoft Fabric", "OneLake", "Real-time analytics"],
    image: "/images/projects/fabric-platform.svg",
    service: "Microsoft Fabric",
    featured: true,
  },
  {
    year: "2024",
    title: "Natural language to SQL",
    discipline: "Applied AI",
    description:
      "A query interface that turns plain-English questions into SQL, PySpark, and charts — grounded in a curated semantic layer, with the generated query and its assumptions always shown back to the user.",
    outcome: "Analyst queue bypassed for routine questions",
    tags: ["Claude API", "NL2SQL", "Python"],
    image: "/images/projects/nl2sql.svg",
    service: "AI Solution",
    featured: true,
  },
  {
    year: "2023",
    title: "Executive Power BI suite",
    discipline: "Business intelligence",
    description:
      "Star-schema model and DAX measure library behind a C-suite dashboard set, replacing a monthly deck assembled by hand.",
    outcome: "~60% less manual reporting effort",
    tags: ["Power BI", "DAX", "Dimensional modelling"],
    image: "/images/projects/power-bi-dashboard.svg",
    service: "Power BI Dashboard",
  },
  {
    year: "2023",
    title: "AURA — AI Unified Root Cause Analyzer",
    discipline: "AI operations",
    description:
      "Log analysis and root-cause identification system. Ingests structured logs into ADLS Gen2, applies intelligent parsing and NL2SQL patterns to isolate failure signatures, uses Claude API to propose probable root causes with supporting evidence, and feeds validated resolutions back into a knowledge base for continuous learning.",
    outcome: "60% faster incident resolution, reduced alert fatigue",
    tags: ["Log analysis", "Splunk", "Claude API", "Automation"],
    image: "/images/projects/incident-analyzer.svg",
    service: "AI Solution",
    featured: true,
  },
  {
    year: "2022",
    title: "HR analytics dashboard",
    discipline: "People analytics",
    description:
      "Attrition, hiring funnel, and workforce performance reporting built on Apache Superset for a team without a Power BI licence.",
    outcome: "Attrition drivers identified by department",
    tags: ["Apache Superset", "Workforce planning"],
    image: "/images/projects/hr-analytics.svg",
    service: "Analytics",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Selected work"
          title="Five projects, and what changed because of them."
        />

        <div className="mt-14 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.title}
              delay={0.06 * i}
              className={project.featured ? "md:col-span-1" : "md:col-span-1"}
            >
              <div className="group flex h-full flex-col border-t border-rule pt-6 transition-all duration-500 hover:translate-y-[-4px]">
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <span className="label text-subtle">{project.discipline}</span>
                  <span className="label nums text-subtle">{project.year}</span>
                </div>

                <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden border border-rule bg-sunken group">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, 44vw"
                    className="object-cover transition-all duration-700 ease-editorial group-hover:scale-[1.05] group-hover:brightness-110"
                  />
                </div>

                <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

                <p className="mt-4 flex items-baseline gap-2.5 text-[0.9375rem]">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-px w-4 shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  <span className="text-[var(--fg)]">{project.outcome}</span>
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="label text-subtle">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1" />

                <button
                  type="button"
                  onClick={() =>
                    prefillContact({
                      service: project.service,
                      description: `I'd like to discuss a project along the lines of "${project.title}".`,
                    })
                  }
                  className="label link-underline self-start pb-6 text-muted hover:text-[var(--fg)]"
                >
                  Discuss something similar
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </Reveal>
          ))}

          <Reveal as="article" delay={0.24}>
            <div className="flex h-full flex-col justify-between border-t border-rule pt-6">
              <div>
                <span className="label text-subtle">Next</span>
                <h3 className="mt-5 text-2xl font-bold leading-tight">
                  There is space here for whatever you are building.
                </h3>
                <p className="mt-3 max-w-measure leading-relaxed text-muted">
                  If your reporting is drifting out of sync, your pipelines need an owner, or the
                  platform decision has been deferred twice — that is the conversation I want.
                </p>
              </div>
              <a
                href="#contact"
                className="label mt-8 inline-flex h-12 w-fit items-center rounded-full px-6 transition-opacity duration-200 hover:opacity-85"
                style={{ background: "var(--fg)", color: "var(--bg)" }}
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
