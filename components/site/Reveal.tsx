"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds of delay. Keep under ~0.2 — long cascades read as decoration. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section" | "header";
};

/**
 * One reveal for the whole site: a short rise and fade, fired once.
 * Motion collapses to a plain fade when the visitor asks for reduced motion.
 */
export default function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
