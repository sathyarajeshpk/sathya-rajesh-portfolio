"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your typical engagement model?",
    answer:
      "I offer flexible engagement models including project-based consulting, retainer arrangements for ongoing support, and fractional CTO/Data Lead roles. Every engagement starts with a free consultation to understand your needs and recommend the best approach.",
  },
  {
    question: "How long does a typical data migration project take?",
    answer:
      "Timeline depends on data volume and complexity. A standard Azure migration (10-50TB) typically takes 8-12 weeks including assessment, pipeline development, testing, and cutover. I provide detailed project plans with milestones during the discovery phase.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally. Based in Chennai, India, I have experience collaborating with teams across US, UK, and APAC time zones. I use async communication and scheduled overlap hours to ensure smooth collaboration.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have deep experience in financial services (credit bureaus, banking), SaaS, and enterprise technology. My data engineering and BI expertise is industry-agnostic — the underlying principles of scalable architecture apply across sectors.",
  },
  {
    question: "Can you help train our internal team?",
    answer:
      "Absolutely. Knowledge transfer is a core part of my engagement. I provide hands-on training, documentation, and best practice guides so your team can maintain and extend the solutions after delivery.",
  },
  {
    question: "What technologies do you primarily work with?",
    answer:
      "My primary stack is Microsoft Azure (Data Factory, Databricks, Synapse, Data Lake), Power BI, Python/PySpark, and SQL. For AI solutions, I work with Claude API, OpenAI, and custom ML models. For web/mobile, I use React, Next.js, and React Native.",
  },
];

export default function FAQs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 lg:py-32 bg-slate-50 dark:bg-cyber-midnight relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-fabric-100 dark:bg-cyber-cyan/10 text-fabric-700 dark:text-cyber-cyan text-sm font-semibold mb-6"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Common <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-cyber-graphite rounded-2xl border border-slate-100 dark:border-cyber-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-cyber-midnight transition-colors"
              >
                <span className="font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-fabric-500 dark:text-cyber-cyan flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
