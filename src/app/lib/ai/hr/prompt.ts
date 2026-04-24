// lib/ai/prompt.ts

import {DossierEntry} from "@/app/types/dossier";

export function buildPrompt(entries: DossierEntry[]) {
    const formatted = entries
        .map(
            (e) =>
                `Date: ${e.date}
Professional: ${e.professional_name}
Note: ${e.content}`
        )
        .join('\n\n');

    return `
Analyze this client dossier and return ONLY valid JSON:

{
  "summary": string,
  "patterns": string[],
  "alerts": [{ "message": string, "severity": "low" | "medium" | "high" }],
  "suggestions": string[]
}

Client data:
${formatted}
`;
}