import axios from "axios";

// Backend base URL — NO trailing slash--link areaa
export const BASE_URL = "https://liver-cancer-prediction-backend.onrender.com";

/**
 * 🔹 Predict liver cancer risk using fuzzy model
 * Endpoint: POST /
 * Returns: { risk_score, risk_category, message }
 */
export async function predictRisk(payload) {
  try {
    const res = await axios.post(`${BASE_URL}/`, payload);
    return res.data;
  } catch (err) {
    console.error("API Error (predictRisk):", err);
    throw err;
  }
}

/**
 * 🔹 Fetch evaluation metrics from backend
 * Endpoint: GET /evaluate
 */
export async function getModelEvaluation() {
  try {
    const res = await axios.get(`${BASE_URL}/evaluate`);
    return res.data;
  } catch (err) {
    console.error("API Error (getModelEvaluation):", err);
    throw err;
  }
}
