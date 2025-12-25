import React from "react";
import "./ResultCard.css";

export default function ResultCard({ prediction }) {
  if (!prediction) return null;

  const val = prediction.risk_value ?? prediction.risk_score;
  const level = (prediction.risk_level ?? prediction.risk_category)?.toLowerCase();
  const msg = prediction.message || "";

  const cls =
    level === "low" ? "low" :
    level === "medium" ? "medium" : "high";

  const widthPercent = Math.min(Math.max(val * 100, 0), 100);

  return (
    <div className="result-card">
      <div className="result-header">
        <div className="score-section">
          <div className="label">Risk Score</div>
          <div className="value">{val?.toFixed(3)}</div>
        </div>

        <div className={`risk-badge ${cls}`}>
          {level}
        </div>
      </div>

      <div className="progress-bar">
        <div
          className={`progress-fill ${cls}`}
          style={{ width: `${widthPercent}%` }}
        />
      </div>

      {msg && <div className="result-msg">{msg}</div>}

      <div className="disclaimer">
        Note: This is a screening score — not a medical diagnosis.
      </div>
    </div>
  );
}
