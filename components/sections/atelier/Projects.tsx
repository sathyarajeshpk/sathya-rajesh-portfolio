import Image from "next/image";
import Link from "next/link";
import { ATELIER, SANS, SERIF, autoGrid, display, shell } from "@/components/site/atelierStyles";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="at-work" style={{ ...shell, borderTop: `1px solid ${ATELIER.ruleSoft}` }}>
      <div data-reveal-slow="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 18 }}>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: ATELIER.gold }}>II.</span>
        <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: ATELIER.muted }}>Selected Work</span>
      </div>
      <h2 data-reveal-slow="1" style={{ ...display, margin: "clamp(28px,4vw,44px) 0 0", maxWidth: "18ch", color: ATELIER.ink }}>
        Six builds, and what changed because of them.
      </h2>

      <div style={{ marginTop: "clamp(40px,5vw,64px)", ...autoGrid(340), gap: "clamp(1px,.15vw,1px) clamp(40px,4vw,64px)" }}>
        {PROJECTS.map((p, i) => (
          <Link key={p.slug} href={`/work/${p.slug}`} data-reveal-slow="1"
            style={{ display: "block", borderTop: `1px solid ${ATELIER.rule}`, padding: "28px 0", animationDelay: `${(i % 3) * 0.06}s` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, fontFamily: SANS, fontSize: 10, fontWeight: 500, letterSpacing: ".16em", textTransform: "uppercase", color: ATELIER.soft }}>
              <span>{p.discipline}</span><span>{p.year}</span>
            </div>
            <div style={{ margin: "16px 0 18px", overflow: "hidden", aspectRatio: "16/9", border: `1px solid ${ATELIER.ruleSoft}`, background: ATELIER.panelSoft }}>
              <Image src={p.image} alt="" width={640} height={360} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "saturate(.9)" }} />
            </div>
            <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 500, fontSize: "1.5rem", lineHeight: 1.2, color: ATELIER.ink }}>{p.title}</h3>
            <p style={{ margin: "10px 0 0", fontSize: ".92rem", lineHeight: 1.6, color: ATELIER.muted }}>{p.summary}</p>
            <p style={{ display: "flex", gap: 10, alignItems: "baseline", margin: "16px 0 0", fontSize: ".9rem", color: ATELIER.ink }}>
              <span style={{ width: 14, height: 1, background: ATELIER.gold, flex: "none", transform: "translateY(-4px)" }} />
              <span>{p.outcome}</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
