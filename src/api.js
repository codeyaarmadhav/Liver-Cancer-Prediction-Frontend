import axios from "axios";

// Backend base URL — replace with deployed link later (e.g., Render, Vercel, etc.)
export const BASE_URL = "http://127.0.0.1:8000";

/**
 * 🔹 Predict liver cancer risk using fuzzy model
 * Endpoint: POST /
 * Returns: { risk_score, risk_category, message }
 */
export async function predictRisk(payload) {
  try {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
  } catch (err) {
    console.error("API Error (predictRisk):", err);
    throw err;
  }
}


export async function getModelEvaluation() {
  try {
    const res = await axios.get(`${BASE_URL}/evaluate`);
    return res.data;
  } catch (err) {
    console.error("API Error (getModelEvaluation):", err);
    throw err;
  }
}
