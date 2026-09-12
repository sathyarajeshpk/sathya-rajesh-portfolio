import ProfileSectionHeader from "@/components/site/ProfileSectionHeader";
import { C, SERIF, autoGrid, shell } from "@/components/site/profileStyles";

const metrics = [
  { to: "8", suffix: null, decimals: 0, parallax: true, body: "Marketing and commercial domains feeding one lakehouse." },
  { to: "99.5", suffix: "%", decimals: 1, parallax: false, body: "Pipeline SLA uptime held across the platform." },
  { to: "60", suffix: "%", decimals: 0, parallax: true, body: "Manual reporting effort removed by the executive BI suite." },
  { to: "50", suffix: "TB", decimals: 0, parallax: false, body: "Legacy data migrated to Azure Data Lake Storage Gen2." },
];

export default function Impact() {
  return (
    <section id="impact" style={shell}>
      <ProfileSectionHeader index="05" title="Impact" />
      <div style={{ marginTop: "clamp(30px,4vw,48px)", ...autoGrid(230), gap: "clamp(24px,3vw,40px)" }}>
        {metrics.map((m) => (
          <div key={m.body} data-reveal="1" {...(m.parallax ? { "data-parallax": "1" } : {})} style={{ minWidth: 0 }}>
            <p style={{ margin: 0, fontFamily: SERIF, fontSize: "clamp(3.4rem,7vw,5.6rem)", lineHeight: .92, letterSpacing: "-.03em", fontVariantNumeric: "tabular-nums" }}>
              <span data-count-to={m.to} data-decimals={m.decimals || undefined}>0</span>
              {m.suffix && <span style={{ color: C.accent, fontSize: ".3em", verticalAlign: "super" }}>{m.suffix}</span>}
            </p>
            <p style={{ margin: "14px 0 0", fontSize: ".95rem", lineHeight: 1.55, color: C.soft, borderTop: `1px solid ${C.rule}`, paddingTop: 14 }}>{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
