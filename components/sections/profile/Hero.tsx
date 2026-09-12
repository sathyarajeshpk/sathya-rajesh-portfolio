import Image from "next/image";
import { C, MONO, SERIF, autoGrid } from "@/components/site/profileStyles";

const stats = [
  { to: "13", suffix: "yrs", label: "In IT engineering" },
  { to: "100", suffix: "+", label: "Datasets onboarded" },
  { to: "20", suffix: "eng", label: "Team led & mentored" },
  { to: "30", suffix: "%", label: "Faster incident resolution" },
];

export default function Hero() {
  return (
    <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,9vw,120px) clamp(20px,4vw,56px) clamp(40px,5vw,64px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,.85fr)", gap: "clamp(28px,5vw,72px)", alignItems: "end" }}>
        <div style={{ minWidth: 0 }}>
          <p style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 0 clamp(24px,4vw,44px)", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9AA2AE", animation: "sr-rise .8s cubic-bezier(.22,1,.36,1) both" }}>
            <span data-pulse="1" style={{ width: 7, height: 7, borderRadius: "50%", background: C.accent }} />
            Chennai, India — open to conversations
          </p>

          <h1 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(2.9rem,8.2vw,6.6rem)", lineHeight: .98, letterSpacing: "-.025em" }}>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
              <span data-word="1" style={{ animationDelay: ".05s" }}>Sathya</span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
              <span data-word="1" style={{ animationDelay: ".17s" }}>Rajesh</span>{" "}
              <span data-word="1" style={{ animationDelay: ".26s", color: C.accent, fontStyle: "italic" }}>P K</span>
            </span>
          </h1>

          <div style={{ marginTop: "clamp(22px,3.4vw,38px)", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 16px", animation: "sr-rise .9s cubic-bezier(.22,1,.36,1) both", animationDelay: ".42s" }}>
            <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: C.fg }}>Senior Data Engineer</span>
            <span style={{ width: 26, height: 1, background: C.accent, display: "inline-block" }} />
            <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#9AA2AE" }}>13 yrs IT · 5+ yrs Azure cloud platforms</span>
          </div>

          <p style={{ margin: "clamp(22px,3vw,32px) 0 0", maxWidth: "54ch", fontSize: "clamp(1.02rem,1.5vw,1.28rem)", lineHeight: 1.62, color: C.muted, textWrap: "pretty", animation: "sr-rise .9s cubic-bezier(.22,1,.36,1) both", animationDelay: ".52s" } as React.CSSProperties}>
            I build lakehouse platforms on Azure. Most of my work lives in the unglamorous half of data
            engineering: getting awkward source systems to land reliably in Bronze, stay clean through
            Silver, and still be running at 6am when nobody is watching.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 26px", marginTop: "clamp(28px,4vw,42px)", animation: "sr-rise .9s cubic-bezier(.22,1,.36,1) both", animationDelay: ".62s" }}>
            <a href="#contact" data-magnetic="1"
               style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 52, padding: "0 28px", borderRadius: 99, background: C.fg, color: C.bg, fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase" }}>
              Start a conversation <span aria-hidden>→</span>
            </a>
            <a href="#work" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9AA2AE", borderBottom: "1px solid rgba(255,255,255,.18)", paddingBottom: 4 }}>
              See selected work
            </a>
          </div>
        </div>

        <figure style={{ margin: 0, minWidth: 0 }}>
          <div style={{ position: "relative", overflow: "hidden", border: `1px solid ${C.rule}`, aspectRatio: "4/5", background: C.raised }}>
            <Image data-portrait="1" src="/images/hero-photo.png" alt="Sathya Rajesh P K" fill priority
                   sizes="(max-width: 1024px) 60vw, 32vw"
                   style={{ objectFit: "cover", objectPosition: "top center", willChange: "transform,filter" }} />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg,rgba(10,11,13,0) 45%,rgba(10,11,13,.72) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", mixBlendMode: "soft-light", background: "radial-gradient(120% 90% at 70% 10%,rgba(99,180,190,.55),transparent 60%)" }} />
            <div style={{ position: "absolute", left: 16, right: 16, bottom: 14, display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(238,240,244,.82)" }}>
              <span>Agilisium Consulting</span><span>Est. 2013</span>
            </div>
          </div>
        </figure>
      </div>

      <dl data-reveal="1" style={{ margin: "clamp(46px,6vw,76px) 0 0", ...autoGrid(150), borderTop: `1px solid ${C.rule}` }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ padding: i === 0 ? "26px 22px 26px 0" : "26px 22px", borderLeft: i === 0 ? undefined : `1px solid ${C.rule}` }}>
            <dd style={{ margin: 0 }}>
              <span data-count-to={s.to} style={{ fontFamily: SERIF, fontSize: "clamp(2.3rem,4vw,3.3rem)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>0</span>
              <span style={{ color: C.accent, fontFamily: MONO, fontSize: 13, marginLeft: 4 }}>{s.suffix}</span>
            </dd>
            <dt style={{ marginTop: 10, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: C.subtle }}>{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
