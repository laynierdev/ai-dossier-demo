// types/hr-analysis.ts

import {AIInsights} from "@/app/lib/ai/hr/types";
import {DossierEntry} from "@/app/types/dossier";

export interface ProfessionalReview {
    id: string;
    rating: number;
    comment: string;
    date: string;
}

export interface HRAnalysisInput {
    professionalName: string;
    reviews: ProfessionalReview[];
    dossierEntries: DossierEntry[]; // written by professional
}

export interface HRInsights extends AIInsights {
    professionalismScore: number; // 1-100
    riskOfToxicEnvironment: 'low' | 'medium' | 'high';
    recommendation: string; // Example: "Soft treatment/Training" o "Consider termination"
}