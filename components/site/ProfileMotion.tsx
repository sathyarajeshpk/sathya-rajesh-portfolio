"use client";

import { useEffect } from "react";
import { C } from "@/components/site/profileStyles";

/**
 * All imperative motion for the profile page, mounted once.
 *  - cursor-reactive particle field (canvas, fixed behind content)
 *  - custom cursor ring
 *  - count-up numerals ([data-count-to])
 *  - card spotlight + tilt ([data-card] / [data-spot])
 *  - magnetic buttons ([data-magnetic])
 * Scroll-driven reveals, the progress bar and the back-to-top button are pure CSS
 * (animation-timeline) — see the profile block appended to app/globals.css.
 */
export default function ProfileMotion({ accent = C.accent }: { accent?: string }) {
  useEffect(() => {
    const cleanup: Array<() => void> = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer:fine)").matches;
    const rgb = hexToRgb(accent).join(",");

    /* ---- particle field ---- */
    const canvas = document.getElementById("sr-field") as HTMLCanvasElement | null;
    if (canvas && !reduced) {
      const ctx = canvas.getContext("2d")!;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let w = 0, h = 0, raf = 0;
      const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
      const mouse = { x: -9999, y: -9999 };

      const seed = () => {
        nodes.length = 0;
        const count = Math.min(88, Math.round((w * h) / 22000));
        for (let i = 0; i < count; i++)
          nodes.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            r: Math.random() * 1.5 + 0.5,
          });
      };
      const resize = () => {
        w = canvas.clientWidth; h = canvas.clientHeight;
        canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        seed();
      };
      const onMove = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
      const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

      const tick = () => {
        ctx.clearRect(0, 0, w, h);
        for (const n of nodes) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y, d2 = dx * dx + dy * dy;
          if (d2 < 42000 && d2 > 1) {
            const f = (1 - d2 / 42000) * 0.035;
            n.vx += dx * f * 0.01; n.vy += dy * f * 0.01;
          }
          n.vx *= 0.994; n.vy *= 0.994; n.x += n.vx; n.y += n.vy;
          if (n.x < -30) n.x = w + 30; if (n.x > w + 30) n.x = -30;
          if (n.y < -30) n.y = h + 30; if (n.y > h + 30) n.y = -30;
        }
        for (let i = 0; i < nodes.length; i++)
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i], b = nodes[j];
            const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
            if (d2 < 19000) {
              const t = 1 - d2 / 19000;
              const mx = (a.x + b.x) / 2 - mouse.x, my = (a.y + b.y) / 2 - mouse.y;
              const near = Math.max(0, 1 - (mx * mx + my * my) / 120000);
              ctx.strokeStyle = "rgba(" + rgb + "," + (t * (0.055 + near * 0.3)).toFixed(3) + ")";
              ctx.lineWidth = 1;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
          }
        for (const n of nodes) {
          const dx = n.x - mouse.x, dy = n.y - mouse.y;
          const near = Math.max(0, 1 - (dx * dx + dy * dy) / 90000);
          ctx.fillStyle = "rgba(" + rgb + "," + (0.16 + near * 0.55).toFixed(3) + ")";
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + near * 0.9, 0, Math.PI * 2); ctx.fill();
        }
        raf = requestAnimationFrame(tick);
      };

      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(tick);
      cleanup.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerleave", onLeave);
      });
    } else if (canvas) {
      canvas.style.display = "none";
    }

    /* ---- count-up numerals ---- */
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

    /* ---- cursor ring, card spotlight + tilt, magnetic buttons ---- */
    if (fine && !reduced) {
      const dot = document.getElementById("sr-cursor");
      if (dot) {
        let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, raf = 0;
        const move = (e: PointerEvent) => {
          tx = e.clientX; ty = e.clientY;
          dot.style.opacity = "1";
          const hot = (e.target as HTMLElement)?.closest?.("a,button,[data-card],[data-magnetic]");
          dot.style.width = hot ? "58px" : "34px";
          dot.style.height = hot ? "58px" : "34px";
          dot.style.background = hot ? "rgba(" + rgb + ",.12)" : "transparent";
        };
        const out = () => { dot.style.opacity = "0"; };
        const tick = () => {
          x += (tx - x) * 0.18; y += (ty - y) * 0.18;
          dot.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%)";
          raf = requestAnimationFrame(tick);
        };
        addEventListener("pointermove", move, { passive: true });
        addEventListener("pointerleave", out);
        raf = requestAnimationFrame(tick);
        cleanup.push(() => {
          cancelAnimationFrame(raf);
          removeEventListener("pointermove", move);
          removeEventListener("pointerleave", out);
        });
      }

      document.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
        const spot = card.querySelector<HTMLElement>("[data-spot]");
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          const mx = e.clientX - r.left, my = e.clientY - r.top;
          if (spot) {
            spot.style.opacity = "1";
            spot.style.background =
              "radial-gradient(420px circle at " + mx + "px " + my + "px, rgba(" + rgb + ",.13), transparent 62%)";
          }
          const rx = ((my / r.height) - 0.5) * -3.2;
          const ry = ((mx / r.width) - 0.5) * 3.2;
          card.style.transform =
            "translateY(-6px) perspective(900px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg)";
        };
        const leave = () => { if (spot) spot.style.opacity = "0"; card.style.transform = ""; };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cleanup.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });

      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.style.willChange = "transform";
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
          el.style.transition = "transform .12s linear, background .3s ease, color .3s ease";
          el.style.transform = "translate(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px)";
        };
        const leave = () => {
          el.style.transition = "transform .5s cubic-bezier(.22,1,.36,1), background .3s ease, color .3s ease";
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
  }, [accent]);

  return (
    <>
      <canvas
        id="sr-field"
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, opacity: 0.85 }}
      />
      <div
        id="sr-cursor"
        style={{
          position: "fixed", top: 0, left: 0, width: 34, height: 34,
          border: "1px solid rgba(99,180,190,.55)", borderRadius: "50%",
          pointerEvents: "none", zIndex: 90, opacity: 0,
          transform: "translate(-50%,-50%)", mixBlendMode: "screen",
          transition: "opacity .3s ease, width .3s cubic-bezier(.22,1,.36,1), height .3s cubic-bezier(.22,1,.36,1), background .3s ease",
        }}
      />
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 80, background: "rgba(255,255,255,.05)" }}>
        <div data-progress="1" style={{ height: "100%", width: "100%", background: "linear-gradient(90deg,#175E68,#63B4BE)" }} />
      </div>
      <a
        data-totop="1"
        href="#top"
        aria-label="Back to top"
        style={{
          position: "fixed", right: "clamp(18px,3vw,34px)", bottom: "clamp(18px,3vw,34px)", zIndex: 85,
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 52, height: 52, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,.14)", background: "rgba(16,18,22,.82)",
          backdropFilter: "blur(10px)", color: C.fg, fontFamily: "'JetBrains Mono',monospace", fontSize: 16,
          transition: "background .3s ease, border-color .3s ease, color .3s ease",
        }}
      >
        ↑
      </a>
    </>
  );
}

function hexToRgb(hex: string) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [99, 180, 190];
}
