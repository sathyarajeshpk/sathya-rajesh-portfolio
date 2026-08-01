"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BarChart3, Database, Brain, Activity, Users } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Power BI Executive Dashboard",
    category: "Business Intelligence",
    description:
      "Executive-level Power BI dashboard with star schema data model, DAX measures, and red/black executive theme for C-suite decision making.",
    tags: ["Power BI", "DAX", "Data Modeling", "Executive Reporting"],
    gradient: "from-fabric-600 to-fabric-400",
  },
  {
    icon: Database,
    title: "Microsoft Fabric Data Platform",
    category: "Data Engineering",
    description:
      "End-to-end analytics platform using Microsoft Fabric with OneLake, real-time analytics, and integrated Power BI reporting.",
    tags: ["Microsoft Fabric", "OneLake", "Real-time Analytics"],
    gradient: "from-purple-600 to-indigo-400",
  },
  {
    icon: Brain,
    title: "AI NL2SQL Converter",
    category: "Artificial Intelligence",
    description:
      "AI application that converts natural language questions into SQL, PySpark, and Python code with automated chart generation using Claude API.",
    tags: ["Claude API", "NL2SQL", "Python", "Automation"],
    gradient: "from-emerald-600 to-teal-400",
  },
  {
    icon: Activity,
    title: "Incident Root Cause Analyzer",
    category: "AI Operations",
    description:
      "AI-assisted log analysis solution that automatically identifies root causes of operational failures, accelerating incident resolution by 60%.",
    tags: ["AI/ML", "Log Analysis", "Splunk", "Automation"],
    gradient: "from-orange-600 to-amber-400",
  },
  {
    icon: Users,
    title: "HR Analytics Dashboard",
    category: "People Analytics",
    description:
      "Comprehensive HR analytics dashboard analyzing employee attrition, hiring trends, and workforce performance metrics using Apache Superset.",
    tags: ["Apache Superset", "HR Analytics", "Workforce Planning"],
    gradient: "from-rose-600 to-pink-400",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-fabric-100 text-fabric-700 text-sm font-semibold mb-6"
          >
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Featured Work & <span className="text-gradient">Case Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600"
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
              className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-fabric-200 hover:shadow-xl hover:shadow-fabric-700/5 transition-all duration-300"
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/10" />
                <project.icon className="w-12 h-12 text-white relative z-10 opacity-90" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-fabric-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-fabric-700 hover:text-fabric-800">
                  Discuss Similar Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-slate-200 hover:border-fabric-300 hover:bg-fabric-50/50 transition-all duration-300 min-h-[320px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <span className="text-2xl text-slate-400">+</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Your Project Here</h3>
            <p className="text-sm text-slate-500 text-center mb-4">
              Have a complex data challenge? Let's build something extraordinary together.
            </p>
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-fabric-700 text-white text-sm font-semibold hover:bg-fabric-800 transition-colors">
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
