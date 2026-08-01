"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Calendar, Clock, Sparkles, X } from "lucide-react";

const posts = [
  {
    title: "Building Production-Grade Delta Lake Architectures on Azure Databricks",
    excerpt:
      "A deep dive into implementing incremental load strategies, MERGE operations, and time-travel capabilities for enterprise data lakes.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "Data Engineering",
    image: "/images/blog/delta-lake.svg",
    insight:
      "The article explains how to combine bronze, silver, and gold layers with reliable merge patterns so analytics teams get fresh data without brittle nightly reloads.",
    bullets: [
      "Use CDC-friendly merge pipelines to keep large fact tables current.",
      "Adopt Delta time travel for auditability and safer incident recovery.",
      "Tune partitioning and file sizes early to avoid long-term performance drift.",
    ],
  },
  {
    title: "From Natural Language to SQL: Architecting NL2SQL Systems",
    excerpt:
      "How to design AI-powered query interfaces that let business users interact with databases using plain English.",
    date: "Dec 22, 2024",
    readTime: "6 min read",
    category: "AI",
    image: "/images/blog/nl2sql-blog.svg",
    insight:
      "This piece focuses on making AI query systems useful in production by grounding prompts in business definitions, approved schemas, and human-readable explanations.",
    bullets: [
      "Map user intent to curated semantic layers before generating SQL.",
      "Return explanations and assumptions alongside every generated query.",
      "Add guardrails for row limits, access policies, and confidence thresholds.",
    ],
  },
  {
    title: "Migrating 50TB to Azure: Lessons from the Field",
    excerpt:
      "Real-world strategies for large-scale cloud migrations including cost optimization, performance tuning, and zero-downtime cutover.",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    category: "Cloud",
    image: "/images/blog/migration.svg",
    insight:
      "The migration walkthrough highlights how to phase bulk loads, validate parity, and coordinate cutover windows so operations teams can move fast without breaking reporting.",
    bullets: [
      "Benchmark network throughput and compression before the first full load.",
      "Run dual-write or dual-read validation during the stabilization window.",
      "Track rollback checkpoints so business teams stay confident during cutover.",
    ],
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[number] | null>(null);

  return (
    <section id="blog" className="relative bg-slate-50 py-24 dark:bg-cyber-midnight lg:py-32">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full bg-fabric-100 px-4 py-1.5 text-sm font-semibold text-fabric-700 dark:bg-cyber-cyan/10 dark:text-cyber-cyan"
          >
            Blog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Insights & <span className="text-gradient">Thought Leadership</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Deep dives into data engineering, AI implementation, and cloud architecture.
          </motion.p>
        </div>

        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:border-cyber-cyan/30 hover:shadow-xl hover:shadow-cyber-cyan/5 dark:border-cyber-border dark:bg-cyber-graphite dark:hover:border-cyber-cyan/40 dark:hover:shadow-cyber-cyan/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="w-fit rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md dark:border-cyber-cyan/30 dark:bg-cyber-cyan/20 dark:text-cyber-cyan">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-fabric-700 dark:text-white dark:group-hover:text-cyber-cyan">
                  {post.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fabric-700 dark:text-cyber-cyan"
                >
                  Read Article {"->"}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl dark:bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-48">
                <Image src={selectedPost.image} alt={selectedPost.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-white backdrop-blur-sm"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Quick article preview
                  </div>
                  <h3 className="max-w-xl text-2xl font-bold">{selectedPost.title}</h3>
                </div>
              </div>
              <div className="space-y-5 p-6">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{selectedPost.insight}</p>
                <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/70">
                  <div className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">What you will learn</div>
                  <div className="space-y-3">
                    {selectedPost.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <span className="mt-2 h-2 w-2 rounded-full bg-fabric-600 dark:bg-cyber-cyan" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {selectedPost.category} | {selectedPost.readTime}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    className="rounded-xl bg-fabric-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-fabric-800"
                  >
                    Nice, thanks
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
