import React, { useEffect, useState } from "react";
import { getModelEvaluation } from "../api";

export default function ModelDetails() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getModelEvaluation();
        setMetrics(data);
      } catch (err) {
        console.error("Error fetching model details:", err);
        setError("⚠️ Failed to fetch model evaluation. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="page-center">
        <p>Loading model insights...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-box">{error}</div>;
  }

  const accuracy = metrics["Accuracy (%)"];

  return (
    <div className="details-container">
      <h2>📊 Model Evaluation Metrics</h2>
      <p className="subtitle">Performance overview from fuzzy liver prediction model</p>

      {/* Bold Accuracy Badge */}
      <div className="accuracy-badge">
        <strong>Accuracy: {accuracy}%</strong>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>True Positives (TP)</h3>
          <p className="metric-value">{metrics["TP"]}</p>
        </div>
        <div className="metric-card">
          <h3>True Negatives (TN)</h3>
          <p className="metric-value">{metrics["TN"]}</p>
        </div>
        <div className="metric-card">
          <h3>False Positives (FP)</h3>
          <p className="metric-value">{metrics["FP"]}</p>
        </div>
        <div className="metric-card">
          <h3>False Negatives (FN)</h3>
          <p className="metric-value">{metrics["FN"]}</p>
        </div>
        <div className="metric-card">
          <h3>Threshold</h3>
          <p className="metric-value">{metrics["Threshold"]}</p>
        </div>
        <div className="metric-card">
          <h3>Valid Samples</h3>
          <p className="metric-value">{metrics["Valid_Samples"]}</p>
        </div>
        <div className="metric-card">
          <h3>Total Samples</h3>
          <p className="metric-value">{metrics["Total_Samples"]}</p>
        </div>
      </div>

      <div className="footer-note">
        <p>🧠 Evaluated using fuzzy rule-based inference (threshold = 0.35)</p>
      </div>
    </div>
  );
}
