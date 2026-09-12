import ProfileSectionHeader from "@/components/site/ProfileSectionHeader";
import { C, MONO, SERIF, autoGrid } from "@/components/site/profileStyles";

const EMAIL = "sathyarajeshpk@gmail.com";

export default function Contact() {
  return (
    <section id="contact" style={{ borderTop: `1px solid ${C.ruleSoft}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,56px) clamp(48px,6vw,80px)" }}>
        <ProfileSectionHeader index="08" title="Contact" />

        <h2 data-reveal="1" style={{ margin: "clamp(26px,4vw,44px) 0 0", maxWidth: "17ch", fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(2.2rem,5.6vw,4.4rem)", lineHeight: 1.04, letterSpacing: "-.025em", textWrap: "balance" } as React.CSSProperties}>
          Tell me what you&rsquo;re building. I reply within a working day.
        </h2>

        <a data-reveal="1" data-magnetic="1" href={`mailto:${EMAIL}`}
           style={{ display: "inline-block", margin: "clamp(28px,4vw,44px) 0 0", fontFamily: SERIF, fontSize: "clamp(1.4rem,3.4vw,2.6rem)", letterSpacing: "-.01em", color: C.accent, borderBottom: "1px solid rgba(99,180,190,.35)", paddingBottom: 6, transition: "border-color .35s ease, color .35s ease" }}>
          {EMAIL}
        </a>

        <div style={{ marginTop: "clamp(36px,5vw,60px)", ...autoGrid(200), gap: "clamp(20px,3vw,40px)", borderTop: `1px solid ${C.rule}`, paddingTop: 26 }}>
          <div data-reveal="1">
            <p style={{ margin: "0 0 8px", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>Phone</p>
            <a href="tel:+919597996996" style={{ fontSize: "1rem", fontVariantNumeric: "tabular-nums" }}>+91 95979 96996</a>
          </div>
          <div data-reveal="1">
            <p style={{ margin: "0 0 8px", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>LinkedIn</p>
            <a href="https://www.linkedin.com/in/sathyarajeshpk/" target="_blank" rel="noopener" style={{ fontSize: "1rem" }}>/in/sathyarajeshpk</a>
          </div>
          <div data-reveal="1">
            <p style={{ margin: "0 0 8px", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>Based in</p>
            <p style={{ margin: 0, fontSize: "1rem", color: C.muted }}>Chennai, India · IST</p>
          </div>
          <div data-reveal="1">
            <p style={{ margin: "0 0 8px", fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>Status</p>
            <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 9, fontSize: "1rem", color: C.fg }}>
              <span data-pulse="1" style={{ width: 7, height: 7, borderRadius: "50%", background: C.accent }} />
              Open to conversations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
