import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, TESTIMONIALS, getProject } from "@/lib/projects";
import { C, MONO, SERIF, shell } from "@/components/site/profileStyles";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const testimonial = project.testimonialOrg
    ? TESTIMONIALS.find((t) => t.org === project.testimonialOrg)
    : undefined;

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <div style={{ background: C.bg, color: C.fg, minHeight: "100vh" }}>
      <header style={{ borderBottom: `1px solid ${C.rule}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px clamp(20px,4vw,56px)" }}>
          <Link href="/" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>
            ← Sathya Rajesh PK
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(40px,7vw,80px) clamp(20px,4vw,56px) clamp(60px,8vw,100px)" }}>
        <p style={{ margin: 0, display: "flex", gap: 14, fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.subtle }}>
          <span>{project.discipline}</span><span style={{ color: C.accent }}>·</span><span>{project.year}</span>
        </p>
        <h1 style={{ margin: "18px 0 0", fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(2.2rem,5.5vw,4rem)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
          {project.title}
        </h1>

        <div style={{ margin: "clamp(28px,4vw,44px) 0", position: "relative", aspectRatio: "16/9", overflow: "hidden", border: `1px solid ${C.rule}`, background: C.raised }}>
          <Image src={project.image} alt="" fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: "cover", objectPosition: "top" }} />
        </div>

        <section style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,44px)" }}>
          <div>
            <h2 style={{ margin: "0 0 12px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.accent }}>The problem</h2>
            <p style={{ margin: 0, fontSize: "1.08rem", lineHeight: 1.7, color: C.muted }}>{project.problem}</p>
          </div>
          <div>
            <h2 style={{ margin: "0 0 12px", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.accent }}>What I built</h2>
            <p style={{ margin: 0, fontSize: "1.08rem", lineHeight: 1.7, color: C.muted }}>{project.approach}</p>
          </div>

          <div style={{ display: "flex", gap: 16, alignItems: "baseline", borderTop: `1px solid ${C.rule}`, paddingTop: 22 }}>
            <span style={{ width: 18, height: 1, background: C.accent, flex: "none", transform: "translateY(-6px)" }} />
            <p style={{ margin: 0, fontSize: "1.15rem", color: C.fg }}>{project.outcome}</p>
          </div>

          {testimonial && (
            <blockquote style={{ margin: 0, borderLeft: `2px solid ${C.accent}`, paddingLeft: 22 }}>
              <p style={{ margin: 0, fontFamily: SERIF, fontStyle: "italic", fontSize: "1.3rem", lineHeight: 1.5, color: C.fg }}>&ldquo;{testimonial.quote}&rdquo;</p>
              <cite style={{ display: "block", marginTop: 12, fontFamily: MONO, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontStyle: "normal", color: C.subtle }}>
                {testimonial.org} — {testimonial.role}
              </cite>
            </blockquote>
          )}

          <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px 16px", margin: 0, padding: 0, borderTop: `1px solid ${C.rule}`, paddingTop: 22, fontFamily: MONO, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: C.subtle }}>
            {project.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </section>

        <div style={{ marginTop: "clamp(56px,7vw,88px)", borderTop: `1px solid ${C.rule}`, paddingTop: 28, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
          <a href="mailto:sathyarajeshpk@gmail.com"
             style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 48, padding: "0 24px", borderRadius: 99, background: C.fg, color: C.bg, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase" }}>
            Start a conversation →
          </a>
          <Link href={`/work/${next.slug}`} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: C.subtle }}>
            Next case study: {next.title} →
          </Link>
        </div>
      </main>
    </div>
  );
}
