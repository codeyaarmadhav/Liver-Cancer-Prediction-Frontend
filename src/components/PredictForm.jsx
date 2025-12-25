import React, { useState } from "react";
import { predictRisk } from "../api";
import ResultCard from "./ResultCard";

const initial = {
  Age: "",
  Gender: "1",
  TB: "",
  DB: "",
  Alkphos: "",
  Sgpt: "",
  Sgot: "",
  TP: "",
  ALB: "",
  AGR: "",
};

const ranges = {
  Age: [1, 90],
  TB: [0, 20],
  DB: [0, 10],
  Alkphos: [0, 400],
  Sgpt: [0, 300],
  Sgot: [0, 300],
  TP: [0, 10],
  ALB: [0, 6],
  AGR: [0, 3],
};

export default function PredictForm() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    for (const [k, [min, max]] of Object.entries(ranges)) {
      const val = parseFloat(form[k]);
      if (isNaN(val)) return `${k} must be a number.`;
      if (val < min || val > max) return `${k} should be between ${min} and ${max}.`;
      if (val < 0) return `${k} must be positive.`;
    }
    if (!(form.Gender === "0" || form.Gender === "1")) {
      return "Gender must be 0 (Female) or 1 (Male)";
    }
    return null;
  }

  async function handlePredict() {
    setError(null);
    const v = validate();
    if (v) return setError(v);

    const payload = {
      Age: parseFloat(form.Age),
      Gender: form.Gender === "1" ? "M" : "F",
      Total_Bilirubin: parseFloat(form.TB),
      Direct_Bilirubin: parseFloat(form.DB),
      Alkphos: parseFloat(form.Alkphos),
      Sgpt: parseFloat(form.Sgpt),
      Sgot: parseFloat(form.Sgot),
      Total_Protein: parseFloat(form.TP),
      Albumin: parseFloat(form.ALB),
      A_G_Ratio: parseFloat(form.AGR),
    };

    try {
      setLoading(true);
      const res = await predictRisk(payload);
      setPrediction({
        risk_value: res.risk_score,
        risk_level: res.risk_category,
        message: res.message,
      });
    } catch (err) {
      setError(err?.response?.data?.detail || "Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-wrap">
      <h2>Enter Test Values</h2>
      <p className="hero-text">
        Enter numeric values only — match your lab units.
      </p>

      <style>{`
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>

      {/* Compact grouping */}
      <div className="form-row">
        <div className="form-col">
          <label>Age (years)</label>
          <input
            name="Age"
            value={form.Age}
            onChange={onChange}
            type="number"
            placeholder="e.g., 55"
          />
        </div>
        <div className="form-col">
          <label>Gender</label>
          <select name="Gender" value={form.Gender} onChange={onChange}>
            <option value="1">Male (1)</option>
            <option value="0">Female (0)</option>
          </select>
        </div>
      </div>

      {Object.entries(ranges)
        .filter(([k]) => k !== "Age")
        .map(([k, [min, max]]) => (
          <div key={k} className="form-row">
            <div className="form-col">
              <label>{k}</label>
              <input
                name={k}
                type="number"
                placeholder={`${min} - ${max}`}
                value={form[k]}
                onChange={onChange}
              />
            </div>
          </div>
        ))}

      {error && <div className="error-box">{error}</div>}

      <div className="form-actions">
        <button className="btn primary-btn" onClick={handlePredict} disabled={loading}>
          {loading ? "Predicting..." : "Predict Risk"}
        </button>
        <button
          className="btn secondary"
          onClick={() => {
            setForm(initial);
            setPrediction(null);
            setError(null);
          }}
        >
          Reset
        </button>
      </div>

      {prediction && <ResultCard prediction={prediction} />}
    </div>
  );
}
