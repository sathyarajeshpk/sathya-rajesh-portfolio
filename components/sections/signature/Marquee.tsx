import { S, SLAB } from "@/components/site/signatureStyles";

const items = ["Azure Databricks", "PySpark", "Delta Lake", "Microsoft Fabric", "Unity Catalog", "ADLS Gen2", "Power BI"];

/** GSAP-driven infinite marquee (xPercent -50, duration-based, not CSS keyframes). */
export default function Marquee() {
  const run = (key: string) => (
    <span key={key} style={{ display: "flex", gap: 40 }}>
      {items.map((t) => (
        <span key={t} style={{ display: "flex", gap: 40, alignItems: "center" }}>
          <span>{t}</span>
          <span style={{ color: S.accent }}>●</span>
        </span>
      ))}
    </span>
  );
  return (
    <section aria-hidden style={{ overflow: "hidden", background: S.panel, padding: "22px 0" }}>
      <div data-gs-marquee="1" style={{ overflow: "hidden" }}>
        <div style={{
          display: "flex", width: "max-content", gap: 40,
          fontFamily: SLAB, fontWeight: 900, fontSize: "clamp(1.4rem,3vw,2.2rem)", textTransform: "uppercase",
          letterSpacing: "-.01em", color: S.bg, whiteSpace: "nowrap",
        }}>
          {run("a")}
          {run("b")}
        </div>
      </div>
    </section>
  );
}
