// mock/dossier.ts


import {DossierEntry} from "@/app/types/dossier";

export const dossierEntries: DossierEntry[] = [
    {
        id: 1,
        client_id: 101,
        professional_id: 1,
        professional_name: 'Carlos Trainer',
        date: '2026-03-01',
        content: 'Client reports lower back pain after intense workout session.',
    },
    {
        id: 2,
        client_id: 101,
        professional_id: 2,
        professional_name: 'Ana Massage Therapist',
        date: '2026-03-05',
        content: 'Muscle tension detected in lumbar area. Recommended stretching.',
    },
    {
        id: 3,
        client_id: 101,
        professional_id: 1,
        professional_name: 'Carlos Trainer',
        date: '2026-03-10',
        content: 'Follow-up session. Pain persists but slightly improved.',
    },
    {
        id: 4,
        client_id: 101,
        professional_id: 3,
        professional_name: 'Laura Stylist',
        date: '2026-03-15',
        content: 'Client mentioned discomfort while sitting for long periods.',
    },
];