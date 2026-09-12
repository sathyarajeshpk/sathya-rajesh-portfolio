import { C, MONO } from "@/components/site/profileStyles";

const items = ["Azure Databricks","PySpark","Delta Lake","Microsoft Fabric","Unity Catalog","ADLS Gen2","Azure Data Factory","Power BI","Medallion Architecture"];

/** Infinite ticker — the track is duplicated so translateX(-50%) loops seamlessly. */
export default function Marquee() {
  const run = (key: string) => (
    <span key={key} style={{ display: "flex", gap: 48 }}>
      {items.map((t) => (
        <span key={t} style={{ display: "flex", gap: 48 }}>
          <span>{t}</span>
          <span style={{ color: C.accent }}>◆</span>
        </span>
      ))}
    </span>
  );
  return (
    <section aria-hidden style={{ overflow: "hidden", borderTop: `1px solid ${C.ruleSoft}`, borderBottom: `1px solid ${C.ruleSoft}`, padding: "18px 0", background: "rgba(16,18,22,.5)" }}>
      <div data-marquee="1" style={{ display: "flex", width: "max-content", gap: 48, fontFamily: MONO, fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: C.subtle, whiteSpace: "nowrap" }}>
        {run("a")}
        {run("b")}
      </div>
    </section>
  );
}
