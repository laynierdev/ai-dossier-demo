// app/api/analyze/route.ts

// app/api/analyze/route.ts

import { NextResponse } from 'next/server';
import {analyzeClient} from "@/app/lib/ai/orchestrator";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const entries = body?.entries ?? [];

        const result = await analyzeClient(entries);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            summary: 'System error',
            patterns: [],
            alerts: [],
            suggestions: [],
        });
    }
}