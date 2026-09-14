import { EMBER, MONO, GROTESK } from "@/components/site/emberStyles";

/**
 * Structural analog of the reference site's pinned "THE PHILOSOPHY"
 * section: a tall wrapper (2.2x viewport) with a sticky inner stage, so the
 * title crossfades into the body paragraph while the section stays pinned
 * on screen — pure CSS via a named view-timeline (.ember-pin-scope in
 * globals.css), no JS.
 *
 * The reference used a dramatic red-lit photograph of two reaching hands;
 * that's a stock asset this project has no rights to reproduce, so the
 * "reaching toward each other" motif is rebuilt abstractly with two glows
 * drawing together instead of a literal photo.
 */
export default function Philosophy() {
  return (
    <section className="ember-pin-scope" style={{ position: "relative", minHeight: "220vh", background: "#000" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0 }}>
          <div style={{ position: "absolute", left: "8%", top: "14%", width: "34vmin", height: "34vmin", borderRadius: "50%", background: `radial-gradient(circle, ${EMBER.accent}40, transparent 70%)`, filter: "blur(30px)" }} />
          <div style={{ position: "absolute", right: "10%", bottom: "16%", width: "38vmin", height: "38vmin", borderRadius: "50%", background: `radial-gradient(circle, ${EMBER.accent}40, transparent 70%)`, filter: "blur(30px)" }} />
        </div>

        <div style={{ position: "relative", maxWidth: 780, padding: "0 clamp(20px,5vw,56px)", textAlign: "center" }}>
          <p style={{ margin: "0 0 18px", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: EMBER.accent }}>The Philosophy</p>

          <h2 data-ember-title="1" style={{ margin: 0, fontFamily: GROTESK, fontWeight: 700, fontSize: "clamp(2.4rem,7vw,4.6rem)", lineHeight: 1, letterSpacing: "-.01em", color: EMBER.ink, textTransform: "uppercase" }}>
            The Philosophy
          </h2>

          <p data-ember-body="1" style={{ margin: 0, fontSize: "clamp(1.15rem,2.4vw,1.6rem)", lineHeight: 1.55, color: EMBER.ink }}>
            I believe great data platforms are born at the intersection of disciplined architecture and operational
            empathy. Every pipeline, every config, every 3am alert is a chance to build something the next engineer
            can trust.
          </p>
        </div>
      </div>
    </section>
  );
}
