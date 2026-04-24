// lib/ai/mock-hr.ts

import { HRInsights } from "@/app/types/hr-analysis";

/**
 * Returns a hardcoded HR analysis for testing purposes or as a final fallback.
 * This simulates the "Toxic Professional" scenario (Jane Doe).
 */
export function runMock_HR(): HRInsights {
    return {
        summary: "Analysis reveals a systematic pattern of 'Negative Reciprocity' and defensive documentation. The professional consistently uses the dossier to pathologize clients after receiving negative feedback or encountering minor service friction.",
        patterns: [
            "Transactional Bias: Professional service quality appears directly tied to client tip percentage and retail purchase history.",
            "Defensive Documentation: High correlation between service errors (e.g., product burns) and immediate entries blaming client non-disclosure.",
            "Boundary Rigidity: Multiple reports of 'cold' or 'dismissive' behavior during services."
        ],
        alerts: [
            {
                message: "High risk of client churn: 3 out of 4 non-regular clients reported dissatisfaction.",
                severity: "high"
            },
            {
                message: "Unprofessional language: Subjective labeling of clients ('hysterical', 'needy') in permanent records.",
                severity: "high"
            }
        ],
        suggestions: [
            "Review upcoming appointments to prevent further client loss.",
            "Implement a formal warning regarding dossier usage and professional language."
        ],
        professionalismScore: 38,
        riskOfToxicEnvironment: "high",
        recommendation: "Immediate Management Intervention. We recommend a formal review. If behavior continues, consider termination to protect salon reputation."
    };
}