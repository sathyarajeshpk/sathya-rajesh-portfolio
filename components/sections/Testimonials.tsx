"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sathya transformed our legacy data infrastructure into a modern Azure-based platform. The 30% cost savings were immediate, but the real value was the 40% performance improvement that let our analysts work in real-time instead of waiting hours for queries.",
    author: "Enterprise Data Director",
    role: "Fortune 500 Financial Services",
    initials: "ED",
    color: "bg-fabric-600 dark:bg-cyber-cyan",
  },
  {
    quote:
      "The AI NL2SQL tool Sathya built eliminated the bottleneck between our business teams and data. What used to take days of back-and-forth with analysts now takes seconds. It's like giving everyone a data scientist in their pocket.",
    author: "VP of Product",
    role: "Series B SaaS Startup",
    initials: "VP",
    color: "bg-emerald-600 dark:bg-cyber-green",
  },
  {
    quote:
      "We brought Sathya in to mentor our data engineering team, and the impact was measurable within weeks. Team productivity increased 25%, but more importantly, our code quality and documentation standards improved dramatically.",
    author: "Engineering Manager",
    role: "Global Technology Center",
    initials: "EM",
    color: "bg-purple-600 dark:bg-purple-500",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-950 dark:bg-cyber-midnight relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fabric-600/10 dark:bg-cyber-cyan/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fabric-400/5 dark:bg-cyber-green/5 rounded-full blur-[128px]" />

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-slate-300 dark:text-cyber-cyan text-sm font-semibold mb-6"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            What Clients <span className="text-gradient">Say</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass dark:bg-cyber-graphite/60 dark:border-cyber-border rounded-2xl p-8 relative group hover:bg-white/15 dark:hover:bg-cyber-graphite/80 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-fabric-500/30 dark:text-cyber-cyan/20 mb-4" />
              <p className="text-slate-300 dark:text-slate-300 leading-relaxed mb-6 text-sm">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
