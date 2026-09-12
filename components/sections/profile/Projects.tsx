import Image from "next/image";
import Link from "next/link";
import ProfileSectionHeader from "@/components/site/ProfileSectionHeader";
import { C, MONO, SERIF, autoGrid, display, shell } from "@/components/site/profileStyles";
import { PROJECTS as projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="work" style={shell}>
      <ProfileSectionHeader index="02" title="Selected work" />
      <h2 data-reveal="1" style={{ ...display, margin: "clamp(26px,4vw,44px) 0 0", maxWidth: "18ch" }}>
        Six builds, and what changed because of them.
      </h2>

      <div style={{ marginTop: "clamp(36px,5vw,60px)", ...autoGrid(340), gap: "clamp(24px,3vw,40px)" }}>
        {projects.map((p) => (
          <article key={p.title} data-card="1" data-reveal="1"
            style={{ position: "relative", overflow: "hidden", minWidth: 0, border: `1px solid ${C.rule}`, background: "rgba(16,18,22,.6)", padding: "clamp(20px,2.4vw,28px)", transition: "transform .5s cubic-bezier(.22,1,.36,1), border-color .5s ease" }}>
            {/* cursor spotlight target — filled by ProfileMotion */}
            <div data-spot="1" style={{ position: "absolute", inset: 0, opacity: 0, transition: "opacity .45s ease", pointerEvents: "none" }} />

            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: C.subtle }}>
              <span>{p.discipline}</span><span>{p.year}</span>
            </div>

            <div style={{ position: "relative", margin: "18px 0 22px", overflow: "hidden", aspectRatio: "16/9", border: `1px solid ${C.ruleSoft}`, background: C.sunken }}>
              <Image src={p.image} alt="" fill sizes="(max-width: 768px) 90vw, 44vw"
                     style={{ objectFit: "cover", objectPosition: "top", filter: "saturate(.85)", transition: "transform .8s cubic-bezier(.22,1,.36,1), filter .6s ease" }} />
            </div>

            <h3 style={{ position: "relative", margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "1.62rem", lineHeight: 1.16 }}>{p.title}</h3>
            <p style={{ position: "relative", margin: "12px 0 0", fontSize: ".95rem", lineHeight: 1.65, color: C.soft }}>{p.summary}</p>
            <p style={{ position: "relative", display: "flex", gap: 12, alignItems: "baseline", margin: "18px 0 0", fontSize: ".95rem", color: C.fg }}>
              <span style={{ width: 18, height: 1, background: C.accent, flex: "none", transform: "translateY(-4px)" }} />
              <span>{p.outcome}</span>
            </p>
            <ul style={{ position: "relative", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px 16px", margin: "18px 0 0", padding: 0, fontFamily: MONO, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: C.subtle }}>
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <Link href={`/work/${p.slug}`} data-magnetic="1"
                  style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 8, margin: "20px 0 0", fontFamily: MONO, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: C.accent, borderBottom: "1px solid rgba(99,180,190,.35)", paddingBottom: 3, width: "fit-content" }}>
              Case study <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
