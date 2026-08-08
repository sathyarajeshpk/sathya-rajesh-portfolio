"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";

const posts = [
  {
    title: "Building production-grade Delta Lake architectures on Azure Databricks",
    date: "15 Jan 2025",
    readTime: "8 min",
    category: "Data engineering",
    excerpt:
      "Incremental load strategies, MERGE semantics, and time travel — the parts of a lakehouse that decide whether it survives its second year.",
    summary:
      "How to combine bronze, silver, and gold layers with merge patterns that keep analytics fresh without brittle nightly reloads.",
    points: [
      "Use CDC-friendly merge pipelines to keep large fact tables current",
      "Adopt Delta time travel for auditability and safer incident recovery",
      "Tune partitioning and file sizes early to avoid long-term performance drift",
    ],
  },
  {
    title: "From natural language to SQL: architecting NL2SQL systems",
    date: "22 Dec 2024",
    readTime: "6 min",
    category: "Applied AI",
    excerpt:
      "Getting a model to emit SQL is the easy half. Making business users trust the answer is the engineering problem worth writing about.",
    summary:
      "Making AI query systems useful in production by grounding prompts in business definitions, approved schemas, and human-readable explanations.",
    points: [
      "Map user intent to curated semantic layers before generating SQL",
      "Return explanations and assumptions alongside every generated query",
      "Add guardrails for row limits, access policies, and confidence thresholds",
    ],
  },
  {
    title: "Migrating 50TB to Azure: lessons from the field",
    date: "10 Nov 2024",
    readTime: "10 min",
    category: "Cloud",
    excerpt:
      "Cost, throughput, and the cutover weekend. What the migration plan looked like on paper versus what actually happened.",
    summary:
      "Phasing bulk loads, validating parity, and coordinating cutover windows so operations teams can move fast without breaking reporting.",
    points: [
      "Benchmark network throughput and compression before the first full load",
      "Run dual-write or dual-read validation during the stabilisation window",
      "Track rollback checkpoints so business teams stay confident during cutover",
    ],
  },
];

type Post = (typeof posts)[number];

export default function Blog() {
  const [selected, setSelected] = useState<Post | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) {
      lastFocused.current?.focus();
      return;
    }
    lastFocused.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="07"
          label="Writing"
          title="Notes from the work."
          intro="Summaries of longer pieces on data engineering, applied AI, and cloud migration."
        />

        <div className="mt-14 grid gap-x-10 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal as="article" key={post.title} delay={0.05 * i}>
              <div className="flex h-full flex-col border-t border-rule pt-6">
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <span className="label text-accent">{post.category}</span>
                  <span className="label nums text-subtle">{post.date}</span>
                </div>

                <h3 className="text-xl font-normal leading-snug sm:text-[1.375rem]">
                  {post.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>

                <div className="flex-1" />

                <div className="mt-7 flex items-center justify-between gap-4 pb-2">
                  <button
                    type="button"
                    onClick={() => setSelected(post)}
                    className="label link-underline text-muted hover:text-[var(--fg)]"
                  >
                    Read the summary
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                  <span className="label nums text-subtle">{post.readTime}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
            style={{ background: "rgba(10,10,11,0.6)" }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="post-title"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-rule p-7 sm:p-10"
              style={{ background: "var(--bg)" }}
            >
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <span className="label text-accent">{selected.category}</span>
                  <p className="label nums mt-2 text-subtle">
                    {selected.date} · {selected.readTime}
                  </p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="label shrink-0 rounded-full border border-rule px-3 py-1.5 text-subtle transition-colors hover:text-[var(--fg)]"
                >
                  Close
                </button>
              </div>

              <h3 id="post-title" className="text-display-sm font-normal">
                {selected.title}
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-muted">{selected.summary}</p>

              <div className="mt-8 border-t border-rule pt-6">
                <p className="label mb-4 text-subtle">What it covers</p>
                <ul className="space-y-3">
                  {selected.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] inline-block h-px w-3 shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
