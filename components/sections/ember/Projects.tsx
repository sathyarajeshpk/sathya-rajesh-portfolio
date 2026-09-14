import Image from "next/image";
import Link from "next/link";
import { EMBER, MONO, GROTESK, shell } from "@/components/site/emberStyles";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="em-work" style={shell}>
      <p data-reveal="1" style={{ margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: EMBER.accent }}>Featured Work</p>
      <h2 data-reveal="1" style={{ fontFamily: GROTESK, fontWeight: 700, textTransform: "uppercase", color: EMBER.ink, margin: "16px 0 0", maxWidth: "16ch", fontSize: "clamp(1.9rem,4vw,3rem)", lineHeight: 1.05 }}>
        Selected Projects
      </h2>

      <div style={{ marginTop: "clamp(36px,5vw,56px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(18px,2.4vw,28px)" }}>
        {PROJECTS.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} data-reveal="1"
            style={{ display: "block", border: `1px solid ${EMBER.rule}`, background: EMBER.panel, borderRadius: 10, overflow: "hidden" }}>
            <div style={{ position: "relative", aspectRatio: "16/10", background: EMBER.panelSoft }}>
              <Image src={p.image} alt="" fill sizes="(max-width: 768px) 90vw, 30vw" style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
            <div style={{ padding: "16px 18px 20px" }}>
              <p style={{ margin: 0, fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: EMBER.soft }}>{p.discipline} · {p.year}</p>
              <h3 style={{ margin: "8px 0 0", fontFamily: GROTESK, fontWeight: 700, fontSize: "1.15rem", color: EMBER.ink }}>{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
