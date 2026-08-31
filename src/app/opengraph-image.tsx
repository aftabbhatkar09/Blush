import { ImageResponse } from "next/og";
import { salon } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Blush by Bushra Imtiyaz — Salon & Studio, Byculla Mumbai";

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
          background: "#150d0c",
          color: "#f6efe6",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#e0a3ac",
          }}
        >
          <span>Salon &amp; Studio</span>
          <span>Byculla · Mumbai</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 130, lineHeight: 1, letterSpacing: -2 }}>
            Blush
          </div>
          <div style={{ fontSize: 130, lineHeight: 1, letterSpacing: -2 }}>
            by Bushra
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: "rgba(246,239,230,0.7)",
          }}
        >
          <span>Careful hands, a calm room, no rush.</span>
          <span style={{ color: "#f6efe6" }}>
            {salon.rating} / 5 &nbsp;·&nbsp; {salon.reviewCount} Google reviews
          </span>
        </div>
      </div>
    ),
    size,
  );
}
