import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Within Market for business — Insights from your documents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/logo-on-dark-16-9.png"));
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
          backgroundColor: "#1c1914",
          color: "#f7f6f2",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <img src={logoSrc} alt="" width={240} height={92} />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 980 }}>
            Insights from your documents.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#c4bdb0", maxWidth: 820, lineHeight: 1.35 }}>
            Turn filings, research, and internal PDFs into structured financial intelligence.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
