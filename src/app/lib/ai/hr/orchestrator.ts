// lib/ai/orchestrator.ts

import { runOpenAI } from './openai';
import { runGemini } from './gemini';
import { runMock } from './mock';
import { AIInsights } from './types';
import { DossierEntry } from "@/app/types/dossier";

export async function analyzeClient(entries: DossierEntry[]): Promise<AIInsights> {
    // 1. OpenAI (primary)
    try {
        return await runOpenAI(entries);
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.warn('❌ OpenAI failed:', message);
        console.warn('→ Fallback to Gemini');
    }

    // 2. Gemini (fallback)
    try {
        return await runGemini(entries);
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.warn('❌ Gemini failed:', message);
        console.warn('→ Fallback to Mock');
    }

    // 3. Mock (guaranteed)
    return runMock();
}