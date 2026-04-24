// lib/ai/prompt-hr.ts

import {HRAnalysisInput} from "@/app/types/hr-analysis";

export function buildHRPrompt(data: HRAnalysisInput) {
    const reviewsStr = data.reviews.map(r => `[Rating: ${r.rating}/5] ${r.comment}`).join('\n');
    const entriesStr = data.dossierEntries.map(e => `[Client: ${e.client_id}] ${e.content}`).join('\n');

    return `
    Act as an HR Expert for a high-end Wellness Center. 
    Analyze the alignment between a Professional's notes on clients and the Reviews they receive.

    PROFESSIONAL NAME: ${data.professionalName}

    REVIEWS FROM CLIENTS:
    ${reviewsStr}

    NOTES WRITTEN BY PROFESSIONAL (DOSSIER):
    ${entriesStr}

    Analyze:
    1. Is there a "Negative Reciprocity" pattern? (e.g., Professional complains about clients who also gave them bad reviews).
    2. Tone Analysis: Is the professional's language in the dossier clinical/helpful or "poisonous"/disrespectful?
    3. Consistency: Do clients complain about things that the professional blames on the client?
    4. Any other substantial element on the information, like for instance burnout detection if provider had only good reviews in the past and only now rating is falling down.

    CRITERIA:
    - Consistency: Do bad reviews correlate with "toxic" or "defensive" notes in the dossier?
    - Tone: Is the professional's language clinical/objective or subjective/poisonous?
    - Pattern: Does this professional consistently blame clients for issues mentioned in reviews?

    Return ONLY JSON:
    {
      "summary": "Overall analysis of the professional behavior",
      "patterns": ["identified pattern 1", "identified pattern 2"],
      "alerts": [{"message": "description", "severity": "low|medium|high"}],
      "suggestions": ["specific action for the employer"],
      "professionalismScore": 0-100,
      "riskOfToxicEnvironment": "low|medium|high",
      "recommendation": "Brief HR advice (e.g., Training, Warning, or Termination)"
    }
    `;
}