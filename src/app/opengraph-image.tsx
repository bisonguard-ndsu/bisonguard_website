import { ImageResponse } from "next/og";

export const alt = "InfiniCity Labs — Infrastructure, mobility & applied AI";
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
        background: "#12171b",
        color: "#f0eee8",
        padding: 72,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg width="45" height="45" viewBox="0 0 36 36" fill="#9bcac4">
          <path d="M0 20h9v16H0zM13 10h9v26h-9zM26 0h9v36h-9z" />
        </svg>
        <span style={{ fontSize: 34 }}>InfiniCity Labs</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 82,
          letterSpacing: -4,
          lineHeight: 1.08,
        }}
      >
        <span>Advancing infrastructure</span>
        <span style={{ color: "#9bcac4" }}>& mobility.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #ffffff35",
          paddingTop: 23,
          fontSize: 18,
          color: "#afb7b8",
        }}
      >
        <span>Infrastructure. Mobility. Applied AI.</span>
        <span>infinicitylabs.org</span>
      </div>
    </div>,
    size,
  );
}
