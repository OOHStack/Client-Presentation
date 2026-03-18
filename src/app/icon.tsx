import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24%",
          background:
            "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.35) 0%, rgba(34, 211, 238, 0.05) 40%, transparent 55%), linear-gradient(135deg, #041f23 0%, #072d34 100%)",
          border: "12px solid rgba(103, 232, 249, 0.85)",
          color: "#a5f3fc",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
          fontWeight: 900,
          fontSize: 152,
          letterSpacing: 3,
        }}
      >
        OOH
      </div>
    ),
    size,
  );
}
