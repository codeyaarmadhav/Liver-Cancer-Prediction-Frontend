import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import VariablesExplain from "./components/VariablesExplain";
import InputChecklist from "./components/InputChecklist";
import PredictForm from "./components/PredictForm";
import ModelDetails from "./components/ModelDetails"; // 

export default function App() {
  return (
    <div className="app-root">
      {/* ---------------- HEADER / NAVBAR ---------------- */}
      <header className="nav">
        <div className="brand">
          <Link to="/">
            <span className="logo">Liver Cancer Prediction System</span>
          </Link>
          <small className="tag">using fuzzy rule based system</small>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">Why this Project</Link>
          <Link to="/variables">Variables</Link>
          <Link to="/predict">Test / Predict</Link>
          {/* ✅ NEW NAV ITEM */}
          <Link to="/model-details">Model Insights</Link>
        </nav>
      </header>

      {/* ---------------- ROUTES ---------------- */}
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/variables" element={<VariablesExplain />} />
          <Route path="/checklist" element={<InputChecklist />} />
          <Route path="/predict" element={<PredictForm />} />
          
          <Route path="/model-details" element={<ModelDetails />} />
        </Routes>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div>
          © {new Date().getFullYear()} Liver Cancer Prediction — Fuzzy Rule Based.
        </div>
        <div>Made for research purposes. Not a medical diagnostic tool.</div>
      </footer>
    </div>
  );
}
