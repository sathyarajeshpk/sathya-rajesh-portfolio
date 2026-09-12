"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { S, MONO } from "@/components/site/signatureStyles";

/**
 * Real GSAP + ScrollTrigger + Lenis motion for the Signature theme — the
 * same stack the motorsport reference site runs on, as opposed to the
 * Kinetic theme's CSS-only approximation. Scans the DOM once for data-gs-*
 * attributes (mirrors ProfileMotion / KineticMotion's pattern) so section
 * components stay declarative markup.
 *
 * Everything gsap.context() registers here is reverted on unmount — this
 * matters more than in the other themes because Lenis takes over the
 * window's scroll behaviour globally, and switching away via the theme
 * dropdown must hand scrolling back to the browser cleanly.
 */
export default function SignatureMotion() {
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | null = null;
    let rafId = 0;
    if (!reduced) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const toastTimer = window.setTimeout(() => setToastOpen(true), 1400);

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>("[data-gs-reveal]").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 28 }, {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          delay: (i % 4) * 0.03,
        });
      });

      document.querySelectorAll<HTMLElement>("[data-gs-reveal-r]").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, x: 32 }, {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-gs-marquee]").forEach((el) => {
        const track = el.firstElementChild as HTMLElement | null;
        if (!track) return;
        gsap.to(track, { xPercent: -50, duration: 22, ease: "none", repeat: -1 });
      });

      // Pinned zoom-in statement — the closest structural analog to the
      // reference site's pinned "REDEFINING LIMITS" scroll sequence.
      document.querySelectorAll<HTMLElement>("[data-gs-pin-zoom]").forEach((wrap) => {
        const target = wrap.querySelector<HTMLElement>("[data-gs-zoom-target]");
        if (!target) return;
        gsap.fromTo(target, { scale: 0.82, opacity: 0.45 }, {
          scale: 1, opacity: 1, ease: "none",
          scrollTrigger: { trigger: wrap, start: "top top", end: "+=70%", scrub: 0.6, pin: true },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-gs-portrait]").forEach((el) => {
        gsap.fromTo(el,
          { scale: 1.16, filter: "grayscale(1) brightness(.62) contrast(1.12)" },
          { scale: 1, filter: "grayscale(0) brightness(1) contrast(1)", ease: "none",
            scrollTrigger: { trigger: el, start: "top 90%", end: "top 25%", scrub: 0.6 } });
      });

      document.querySelectorAll<HTMLElement>("[data-gs-stroke]").forEach((path) => {
        gsap.fromTo(path, { strokeDashoffset: 1 }, {
          strokeDashoffset: 0, ease: "none",
          scrollTrigger: { trigger: path, start: "top 90%", end: "top 40%", scrub: 0.5 },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-gs-count-to]").forEach((el) => {
        const to = parseFloat(el.dataset.gsCountTo || "0");
        const dec = parseInt(el.dataset.gsDecimals || "0", 10);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: to, duration: 1.8, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => { el.textContent = dec ? obj.v.toFixed(dec) : String(Math.round(obj.v)); },
        });
      });

      if (window.matchMedia("(pointer:fine)").matches) {
        document.querySelectorAll<HTMLElement>("[data-gs-magnetic]").forEach((el) => {
          const toX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
          const toY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
          const move = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            toX((e.clientX - (r.left + r.width / 2)) * 0.24);
            toY((e.clientY - (r.top + r.height / 2)) * 0.32);
          };
          const leave = () => { toX(0); toY(0); };
          el.addEventListener("pointermove", move);
          el.addEventListener("pointerleave", leave);
        });
      }

      const progress = document.querySelector<HTMLElement>("[data-gs-progress]");
      const totop = document.querySelector<HTMLElement>("[data-gs-totop]");
      if (progress) {
        ScrollTrigger.create({
          start: 0, end: () => document.documentElement.scrollHeight - window.innerHeight,
          onUpdate: (self) => {
            gsap.set(progress, { scaleX: self.progress });
            if (totop) gsap.to(totop, { opacity: self.progress > 0.06 ? 1 : 0, duration: 0.3 });
          },
        });
      }
    });

    return () => {
      window.clearTimeout(toastTimer);
      ctx.revert();
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 80, background: "rgba(17,17,18,.08)" }}>
        <div data-gs-progress="1" style={{ height: "100%", width: "100%", background: `linear-gradient(90deg,${S.accentDeep},${S.accent})`, transformOrigin: "left", transform: "scaleX(0)" }} />
      </div>

      <a
        data-gs-totop="1"
        href="#sg-top"
        aria-label="Back to top"
        style={{
          position: "fixed", right: "clamp(18px,3vw,34px)", bottom: "clamp(18px,3vw,34px)", zIndex: 85, opacity: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 52, height: 52, borderRadius: "50%",
          border: `1px solid ${S.rule}`, background: "rgba(235,238,224,.9)",
          backdropFilter: "blur(10px)", color: S.ink, fontFamily: MONO, fontSize: 16,
        }}
      >
        ↑
      </a>

      {toastOpen && (
        <div
          role="status"
          style={{
            position: "fixed", top: "calc(70px + clamp(14px,2.4vw,26px))", right: "clamp(14px,2.4vw,26px)", zIndex: 86,
            width: 240, background: "rgba(17,17,18,.94)", color: S.bg, border: `1px solid ${S.ruleOnDark}`,
            borderRadius: 10, padding: "12px 14px", boxShadow: "0 10px 30px rgba(0,0,0,.28)", backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: S.accent, flex: "none" }} />
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: S.sage1 }}>Status</span>
            </div>
            <button type="button" onClick={() => setToastOpen(false)} aria-label="Dismiss"
                    style={{ background: "none", border: 0, color: S.sage2, cursor: "pointer", fontSize: 13, lineHeight: 1, padding: 2 }}>✕</button>
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.5, color: S.bg }}>
            Currently shipping the pharma lakehouse V2. Open to conversations.
          </p>
        </div>
      )}
    </>
  );
}
