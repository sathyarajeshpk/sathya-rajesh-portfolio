"use client";

import { useEffect, useState } from "react";
import { K, MONO } from "@/components/site/kineticStyles";

/**
 * Imperative motion for the Kinetic theme: count-up numerals and magnetic
 * buttons (same mechanics as ProfileMotion, trimmed down — no cursor ring or
 * card tilt here, the theme leans on CSS scroll-timelines for the rest).
 * Also renders the scroll progress bar, back-to-top button, and the playful
 * status toast (this theme's answer to a lock-screen notification).
 */
export default function KineticMotion() {
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    const cleanup: Array<() => void> = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const t = window.setTimeout(() => setToastOpen(true), 1400);
    cleanup.push(() => window.clearTimeout(t));

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
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 80, background: "rgba(20,24,13,.08)" }}>
        <div data-progress="1" style={{ height: "100%", width: "100%", background: `linear-gradient(90deg,${K.accentDeep},${K.accent})` }} />
      </div>

      <a
        data-totop="1"
        href="#kt-top"
        aria-label="Back to top"
        style={{
          position: "fixed", right: "clamp(18px,3vw,34px)", bottom: "clamp(18px,3vw,34px)", zIndex: 85,
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 52, height: 52, borderRadius: "50%",
          border: `1px solid ${K.rule}`, background: "rgba(243,241,231,.9)",
          backdropFilter: "blur(10px)", color: K.ink, fontFamily: MONO, fontSize: 16,
        }}
      >
        ↑
      </a>

      {toastOpen && (
        <div
          data-toast="1"
          role="status"
          style={{
            position: "fixed", top: "calc(70px + clamp(14px,2.4vw,26px))", right: "clamp(14px,2.4vw,26px)", zIndex: 86,
            width: 240, background: "rgba(24,31,17,.94)", color: K.cream, border: `1px solid ${K.ruleOnDark}`,
            borderRadius: 10, padding: "12px 14px", boxShadow: "0 10px 30px rgba(0,0,0,.25)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: K.accent, flex: "none" }} />
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: K.onDarkMuted }}>Status</span>
            </div>
            <button
              type="button"
              onClick={() => setToastOpen(false)}
              aria-label="Dismiss"
              style={{ background: "none", border: 0, color: K.onDarkSoft, cursor: "pointer", fontSize: 13, lineHeight: 1, padding: 2 }}
            >
              ✕
            </button>
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.5, color: K.cream }}>
            Currently shipping the pharma lakehouse V2. Open to conversations.
          </p>
        </div>
      )}
    </>
  );
}
