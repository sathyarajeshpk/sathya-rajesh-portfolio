import Image from "next/image";
import Link from "next/link";
import { S, MONO, SLAB, autoGrid, shell } from "@/components/site/signatureStyles";
import { PROJECTS as projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="sg-work" style={shell}>
      <div data-gs-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${S.rule}`, paddingTop: 18 }}>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: S.accentDeep, fontWeight: 700 }}>02</span>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: S.muted }}>Selected work</span>
      </div>
      <h2 data-gs-reveal="1" style={{ fontFamily: SLAB, fontWeight: 900, textTransform: "uppercase", color: S.ink, margin: "clamp(24px,4vw,40px) 0 0", maxWidth: "16ch", fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.05 }}>
        Six builds, and what changed because of them.
      </h2>

      <div style={{ marginTop: "clamp(36px,5vw,60px)", ...autoGrid(340), gap: "clamp(24px,3vw,40px)" }}>
        {projects.map((p) => (
          <article key={p.title} data-gs-reveal="1"
            style={{ minWidth: 0, border: `1px solid ${S.rule}`, background: S.bg, padding: "clamp(20px,2.4vw,28px)", borderRadius: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: S.soft }}>
              <span>{p.discipline}</span><span>{p.year}</span>
            </div>

            <div style={{ margin: "18px 0 22px", overflow: "hidden", aspectRatio: "16/9", border: `1px solid ${S.rule}`, background: S.bgAlt, borderRadius: 4 }}>
              <Image src={p.image} alt="" width={640} height={360} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
            </div>

            <h3 style={{ margin: 0, fontFamily: SLAB, fontWeight: 700, fontSize: "1.32rem", lineHeight: 1.18, color: S.ink }}>{p.title}</h3>
            <p style={{ margin: "12px 0 0", fontSize: ".95rem", lineHeight: 1.65, color: S.muted }}>{p.summary}</p>
            <p style={{ display: "flex", gap: 12, alignItems: "baseline", margin: "18px 0 0", fontSize: ".95rem", color: S.ink }}>
              <span style={{ width: 18, height: 1, background: S.accentDeep, flex: "none", transform: "translateY(-4px)" }} />
              <span>{p.outcome}</span>
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px 10px", margin: "18px 0 0", padding: 0, fontFamily: MONO, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: S.accentDeep }}>
              {p.tags.map((t) => (
                <li key={t} style={{ border: `1px solid ${S.rule}`, borderRadius: 99, padding: "4px 10px" }}>{t}</li>
              ))}
            </ul>
            <Link href={`/work/${p.slug}`} data-gs-magnetic="1"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, margin: "18px 0 0", fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: S.accentDeep, borderBottom: `1px solid ${S.rule}`, paddingBottom: 3, width: "fit-content" }}>
              Case study <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
