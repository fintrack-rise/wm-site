import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Within Market — Your investment philosophy. Put to work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/logo-16-9.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
        <img src={logoSrc} alt="" width={240} height={90} />
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
