import React, { useState, useRef } from "react";
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

const labels = {
  Age: "Age (years)",
  TB: "Total Bilirubin (mg/dL)",
  DB: "Direct Bilirubin (mg/dL)",
  Alkphos: "Alkaline Phosphatase (IU/L)",
  Sgpt: "SGPT / ALT (IU/L)",
  Sgot: "SGOT / AST (IU/L)",
  TP: "Total Proteins (g/dL)",
  ALB: "Albumin (g/dL)",
  AGR: "Albumin-Globulin Ratio",
};

const tooltips = {
  Age: "Older age may increase liver disease risk.",
  TB: "Higher bilirubin suggests liver dysfunction.",
  DB: "Elevated in cholestasis or obstruction.",
  Alkphos: "Raises in bile duct block or liver injury.",
  Sgpt: "Liver cell injury (ALT enzyme).",
  Sgot: "Enzyme linked with hepatocellular injury.",
  TP: "Low total protein can indicate liver impairment.",
  ALB: "Albumin made by liver — low signals dysfunction.",
  AGR: "Ratio helps detect chronic liver disease.",
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
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const resultRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const markTouched = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateField = (name) => {
    if (name === "Gender") return true;
    const val = parseFloat(form[name]);
    if (isNaN(val)) return false;
    const [min, max] = ranges[name];
    return val >= min && val <= max;
  };

  const asyncPredict = async () => {
    setError(null);
    setPrediction(null);

    // Validate form
    for (const k in ranges) {
      if (!validateField(k)) {
        setError("Please correct invalid inputs.");
        return;
      }
    }

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
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } catch (err) {
      setError(err?.response?.data?.detail || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrap">
      <h2>Enter Test Values</h2>
      <p className="form-hint">Enter numeric values only — match lab units.</p>

      {/* Age + Gender */}
      <div className="form-row">
        <div className="form-col">
          <label>
            Age (years)
            <span className="tip" title={tooltips.Age}>ⓘ</span>
          </label>
          <input
            name="Age"
            type="number"
            value={form.Age}
            onChange={handleChange}
            onBlur={() => markTouched("Age")}
            placeholder="e.g., 55"
          />
          {touched.Age && (
            <span className={validateField("Age") ? "valid" : "invalid"} />
          )}
        </div>

        <div className="form-col">
          <label>Gender</label>
          <select name="Gender" value={form.Gender} onChange={handleChange}>
            <option value="1">Male (1)</option>
            <option value="0">Female (0)</option>
          </select>
        </div>
      </div>

      {/* Remaining Inputs */}
      {Object.keys(labels)
        .filter((k) => k !== "Age")
        .map((k) => (
          <div key={k} className="form-row">
            <div className="form-col">
              <label>
                {labels[k]} <span className="tip" title={tooltips[k]}>ⓘ</span>
              </label>
              <input
                name={k}
                type="number"
                step="any"
                placeholder={`${ranges[k][0]} - ${ranges[k][1]}`}
                value={form[k]}
                onChange={handleChange}
                onBlur={() => markTouched(k)}
              />
              {touched[k] && (
                <span className={validateField(k) ? "valid" : "invalid"} />
              )}
            </div>
          </div>
        ))}

      {error && <div className="error-box">{error}</div>}

      <div className="form-actions">
        <button
          className="btn primary-btn"
          onClick={asyncPredict}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict Risk"}
        </button>

        <button
          className="btn secondary"
          onClick={() => {
            setForm(initial);
            setTouched({});
            setError(null);
            setPrediction(null);
          }}
        >
          Reset
        </button>
      </div>

      <div ref={resultRef}>
        {prediction && <ResultCard prediction={prediction} />}
      </div>
    </div>
  );
}
