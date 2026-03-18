import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          color: "#e6f7f7",
          background:
            "radial-gradient(circle at 15% 15%, #22d3ee 0%, rgba(34, 211, 238, 0.15) 25%, transparent 55%), linear-gradient(135deg, #041f23 0%, #06292f 100%)",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(125, 211, 252, 0.15))",
              border: "2px solid rgba(103, 232, 249, 0.75)",
              color: "#a5f3fc",
              fontWeight: 800,
              fontSize: 30,
              letterSpacing: 1.5,
            }}
          >
            OOH
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.1 }}>
              OOH Stack
            </div>
            <div
              style={{
                fontSize: 24,
                color: "rgba(224, 247, 250, 0.9)",
                letterSpacing: 0.4,
              }}
            >
              Interactive Sales Deck
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 920,
            fontSize: 58,
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#cffafe",
            letterSpacing: -0.8,
          }}
        >
          Sell smarter with location intelligence and campaign ROI clarity.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "rgba(207, 250, 254, 0.9)",
          }}
        >
          <div>oohstack.com</div>
          <div style={{ color: "rgba(165, 243, 252, 0.95)" }}>
            Book a demo
          </div>
        </div>
      </div>
    ),
    size,
  );
}
