"use client";

import { prefillContact } from "@/lib/prefill";

const groups = [
  {
    title: "Data platforms",
    body: "Lakehouse architecture, orchestration and the pipelines underneath. This is the bulk of what I do.",
    items: [
      "Azure Data Engineering",
      "Azure Data Factory",
      "Azure Databricks",
      "Microsoft Fabric",
      "Data Warehousing",
    ],
  },
  {
    title: "Reporting and analytics",
    body: "Semantic models, dashboards and the governance to stop them rotting after handover.",
    items: ["Power BI Dashboard", "Business Intelligence", "Analytics"],
  },
  {
    title: "AI and automation",
    body: "Natural language query tools, log and incident analysis, workflow automation. Grounded in your actual schemas.",
    items: ["AI Solution", "Automation"],
  },
  {
    title: "Web and mobile",
    body: "Marketing sites, internal tools and applications. Next.js mostly. Less common for me than the data work, but I do take these on.",
    items: [
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
    title: "Advisory and training",
    body: "Architecture review, fractional data lead work, and training for teams taking over a platform.",
    items: ["Consulting", "Training"],
  },
];

export default function Services() {
  return (
    <section id="services" className="wrap border-t rule py-10">
      <h2 className="mb-4">What I can help with</h2>

      <p>
        Grouped roughly by how the work tends to arrive. Click any item to start an enquiry with it
        already filled in.
      </p>

      {groups.map((group) => (
        <div key={group.title} className="mb-7">
          <h3 className="mb-1">{group.title}</h3>
          <p className="muted mb-2 text-[0.98rem]">{group.body}</p>
          <p className="mb-0 text-[0.98rem]">
            {group.items.map((item, i) => (
              <span key={item}>
                {i > 0 ? <span className="muted"> &middot; </span> : null}
                <button
                  type="button"
                  onClick={() =>
                    prefillContact({
                      service: item,
                      description: `I would like to talk about ${item.toLowerCase()}.`,
                    })
                  }
                  className="text-[var(--link)] hover:underline"
                >
                  {item}
                </button>
              </span>
            ))}
          </p>
        </div>
      ))}
    </section>
  );
}
