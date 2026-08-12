import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sathya Rajesh PK — Lead Data Engineer & Data Platform Architect";
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
          background: "#F4F5F7",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
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
            color: "#697080",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ width: 48, height: 2, background: "#175E68" }} />
          Chennai, India
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 86, lineHeight: 1.02, color: "#13151A", letterSpacing: "-0.03em" }}>
            Data platforms that
          </div>
          <div style={{ fontSize: 86, lineHeight: 1.02, color: "#13151A", letterSpacing: "-0.03em" }}>
            <span style={{ color: "#175E68" }}>hold up</span> in production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #D9DDE4",
            paddingTop: 28,
            fontSize: 24,
            color: "#454B55",
          }}
        >
          <div style={{ display: "flex" }}>Sathya Rajesh PK</div>
          <div style={{ display: "flex", fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#697080" }}>
            Azure · Fabric · Power BI
          </div>
        </div>
      </div>
    ),
    size
  );
}
