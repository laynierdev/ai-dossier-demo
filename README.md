# 🧠 AI Dossier Intelligence (Demo)

This project is a **Next.js-based prototype** for an AI-powered client dossier system designed for wellness, beauty, and personal care professionals.

It demonstrates how structured client history data can be transformed into **actionable intelligence using multiple AI providers**.

---

## 🚀 What this project does

The system allows professionals to:

- Store and visualize client dossier entries
- Aggregate multi-provider professional notes
- Generate AI-powered insights from client history
- Detect patterns, risks, and behavioral signals
- Support decision-making for client care

---

## 🧠 AI Intelligence Layer

The platform uses a **multi-provider AI orchestration system**:

- OpenAI (primary reasoning engine)
- Google Gemini (fallback reasoning layer)
- Mock engine (guaranteed response fallback)

This ensures:
- High availability
- Cost control
- Resilience under API failure

---

## 🏗️ Architecture Overview

- Next.js App Router frontend
- API routes for AI orchestration
- Modular AI provider system
- Strict TypeScript domain modeling
- Mock-first development strategy for demo stability

---

## 🧪 Key Features

- Client dossier timeline
- Multi-professional input aggregation
- AI analysis endpoint (`/api/analyze`)
- Structured JSON intelligence output:
    - Summary
    - Behavioral patterns
    - Risk alerts
    - Actionable suggestions

---

## 🔐 Environment Variables

```bash
OPENAI_API_KEY=your_key_here
GEMINI_API_KEY=your_key_here