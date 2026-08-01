"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cloud, BarChart3, Code2, Brain, Server, Workflow, Shield } from "lucide-react";

const skillCategories = [
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["Azure Data Factory", "Azure Databricks", "PySpark", "Spark SQL", "Delta Lake", "ETL/ELT Design"],
    level: 95,
    color: "from-fabric-600 to-fabric-400",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["Azure Data Lake Gen2", "Synapse Analytics", "Azure SQL", "Azure Monitor", "Key Vault", "GCP BigQuery"],
    level: 90,
    color: "from-sky-600 to-blue-400",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    skills: ["Power BI", "DAX", "Power Query", "Apache Superset", "Tableau", "KPI Reporting"],
    level: 92,
    color: "from-emerald-600 to-teal-400",
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Pandas", "NumPy", "SQL", "PySpark", "Bash Scripting"],
    level: 88,
    color: "from-violet-600 to-purple-400",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    skills: ["Claude API", "NL2SQL", "Power Automate", "Azure Logic Apps", "RPA", "Predictive Modeling"],
    level: 85,
    color: "from-rose-600 to-pink-400",
  },
  {
    icon: Server,
    title: "Data Architecture",
    skills: ["Data Modeling", "Schema Design", "Data Governance", "Data Warehousing", "Star Schema", "OLAP"],
    level: 90,
    color: "from-orange-600 to-amber-400",
  },
  {
    icon: Workflow,
    title: "DevOps & Tools",
    skills: ["Git", "CI/CD", "Azure DevOps", "Docker", "Linux Admin", "Autosys"],
    level: 82,
    color: "from-indigo-600 to-blue-400",
  },
  {
    icon: Shield,
    title: "Data Governance",
    skills: ["Data Quality", "Compliance", "Access Control", "Encryption", "Lineage Tracking", "Cataloging"],
    level: 87,
    color: "from-cyan-600 to-sky-400",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-fabric-100 text-fabric-700 text-sm font-semibold mb-6"
          >
            Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Technical <span className="text-gradient">Expertise</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-fabric-200 hover:shadow-xl hover:shadow-fabric-700/5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${category.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${category.color}`}
                />
              </div>

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-white text-slate-600 text-xs font-medium border border-slate-100">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Proficiency</span>
                <span className="text-sm font-bold text-slate-700">{category.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
