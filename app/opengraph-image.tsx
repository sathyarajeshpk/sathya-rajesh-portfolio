import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sathya Rajesh PK — Azure Data Engineering & Analytics Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F6F3",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 20,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6B655B",
            fontFamily: "monospace",
          }}
        >
          <div style={{ width: 48, height: 2, background: "#B4552B" }} />
          Chennai, India
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 86, lineHeight: 1.02, color: "#141416", letterSpacing: "-0.03em" }}>
            Data platforms that
          </div>
          <div style={{ fontSize: 86, lineHeight: 1.02, color: "#141416", letterSpacing: "-0.03em" }}>
            <span style={{ color: "#B4552B", fontStyle: "italic" }}>hold up</span> in production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #DFDBD3",
            paddingTop: 28,
            fontSize: 24,
            color: "#4A453E",
          }}
        >
          <div style={{ display: "flex" }}>Sathya Rajesh PK</div>
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 20, color: "#6B655B" }}>
            Azure · Fabric · Power BI
          </div>
        </div>
      </div>
    ),
    size
  );
}
