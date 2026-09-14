"use client";

import { useEffect } from "react";
import { EMBER, MONO } from "@/components/site/emberStyles";

/**
 * Count-up numerals, magnetic buttons, scroll progress bar and back-to-top
 * for the Ember theme — same vanilla-JS mechanics as ProfileMotion /
 * KineticMotion. Reveals, the hero letter-stagger, the glow drift and the
 * Philosophy pin/crossfade are all pure CSS (see the EMBER THEME block in
 * globals.css), so this component only needs to own what CSS can't do.
 */
export default function EmberMotion() {
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
              const dur = 1600 + Math.random() * 400;
              const t0 = performance.now();
              const step = (now: number) => {
                const p = Math.min(1, (now - t0) / dur);
                const e = 1 - Math.pow(1 - p, 4);
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
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
          el.style.transition = "transform .12s linear";
          el.style.transform = `translate(${dx.toFixed(1)}px,${dy.toFixed(1)}px)`;
        };
        const leave = () => {
          el.style.transition = "transform .5s cubic-bezier(.22,1,.36,1)";
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
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 80, background: "rgba(245,244,240,.06)" }}>
        <div data-progress="1" style={{ height: "100%", width: "100%", background: `linear-gradient(90deg,${EMBER.accentDeep},${EMBER.accent})` }} />
      </div>
      <a
        data-totop="1"
        href="#em-top"
        aria-label="Back to top"
        style={{
          position: "fixed", right: "clamp(18px,3vw,34px)", bottom: "clamp(18px,3vw,34px)", zIndex: 85,
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 52, height: 52, borderRadius: "50%",
          border: `1px solid ${EMBER.rule}`, background: "rgba(20,20,22,.85)",
          backdropFilter: "blur(10px)", color: EMBER.ink, fontFamily: MONO, fontSize: 16,
        }}
      >
        ↑
      </a>
    </>
  );
}
