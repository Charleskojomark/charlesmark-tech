import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#F5F0E8",
          color: "#241A15",
          fontFamily: "sans-serif",
          position: "relative",
          border: "16px solid #FAF7F2",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundColor: "#241A15",
                color: "#F5F0E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 24,
                fontFamily: "monospace",
              }}
            >
              CM
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: 2 }}>
                CHARLES MARK
              </span>
              <span style={{ fontSize: 13, color: "#4A3428", letterSpacing: 3 }}>
                AI SYSTEMS ENGINEER
              </span>
            </div>
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: 30,
              backgroundColor: "#241A15",
              color: "#F5F0E8",
              fontSize: 14,
              fontFamily: "monospace",
            }}
          >
            charlesmark.tech
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1000 }}>
          <span style={{ fontSize: 16, color: "#B58A64", fontWeight: 700, letterSpacing: 2 }}>
            WORKFLOW AUTOMATION • CUSTOM AI AGENTS & RAG • BACKEND SYSTEMS
          </span>
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#241A15",
              margin: 0,
            }}
          >
            AI Automation and Backend Systems for Growing Businesses.
          </h1>
          <p style={{ fontSize: 22, color: "#4A3428", margin: 0, lineHeight: 1.4 }}>
            Cut manual administrative bottlenecks, ground AI assistants in your company documents, and deploy reliable backends behind your product.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #D8C5AF",
            paddingTop: 24,
            fontSize: 16,
            color: "#4A3428",
            fontFamily: "monospace",
          }}
        >
          <span>n8n • LangGraph • FastAPI • Express • PostgreSQL pgvector</span>
          <span>LinkedIn: markcharleskojo • WhatsApp Direct</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
