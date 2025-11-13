import React from "react";
import { Link } from "react-router-dom";

export default function Landing(){
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h1 className="h-title">Liver Cancer Prediction System</h1>
          <div className="h-sub">Using interpretable fuzzy rule-based system — early detection assistance (not clinical diagnosis)</div>
          <p style={{color:"var(--muted)"}}>
            This project helps identify potential early-stage liver cancer risk using only basic blood test values.
            We do not treat — our goal is to help detect possible conditions early and reduce the cost of advanced tests.
          </p>

          <div className="hero-cta" style={{marginTop:18}}>
            {/* Redirect to Required Test Variables first */}
            <Link to="/variables">
              <button className="btn">Test / Predict Risk</button>
            </Link>
            <Link to="/about">
              <button className="btn secondary">Why this project?</button>
            </Link>
          </div>

          <div style={{marginTop:18}}>
            <div className="card" style={{marginTop:12}}>
              <strong>Why this matters</strong>
              <p className="testimonial" style={{margin:8}}>
                Early detection reduces cost and increases chances of successful treatment. This tool helps prioritize who should get further testing.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <strong>Quick facts</strong>
          <ul style={{marginTop:10,color:"var(--muted)"}}>
            <li>Uses 10 blood-test variables (ILPD dataset)</li>
            <li>Fuzzy rule-based (interpretable & explainable)</li>
            <li>Outputs risk value (0–1) and level (Low/Medium/High)</li>
          </ul>

          <div style={{marginTop:12}}>
            <strong>Testimonials</strong>
            <div className="testimonial">“Simple to use and explainable — ideal for screening.” — Researcher</div>
            <div className="testimonial">“Helps triage patients before expensive scans.” — Clinician</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>How it works</h3>
        <div className="grid" style={{marginTop:12}}>
          <div className="card">
            <strong>Interpretable rules</strong>
            <p className="test">We use fuzzy if–then rules derived from expert logic and dataset optimization.</p>
          </div>
          <div className="card">
            <strong>Low-cost screening</strong>
            <p className="test">Uses only basic liver-function test results, reducing need for costly imaging.</p>
          </div>
          <div className="card">
            <strong>Clinically supportive</strong>
            <p className="test">Provides interpretable risk level, helping doctors or labs flag at-risk patients.</p>
          </div>
        </div>
      </section>
    </>
  );
}
