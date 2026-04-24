// lib/ai/hr/hr-orchestrator.ts

import { HRAnalysisInput, HRInsights } from "@/app/types/hr-analysis";
import { runOpenAI_HR } from './openai-hr';
import { runGemini_HR } from './gemini-hr';
import { runMock_HR } from './mock-hr';

/**
 * Orchestrates the HR analysis for a professional's performance.
 * Uses a primary provider (OpenAI) and falls back to Gemini or Mock on failure.
 */
export async function analyzeProfessionalPerformance(data: HRAnalysisInput): Promise<HRInsights> {
    // 1. OpenAI (Primary Provider)
    try {
        return await runOpenAI_HR(data);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.warn('❌ HR Analysis (OpenAI) failed:', errorMessage);
        console.warn('→ Falling back to Gemini');
    }

    // 2. Gemini (Secondary Provider)
    try {
        return await runGemini_HR(data);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.warn('❌ HR Analysis (Gemini) failed:', errorMessage);
        console.warn('→ Falling back to Mock');
    }

    // 3. Mock (Final Safety Net)
    console.info('→ Using Mock HR Data');
    return runMock_HR();
}