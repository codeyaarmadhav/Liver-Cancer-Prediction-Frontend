import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <section className="hero container">
        <div className="hero-left">
          <h1 className="h-title">Liver Cancer Prediction System</h1>

          <p className="h-sub">
            Using interpretable fuzzy rule-based system — early detection assistance
            (not clinical diagnosis)
          </p>

          <p className="hero-text">
            This project helps identify potential early-stage liver cancer risk using
            only basic blood test values. We do not treat — our goal is to help detect
            possible conditions early and reduce the cost of advanced tests.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <Link to="/variables">
              <button className="btn primary-btn" onClick={() => nav("/predict")}>
                Test / Predict Risk
              </button>
            </Link>
            <Link to="/about">
              <button className="btn secondary-btn">Why this project?</button>
            </Link>
          </div>

          <div className="card why-card">
            <strong>Why this matters</strong>
            <p className="testimonial">
              Early detection reduces cost and increases chances of successful treatment.
              This tool helps prioritize who should get further testing.
            </p>
          </div>
        </div>

        <div className="hero-right">
          <strong>Quick facts</strong>
          <ul className="hero-list">
            <li>Uses 10 blood-test variables (ILPD dataset)</li>
            <li>Fuzzy rule-based (interpretable & explainable)</li>
            <li>Outputs risk value (0–1) and level (Low/Medium/High)</li>
          </ul>

          <div className="testimonials">
            <strong>Testimonials</strong>
            <div className="testimonial">
              “Simple to use and explainable — ideal for screening.” — Researcher
            </div>
            <div className="testimonial">
              “Helps triage patients before expensive scans.” — Clinician
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h3>How it works</h3>

        <div className="grid">
          <div className="card">
            <strong>Interpretable rules</strong>
            <p>We use fuzzy if–then rules derived from expert logic and dataset optimization.</p>
          </div>

          <div className="card">
            <strong>Low-cost screening</strong>
            <p>Uses only basic liver-function test results, reducing need for costly imaging.</p>
          </div>

          <div className="card">
            <strong>Clinically supportive</strong>
            <p>
              Provides interpretable risk level, helping doctors or labs flag at-risk patients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
