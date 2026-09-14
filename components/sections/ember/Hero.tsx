import { EMBER, MONO, GROTESK, autoGrid, EmberGlow } from "@/components/site/emberStyles";

const stats = [
  { to: "13", suffix: "yrs", label: "In IT engineering" },
  { to: "100", suffix: "+", label: "Datasets onboarded" },
  { to: "20", suffix: "eng", label: "Team led & mentored" },
  { to: "30", suffix: "%", label: "Faster incident resolution" },
];

export default function Hero() {
  return (
    <section id="em-top" style={{ position: "relative", overflow: "hidden", minHeight: "94vh", display: "flex", flexDirection: "column" }}>
      <EmberGlow />
      <div style={{ position: "absolute", top: 86, right: "clamp(20px,4vw,56px)", zIndex: 1, display: "flex", alignItems: "center", gap: 8, fontFamily: MONO, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: EMBER.soft }}>
        Dive in <span aria-hidden>↓</span>
      </div>

      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1240, margin: "0 auto", padding: "clamp(90px,10vw,140px) clamp(20px,4vw,56px) clamp(40px,5vw,64px)", width: "100%" }}>
        <p data-reveal="1" style={{ margin: "0 auto 18px", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: EMBER.accent, textAlign: "center" }}>
          Engineering platforms that people trust
        </p>

        <h1 style={{ margin: 0, textAlign: "center", fontFamily: GROTESK, fontWeight: 700, fontSize: "clamp(3.4rem,14vw,10rem)", lineHeight: 0.92, letterSpacing: "-.02em", color: EMBER.ink, textTransform: "uppercase" }}>
          {"SATHYA".split("").map((ch, i) => (
            <span key={i} data-word="1" style={{ display: "inline-block", animationDelay: `${i * 0.05}s` }}>{ch}</span>
          ))}
        </h1>

        <p data-reveal="1" style={{ margin: "18px auto 0", textAlign: "center", fontFamily: MONO, fontSize: 13, letterSpacing: ".1em", color: EMBER.muted }}>
          Rajesh P K — Senior Data Engineer &amp; Platform Architect
        </p>

        <p data-reveal="1" style={{ margin: "20px auto 0", maxWidth: "46ch", textAlign: "center", fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.6, color: EMBER.muted }}>
          I build reliable, config-driven data platforms on Azure — engineering that holds up long after launch day.
        </p>

        <div data-reveal="1" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", gap: "14px 26px", margin: "34px auto 0" }}>
          <a href="#em-work" data-magnetic="1" style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 52, padding: "0 30px", borderRadius: 99, background: EMBER.accent, color: "#fff", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700 }}>
            Explore Work <span aria-hidden>→</span>
          </a>
          <a href="#em-contact" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: EMBER.muted, borderBottom: `1px solid ${EMBER.rule}`, paddingBottom: 4 }}>
            Let&rsquo;s Talk
          </a>
        </div>

        <dl data-reveal="1" style={{ margin: "clamp(52px,7vw,84px) 0 0", ...autoGrid(150), borderTop: `1px solid ${EMBER.rule}` }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: i === 0 ? "26px 22px 26px 0" : "26px 22px", borderLeft: i === 0 ? undefined : `1px solid ${EMBER.rule}` }}>
              <dd style={{ margin: 0 }}>
                <span data-count-to={s.to} style={{ fontFamily: GROTESK, fontWeight: 700, fontSize: "clamp(2rem,3.4vw,2.8rem)", lineHeight: 1, fontVariantNumeric: "tabular-nums", color: EMBER.ink }}>0</span>
                <span style={{ color: EMBER.accent, fontFamily: MONO, fontSize: 13, marginLeft: 4 }}>{s.suffix}</span>
              </dd>
              <dt style={{ marginTop: 10, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: EMBER.soft }}>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
