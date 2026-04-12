// lib/ai/mock.ts

import { AIInsights } from './types';

export function runMock(): AIInsights {
    return {
        summary: 'Mock analysis: recurring musculoskeletal discomfort detected.',
        patterns: [
            'Repeated pain reports',
            'High frequency of visits',
        ],
        alerts: [
            { message: 'Possible chronic issue', severity: 'medium' },
        ],
        suggestions: [
            'Reduce intensity of physical activity',
            'Recommend follow-up evaluation',
        ],
    };
}