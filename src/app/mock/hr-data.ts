// app/mock/hr-data.ts
import { HRAnalysisInput } from "@/app/types/hr-analysis";

export const janeDoeEnglishData: HRAnalysisInput = {
    professionalName: "Jane Doe",
    reviews: [
        {
            id: "rev-101",
            rating: 2,
            comment: "The treatment itself was fine, but Jane was on her phone the entire time. It felt like I was an inconvenience to her.",
            date: "2026-03-15"
        },
        {
            id: "rev-102",
            rating: 1,
            comment: "I was literally 5 minutes late due to traffic and she canceled my appointment to my face. Extremely rigid and rude about it.",
            date: "2026-03-28"
        },
        {
            id: "rev-103",
            rating: 5,
            comment: "Jane is the best technician in the city! My skin looks amazing. She's a bit quiet, but her work is flawless.",
            date: "2026-04-02"
        },
        {
            id: "rev-104",
            rating: 2,
            comment: "I had a mild burn from the chemical peel. When I called to ask about it, she told me it was my fault for having 'too sensitive' skin. No accountability.",
            date: "2026-04-10"
        }
    ],
    dossierEntries: [
        {
            id: 1,
            client_id: 501, // John Smith
            professional_id: 10,
            professional_name: "Jane Doe",
            date: "2026-03-15",
            content: "John Smith (ID 501). Client is extremely needy and shows narcissistic tendencies. He complained because I was updating clinical notes on my iPad during the service. I suggest he be moved to a different specialist; I don't tolerate 'bad vibes' in my booth."
        },
        {
            id: 2,
            client_id: 502, // Maria Garcia
            professional_id: 10,
            professional_name: "Jane Doe",
            date: "2026-03-20",
            content: "Maria Garcia (ID 502). Standard facial. Client refused all retail product recommendations. Low revenue potential, not worth the extra effort in future sessions."
        },
        {
            id: 3,
            client_id: 502, // Maria Garcia
            professional_id: 10,
            professional_name: "Jane Doe",
            date: "2026-03-28",
            content: "Maria Garcia (ID 502). Client attempted to show up late again. I canceled her per salon policy. She became hysterical at the front desk. This is a high-conflict client; I've flagged her profile as 'Do Not Book'."
        },
        {
            id: 4,
            client_id: 503, // Sarah Johnson (The 5-star reviewer)
            professional_id: 10,
            professional_name: "Jane Doe",
            date: "2026-04-02",
            content: "Sarah is one of my favorite clients. Respectful, punctual, and tips 25%. A pleasure to work with. I gave her an unlisted discount on her serum as a loyalty reward."
        },
        {
            id: 5,
            client_id: 501, // John Smith
            professional_id: 10,
            professional_name: "Jane Doe",
            date: "2026-04-05",
            content: "John Smith returned. He insisted on discussing personal matters. I gave him one-word answers to maintain my boundaries and ensure he knows I'm here to work, not to be his therapist."
        },
        {
            id: 6,
            client_id: 504, // Emily Davis
            professional_id: 10,
            professional_name: "Jane Doe",
            date: "2026-04-10",
            content: "Emily Davis (ID 504). Mild localized irritation post-peel. Client likely lied on her intake form regarding her use of Retinol at home. Her skin barrier is a mess. She tried to blame the product, but the error is clearly on her end."
        },
        {
            id: 7,
            client_id: 504, // Emily Davis
            professional_id: 10,
            professional_name: "Jane Doe",
            date: "2026-04-15",
            content: "Follow-up with Emily. She is still complaining about itching. She seems to be a hypochondriac looking for a refund. The treatment was performed perfectly."
        }
    ]
};