import { ATELIER, SANS, SERIF, autoGrid } from "@/components/site/atelierStyles";

const awards = [
  { org: "TransUnion", body: "Quarterly Best Performer — Feb 2024, Aug 2023, Nov 2022. For technical leadership and mentorship of the platform team." },
  { org: "Tata Consultancy Services", body: "Client Appreciation Award for technical delivery — systematic failure investigation and documentation that raised operational standards." },
  { org: "Sitel India", body: "Wall of Fame, three consecutive quarters. 95% first-contact resolution across 400+ weekly interactions." },
];

/** The one inverted register on the page, as every other Atelier theme
 *  carries — here, ivory ground instead of the usual charcoal. */
export default function Testimonials() {
  return (
    <section id="at-testimonials" style={{ background: ATELIER.ink, color: ATELIER.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,10vw,144px) clamp(20px,4vw,56px)" }}>
        <div data-reveal-slow="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: "1px solid rgba(14,13,12,.16)", paddingTop: 18 }}>
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: ATELIER.goldDeep }}>VI.</span>
          <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: "#5C5447" }}>In Their Words</span>
        </div>

        <blockquote data-reveal-slow="1" style={{ margin: "clamp(32px,4.4vw,52px) 0 0", maxWidth: "26ch", fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, fontSize: "clamp(1.8rem,3.6vw,2.9rem)", lineHeight: 1.22, color: ATELIER.bg }}>
          &ldquo;Our requirements were understood and converted into a clean, attractive website. We would definitely recommend your work.&rdquo;
        </blockquote>
        <p data-reveal-slow="1" style={{ margin: "22px 0 0", fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: "#5C5447" }}>
          Skyline Industries — Construction &amp; Project Management
        </p>

        <div style={{ marginTop: "clamp(40px,5vw,64px)", ...autoGrid(260), gap: "clamp(24px,3vw,40px)" }}>
          {awards.map((a) => (
            <div key={a.org} data-reveal-slow="1" style={{ borderTop: "1px solid rgba(14,13,12,.16)", paddingTop: 20, minWidth: 0 }}>
              <p style={{ margin: 0, fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: ATELIER.goldDeep }}>{a.org}</p>
              <p style={{ margin: "12px 0 0", fontSize: "1rem", lineHeight: 1.6, color: "#3A332A" }}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
