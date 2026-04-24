// app/professionals/directory/page.tsx
'use client';

import React, { useState } from 'react';
import PerformanceDashboard from '@/app/components/hr/PerformanceDashboard';
import { HRInsights } from '@/app/types/hr-analysis';
import { janeDoeEnglishData } from '@/app/mock/hr-data';

const professionalsList = [
    { id: 10, name: "Jane Doe", role: "Senior Specialist", status: "Active" },
    { id: 11, name: "Marco Antonio", role: "Hair Stylist", status: "Active" },
];

export default function DirectoryPage() {
    const [loadingId, setLoadingId] = useState<number | null>(null);
    const [activeInsights, setActiveInsights] = useState<HRInsights | null>(null);
    const [selectedName, setSelectedName] = useState<string>('');

    const handleRunAudit = async (id: number, name: string) => {
        setLoadingId(id);
        setActiveInsights(null);
        setSelectedName(name);

        try {
            const payload = name.includes("Jane Doe") ? janeDoeEnglishData : {
                professionalName: name,
                reviews: [],
                dossierEntries: []
            };

            const response = await fetch('/api/analyze-hr', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Failed to fetch analysis');

            const data: HRInsights = await response.json();
            setActiveInsights(data);
        } catch (error) {
            console.error("Analysis failed:", error);
            alert("Could not complete the AI audit. Check console for details.");
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <div className="mb-4">
                <h2 className="fw-bold">Staff Directory</h2>
                <p className="text-muted">Manage your team and run AI performance audits.</p>
            </div>

            <div className="table-responsive bg-white rounded shadow-sm border mb-5">
                <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                    <tr>
                        <th>Professional Name</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th className="text-end">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {professionalsList.map((pro) => (
                        <tr key={pro.id}>
                            <td className="fw-medium">{pro.name}</td>
                            <td className="text-muted">{pro.role}</td>
                            <td>
                                    <span className="badge bg-success bg-opacity-10 text-success border border-success">
                                        {pro.status}
                                    </span>
                            </td>
                            <td className="text-end">
                                <button
                                    className="btn btn-sm text-white shadow-sm"
                                    style={{ backgroundColor: '#234b0a' }}
                                    onClick={() => handleRunAudit(pro.id, pro.name)}
                                    disabled={loadingId === pro.id}
                                >
                                    {loadingId === pro.id ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Analyzing...
                                        </>
                                    ) : 'Run AI Audit'}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {activeInsights && (
                <div className="animate__animated animate__fadeInUp">
                    <PerformanceDashboard insights={activeInsights} professionalName={selectedName} />
                </div>
            )}
        </div>
    );
}