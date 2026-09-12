"use client";

import { useState } from "react";
import { S, MONO, SLAB, autoGrid, shell } from "@/components/site/signatureStyles";

const posts = [
  { meta: "Data engineering · 8 min", title: "Production-grade Delta Lake on Azure Databricks",
    excerpt: "Incremental load strategies, MERGE semantics, and time travel — the parts of a lakehouse that decide whether it survives its second year.",
    points: ["CDC-friendly merge pipelines keep large fact tables current", "Time travel for auditability and safer incident recovery", "Tune partitioning and file sizes early to avoid performance drift"] },
  { meta: "Applied AI · 6 min", title: "From natural language to SQL, safely",
    excerpt: "Getting a model to emit SQL is the easy half. Making business users trust the answer is the engineering problem worth writing about.",
    points: ["Map intent to a curated semantic layer before generating SQL", "Return explanations and assumptions with every query", "Guardrails on row limits, access policy, and confidence"] },
  { meta: "Cloud · 10 min", title: "Migrating 50TB to Azure: lessons from the field",
    excerpt: "Cost, throughput, and the cutover weekend. What the migration plan looked like on paper versus what actually happened.",
    points: ["Benchmark throughput and compression before the first full load", "Dual-read validation during the stabilisation window", "Rollback checkpoints so business teams stay confident"] },
];

export default function Writing() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="sg-writing" style={shell}>
      <div data-gs-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${S.rule}`, paddingTop: 18 }}>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", color: S.accentDeep, fontWeight: 700 }}>07</span>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: S.muted }}>Writing</span>
      </div>
      <h2 data-gs-reveal="1" style={{ fontFamily: SLAB, fontWeight: 900, textTransform: "uppercase", color: S.ink, margin: "clamp(24px,4vw,40px) 0 clamp(28px,4vw,44px)", fontSize: "clamp(1.8rem,3.6vw,2.8rem)" }}>
        Notes from the work.
      </h2>

      <div data-gs-reveal="1" style={{ borderTop: `1px solid ${S.rule}` }}>
        {posts.map((p, i) => (
          <div key={p.title}>
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%", background: "none", border: 0, borderBottom: `1px solid ${S.rule}`,
                padding: "26px 0", display: "flex", alignItems: "baseline", justifyContent: "space-between",
                gap: 20, textAlign: "left", color: "inherit", font: "inherit", cursor: "pointer",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
                <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: S.accentDeep }}>{p.meta}</span>
                <span style={{ fontFamily: SLAB, fontWeight: 700, fontSize: "clamp(1.2rem,2.2vw,1.7rem)", lineHeight: 1.2, color: S.ink }}>{p.title}</span>
              </span>
              <span aria-hidden style={{ fontFamily: MONO, fontSize: 18, color: S.accentDeep, flex: "none" }}>{open === i ? "−" : "+"}</span>
            </button>

            {open === i && (
              <div style={{ padding: "22px 0 30px", borderBottom: `1px solid ${S.rule}`, ...autoGrid(280), gap: "20px clamp(24px,4vw,56px)" }}>
                <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.65, color: S.muted }}>{p.excerpt}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: ".93rem", lineHeight: 1.55, color: S.soft }}>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", gap: 10 }}>
                      <span style={{ width: 12, height: 1, background: S.accentDeep, flex: "none", marginTop: ".7em" }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
