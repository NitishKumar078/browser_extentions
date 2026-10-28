import { ImageResponse } from "next/og";

export const alt = "Nish Extensions - Small tools. Better browsing.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#123b36",
        padding: 70,
        color: "#f3fff9",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 29, display: "flex" }}>nish / extensions</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 82,
          fontWeight: 700,
          lineHeight: 1.1,
        }}
      >
        <span>Small tools.</span>
        <span>Better browsing.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>For Chrome + Microsoft Edge</span>
        <span>By Nitish Kumar</span>
      </div>
    </div>,
    size,
  );
}
