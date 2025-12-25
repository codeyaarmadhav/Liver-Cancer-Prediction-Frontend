# 🧠 Liver Cancer Prediction System  
### Interpretable Fuzzy Rule-Based Decision Support System

A web-based system that assists in **early-stage liver cancer risk assessment** using basic liver blood test values.  
The system is built using an **interpretable fuzzy logic model** and is intended **only for screening and research purposes**, not clinical diagnosis.

---

## 🚀 Live Demo
🔗 Frontend (Vercel): https://livercancerpredictionsystem.vercel.app/  
🔗 Backend (FastAPI, deployed on Render): https://github.com/codeyaarmadhav/Liver-Cancer-Prediction-Backend 

---

## 📌 Motivation
Liver cancer is often detected at later stages due to the high cost and limited availability of advanced diagnostic tools.  
This project aims to provide a **low-cost, explainable, and accessible screening aid** using commonly available blood test parameters.

---

## ✨ Key Features
- 🔍 **Risk Prediction** (Low / Medium / High)
- 📊 **Continuous Risk Score (0–1)**
- 🧩 **Fuzzy Rule-Based System** (interpretable & explainable)
- 📈 **Model Evaluation Metrics**
  - Accuracy
  - TP, TN, FP, FN
  - Threshold-based classification
- 🌐 **Fully Responsive Web Interface**
- ⚙️ **REST API using FastAPI**

---

## 🧠 Model Overview
- Technique: **Fuzzy Logic (Mamdani Inference)**
- Dataset: **Indian Liver Patient Dataset (ILPD)**
- Threshold used for evaluation: **0.35**
- Output:
  - Risk Score (0–1)
  - Risk Category (Low / Medium / High)

The fuzzy approach ensures **transparency** in decision-making compared to black-box ML models.

---

## 🧪 Input Parameters
The system uses the following blood test variables:
1. Age  
2. Gender  
3. Total Bilirubin  
4. Direct Bilirubin  
5. Alkaline Phosphotase  
6. SGPT  
7. SGOT  
8. Total Proteins  
9. Albumin  
10. A/G Ratio  

---

## 🖥️ Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- CSS (Fully Responsive Design)
- Deployed on **Vercel**

### Backend
- FastAPI
- Python
- NumPy
- scikit-fuzzy
- Pandas
- scikit-learn (for evaluation)
- Uvicorn

---

## 📂 Project Structure
```bash
Liver-Cancer-Prediction-System/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── InputChecklist.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── ModelDetails.jsx
│   │   │   ├── PredictForm.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── VariablesExplain.jsx
│   │   │
│   │   ├── Api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   └── index.html
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── Indian_Liver_Patient_Modified.csv
│
└── README.md


```


## ⚙️ Backend Setup (Local)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```


## 🌐 Frontend Setup (Local)
```bash
cd frontend
npm install
npm run dev
```

## 📊 Model Evaluation Endpoint
```bash
GET /evaluate
```


## Returns(Model Insights):

Accuracy (%)

TP, TN, FP, FN

Threshold

Total Samples

## ⚠️ Disclaimer

This system is not a medical diagnostic tool.
It is intended for research, academic, and early-screening assistance only.
Clinical decisions must always be made by qualified healthcare professionals.

## 👨‍💻 Author

Madhav Nimbola

B.Tech – Computer Science & Engineering

Interest areas: AI, Explainable ML, & Full-Stack Development

## ⭐ Acknowledgements

Indian Liver Patient Dataset (ILPD), UCI Machine Learning Repository 

scikit-fuzzy community

FastAPI & React open-source ecosystems
