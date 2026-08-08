import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(135deg, #020617 0%, #1e1b4b 55%, #0f172a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 800,
            letterSpacing: -2,
            backgroundImage: "linear-gradient(90deg, #7dd3fc, #f9a8d4, #fcd34d)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          MJP.Tex
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 40,
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          Kids Bottom Wear Manufacturer &middot; Tiruppur
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Boys &amp; Girls &middot; Age 1&ndash;12 Years
        </div>
      </div>
    ),
    { ...size }
  );
}
