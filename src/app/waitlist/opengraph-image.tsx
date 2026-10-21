import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function WaitlistOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          backgroundColor: "#150F0B",
          color: "#F5F0E8",
          fontFamily: "sans-serif",
          position: "relative",
          border: "12px solid #241A15",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                backgroundColor: "#B58A64",
                color: "#150F0B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 22,
                fontFamily: "monospace",
              }}
            >
              3D
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: "#FFFFFF",
                }}
              >
                VIRTUAL AI LEARNING
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "#B58A64",
                  letterSpacing: 3,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                CLOSED BETA • EARLY ACCESS
              </span>
            </div>
          </div>
          <div
            style={{
              padding: "8px 22px",
              borderRadius: 30,
              backgroundColor: "#241A15",
              border: "1px solid #B58A64",
              color: "#F5F0E8",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            charlesmark.tech/waitlist
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 1050,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "#B58A64",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            SPATIAL LEARNING • NARRATIVE QUESTS • AGENTIC SYSTEMS
          </div>
          <h1
            style={{
              fontSize: 54,
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: -1,
            }}
          >
            Master Artificial Intelligence in an Interactive 3D World.
          </h1>
          <p
            style={{
              fontSize: 22,
              color: "#D8C5AF",
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            Step into hands-on architectural quests, explore neural spaces, and
            build production AI agents in a virtual story-based universe.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #4A3428",
            paddingTop: 22,
            fontSize: 15,
            color: "#D8C5AF",
            fontFamily: "monospace",
          }}
        >
          <span>Reserve Your Spot • 100% Free Closed Beta Access</span>
          <span style={{ color: "#B58A64", fontWeight: 700 }}>
            Charles Mark Platform &rarr;
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
