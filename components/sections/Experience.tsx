"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Star } from "lucide-react";

const experiences = [
  {
    company: "TransUnion Global Technology Center LLP",
    location: "Chennai",
    role: "Lead",
    period: "Nov 2019 – Nov 2025",
    highlights: [
      "Architected 10+ production-grade ETL/ELT pipelines using Azure Data Factory and Databricks with 99.5% SLA uptime",
      "Led migration of 50+ TB legacy data to Azure Data Lake Storage Gen2, achieving 30% cost reduction and 40% faster queries",
      "Implemented Delta Lake architecture with incremental load strategies for high-performance OLAP analytics",
      "Built Power BI executive dashboards reducing manual reporting effort by ~60%",
      "Mentored 20+ data engineers, improving team productivity by 25%",
      "Established proactive monitoring using Azure Monitor and Log Analytics",
    ],
    awards: ["Quarterly Best Performer (Feb 2024, Aug 2023, Nov 2022)"],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    location: "Chennai",
    role: "Senior Process Associate",
    period: "Jan 2018 – Nov 2019",
    highlights: [
      "Monitored batch ETL workflows and validated operational data for quality and reliability",
      "Optimized SQL queries and stored procedures, reducing execution time by 20%",
      "Investigated production pipeline failures and standardized resolution documentation",
    ],
    awards: ["Client Appreciation Award for high-quality technical delivery"],
  },
  {
    company: "Sutherland Global Services",
    location: "Chennai",
    role: "Consultant",
    period: "Jan 2016 – Dec 2017",
    highlights: [
      "Analyzed customer interaction data to generate insights for service improvement",
      "Supported analytics teams with data access, extraction, and insight delivery",
    ],
    awards: [],
  },
  {
    company: "Sitel India Pvt. Ltd.",
    location: "Chennai",
    role: "Senior Customer Service Representative",
    period: "May 2013 – Dec 2015",
    highlights: [
      "Maintained 95% first-contact resolution rate across 400+ weekly interactions",
      "Tracked and improved key service performance metrics",
    ],
    awards: ["Wall of Fame – 3 consecutive quarters for outstanding performance"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-50 dark:bg-cyber-midnight relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-fabric-100 dark:bg-cyber-cyan/10 text-fabric-700 dark:text-cyber-cyan text-sm font-semibold mb-6"
          >
            Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Proven Track Record at <span className="text-gradient">Leading Organizations</span>
          </motion.h2>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fabric-400 dark:from-cyber-cyan to-fabric-200 dark:to-cyber-green" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20 pb-12 last:pb-0"
              >
                <div className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full bg-fabric-500 dark:bg-cyber-cyan border-4 border-white dark:border-cyber-midnight shadow-md" />

                <div className="bg-white dark:bg-cyber-graphite rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-cyber-border hover:border-cyber-cyan/20 dark:hover:border-cyber-cyan/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                      <p className="text-fabric-700 dark:text-cyber-cyan font-medium">{exp.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-cyber-midnight text-slate-600 dark:text-slate-300 text-sm font-medium mt-2 md:mt-0 w-fit border border-slate-100 dark:border-cyber-border">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-fabric-400 dark:bg-cyber-cyan mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {exp.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-cyber-border">
                      {exp.awards.map((award) => (
                        <span key={award} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-medium">
                          <Star className="w-3 h-3" />
                          {award}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
