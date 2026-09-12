import { K, MONO, SLAB, ACCENT_SERIF, autoGrid } from "@/components/site/kineticStyles";

const awards = [
  { org: "TransUnion", body: "Quarterly Best Performer — Feb 2024, Aug 2023, Nov 2022. For technical leadership and mentorship of the platform team." },
  { org: "Tata Consultancy Services", body: "Client Appreciation Award for technical delivery — systematic failure investigation and documentation that raised operational standards." },
  { org: "Sitel India", body: "Wall of Fame, three consecutive quarters. 95% first-contact resolution across 400+ weekly interactions." },
];

export default function Testimonials() {
  return (
    <section id="kt-testimonials" style={{ background: K.ink, color: K.cream }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,56px)" }}>
        <div data-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${K.ruleOnDark}`, paddingTop: 18 }}>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: K.accent, fontWeight: 700 }}>06</span>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.onDarkMuted }}>In their words</span>
        </div>

        <h2 data-reveal="1" style={{ margin: "clamp(24px,4vw,44px) 0 0", fontFamily: SLAB, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(2rem,5vw,3.6rem)", lineHeight: 1.02 }}>
          Trusted. <span style={{ color: K.accent }}>Recommended.</span> Delivered.
        </h2>

        <blockquote data-reveal="1" style={{ margin: "clamp(28px,4vw,44px) 0 0", maxWidth: "30ch", fontFamily: ACCENT_SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.5rem,3vw,2.3rem)", lineHeight: 1.3, color: K.cream }}>
          &ldquo;Our requirements were understood and converted into a clean, attractive website. We would definitely recommend your work.&rdquo;
        </blockquote>
        <p data-reveal="1" style={{ margin: "18px 0 0", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.onDarkMuted }}>
          Skyline Industries — Construction &amp; Project Management
        </p>

        <div style={{ marginTop: "clamp(38px,5vw,64px)", ...autoGrid(260), gap: "clamp(24px,3vw,40px)" }}>
          {awards.map((a) => (
            <div key={a.org} data-reveal="1" style={{ borderTop: `1px solid ${K.ruleOnDark}`, paddingTop: 20, minWidth: 0 }}>
              <p style={{ margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: K.accent }}>{a.org}</p>
              <p style={{ margin: "12px 0 0", fontSize: "1rem", lineHeight: 1.6, color: K.onDarkMuted }}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
