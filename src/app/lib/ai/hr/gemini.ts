// lib/ai/gemini.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildPrompt } from './prompt';
import { AIInsights } from './types';
import {DossierEntry} from "@/app/types/dossier";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function runGemini(entries: DossierEntry[]): Promise<AIInsights> {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = buildPrompt(entries);

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const clean = text.replace(/```json|```/g, '').trim();

    return JSON.parse(clean);
}