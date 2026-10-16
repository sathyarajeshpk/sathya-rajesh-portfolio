import { ATELIER, SANS, SERIF, autoGrid } from "@/components/site/atelierStyles";

const EMAIL = "sathyarajeshpk@gmail.com";

export default function Contact() {
  return (
    <section id="at-contact" style={{ borderTop: `1px solid ${ATELIER.ruleSoft}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,10vw,144px) clamp(20px,4vw,56px) clamp(56px,7vw,88px)", textAlign: "center" }}>
        <div data-reveal-slow="1" style={{ display: "inline-flex", alignItems: "baseline", gap: 18 }}>
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: ATELIER.gold }}>VIII.</span>
          <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: ATELIER.muted }}>Contact</span>
        </div>

        <h2 data-reveal-slow="1" style={{ margin: "clamp(28px,4vw,44px) auto 0", maxWidth: "17ch", fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(2.2rem,5vw,4rem)", lineHeight: 1.1, color: ATELIER.ink }}>
          Tell me what you&rsquo;re building. I reply within a working day.
        </h2>

        <a data-reveal-slow="1" data-magnetic="1" href={`mailto:${EMAIL}`} className="atelier-sweep"
           style={{ display: "inline-block", margin: "clamp(30px,4vw,46px) 0 0", fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1.4rem,3.2vw,2.3rem)", color: ATELIER.gold, borderBottom: `1px solid ${ATELIER.rule}`, paddingBottom: 8 }}>
          {EMAIL}
        </a>

        <div style={{ marginTop: "clamp(40px,5vw,64px)", ...autoGrid(200), gap: "clamp(20px,3vw,40px)", borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 28, textAlign: "left" }}>
          <div data-reveal-slow="1">
            <p style={{ margin: "0 0 8px", fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: ATELIER.soft }}>Phone</p>
            <a href="tel:+919597996996" style={{ fontSize: "1rem", fontVariantNumeric: "tabular-nums", color: ATELIER.ink }}>+91 95979 96996</a>
          </div>
          <div data-reveal-slow="1">
            <p style={{ margin: "0 0 8px", fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: ATELIER.soft }}>LinkedIn</p>
            <a href="https://www.linkedin.com/in/sathyarajeshpk/" target="_blank" rel="noopener" style={{ fontSize: "1rem", color: ATELIER.ink }}>/in/sathyarajeshpk</a>
          </div>
          <div data-reveal-slow="1">
            <p style={{ margin: "0 0 8px", fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: ATELIER.soft }}>Based in</p>
            <p style={{ margin: 0, fontSize: "1rem", color: ATELIER.muted }}>Chennai, India · IST</p>
          </div>
          <div data-reveal-slow="1">
            <p style={{ margin: "0 0 8px", fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: ATELIER.soft }}>Status</p>
            <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 9, fontSize: "1rem", color: ATELIER.ink }}>
              <span data-pulse="1" style={{ width: 7, height: 7, borderRadius: "50%", background: ATELIER.gold }} />
              Open to conversations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
