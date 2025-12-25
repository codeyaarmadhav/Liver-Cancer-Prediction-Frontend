import React, { useEffect, useState } from "react";
import { getModelEvaluation } from "../api";
import "./ModelDetails.css";

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
        setError("Failed to load model evaluation data. Try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <center>Loading model insights...</center>;
  if (error) return <div className="error-box">{error}</div>;

  return (
    <div className="details-container section">
      <h2>📊 Model Evaluation Metrics</h2>
      <p className="subtitle">
        Performance overview from fuzzy liver prediction model
      </p>

      <div className="accuracy-badge">
        <strong>Accuracy: {metrics["Accuracy (%)"]}%</strong>
      </div>

      <div className="metrics-grid">
        {Object.entries(metrics).map(([key, val]) => {
          if (key === "Accuracy (%)") return null;
          return (
            <div key={key} className="metric-card">
              <h4>{key.replace(/_/g, " ")}</h4>
              <p className="metric-value">{val}</p>
            </div>
          );
        })}
      </div>

      <div className="footer-note">
        Evaluated using fuzzy rule-based inference (threshold = 0.35)
      </div>
    </div>
  );
}
