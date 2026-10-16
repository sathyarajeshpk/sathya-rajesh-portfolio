"use client";

import { useEffect } from "react";
import { ATELIER, SANS } from "@/components/site/atelierStyles";

/**
 * Count-up numerals, magnetic buttons, scroll progress and back-to-top —
 * same vanilla-JS mechanics as KineticMotion/EmberMotion. The slow reveals,
 * Ken Burns drift, gold hover sweep and crest-ring draw are all pure CSS
 * (see the ATELIER THEME block in globals.css), kept deliberately slower
 * and quieter than every other theme's motion.
 */
export default function AtelierMotion() {
  useEffect(() => {
    const cleanup: Array<() => void> = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count-to]"));
    if (counters.length) {
      if (reduced) {
        counters.forEach((el) => { el.textContent = el.dataset.countTo ?? ""; });
      } else {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (!en.isIntersecting) return;
              const el = en.target as HTMLElement;
              io.unobserve(el);
              const to = parseFloat(el.dataset.countTo || "0");
              const dec = parseInt(el.dataset.decimals || "0", 10);
              const dur = 2000 + Math.random() * 400;
              const t0 = performance.now();
              const step = (now: number) => {
                const p = Math.min(1, (now - t0) / dur);
                const e = 1 - Math.pow(1 - p, 3);
                el.textContent = dec ? (to * e).toFixed(dec) : String(Math.round(to * e));
                if (p < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            });
          },
          { threshold: 0.5 }
        );
        counters.forEach((el) => io.observe(el));
        cleanup.push(() => io.disconnect());
      }
    }

    if (window.matchMedia("(pointer:fine)").matches && !reduced) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.style.willChange = "transform";
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.18;
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.24;
          el.style.transition = "transform .15s linear";
          el.style.transform = `translate(${dx.toFixed(1)}px,${dy.toFixed(1)}px)`;
        };
        const leave = () => {
          el.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)";
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanup.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 80, background: "rgba(244,239,230,.06)" }}>
        <div data-progress="1" style={{ height: "100%", width: "100%", background: `linear-gradient(90deg,${ATELIER.goldDeep},${ATELIER.gold})` }} />
      </div>
      <a
        data-totop="1"
        href="#at-top"
        aria-label="Back to top"
        style={{
          position: "fixed", right: "clamp(18px,3vw,34px)", bottom: "clamp(18px,3vw,34px)", zIndex: 85,
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 50, height: 50, borderRadius: "50%",
          border: `1px solid ${ATELIER.rule}`, background: "rgba(24,21,18,.88)",
          backdropFilter: "blur(10px)", color: ATELIER.ink, fontFamily: SANS, fontSize: 15,
        }}
      >
        ↑
      </a>
    </>
  );
}
