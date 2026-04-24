// lib/ai/gemini-hr.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildHRPrompt } from './prompt-hr';
import { HRAnalysisInput, HRInsights } from "@/app/types/hr-analysis";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

/**
 * Calls Google Gemini as a fallback to analyze professional performance.
 */
export async function runGemini_HR(data: HRAnalysisInput): Promise<HRInsights> {
    const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        generationConfig: {
            temperature: 0.2, // Keep it analytical
        }
    });

    const prompt = buildHRPrompt(data);

    // Add a system instruction explicitly to the prompt for Gemini
    const fullPrompt = `System: You are an expert HR Performance Auditor. You must return ONLY a raw, valid JSON object. No markdown formatting.\n\n${prompt}`;

    const result = await model.generateContent(fullPrompt);
    const text = result.response.text();

    // Clean up potential markdown formatting that Gemini sometimes adds
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

    return JSON.parse(cleanText) as HRInsights;
}