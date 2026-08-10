"use client";

import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { prefillContact } from "@/lib/prefill";

/**
 * Written for the person deciding, not the person implementing. Each service
 * leads with the problem in the buyer's own words and what they end up with;
 * the tool names sit underneath for whoever evaluates the technical side.
 * `engagements` are the strings the contact form's dropdown accepts.
 */
const services = [
  {
    index: "01",
    title: "Get all your data into one place",
    problem:
      "Your numbers live in different systems — one in the accounting software, one in the CRM, one in a spreadsheet someone maintains. Nobody can say which is right, and pulling a company-wide view takes days.",
    outcome: [
      "One place where all your data lands, automatically, every day",
      "Agreed definitions, so revenue means the same thing in every report",
      "It keeps running without anyone remembering to press a button",
    ],
    tools: ["Azure Data Factory", "Microsoft Fabric", "Databricks", "Data warehousing"],
    engagements: ["Azure Data Engineering", "Microsoft Fabric", "Data Warehousing"],
  },
  {
    index: "02",
    title: "Stop building the same report every week",
    problem:
      "Someone on your team spends Monday morning exporting to Excel and rebuilding the same summary. It is slow, it goes stale immediately, and when they are on leave it does not happen at all.",
    outcome: [
      "Dashboards that refresh on their own and are current when you open them",
      "The people who need numbers can get them without asking anyone",
      "Controls so each person sees only the data they are meant to",
    ],
    tools: ["Power BI", "Apache Superset", "Semantic models"],
    engagements: ["Power BI Dashboard", "Business Intelligence", "Analytics"],
  },
  {
    index: "03",
    title: "Let your team ask questions in plain English",
    problem:
      "Every question about the business goes through one or two analysts. Simple queries sit in a queue for days, so people either guess or stop asking.",
    outcome: [
      "Ask a question in ordinary language and get an answer with a chart",
      "It shows the query it ran, so an analyst can check it before anyone acts on it",
      "Limits on what it can reach, so it cannot expose data people should not see",
    ],
    tools: ["Claude API", "NL2SQL", "Python"],
    engagements: ["AI Solution"],
  },
  {
    index: "04",
    title: "Automate the work nobody should be doing by hand",
    problem:
      "A process runs every week that involves downloading a file, reformatting it, checking it and emailing it on. It breaks quietly and someone finds out too late.",
    outcome: [
      "The routine work runs on a schedule without a person in the loop",
      "You get told when something fails, instead of discovering it later",
      "Written down properly, so it is not knowledge locked in one person's head",
    ],
    tools: ["Power Automate", "Azure Logic Apps", "Python"],
    engagements: ["Automation"],
  },
  {
    index: "05",
    title: "Build the website or internal tool you need",
    problem:
      "You need a site that brings in enquiries, or an internal tool your team currently runs on a shared spreadsheet.",
    outcome: [
      "A fast, mobile-friendly site that shows up in search",
      "Internal tools with proper logins and permissions",
      "Handed over so you are not tied to me to make changes",
    ],
    tools: ["Next.js", "React", "React Native"],
    engagements: [
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
    index: "06",
    title: "Get a second opinion, or train your team",
    problem:
      "You have people who can build, but you are unsure the plan is right — or you have inherited a system nobody fully understands.",
    outcome: [
      "An honest review of the architecture, and what I would change first",
      "Hands-on training so your team can run and extend it themselves",
      "Ongoing availability without a full-time hire",
    ],
    tools: ["Architecture review", "Fractional data lead", "Training"],
    engagements: ["Consulting", "Training"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sunken py-20 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Services"
          title="What I can do for you."
          intro="In plain terms, without the jargon. If you recognise the problem, the fix is probably one of these. Not sure which? Describe the situation and I'll tell you."
        />

        <div className="mt-14">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.04 * i}>
              <article className="grid gap-x-10 gap-y-6 border-t border-rule py-10 md:grid-cols-12">
                <div className="md:col-span-3 lg:col-span-2">
                  <span className="label nums text-accent">{service.index}</span>
                </div>

                <div className="md:col-span-9 lg:col-span-5">
                  <h3 className="text-2xl font-bold leading-tight sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-measure leading-relaxed text-muted">{service.problem}</p>

                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {service.tools.map((tool) => (
                      <li key={tool} className="label text-subtle">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-9 md:col-start-4 lg:col-span-4 lg:col-start-9">
                  <p className="label mb-4 text-subtle">What you end up with</p>
                  <ul className="space-y-3">
                    {service.outcome.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] inline-block h-px w-3 shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() =>
                      prefillContact({
                        service: service.engagements[0],
                        description: `I'm interested in help with: ${service.title.toLowerCase()}.`,
                      })
                    }
                    className="label link-underline mt-6 text-muted hover:text-[var(--fg)]"
                  >
                    Talk about this <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="border-t border-rule pt-10">
            <p className="max-w-measure text-lg leading-relaxed text-muted">
              Most engagements start in one of these and pull in a second. If none of them quite
              describes your situation,{" "}
              <a href="#contact" className="link-underline text-[var(--fg)]">
                tell me what is going wrong
              </a>{" "}
              and I&rsquo;ll tell you straight whether I&rsquo;m the right person for it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
