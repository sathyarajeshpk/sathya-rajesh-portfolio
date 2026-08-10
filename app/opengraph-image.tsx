import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sathya Rajesh PK - Azure data engineer and consultant";
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
          justifyContent: "center",
          background: "#FDFDFC",
          padding: "80px",
          fontFamily: '"Comic Sans MS", "Comic Neue", cursive',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, color: "#1A1C20", marginBottom: 24 }}>
          Sathya Rajesh PK
        </div>
        <div style={{ fontSize: 34, color: "#4C525A", marginBottom: 40, display: "flex" }}>
          Data engineer and consultant. Chennai, India.
        </div>
        <div style={{ fontSize: 28, color: "#175E68", display: "flex" }}>
          Azure data platforms, Microsoft Fabric, Power BI
        </div>
      </div>
    ),
    size
  );
}
