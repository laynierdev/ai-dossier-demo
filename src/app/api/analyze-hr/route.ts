// app/api/analyze-hr/route.ts

import { NextResponse } from 'next/server';
import { analyzeProfessionalPerformance } from "@/app/lib/ai/hr/hr-orchestrator";
import { HRAnalysisInput } from "@/app/types/hr-analysis";

export async function POST(req: Request) {
    try {
        const body: HRAnalysisInput = await req.json();

        if (!body.professionalName || !body.reviews || !body.dossierEntries) {
            return NextResponse.json({ error: 'Missing required HR analysis data' }, { status: 400 });
        }

        const result = await analyzeProfessionalPerformance(body);

        return NextResponse.json(result);
    } catch (error) {
        console.error('HR Analysis API Error:', error);
        return NextResponse.json({
            summary: 'The AI analysis service is currently unavailable.',
            patterns: ['Error processing request'],
            alerts: [{ message: 'System failure during analysis', severity: 'high' }],
            suggestions: ['Please try again later'],
            professionalismScore: 0,
            riskOfToxicEnvironment: 'low',
            recommendation: 'Technical error: check server logs.'
        }, { status: 500 });
    }
}