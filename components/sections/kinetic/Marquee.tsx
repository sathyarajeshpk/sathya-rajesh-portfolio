import { K, SLAB } from "@/components/site/kineticStyles";

const items = ["Azure Databricks", "PySpark", "Delta Lake", "Microsoft Fabric", "Unity Catalog", "ADLS Gen2", "Power BI"];

/** Big bold statement ticker — the loud band between hero and the rest. */
export default function Marquee() {
  const run = (key: string) => (
    <span key={key} style={{ display: "flex", gap: 40 }}>
      {items.map((t) => (
        <span key={t} style={{ display: "flex", gap: 40, alignItems: "center" }}>
          <span>{t}</span>
          <span style={{ color: K.accent }}>●</span>
        </span>
      ))}
    </span>
  );
  return (
    <section aria-hidden style={{ overflow: "hidden", background: K.panel, padding: "22px 0" }}>
      <div data-marquee="1" style={{
        display: "flex", width: "max-content", gap: 40,
        fontFamily: SLAB, fontWeight: 900, fontSize: "clamp(1.4rem,3vw,2.2rem)", textTransform: "uppercase",
        letterSpacing: "-.01em", color: K.cream, whiteSpace: "nowrap",
      }}>
        {run("a")}
        {run("b")}
      </div>
    </section>
  );
}
