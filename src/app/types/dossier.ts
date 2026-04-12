// types/dossier.ts

export interface DossierEntry {
    id: number;
    client_id: number;
    professional_id: number;
    professional_name: string;
    date: string;
    content: string;
}

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