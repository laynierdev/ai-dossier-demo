import { runOpenAI } from './openai';
import { runGemini } from './gemini';
import { runMock } from './mock';
import { AIInsights } from './types';
import { DossierEntry } from "@/app/types/dossier";

export async function analyzeClient(entries: DossierEntry[]): Promise<AIInsights> {
    // 1. OpenAI (primary)
    try {
        return await runOpenAI(entries);
    } catch (err: any) {
        console.warn('❌ OpenAI failed:', err?.message || err);
        console.warn('→ Fallback to Gemini');
    }

    // 2. Gemini (fallback)
    try {
        return await runGemini(entries);
    } catch (err: any) {
        console.warn('❌ Gemini failed:', err?.message || err);
        console.warn('→ Fallback to Mock');
    }

    // 3. Mock (guaranteed)
    return runMock();
}