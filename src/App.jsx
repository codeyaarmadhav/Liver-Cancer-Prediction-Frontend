import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import VariablesExplain from "./components/VariablesExplain";
import InputChecklist from "./components/InputChecklist";
import PredictForm from "./components/PredictForm";
import ModelDetails from "./components/ModelDetails";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <div className="app-root">
      {/* NAVBAR */}
      <header className="nav">
        <div className="brand">
          <Link to="/" onClick={closeMenu}>
            <span className="logo">Liver Cancer Prediction System</span>
          </Link>
          <small className="tag">using fuzzy rule based system</small>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop Menu */}
        <nav className="nav-links desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">Why this Project</Link>
          <Link to="/variables">Variables</Link>
          <Link to="/predict">Test / Predict</Link>
          <Link to="/model-details">Model Insights</Link>
        </nav>
      </header>

      {/* Mobile Drawer + Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu} />}

      <aside className={`drawer ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">Why this Project</Link>
        <Link to="/variables">Variables</Link>
        <Link to="/predict">Test / Predict</Link>
        <Link to="/model-details">Model Insights</Link>
      </aside>

      {/* ROUTES */}
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

      <footer className="footer">
        <div>© {new Date().getFullYear()} Liver Cancer Prediction — Fuzzy Rule Based.</div>
        <div>Made for research purposes. Not a medical diagnostic tool.</div>
      </footer>
    </div>
  );
}
