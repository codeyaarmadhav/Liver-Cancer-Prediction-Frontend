import React from "react";
import { useNavigate } from "react-router-dom";

export default function InputChecklist(){
  const nav = useNavigate();
  const items = ["Age","Gender (0=F,1=M)","TB","DB","Alkphos","Sgpt","Sgot","TP","ALB","AGR"];
  return (
    <div className="section">
      <h2>Before you proceed</h2>
      <p style={{color:"var(--muted)"}}>Please confirm you have all the following values from your blood test report:</p>

      <ul style={{color:"var(--muted)",marginTop:10}}>
        {items.map(it=> <li key={it}>{it}</li>)}
      </ul>

      <div style={{marginTop:16}}>
        <button className="btn" onClick={()=>nav("/predict")}>Proceed to Enter Values</button>
        <button className="btn secondary" style={{marginLeft:10}} onClick={()=>nav("/variables")}>See variable details</button>
      </div>
    </div>
  );
}
