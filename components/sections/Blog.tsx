"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "Building Production-Grade Delta Lake Architectures on Azure Databricks",
    excerpt: "A deep dive into implementing incremental load strategies, MERGE operations, and time-travel capabilities for enterprise data lakes.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "Data Engineering",
  },
  {
    title: "From Natural Language to SQL: Architecting NL2SQL Systems",
    excerpt: "How to design AI-powered query interfaces that let business users interact with databases using plain English.",
    date: "Dec 22, 2024",
    readTime: "6 min read",
    category: "AI",
  },
  {
    title: "Migrating 50TB to Azure: Lessons from the Field",
    excerpt: "Real-world strategies for large-scale cloud migrations including cost optimization, performance tuning, and zero-downtime cutover.",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    category: "Cloud",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 lg:py-32 bg-slate-50 dark:bg-cyber-midnight relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-fabric-100 dark:bg-cyber-cyan/10 text-fabric-700 dark:text-cyber-cyan text-sm font-semibold mb-6"
          >
            Blog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
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

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-cyber-graphite rounded-2xl overflow-hidden border border-slate-100 dark:border-cyber-border hover:border-cyber-cyan/30 dark:hover:border-cyber-cyan/40 hover:shadow-xl hover:shadow-cyber-cyan/5 dark:hover:shadow-cyber-cyan/10 transition-all duration-300"
            >
              <div className="h-48 glass-header relative p-6 flex flex-col justify-end">
                <span className="px-3 py-1 rounded-full bg-white/20 dark:bg-cyber-cyan/20 backdrop-blur-md text-white dark:text-cyber-cyan text-xs font-medium w-fit border border-white/20 dark:border-cyber-cyan/30">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-fabric-700 dark:group-hover:text-cyber-cyan transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fabric-700 dark:text-cyber-cyan">
                  Coming Soon
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
