import { S, SLAB, autoGrid, shell, Scribble } from "@/components/site/signatureStyles";

const metrics = [
  { to: "8", suffix: null, decimals: 0, body: "Marketing and commercial domains feeding one lakehouse." },
  { to: "99.5", suffix: "%", decimals: 1, body: "Pipeline SLA uptime held across the platform." },
  { to: "60", suffix: "%", decimals: 0, body: "Manual reporting effort removed by the executive BI suite." },
  { to: "50", suffix: "TB", decimals: 0, body: "Legacy data migrated to Azure Data Lake Storage Gen2." },
];

export default function Impact() {
  return (
    <section id="sg-impact" style={{ ...shell, position: "relative", overflow: "hidden" }}>
      <Scribble
        viewBox="0 0 900 200" height={140} color={S.rule as unknown as string}
        style={{ position: "absolute", right: "-4%", top: "10%", width: "60%", height: "auto", zIndex: 0 }}
        d="M20 160 C 140 20, 260 200, 380 60 S 560 180, 700 40 S 840 120, 880 20"
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div data-gs-reveal="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${S.rule}`, paddingTop: 18 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: ".18em", color: S.accentDeep, fontWeight: 700 }}>05</span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: S.muted }}>Impact</span>
        </div>
        <div style={{ marginTop: "clamp(30px,4vw,48px)", ...autoGrid(230), gap: "clamp(24px,3vw,40px)" }}>
          {metrics.map((m) => (
            <div key={m.body} data-gs-reveal="1" style={{ minWidth: 0 }}>
              <p style={{ margin: 0, fontFamily: SLAB, fontWeight: 900, fontSize: "clamp(3rem,6.2vw,4.8rem)", lineHeight: .92, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: S.ink }}>
                <span data-gs-count-to={m.to} data-gs-decimals={m.decimals || undefined}>0</span>
                {m.suffix && <span style={{ color: S.accentDeep, fontSize: ".32em", verticalAlign: "super" }}>{m.suffix}</span>}
              </p>
              <p style={{ margin: "14px 0 0", fontSize: ".95rem", lineHeight: 1.55, color: S.muted, borderTop: `1px solid ${S.rule}`, paddingTop: 14 }}>{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
