import { ImageResponse } from "next/og";

export const alt = "Within Market — Your investment philosophy. Put to work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f6f2",
          color: "#1c1914",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: "-0.02em" }}>Within Market</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 980 }}>
            Your investment philosophy. Put to work.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#6b6458", maxWidth: 820, lineHeight: 1.35 }}>
            An AI investment strategy that researches, validates, and watches what matters.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
