// lib/ai/types.ts

export interface AIAlert {
    message: string;
    severity: 'low' | 'medium' | 'high';
}

export interface AIInsights {
    summary: string;
    patterns: string[];
    alerts: AIAlert[];
    suggestions: string[];
}