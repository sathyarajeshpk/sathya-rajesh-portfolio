"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle, Calendar } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 dark:bg-cyber-midnight"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fabric-600/20 dark:bg-cyber-cyan/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fabric-400/10 dark:bg-cyber-green/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fabric-700/5 dark:bg-cyber-cyan/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-fabric-400 dark:bg-cyber-cyan animate-pulse" />
              <span className="text-sm font-medium text-slate-300 dark:text-slate-300">
                Azure Data Engineering · BI & Analytics · AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Helping Businesses Build{" "}
              <span className="text-gradient">Powerful Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-400 dark:text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Helping startups and enterprises build Websites, AI Applications,
              Microsoft Fabric Solutions, Azure Data Platforms and Business
              Intelligence solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-fabric text-white font-semibold text-sm shadow-lg shadow-fabric-700/30 dark:shadow-cyber-cyan/30 hover:shadow-fabric-700/50 dark:hover:shadow-cyber-cyan/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar size={18} />
                Book Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-white font-semibold text-sm hover:bg-white/20 transition-all duration-300"
              >
                <ArrowRight size={18} />
                View Services
              </a>
              <a
                href="/resume/SathyaRajesh_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 dark:border-cyber-border text-slate-300 dark:text-slate-300 font-semibold text-sm hover:border-fabric-500 dark:hover:border-cyber-cyan hover:text-white transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="https://wa.me/919597996996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-cyber-cyan/30 text-cyber-cyan font-semibold text-sm hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all duration-300"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10 dark:border-cyber-border"
            >
              {[
                { value: "12+", label: "Years Experience" },
                { value: "50+", label: "TB Data Migrated" },
                { value: "99.5%", label: "SLA Uptime" },
                { value: "20+", label: "Engineers Mentored" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-fabric-600/30 dark:from-cyber-cyan/20 to-fabric-400/20 dark:to-cyber-green/20 rounded-[2.5rem] blur-2xl" />

              {/* Photo Container */}
              <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[460px] lg:w-[420px] lg:h-[540px] rounded-[2rem] overflow-hidden border border-white/10 dark:border-cyber-border shadow-2xl">
                <Image
                  src="/images/hero-photo.png"
                  alt="Sathya Rajesh PK - Lead Azure Data Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-left-8 glass dark:bg-cyber-graphite/80 dark:border-cyber-border rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-fabric flex items-center justify-center">
                    <span className="text-white font-bold text-sm">12+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Years</div>
                    <div className="text-slate-400 text-xs">Experience</div>
                  </div>
                </div>
              </motion.div>

              {/* Second Floating Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 sm:-right-8 glass dark:bg-cyber-graphite/80 dark:border-cyber-border rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-fabric-500/20 flex items-center justify-center">
                    <span className="text-fabric-400 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Available</div>
                    <div className="text-slate-400 text-xs">For Projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 dark:border-cyber-cyan/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-fabric-400 dark:bg-cyber-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
