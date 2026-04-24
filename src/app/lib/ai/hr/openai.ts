// lib/ai/openai.ts

import OpenAI from 'openai';
import { buildPrompt } from './prompt';
import { AIInsights } from './types';
import {DossierEntry} from "@/app/types/dossier";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

export async function runOpenAI(entries: DossierEntry[]): Promise<AIInsights> {
    const prompt = buildPrompt(entries);

    const res = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: 'You are a professional analyst.' },
            { role: 'user', content: prompt },
        ],
        temperature: 0.3,
    });

    const content = res.choices[0].message.content || '';
    const clean = content.replace(/```json|```/g, '').trim();

    return JSON.parse(clean);
}