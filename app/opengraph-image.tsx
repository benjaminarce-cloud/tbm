import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "TBM Carriers — Cross-border logistics across the United States, Mexico, and Canada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
            "linear-gradient(135deg, #1d173b 0%, #0f0b26 60%, #1d173b 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top: brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: 16,
              background: "#e4432e",
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            TBM
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 6,
              opacity: 0.9,
            }}
          >
            CARRIERS
          </div>
        </div>

        {/* Middle: hero copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#e4432e",
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Operating since 1999
          </span>
          <span
            style={{
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -2,
            }}
          >
            Delivering Quality
            <br />& Reliability
          </span>
          <span
            style={{
              fontSize: 28,
              opacity: 0.7,
              lineHeight: 1.3,
              maxWidth: 880,
            }}
          >
            Cross-border logistics across the United States, Mexico, and
            Canada.
          </span>
        </div>

        {/* Bottom: footer line */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            opacity: 0.5,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>tbmcarriers.com</span>
          <span>C-TPAT · FAST · OEA · SmartWay</span>
        </div>
      </div>
    ),
    size
  );
}
