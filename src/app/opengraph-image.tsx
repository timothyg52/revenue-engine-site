import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Revenue Engine — AI Lead Gen for Nashville Service Businesses";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(232,255,92,0.18), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 70%, rgba(232,255,92,0.08), transparent 60%), #0a0a0b",
          color: "#f5f5f7",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "28px",
            letterSpacing: "-0.01em",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              background: "#e8ff5c",
            }}
          />
          <div style={{ display: "flex", fontWeight: 500 }}>Revenue Engine</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "92px",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex" }}>More booked appointments.</div>
            <div style={{ display: "flex", color: "#a1a1aa" }}>
              Less chasing leads.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "#a1a1aa",
              maxWidth: "1000px",
              lineHeight: 1.3,
            }}
          >
            AI voice agents, SMS bots, and lead conversion systems for Nashville
            service businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            color: "#6b6b74",
            borderTop: "1px solid #1f1f24",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex" }}>revenueengine.ai</div>
          <div style={{ display: "flex" }}>Built in Nashville, TN</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
