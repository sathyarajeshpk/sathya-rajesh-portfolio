"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle, Calendar } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 dark:bg-cyber-midnight"
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-fabric-600/20 blur-[128px] dark:bg-cyber-cyan/10" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-fabric-400/10 blur-[128px] dark:bg-cyber-green/10" />
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fabric-700/5 blur-[100px] dark:bg-cyber-cyan/5" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10 pb-20 pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-fabric-400 dark:bg-cyber-cyan" />
              <span className="text-sm font-medium text-slate-300">
                Azure Data Engineering | BI & Analytics | AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Helping Businesses Build{" "}
              <span className="text-gradient">Powerful Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              Helping startups and enterprises build websites, AI applications, Microsoft Fabric
              solutions, Azure data platforms, and business intelligence systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-fabric px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fabric-700/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-fabric-700/50 dark:shadow-cyber-cyan/30 dark:hover:shadow-cyber-cyan/50"
              >
                <Calendar size={18} />
                Book Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
              >
                <ArrowRight size={18} />
                View Services
              </a>
              <a
                href="/resume/SathyaRajesh_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-fabric-500 hover:text-white dark:border-cyber-border dark:hover:border-cyber-cyan"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="https://wa.me/919597996996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-cyber-cyan/30 px-7 py-3.5 text-sm font-semibold text-cyber-cyan transition-all duration-300 hover:border-cyber-cyan hover:bg-cyber-cyan/10"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8 dark:border-cyber-border"
            >
              {[
                { value: "12+", label: "Years Experience" },
                { value: "50+", label: "TB Data Migrated" },
                { value: "99.5%", label: "SLA Uptime" },
                { value: "20+", label: "Engineers Mentored" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-fabric-600/30 to-fabric-400/20 blur-2xl dark:from-cyber-cyan/20 dark:to-cyber-green/20" />

              <div className="relative h-[380px] w-[300px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl dark:border-cyber-border sm:h-[460px] sm:w-[360px] lg:h-[540px] lg:w-[420px]">
                <Image
                  src="/images/hero-photo.png"
                  alt="Sathya Rajesh PK - Lead Azure Data Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 rounded-2xl px-5 py-3 shadow-xl glass dark:border-cyber-border dark:bg-cyber-graphite/80 sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-fabric">
                    <span className="text-sm font-bold text-white">12+</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Years</div>
                    <div className="text-xs text-slate-400">Experience</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 -top-4 rounded-2xl px-5 py-3 shadow-xl glass dark:border-cyber-border dark:bg-cyber-graphite/80 sm:-right-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fabric-500/20">
                    <span className="text-sm font-bold text-fabric-400">OK</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Available</div>
                    <div className="text-xs text-slate-400">For Projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-2 dark:border-cyber-cyan/30"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-fabric-400 dark:bg-cyber-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
