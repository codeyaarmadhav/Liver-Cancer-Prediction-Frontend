import React from "react";

export default function About(){
  return (
    <div className="section">
      <h2>Why this project?</h2>
      <p style={{color:"var(--muted)"}}>
        Liver disease detection is expensive if everyone takes imaging tests. This project provides a fuzzy-rule screening tool using commonly measured blood indicators.
        It does not diagnose — it suggests who may benefit from further testing.
      </p>

      <h3 style={{marginTop:18}}>Key benefits</h3>
      <ul style={{color:"var(--muted)"}}>
        <li>Early flagging of high-risk cases</li>
        <li>Interpretable decisions — rules can be audited</li>
        <li>Low resource: only standard lab tests required</li>
      </ul>
    </div>
  );
}
