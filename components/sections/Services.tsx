"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Building2,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Brain,
  Database,
  BarChart3,
  Cloud,
  Workflow,
  Server,
  Warehouse,
  PieChart,
  LineChart,
  Bot,
  GraduationCap,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const servicesList = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional, responsive websites that establish credibility and convert visitors into customers.",
    benefits: [
      "SEO-optimized architecture",
      "Mobile-first responsive design",
      "Fast loading (< 2 seconds)",
      "Analytics integration",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Websites",
    description:
      "Enterprise-grade web presence with multi-language support, CMS integration, and scalable infrastructure.",
    benefits: [
      "Multi-region deployment",
      "Content management system",
      "Role-based access control",
      "Enterprise security standards",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Landing Pages",
    description:
      "High-converting landing pages optimized for lead generation and campaign performance.",
    benefits: [
      "A/B testing ready",
      "Form integration",
      "Conversion tracking",
      "Fast deployment",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Full-featured online stores with payment gateways, inventory management, and analytics.",
    benefits: [
      "Secure payment processing",
      "Inventory synchronization",
      "Order management dashboard",
      "Customer analytics",
    ],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Scalable SaaS platforms and internal tools built with React, Next.js, and modern cloud architecture.",
    benefits: [
      "Real-time data sync",
      "Authentication & authorization",
      "API-first design",
      "CI/CD pipeline",
    ],
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    description:
      "Native and cross-platform Android applications with offline support and push notifications.",
    benefits: [
      "React Native / Kotlin",
      "Offline-first architecture",
      "Push notifications",
      "Play Store deployment",
    ],
  },
  {
    icon: Smartphone,
    title: "iOS Apps",
    description:
      "Premium iOS applications with native performance, App Store optimization, and seamless UX.",
    benefits: [
      "Swift / React Native",
      "Apple design guidelines",
      "App Store optimization",
      "In-app purchases",
    ],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Custom AI applications including NL2SQL, chatbots, predictive analytics, and automated decision systems.",
    benefits: [
      "Natural language processing",
      "Predictive modeling",
      "Automated reporting",
      "Integration with existing systems",
    ],
  },
  {
    icon: Database,
    title: "Microsoft Fabric",
    description:
      "End-to-end analytics platform implementation with OneLake, data engineering, and real-time analytics.",
    benefits: [
      "Unified data foundation",
      "Real-time analytics",
      "Data engineering pipelines",
      "Power BI integration",
    ],
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description:
      "Executive dashboards and self-service analytics with DAX, Power Query, and enterprise governance.",
    benefits: [
      "Executive dashboards",
      "Self-service analytics",
      "Row-level security",
      "Automated refresh",
    ],
  },
  {
    icon: Cloud,
    title: "Azure Data Engineering",
    description:
      "Scalable data pipelines, lakehouse architecture, and cloud-native data platforms on Azure.",
    benefits: [
      "ETL/ELT pipeline design",
      "Data lake architecture",
      "Cost optimization",
      "Disaster recovery",
    ],
  },
  {
    icon: Workflow,
    title: "Azure Data Factory",
    description:
      "Orchestration of complex data workflows with monitoring, alerting, and CI/CD integration.",
    benefits: [
      "Visual pipeline designer",
      "Monitoring & alerting",
      "SSIS migration",
      "Hybrid data integration",
    ],
  },
  {
    icon: Server,
    title: "Azure Databricks",
    description:
      "Big data processing with PySpark, Delta Lake, and MLflow for advanced analytics and machine learning.",
    benefits: [
      "PySpark processing",
      "Delta Lake tables",
      "MLflow integration",
      "Auto-scaling clusters",
    ],
  },
  {
    icon: Warehouse,
    title: "Data Warehousing",
    description:
      "Modern data warehouse design with star schema, dimensional modeling, and optimized query performance.",
    benefits: [
      "Dimensional modeling",
      "Query optimization",
      "Incremental loading",
      "Data governance",
    ],
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights with KPI tracking, executive reporting, and data storytelling.",
    benefits: [
      "KPI framework design",
      "Executive reporting",
      "Data storytelling",
      "Decision support systems",
    ],
  },
  {
    icon: LineChart,
    title: "Analytics",
    description:
      "Advanced analytics including trend analysis, cohort analysis, and predictive modeling.",
    benefits: [
      "Trend analysis",
      "Cohort analysis",
      "Predictive modeling",
      "A/B test analysis",
    ],
  },
  {
    icon: Bot,
    title: "Automation",
    description:
      "Intelligent process automation using Power Automate, Azure Logic Apps, and custom scripts.",
    benefits: [
      "Workflow automation",
      "RPA integration",
      "Email automation",
      "Report distribution",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Hands-on training programs for teams on Azure, Power BI, Databricks, and data engineering best practices.",
    benefits: [
      "Custom curriculum",
      "Hands-on labs",
      "Certification prep",
      "Knowledge transfer",
    ],
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description:
      "Strategic technology consulting for data architecture, cloud migration, and digital transformation roadmaps.",
    benefits: [
      "Architecture review",
      "Migration strategy",
      "Technology assessment",
      "Roadmap planning",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-fabric-100 text-fabric-700 text-sm font-semibold mb-6"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Enterprise-Grade Solutions{" "}
            <span className="text-gradient">Tailored to Your Needs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            From data engineering to AI-powered applications, I deliver solutions
            that drive measurable business outcomes.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-fabric-200 hover:shadow-xl hover:shadow-fabric-700/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-fabric flex items-center justify-center mb-4 shadow-lg shadow-fabric-700/20 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              <div className="space-y-2 mb-5">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-slate-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-fabric-400 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-fabric-700 hover:text-fabric-800 group/link"
              >
                Discuss This Service
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
