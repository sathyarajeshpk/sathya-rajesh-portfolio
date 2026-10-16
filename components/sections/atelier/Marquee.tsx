import { ATELIER, SANS } from "@/components/site/atelierStyles";

const items = ["Azure Databricks", "Microsoft Fabric", "Delta Lake", "PySpark", "ADLS Gen2", "Power BI"];

export default function Marquee() {
  const run = (key: string) => (
    <span key={key} style={{ display: "flex", gap: 56 }}>
      {items.map((t) => (
        <span key={t} style={{ display: "flex", gap: 56, alignItems: "center" }}>
          <span>{t}</span>
          <span style={{ color: ATELIER.gold, fontSize: 9 }}>◆</span>
        </span>
      ))}
    </span>
  );
  return (
    <section aria-hidden style={{ overflow: "hidden", borderTop: `1px solid ${ATELIER.ruleSoft}`, borderBottom: `1px solid ${ATELIER.ruleSoft}`, padding: "20px 0" }}>
      <div data-marquee="1" style={{ display: "flex", width: "max-content", gap: 56, fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: ATELIER.soft, whiteSpace: "nowrap" }}>
        {run("a")}
        {run("b")}
      </div>
    </section>
  );
}
