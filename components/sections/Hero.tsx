"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/site/AnimatedCounter";

const stats = [
  { value: "12", suffix: "+", label: "Years in IT engineering" },
  { value: "6", suffix: "yrs", label: "Leading data platforms" },
  { value: "50", suffix: "TB", label: "Migrated to Azure" },
  { value: "99.5", suffix: "%", label: "Pipeline SLA uptime" },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 400], [0, 80], { clamp: true });

  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="hero" className="relative overflow-hidden pt-[var(--nav-h)]">
      <div className="shell">
        <div className="grid gap-x-12 gap-y-14 pb-16 pt-14 md:grid-cols-12 lg:pb-24 lg:pt-24">
          <div className="md:col-span-12 lg:col-span-7">
            <motion.p {...rise(0)} className="label flex items-center gap-3 text-subtle">
              <span className="inline-block h-px w-8" style={{ background: "var(--accent)" }} />
              Chennai, India — available for engagements
            </motion.p>

            <motion.h1
              {...rise(0.08)}
              className="mt-8 text-display-lg font-extrabold"
              style={{ textWrap: "balance" }}
            >
              Data platforms that
              <br className="hidden sm:block" />{" "}
              <em className="not-italic text-accent">hold up</em> in production.
            </motion.h1>

            <motion.p {...rise(0.16)} className="mt-8 max-w-measure text-lg leading-relaxed text-muted sm:text-xl">
              I&rsquo;m Sathya Rajesh — Lead Data Engineer and Data Platform Architect. Over six years
              at scale, I&rsquo;ve designed Azure pipelines, Microsoft Fabric platforms, and analytics
              systems that enterprises run critical decisions on. Pragmatic architecture, designed
              for handover, built to last.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contact"
                className="label inline-flex h-12 items-center rounded-full px-6 transition-opacity duration-200 hover:opacity-85"
                style={{ background: "var(--fg)", color: "var(--bg)" }}
              >
                Get in touch
              </a>
              <a href="#services" className="label link-underline text-muted hover:text-[var(--fg)]">
                See the practice
              </a>
              <a
                href="/resume/SathyaRajesh_Resume.pdf"
                download
                className="label link-underline text-muted hover:text-[var(--fg)]"
              >
                Résumé (PDF)
              </a>
            </motion.div>
          </div>

          <motion.figure
            {...rise(0.18)}
            className="md:col-span-8 md:col-start-3 lg:col-span-4 lg:col-start-9"
            ref={ref}
          >
            <motion.div
              className="relative aspect-[4/5] w-full overflow-hidden border border-rule"
              style={!reduced ? { y: imageY } : {}}
            >
              <Image
                src="/images/hero-photo.png"
                alt="Sathya Rajesh PK"
                fill
                sizes="(max-width: 1024px) 60vw, 32vw"
                className="object-cover object-top"
                priority
              />
              {/* Subtle shadow/gradient blend for light theme */}
              <div className="absolute inset-0 pointer-events-none shadow-2xl opacity-20" style={{
                boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.3)"
              }} />
              {/* Gradient overlay for seamless blend */}
              <div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-10" style={{
                background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.2) 100%)"
              }} />
            </motion.div>
            <figcaption className="label mt-3 flex items-center justify-between text-subtle">
              <span>Sathya Rajesh PK</span>
              <span className="nums">Est. 2013</span>
            </figcaption>
          </motion.figure>
        </div>

        <motion.dl
          {...rise(0.32)}
          className="grid grid-cols-2 border-t border-rule sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-7 pr-6 ${i > 0 ? "sm:border-l sm:border-rule sm:pl-6" : ""} ${
                i % 2 === 1 ? "border-l border-rule pl-6 sm:pl-6" : ""
              } ${i > 1 ? "border-t border-rule sm:border-t-0" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="nums text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                  <AnimatedCounter value={parseInt(stat.value)} duration={2.5} />
                </span>
                <span className="label ml-1.5 text-accent">{stat.suffix}</span>
                <span className="mt-3 block text-sm leading-snug text-subtle">{stat.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
