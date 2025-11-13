import React from "react";

export default function ResultCard({ prediction }) {
  if (!prediction) return null;

  const val = prediction.risk_value ?? prediction.risk_score;
  const level = (prediction.risk_level ?? prediction.risk_category)?.toLowerCase();
  const msg = prediction.message || "";

  const cls =
    level === "low"
      ? "low"
      : level === "medium"
      ? "medium"
      : "high";

  // Map risk score (0–1) to progress width %
  const widthPercent = Math.min(Math.max(val * 100, 0), 100);

  return (
    <div className="result" style={{ flexDirection: "column", alignItems: "stretch" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "var(--muted)" }}>Risk Score</div>
          <div className="value">{val?.toFixed(3)}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className={cls} style={{ minWidth: 110, textTransform: "capitalize" }}>
            {level}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: "10px",
          borderRadius: "5px",
          background: "rgba(255,255,255,0.1)",
          marginTop: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${widthPercent}%`,
            height: "100%",
            transition: "width 0.6s ease",
            background:
              level === "low"
                ? "#16a34a"
                : level === "medium"
                ? "#facc15"
                : "#dc2626",
          }}
        />
      </div>

      {/* Message from backend */}
      {msg && (
        <div
          style={{
            marginTop: "12px",
            color: "var(--muted)",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          {msg}
        </div>
      )}

      {/* Note */}
      <div
        style={{
          color: "var(--muted)",
          marginTop: "10px",
          fontSize: "13px",
          fontStyle: "italic",
        }}
      >
        Note: This is a screening score — not a medical diagnosis.
      </div>
    </div>
  );
}
