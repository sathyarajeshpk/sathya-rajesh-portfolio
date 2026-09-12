import { K, MONO, SLAB, autoGrid, Scribble } from "@/components/site/kineticStyles";

const EMAIL = "sathyarajeshpk@gmail.com";

export default function Contact() {
  return (
    <section id="kt-contact" style={{ borderTop: `1px solid ${K.rule}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,56px) clamp(48px,6vw,80px)" }}>
        <div data-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${K.rule}`, paddingTop: 18 }}>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: K.accentDeep, fontWeight: 700 }}>08</span>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.muted }}>Contact</span>
        </div>

        <h2 data-reveal="1" style={{ margin: "clamp(24px,4vw,40px) 0 0", maxWidth: "17ch", fontFamily: SLAB, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(2rem,5vw,3.8rem)", lineHeight: 1.05, color: K.ink }}>
          Tell me what you&rsquo;re building.
        </h2>
        <p style={{ margin: "10px 0 0", fontSize: "1rem", color: K.muted }}>I reply within a working day.</p>

        <div data-reveal="1" style={{ margin: "clamp(28px,4vw,44px) 0 0", display: "inline-block" }}>
          <a data-magnetic="1" href={`mailto:${EMAIL}`}
             style={{ display: "inline-block", fontFamily: SLAB, fontWeight: 700, fontSize: "clamp(1.3rem,3.2vw,2.3rem)", color: K.ink }}>
            {EMAIL}
          </a>
          <Scribble viewBox="0 0 320 20" height={18} d="M4 12 C 60 2, 140 20, 200 8 S 280 2, 316 10" />
        </div>

        <div style={{ marginTop: "clamp(36px,5vw,60px)", ...autoGrid(200), gap: "clamp(20px,3vw,40px)", borderTop: `1px solid ${K.rule}`, paddingTop: 26 }}>
          <div data-reveal="1">
            <p style={{ margin: "0 0 8px", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: K.soft }}>Phone</p>
            <a href="tel:+919597996996" style={{ fontSize: "1rem", fontVariantNumeric: "tabular-nums", color: K.ink }}>+91 95979 96996</a>
          </div>
          <div data-reveal="1">
            <p style={{ margin: "0 0 8px", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: K.soft }}>LinkedIn</p>
            <a href="https://www.linkedin.com/in/sathyarajeshpk/" target="_blank" rel="noopener" style={{ fontSize: "1rem", color: K.ink }}>/in/sathyarajeshpk</a>
          </div>
          <div data-reveal="1">
            <p style={{ margin: "0 0 8px", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: K.soft }}>Based in</p>
            <p style={{ margin: 0, fontSize: "1rem", color: K.muted }}>Chennai, India · IST</p>
          </div>
          <div data-reveal="1">
            <p style={{ margin: "0 0 8px", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: K.soft }}>Status</p>
            <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 9, fontSize: "1rem", color: K.ink }}>
              <span data-pulse="1" style={{ width: 7, height: 7, borderRadius: "50%", background: K.accentDeep }} />
              Open to conversations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
