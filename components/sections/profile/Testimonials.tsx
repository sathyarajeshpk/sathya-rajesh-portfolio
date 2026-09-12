import { C, MONO, SERIF, autoGrid } from "@/components/site/profileStyles";

const awards = [
  { org: "TransUnion", body: "Quarterly Best Performer — Feb 2024, Aug 2023, Nov 2022. For technical leadership and mentorship of the platform team." },
  { org: "Tata Consultancy Services", body: "Client Appreciation Award for technical delivery — systematic failure investigation and documentation that raised operational standards." },
  { org: "Sitel India", body: "Wall of Fame, three consecutive quarters. 95% first-contact resolution across 400+ weekly interactions." },
];

/** The one inverted band on the page — a deliberate change of register. */
export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: C.fg, color: C.bg }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,56px)" }}>
        <div data-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: "1px solid rgba(10,11,13,.18)", paddingTop: 18 }}>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: C.deep }}>06</span>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#454B55" }}>In their words</span>
        </div>

        <blockquote data-reveal="1" style={{ margin: "clamp(30px,4vw,52px) 0 0", maxWidth: "26ch", fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.7rem,3.6vw,2.9rem)", lineHeight: 1.2, letterSpacing: "-.015em", textWrap: "pretty" } as React.CSSProperties}>
          &ldquo;Our requirements were understood and converted into a clean, attractive website. We would definitely recommend your work.&rdquo;
        </blockquote>
        <p data-reveal="1" style={{ margin: "22px 0 0", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#454B55" }}>
          Skyline Industries — Construction &amp; Project Management
        </p>

        <div style={{ marginTop: "clamp(38px,5vw,64px)", ...autoGrid(260), gap: "clamp(24px,3vw,40px)" }}>
          {awards.map((a) => (
            <div key={a.org} data-reveal="1" style={{ borderTop: "1px solid rgba(10,11,13,.18)", paddingTop: 20, minWidth: 0 }}>
              <p style={{ margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.deep }}>{a.org}</p>
              <p style={{ margin: "12px 0 0", fontSize: "1rem", lineHeight: 1.6, color: "#2F343C" }}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
