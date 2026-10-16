import Image from "next/image";
import { ATELIER, SANS, SERIF, autoGrid, Crest } from "@/components/site/atelierStyles";

const stats = [
  { to: "13", suffix: "yrs", label: "In IT engineering" },
  { to: "100", suffix: "+", label: "Datasets onboarded" },
  { to: "20", suffix: "eng", label: "Team led & mentored" },
  { to: "30", suffix: "%", label: "Faster incident resolution" },
];

export default function Hero() {
  return (
    <section id="at-top" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,56px) clamp(40px,5vw,64px)" }}>
        <div data-reveal-slow="1" style={{ display: "flex", justifyContent: "center", marginBottom: "clamp(28px,4vw,44px)" }}>
          <Crest />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(0,.9fr)", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <div style={{ minWidth: 0, textAlign: "center" }}>
            <p data-reveal-slow="1" style={{ margin: "0 0 clamp(20px,3vw,32px)", fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".3em", textTransform: "uppercase", color: ATELIER.gold }}>
              Senior Data Engineer &amp; Platform Architect
            </p>

            <h1 data-reveal-slow="1" style={{ margin: 0, fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(2.8rem,7vw,5.6rem)", lineHeight: 1.04, letterSpacing: "-.01em", color: ATELIER.ink }}>
              Sathya Rajesh<br />
              <span style={{ fontStyle: "italic", color: ATELIER.gold }}>P K</span>
            </h1>

            <p data-reveal-slow="1" style={{ margin: "clamp(24px,3.4vw,38px)  auto 0", maxWidth: "52ch", fontSize: "clamp(1.05rem,1.4vw,1.2rem)", lineHeight: 1.75, color: ATELIER.muted }}>
              Thirteen years in IT, six spent architecting data platforms for enterprises that cannot afford
              to get it wrong. Quiet, disciplined engineering — built to be handed over, not just shipped.
            </p>

            <div data-reveal-slow="1" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", gap: "16px 30px", margin: "clamp(32px,4.4vw,48px) 0 0" }}>
              <a href="#at-contact" data-magnetic="1" className="atelier-sweep" style={{ display: "inline-flex", alignItems: "center", gap: 12, height: 54, padding: "0 34px", background: ATELIER.ink, color: ATELIER.bg, fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase" }}>
                Begin a Conversation
              </a>
              <a href="#at-work" style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: ATELIER.muted, borderBottom: `1px solid ${ATELIER.rule}`, paddingBottom: 5 }}>
                View the Work
              </a>
            </div>
          </div>

          <figure style={{ margin: 0, minWidth: 0 }}>
            <div style={{ position: "relative", overflow: "hidden", border: `1px solid ${ATELIER.rule}`, aspectRatio: "4/5", background: ATELIER.panel }}>
              <Image data-kenburns="1" src="/images/hero-photo.png" alt="Sathya Rajesh P K" fill priority
                     sizes="(max-width: 1024px) 60vw, 32vw"
                     style={{ objectFit: "cover", objectPosition: "top center" }} />
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `linear-gradient(180deg,transparent 55%,${ATELIER.bg}CC 100%)` }} />
              <div style={{ position: "absolute", left: 18, right: 18, bottom: 16, display: "flex", justifyContent: "space-between", fontFamily: SANS, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(244,239,230,.82)" }}>
                <span>Agilisium Consulting</span><span>Est. 2013</span>
              </div>
            </div>
          </figure>
        </div>

        <dl data-reveal-slow="1" style={{ margin: "clamp(56px,7vw,88px) 0 0", ...autoGrid(150), borderTop: `1px solid ${ATELIER.rule}` }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: i === 0 ? "28px 22px 28px 0" : "28px 22px", borderLeft: i === 0 ? undefined : `1px solid ${ATELIER.rule}`, textAlign: "center" }}>
              <dd style={{ margin: 0 }}>
                <span data-count-to={s.to} style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(2.1rem,3.4vw,2.8rem)", lineHeight: 1, fontVariantNumeric: "tabular-nums", color: ATELIER.ink }}>0</span>
                <span style={{ color: ATELIER.gold, fontFamily: SANS, fontSize: 13, marginLeft: 4 }}>{s.suffix}</span>
              </dd>
              <dt style={{ marginTop: 10, fontFamily: SANS, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: ATELIER.soft }}>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
