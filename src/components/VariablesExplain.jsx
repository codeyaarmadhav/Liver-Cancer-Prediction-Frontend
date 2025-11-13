import React from "react";
import { Link } from "react-router-dom";

const list = [
  {k:"Age", t:"Age of patient (years).", d:"Numeric age; older age increases risk in many rules."},
  {k:"Gender", t:"Gender (0=Female, 1=Male).", d:"Binary; some rules slightly differ by gender."},
  {k:"TB", t:"Total Bilirubin (mg/dL).", d:"Elevated in liver dysfunction; higher makes risk increase."},
  {k:"DB", t:"Direct Bilirubin (mg/dL).", d:"Direct bilirubin rises with cholestatic or obstructive issues."},
  {k:"Alkphos", t:"Alkaline Phosphatase (IU/L).", d:"High in biliary obstruction and certain liver conditions."},
  {k:"Sgpt", t:"ALT (SGPT) (IU/L).", d:"Liver enzyme — higher values often indicate hepatocellular injury."},
  {k:"Sgot", t:"AST (SGOT) (IU/L).", d:"Liver enzyme, used with ALT to interpret injury pattern."},
  {k:"TP", t:"Total Proteins (g/dL).", d:"Protein synthesis capacity; low TP may indicate liver dysfunction."},
  {k:"ALB", t:"Albumin (g/dL).", d:"Lower albumin signals reduced liver synthetic function."},
  {k:"AGR", t:"Albumin / Globulin Ratio.", d:"Changes in this ratio reflect chronic liver disease."},
];

export default function VariablesExplain(){
  return (
    <div className="section">
      <h2>Required Test Variables</h2>
      <p className="test" style={{color:"var(--muted)"}}>We need a small set of blood test values to run the fuzzy predictor. Each is briefly explained below.</p>

      <div style={{marginTop:14}} className="grid">
        {list.map(item=>(
          <div key={item.k} className="card">
            <strong>{item.k} — {item.t}</strong>
            <p style={{color:"var(--muted)",marginTop:8}}>{item.d}</p>
          </div>
        ))}
      </div>

      <div style={{marginTop:18}}>
        <Link to="/checklist"><button className="btn">I have all test results — Proceed</button></Link>
      </div>
    </div>
  );
}
