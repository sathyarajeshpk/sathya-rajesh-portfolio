"use client";

import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { prefillContact } from "@/lib/prefill";

/**
 * Five practice areas rather than nineteen service cards. The specific
 * offerings live underneath as selectable items — each one prefills the
 * enquiry form with the matching service.
 */
const practices = [
  {
    index: "A",
    title: "Data platform engineering",
    body: "Lakehouse architecture, orchestration, and the pipelines underneath it. Designed for incremental load, auditability, and a cost curve that stays flat as volume grows.",
    offerings: [
      "Azure Data Engineering",
      "Azure Data Factory",
      "Azure Databricks",
      "Microsoft Fabric",
      "Data Warehousing",
    ],
  },
  {
    index: "B",
    title: "Analytics & reporting",
    body: "Semantic models people can reason about, dashboards executives actually open, and the governance to keep both trustworthy after handover.",
    offerings: ["Power BI Dashboard", "Business Intelligence", "Analytics"],
  },
  {
    index: "C",
    title: "AI & automation",
    body: "Natural-language query interfaces, log and incident analysis, and workflow automation — grounded in your schemas and guarded against confident nonsense.",
    offerings: ["AI Solution", "Automation"],
  },
  {
    index: "D",
    title: "Product & web",
    body: "Marketing sites, internal tools, and customer-facing applications built on Next.js and modern cloud infrastructure. Shipped, measured, and maintained.",
    offerings: [
      "Business Website",
      "Corporate Website",
      "Landing Page",
      "E-Commerce",
      "Web Application",
      "Android App",
      "iOS App",
    ],
  },
  {
    index: "E",
    title: "Advisory & enablement",
    body: "Architecture review, fractional data leadership, and hands-on training for teams inheriting a platform. Often the highest-leverage engagement of the five.",
    offerings: ["Consulting", "Training"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sunken py-20 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Practice"
          title="Five areas of work, and the specifics inside each."
          intro="Most engagements start in one column and pull in a second. Select anything below to open an enquiry with that service attached."
        />

        <div className="mt-14">
          {practices.map((practice, i) => (
            <Reveal key={practice.title} delay={0.04 * i}>
              <article className="grid gap-x-10 gap-y-6 border-t border-rule py-10 md:grid-cols-12">
                <div className="md:col-span-3 lg:col-span-2">
                  <span className="label text-accent">{practice.index}</span>
                </div>

                <div className="md:col-span-9 lg:col-span-5">
                  <h3 className="text-2xl font-normal leading-tight sm:text-[1.75rem]">
                    {practice.title}
                  </h3>
                  <p className="mt-3 max-w-measure leading-relaxed text-muted">{practice.body}</p>
                </div>

                <div className="md:col-span-9 md:col-start-4 lg:col-span-4 lg:col-start-9">
                  <p className="label mb-3 text-subtle">Engagements</p>
                  <ul className="flex flex-col">
                    {practice.offerings.map((offering) => (
                      <li key={offering}>
                        <button
                          type="button"
                          onClick={() =>
                            prefillContact({
                              service: offering,
                              description: `I'd like to talk about ${offering.toLowerCase()}.`,
                            })
                          }
                          className="group flex w-full items-center justify-between border-b border-rule py-2.5 text-left text-[0.9375rem] text-muted transition-colors duration-200 hover:text-[var(--fg)]"
                        >
                          {offering}
                          <span
                            aria-hidden="true"
                            className="translate-x-0 text-accent opacity-0 transition-all duration-300 ease-editorial group-hover:translate-x-1 group-hover:opacity-100"
                          >
                            &rarr;
                          </span>
                        </button>
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
