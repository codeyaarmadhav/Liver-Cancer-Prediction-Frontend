import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import VariablesExplain from "./components/VariablesExplain";
import InputChecklist from "./components/InputChecklist";
import PredictForm from "./components/PredictForm";
import ModelDetails from "./components/ModelDetails";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-root">

      {/* ---------------- NAVBAR ---------------- */}
      <header className="nav container">
        <div className="brand">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <span className="logo">Liver Cancer Prediction System</span>
          </Link>
          <small className="tag">using fuzzy rule based system</small>
        </div>

        {/* Hamburger Menu */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Slide Navigation */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Why this Project</Link>
          <Link to="/variables" onClick={() => setMenuOpen(false)}>Variables</Link>
          <Link to="/predict" onClick={() => setMenuOpen(false)}>Test / Predict</Link>
          <Link to="/model-details" onClick={() => setMenuOpen(false)}>Model Insights</Link>
        </div>

        {/* Overlay to close menu */}
        {menuOpen && (
          <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
        )}
      </header>

      {/* ---------------- ROUTES ---------------- */}
      <main className="container">
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
        <div>© {new Date().getFullYear()} Liver Cancer Prediction — Fuzzy Rule Based.</div>
        <div>Made for research purposes. Not a medical diagnostic tool.</div>
      </footer>

    </div>
  );
}
