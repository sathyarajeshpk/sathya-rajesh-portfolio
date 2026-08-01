"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Power BI Executive Dashboard",
    category: "Business Intelligence",
    description:
      "Executive-level Power BI dashboard with star schema data model, DAX measures, and red/black executive theme for C-suite decision making.",
    tags: ["Power BI", "DAX", "Data Modeling", "Executive Reporting"],
    image: "/images/projects/power-bi-dashboard.svg",
    service: "Power BI Dashboard",
  },
  {
    title: "Microsoft Fabric Data Platform",
    category: "Data Engineering",
    description:
      "End-to-end analytics platform using Microsoft Fabric with OneLake, real-time analytics, and integrated Power BI reporting.",
    tags: ["Microsoft Fabric", "OneLake", "Real-time Analytics"],
    image: "/images/projects/fabric-platform.svg",
    service: "Microsoft Fabric",
  },
  {
    title: "AI NL2SQL Converter",
    category: "Artificial Intelligence",
    description:
      "AI application that converts natural language questions into SQL, PySpark, and Python code with automated chart generation using Claude API.",
    tags: ["Claude API", "NL2SQL", "Python", "Automation"],
    image: "/images/projects/nl2sql.svg",
    service: "AI Solution",
  },
  {
    title: "Incident Root Cause Analyzer",
    category: "AI Operations",
    description:
      "AI-assisted log analysis solution that automatically identifies root causes of operational failures, accelerating incident resolution by 60%.",
    tags: ["AI/ML", "Log Analysis", "Splunk", "Automation"],
    image: "/images/projects/incident-analyzer.svg",
    service: "Automation",
  },
  {
    title: "HR Analytics Dashboard",
    category: "People Analytics",
    description:
      "Comprehensive HR analytics dashboard analyzing employee attrition, hiring trends, and workforce performance metrics using Apache Superset.",
    tags: ["Apache Superset", "HR Analytics", "Workforce Planning"],
    image: "/images/projects/hr-analytics.svg",
    service: "Analytics",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDiscussProject = (service: string, title: string) => {
    window.dispatchEvent(
      new CustomEvent("portfolio:prefill-service", {
        detail: {
          service,
          description: `I would like to discuss a project similar to "${title}".`,
        },
      })
    );

    window.location.hash = "contact";
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white dark:bg-cyber-midnight relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-fabric-100 dark:bg-cyber-cyan/10 text-fabric-700 dark:text-cyber-cyan text-sm font-semibold mb-6"
          >
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Featured Work & <span className="text-gradient">Case Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Real-world solutions delivering measurable business impact across data engineering, BI, and AI.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 transition-all duration-300 hover:border-cyber-cyan/30 hover:shadow-xl hover:shadow-cyber-cyan/5 dark:border-cyber-border dark:bg-cyber-graphite dark:hover:border-cyber-cyan/40 dark:hover:shadow-cyber-cyan/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md dark:border-cyber-cyan/30 dark:bg-cyber-cyan/20 dark:text-cyber-cyan">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-fabric-700 dark:text-white dark:group-hover:text-cyber-cyan">
                  {project.title}
                </h3>
                <p className="mb-4 mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-100 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-cyber-border dark:bg-cyber-midnight dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handleDiscussProject(project.service, project.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fabric-700 hover:text-fabric-800 dark:text-cyber-cyan dark:hover:text-cyber-green"
                >
                  Discuss Similar Project
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center transition-all duration-300 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 dark:border-cyber-border dark:hover:border-cyber-cyan/50 dark:hover:bg-cyber-cyan/5"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl glass-icon">
              <span className="text-2xl text-fabric-700 dark:text-cyber-cyan">+</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Your Project Here</h3>
            <p className="mb-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
              Have a complex data challenge? Let&apos;s build something extraordinary together.
            </p>
            <a
              href="#contact"
              className="rounded-xl border border-transparent bg-fabric-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fabric-800 dark:border-cyber-cyan/30 dark:bg-cyber-cyan/20 dark:text-cyber-cyan dark:hover:bg-cyber-cyan/30"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
