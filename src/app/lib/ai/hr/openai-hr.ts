// lib/ai/openai-hr.ts

import OpenAI from 'openai';
import { buildHRPrompt } from './prompt-hr';
import { HRAnalysisInput, HRInsights } from "@/app/types/hr-analysis";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

/**
 * Calls OpenAI to analyze professional performance based on reviews and dossier entries.
 */
export async function runOpenAI_HR(data: HRAnalysisInput): Promise<HRInsights> {
    const prompt = buildHRPrompt(data);

    const response = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            {
                role: 'system',
                content: 'You are an expert HR Performance Auditor. Always respond in valid JSON format.'
            },
            {
                role: 'user',
                content: prompt
            },
        ],
        temperature: 0.2, // Low temperature for more analytical, less creative responses
        response_format: { type: "json_object" } // Forces JSON output
    });

    const content = response.choices[0].message.content || '{}';

    // Parse the JSON. The orchestrator will catch any parsing errors.
    return JSON.parse(content) as HRInsights;
}