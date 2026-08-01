"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Users, Shield, Zap, BarChart3 } from "lucide-react";

const valueProps = [
  {
    icon: Target,
    title: "Strategic Alignment",
    description:
      "Every solution is architected to align with your business objectives — not just technical requirements.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Build once, scale forever. Cloud-native designs that grow with your data and user demands.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Governed, compliant, and secure data pipelines with industry-standard encryption and access controls.",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Leverage cutting-edge AI to automate data workflows, reduce manual effort, and accelerate insights.",
  },
  {
    icon: Users,
    title: "Team Enablement",
    description:
      "Not just delivery — I upskill your teams with best practices, documentation, and knowledge transfer.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description:
      "Clear KPIs and dashboards to track the business impact of every initiative from day one.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-fabric-50/50 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-fabric-50 text-fabric-700 text-sm font-semibold mb-6">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              Turning Complex Data Challenges Into{" "}
              <span className="text-gradient">Competitive Advantages</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-6"
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
              className="text-lg text-slate-600 leading-relaxed mb-8"
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
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Value Props */}
          <div className="grid sm:grid-cols-2 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-fabric-700/5 border border-transparent hover:border-fabric-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-fabric flex items-center justify-center mb-4 shadow-lg shadow-fabric-700/20 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
