import { ImageResponse } from "next/og";

export const alt = "PA Tech Services | Internet, CCTV, Networking and IT Solutions in Liberia";
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
          background: "#050505",
          color: "#F4F4EF",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#B7F21A",
            }}
          />
          PA Tech Services
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 920 }}>
            Reliable technology built for everyday life.
          </div>
          <div style={{ marginTop: 24, fontSize: 24, opacity: 0.7 }}>
            Internet · CCTV · Networking · IT Support · Liberia
          </div>
        </div>
      </div>
    ),
    size,
  );
}
