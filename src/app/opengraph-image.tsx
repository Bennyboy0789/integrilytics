import { ImageResponse } from "next/og";

export const alt = "IntegriLytics — Accounting, HR & Operational Oversight";
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
          padding: "80px",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #172e6b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 6, background: "#d8b978" }} />
          <div style={{ fontSize: 26, letterSpacing: 5, color: "#bcd0f5" }}>
            FAYETTEVILLE, NC · NATIONWIDE
          </div>
        </div>
        <div style={{ fontSize: 92, fontWeight: 700, marginTop: 26 }}>IntegriLytics</div>
        <div style={{ fontSize: 42, marginTop: 14, color: "#dbe6fb" }}>
          Accounting · HR · Operational Oversight
        </div>
        <div style={{ fontSize: 28, marginTop: 30, color: "#a9c0ef", maxWidth: 900 }}>
          We handle the numbers and the people so you can focus on running your business.
        </div>
      </div>
    ),
    { ...size }
  );
}
