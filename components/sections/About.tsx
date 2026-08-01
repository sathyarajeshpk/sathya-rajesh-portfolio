"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Users, Shield, Zap, BarChart3 } from "lucide-react";

const valueProps = [
  {
    icon: Target,
    title: "Strategic Alignment",
    description: "Every solution is architected to align with your business objectives — not just technical requirements.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Build once, scale forever. Cloud-native designs that grow with your data and user demands.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Governed, compliant, and secure data pipelines with industry-standard encryption and access controls.",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Leverage cutting-edge AI to automate data workflows, reduce manual effort, and accelerate insights.",
  },
  {
    icon: Users,
    title: "Team Enablement",
    description: "Not just delivery — I upskill your teams with best practices, documentation, and knowledge transfer.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Clear KPIs and dashboards to track the business impact of every initiative from day one.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-cyber-midnight relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-fabric-50/50 dark:from-cyber-cyan/5 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-fabric-50 dark:bg-cyber-cyan/10 text-fabric-700 dark:text-cyber-cyan text-sm font-semibold mb-6">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
            >
              Turning Complex Data Challenges Into{" "}
              <span className="text-gradient">Competitive Advantages</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6"
            >
              I am Sathya Rajesh PK, a Lead Data Engineer with over 12 years of
              experience architecting enterprise-grade data solutions. My work
              spans from migrating 50+ TB of legacy data to modern cloud
              platforms to building AI-powered analytics tools that transform
              how businesses make decisions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
            >
              At TransUnion, I led the design and deployment of production-grade
              ETL/ELT pipelines processing millions of records daily with 99.5%
              SLA uptime. I do not just write code — I design systems that reduce
              costs, accelerate insights, and scale with your ambitions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "Azure Data Factory",
                "Databricks",
                "Power BI",
                "Microsoft Fabric",
                "PySpark",
                "Delta Lake",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-cyber-graphite text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-100 dark:border-cyber-border"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-slate-50 dark:bg-cyber-graphite hover:bg-white dark:hover:bg-cyber-graphite hover:shadow-xl hover:shadow-cyber-cyan/5 dark:hover:shadow-cyber-cyan/10 border border-transparent dark:border-cyber-border hover:border-cyber-cyan/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl glass-icon flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-6 h-6 text-fabric-700 dark:text-cyber-cyan" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
