"use client";

import Image from "next/image";
import { prefillContact } from "@/lib/prefill";

const projects = [
  {
    year: "2024",
    title: "Microsoft Fabric data platform",
    body: "Built an analytics platform on OneLake with bronze, silver and gold layers, plus Power BI reading straight from the lakehouse instead of a separate extract. Four regional reporting teams ended up on the same numbers, which had not been the case before.",
    image: "/images/projects/fabric-platform.svg",
    service: "Microsoft Fabric",
  },
  {
    year: "2024",
    title: "Natural language to SQL tool",
    body: "A query interface that turns plain English questions into SQL and charts. The interesting part was not the model, it was grounding it in a curated semantic layer and always showing the generated query back to the user so an analyst could check it. Routine questions stopped going through the analytics queue.",
    image: "/images/projects/nl2sql.svg",
    service: "AI Solution",
  },
  {
    year: "2023",
    title: "Power BI reporting for the exec team",
    body: "Star schema model and a DAX measure library behind a set of dashboards that replaced a monthly deck someone was assembling by hand. Cut manual reporting effort by roughly 60%.",
    image: "/images/projects/power-bi-dashboard.svg",
    service: "Power BI Dashboard",
  },
  {
    year: "2023",
    title: "Incident root cause analyzer",
    body: "Log analysis that groups failures by signature and suggests a likely cause to whoever is on call. Cut mean time to resolution by about 60%. It gets things wrong sometimes, so it shows its confidence and the evidence rather than just asserting an answer.",
    image: "/images/projects/incident-analyzer.svg",
    service: "Automation",
  },
  {
    year: "2022",
    title: "HR analytics dashboard",
    body: "Attrition, hiring funnel and workforce reporting in Apache Superset, for a team that did not have Power BI licences. Surfaced which departments were actually losing people.",
    image: "/images/projects/hr-analytics.svg",
    service: "Analytics",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="wrap border-t rule py-10">
      <h2 className="mb-4">Some work</h2>

      <p className="muted text-[0.95rem]">
        The diagrams below are illustrations of the approach, not screenshots. Most of this work
        sits behind NDAs.
      </p>

      {projects.map((project) => (
        <div key={project.title} className="mb-9">
          <h3 className="mb-1">
            {project.title} <span className="muted font-normal">({project.year})</span>
          </h3>
          <p>{project.body}</p>
          <Image
            src={project.image}
            alt=""
            width={800}
            height={450}
            sizes="(max-width: 736px) 100vw, 736px"
            className="mb-3 h-auto w-full border rule"
          />
          <p className="mb-0 text-[0.95rem]">
            <button
              type="button"
              onClick={() =>
                prefillContact({
                  service: project.service,
                  description: `I would like to discuss something similar to your "${project.title}" project.`,
                })
              }
              className="text-[var(--link)] hover:underline"
            >
              Talk to me about something like this
            </button>
          </p>
        </div>
      ))}
    </section>
  );
}
