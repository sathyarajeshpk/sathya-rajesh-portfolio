"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We needed someone who could speak to architecture, delivery, and executive stakeholders in the same room. Sathya redesigned our reporting pipeline on Azure, reduced refresh delays from hours to minutes, and gave leadership a much clearer view of performance across regions.",
    author: "Head of Data Platforms",
    role: "Regional Financial Services Group",
    initials: "HD",
    color: "bg-fabric-600 dark:bg-cyber-cyan",
  },
  {
    quote:
      "Our teams had strong data, but access was bottlenecked through a small analytics function. Sathya helped us shape an NL2SQL experience that business users actually trusted, with clean prompts, governance guardrails, and outputs that analysts could validate quickly.",
    author: "VP of Product",
    role: "B2B SaaS Company",
    initials: "VP",
    color: "bg-emerald-600 dark:bg-cyber-green",
  },
  {
    quote:
      "Sathya brought calm, structure, and a high engineering bar to a program that was starting to drift. Beyond the technical fixes, he coached our developers, improved documentation habits, and left the team more confident than when he joined.",
    author: "Engineering Manager",
    role: "Global Capability Center",
    initials: "EM",
    color: "bg-sky-600 dark:bg-sky-500",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-950 py-24 dark:bg-cyber-midnight lg:py-32">
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-fabric-600/10 blur-[128px] dark:bg-cyber-cyan/5" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-fabric-400/5 blur-[128px] dark:bg-cyber-green/5" />

      <div className="container-custom relative">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full glass px-4 py-1.5 text-sm font-semibold text-slate-300 dark:text-cyber-cyan"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            What Clients <span className="text-gradient">Say</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl p-8 glass transition-all duration-300 hover:bg-white/15 dark:border-cyber-border dark:bg-cyber-graphite/60 dark:hover:bg-cyber-graphite/80"
            >
              <Quote className="mb-4 h-10 w-10 text-fabric-500/30 dark:text-cyber-cyan/20" />
              <p className="mb-6 text-sm leading-relaxed text-slate-300">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color} text-sm font-bold text-white`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.author}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
