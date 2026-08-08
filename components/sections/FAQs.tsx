"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";

const faqs = [
  {
    question: "What is your typical engagement model?",
    answer:
      "Project-based consulting, retainers for ongoing support, or fractional data-lead roles. Every engagement opens with a free consultation to work out which of the three actually fits — sometimes the answer is that you need a hire, not a consultant.",
  },
  {
    question: "How long does a data migration take?",
    answer:
      "A standard Azure migration in the 10–50TB range runs 8–12 weeks including assessment, pipeline development, testing, and cutover. You get a milestone plan during discovery, before any commitment.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I am based in Chennai and have worked with teams across US, UK, and APAC time zones. Async by default, with scheduled overlap hours where the work needs them.",
  },
  {
    question: "What industries do you know well?",
    answer:
      "Financial services — credit bureaus and banking in particular — plus SaaS and enterprise technology. The underlying architecture principles travel across sectors; the domain modelling is where industry knowledge earns its keep.",
  },
  {
    question: "Can you train our internal team?",
    answer:
      "Yes, and I would rather it be part of the scope than an afterthought. Hands-on training, documentation, and best-practice guides so your team can extend the platform once I am gone.",
  },
  {
    question: "What is your primary stack?",
    answer:
      "Microsoft Azure — Data Factory, Databricks, Synapse, Data Lake — with Power BI, Python/PySpark, and SQL. For AI work, the Claude API and custom models. For web and mobile, React, Next.js, and React Native.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const baseId = useId();

  return (
    <section id="faqs" className="bg-sunken py-20 lg:py-28">
      <div className="shell">
        <SectionHeader index="08" label="Questions" title="Asked often enough to write down." />

        <div className="mt-14 grid gap-x-10 md:grid-cols-12">
          <div className="md:col-span-12 lg:col-span-8 lg:col-start-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;
              return (
                <Reveal key={faq.question} delay={0.03 * i}>
                  <div className="border-t border-rule last:border-b">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-baseline gap-5 py-6 text-left"
                      >
                        <span className="label nums shrink-0 text-subtle">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-serif text-xl leading-snug transition-colors duration-200 group-hover:text-accent">
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-xl leading-none text-subtle transition-transform duration-300 ease-editorial"
                          style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                        >
                          +
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-measure pb-7 pl-[3.25rem] leading-relaxed text-muted">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
