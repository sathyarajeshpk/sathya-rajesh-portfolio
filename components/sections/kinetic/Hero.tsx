import Image from "next/image";
import { K, MONO, SLAB, ACCENT_SERIF, autoGrid } from "@/components/site/kineticStyles";

const stats = [
  { to: "13", suffix: "yrs", label: "In IT engineering" },
  { to: "100", suffix: "+", label: "Datasets onboarded" },
  { to: "20", suffix: "eng", label: "Team led & mentored" },
  { to: "30", suffix: "%", label: "Faster incident resolution" },
];

export default function Hero() {
  return (
    <section id="kt-top" style={{ position: "relative", overflow: "hidden" }}>
      {/* soft topo-line backdrop, decorative only */}
      <svg aria-hidden viewBox="0 0 1240 640" preserveAspectRatio="xMidYMid slice"
           style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
        <path d="M-40 120 Q 300 40 620 130 T 1280 90" fill="none" stroke={K.rule} strokeWidth="1.5" />
        <path d="M-40 220 Q 320 150 640 230 T 1280 190" fill="none" stroke={K.rule} strokeWidth="1.5" />
        <path d="M-40 520 Q 300 460 640 540 T 1280 500" fill="none" stroke={K.rule} strokeWidth="1.5" />
        <circle cx="1080" cy="120" r="120" fill="none" stroke={K.rule} strokeWidth="1.5" />
      </svg>

      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,9vw,120px) clamp(20px,4vw,56px) clamp(40px,5vw,64px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,.9fr)", gap: "clamp(28px,5vw,72px)", alignItems: "end" }}>
          <div style={{ minWidth: 0 }}>
            <p data-reveal="1" style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 0 clamp(20px,3.6vw,36px)", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.muted }}>
              <span data-pulse="1" style={{ width: 7, height: 7, borderRadius: "50%", background: K.accentDeep }} />
              Chennai, India — open to conversations
            </p>

            <h1 data-reveal="1" style={{ margin: 0, fontFamily: SLAB, fontWeight: 900, fontSize: "clamp(2.6rem,7.4vw,5.6rem)", lineHeight: 0.98, letterSpacing: "-.02em", color: K.ink, textTransform: "uppercase" }}>
              Sathya Rajesh{" "}
              <span style={{ fontFamily: ACCENT_SERIF, fontStyle: "italic", fontWeight: 400, textTransform: "none", color: K.accentDeep }}>P K</span>
            </h1>

            <div data-reveal="1" style={{ marginTop: "clamp(20px,3vw,32px)", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 16px" }}>
              <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 700, color: K.ink }}>Senior Data Engineer</span>
              <span style={{ width: 26, height: 1, background: K.accentDeep, display: "inline-block" }} />
              <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: K.muted }}>13 yrs IT · 5+ yrs Azure cloud platforms</span>
            </div>

            <p data-reveal="1" style={{ margin: "clamp(20px,3vw,30px) 0 0", maxWidth: "52ch", fontSize: "clamp(1rem,1.4vw,1.2rem)", lineHeight: 1.62, color: K.muted } as React.CSSProperties}>
              I build lakehouse platforms on Azure. Most of my work lives in the unglamorous half of data
              engineering: getting awkward source systems to land reliably in Bronze, stay clean through
              Silver, and still be running at 6am when nobody is watching.
            </p>

            <div data-reveal="1" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 26px", marginTop: "clamp(26px,4vw,40px)" }}>
              <a href="#kt-contact" data-magnetic="1"
                 style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 52, padding: "0 28px", borderRadius: 99, background: K.ink, color: K.cream, fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700 }}>
                Start a conversation <span aria-hidden>→</span>
              </a>
              <a href="#kt-work" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.muted, borderBottom: `1px solid ${K.rule}`, paddingBottom: 4 }}>
                See selected work
              </a>
            </div>
          </div>

          <figure style={{ margin: 0, minWidth: 0, position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", border: `1px solid ${K.rule}`, aspectRatio: "4/5", background: K.bgSoft, borderRadius: 4 }}>
              <Image data-portrait="1" src="/images/hero-photo.png" alt="Sathya Rajesh P K" fill priority
                     sizes="(max-width: 1024px) 60vw, 34vw"
                     style={{ objectFit: "cover", objectPosition: "top center" }} />
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none", mixBlendMode: "multiply", background: `linear-gradient(160deg,${K.accentDeep}22,transparent 55%)` }} />
            </div>

            {/* status widget — this theme's answer to a "next race" card */}
            <div data-reveal-r="1" style={{
              position: "absolute", left: -18, bottom: 24, width: 168, background: K.panel, color: K.cream,
              border: `1px solid ${K.ruleOnDark}`, borderRadius: 6, padding: "12px 14px", boxShadow: "0 14px 30px rgba(0,0,0,.2)",
            }}>
              <p style={{ margin: 0, fontFamily: MONO, fontSize: 9, letterSpacing: ".16em", textTransform: "uppercase", color: K.onDarkSoft }}>Currently</p>
              <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.4, fontWeight: 500 }}>Pharma omnichannel lakehouse</p>
              <p style={{ margin: "8px 0 0", fontFamily: MONO, fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase", color: K.accent }}>In progress</p>
            </div>
          </figure>
        </div>

        <dl data-reveal="1" style={{ margin: "clamp(46px,6vw,76px) 0 0", ...autoGrid(150), borderTop: `1px solid ${K.rule}` }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: i === 0 ? "26px 22px 26px 0" : "26px 22px", borderLeft: i === 0 ? undefined : `1px solid ${K.rule}` }}>
              <dd style={{ margin: 0 }}>
                <span data-count-to={s.to} style={{ fontFamily: SLAB, fontWeight: 900, fontSize: "clamp(2.1rem,3.6vw,3rem)", lineHeight: 1, fontVariantNumeric: "tabular-nums", color: K.ink }}>0</span>
                <span style={{ color: K.accentDeep, fontFamily: MONO, fontSize: 13, marginLeft: 4 }}>{s.suffix}</span>
              </dd>
              <dt style={{ marginTop: 10, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: K.soft }}>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
