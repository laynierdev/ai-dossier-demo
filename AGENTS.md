# 🤖 AI Agents Specification

This project uses an AI orchestration system to analyze client dossiers in wellness and beauty contexts.

---

## 🧠 Core Agent: Dossier Intelligence Analyzer

### Purpose
Transforms structured client notes into actionable insights.

---

## 📥 Input

Client dossier entries:

- date
- professional_name
- content

---

## 📤 Output

Must return strict JSON:

{
"summary": string,
"patterns": string[],
"alerts": [
{
"message": string,
"severity": "low" | "medium" | "high"
}
],
"suggestions": string[]
}

---

## 🧠 Behavior Rules

- Focus on recurring patterns
- Detect risk signals
- Prioritize actionable insights
- Ignore irrelevant noise
- Always return valid JSON

---

## 🔁 AI Strategy

1. OpenAI (primary)
2. Gemini (fallback)
3. Mock (final fallback)

---

## ⚙️ Design Principle

> Always return a usable result, even if AI providers fail.
