import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#241A15",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F5F0E8",
          borderRadius: 6,
          fontWeight: 700,
          fontFamily: "monospace",
          border: "1px solid #4A3428",
          position: "relative",
        }}
      >
        <span style={{ letterSpacing: "-1px" }}>CM</span>
        <div
          style={{
            position: "absolute",
            top: 2,
            right: 2,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#B58A64",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
