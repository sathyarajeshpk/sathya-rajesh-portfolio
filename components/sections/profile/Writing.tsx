"use client";

import { useState } from "react";
import ProfileSectionHeader from "@/components/site/ProfileSectionHeader";
import { C, MONO, SERIF, autoGrid, display, shell } from "@/components/site/profileStyles";

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
    <section id="writing" style={shell}>
      <ProfileSectionHeader index="07" title="Writing" />
      <h2 data-reveal="1" style={{ ...display, margin: "clamp(26px,4vw,44px) 0 clamp(28px,4vw,44px)" }}>Notes from the work.</h2>

      <div data-reveal="1" style={{ borderTop: `1px solid ${C.rule}` }}>
        {posts.map((p, i) => (
          <div key={p.title}>
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%", background: "none", border: 0, borderBottom: `1px solid ${C.rule}`,
                padding: "26px 0", display: "flex", alignItems: "baseline", justifyContent: "space-between",
                gap: 20, textAlign: "left", color: "inherit", font: "inherit", cursor: "pointer",
                transition: "padding-left .4s cubic-bezier(.22,1,.36,1)",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
                <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: C.accent }}>{p.meta}</span>
                <span style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2.4vw,1.85rem)", lineHeight: 1.2 }}>{p.title}</span>
              </span>
              <span aria-hidden style={{ fontFamily: MONO, fontSize: 18, color: C.accent, flex: "none" }}>{open === i ? "−" : "+"}</span>
            </button>

            {open === i && (
              <div style={{ padding: "22px 0 30px", borderBottom: `1px solid ${C.rule}`, ...autoGrid(280), gap: "20px clamp(24px,4vw,56px)", animation: "sr-rise .5s cubic-bezier(.22,1,.36,1) both" }}>
                <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.65, color: C.muted }}>{p.excerpt}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: ".93rem", lineHeight: 1.55, color: C.soft }}>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", gap: 10 }}>
                      <span style={{ width: 12, height: 1, background: C.accent, flex: "none", marginTop: ".7em" }} />
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
