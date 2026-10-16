import { ATELIER, SANS, SERIF, autoGrid, shell } from "@/components/site/atelierStyles";

const metrics = [
  { to: "8", suffix: null, decimals: 0, body: "Marketing and commercial domains feeding one lakehouse." },
  { to: "99.5", suffix: "%", decimals: 1, body: "Pipeline SLA uptime held across the platform." },
  { to: "60", suffix: "%", decimals: 0, body: "Manual reporting effort removed by the executive BI suite." },
  { to: "50", suffix: "TB", decimals: 0, body: "Legacy data migrated to Azure Data Lake Storage Gen2." },
];

export default function Impact() {
  return (
    <section id="at-impact" style={shell}>
      <div data-reveal-slow="1" style={{ display: "flex", alignItems: "baseline", gap: 18, borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 18 }}>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: ATELIER.gold }}>V.</span>
        <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: ATELIER.muted }}>Impact</span>
      </div>
      <div style={{ marginTop: "clamp(32px,4vw,48px)", ...autoGrid(230), gap: "clamp(24px,3vw,40px)" }}>
        {metrics.map((m) => (
          <div key={m.body} data-reveal-slow="1" style={{ minWidth: 0 }}>
            <p style={{ margin: 0, fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(3rem,6vw,4.8rem)", lineHeight: .95, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: ATELIER.ink }}>
              <span data-count-to={m.to} data-decimals={m.decimals || undefined}>0</span>
              {m.suffix && <span style={{ color: ATELIER.gold, fontSize: ".32em", verticalAlign: "super" }}>{m.suffix}</span>}
            </p>
            <p style={{ margin: "16px 0 0", fontSize: ".95rem", lineHeight: 1.6, color: ATELIER.muted, borderTop: `1px solid ${ATELIER.rule}`, paddingTop: 16 }}>{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
