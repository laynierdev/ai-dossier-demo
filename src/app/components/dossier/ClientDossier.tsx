//components/ClientDossier
'use client';

import React, { useState } from 'react';
import {LuLightbulb, LuSparkles} from 'react-icons/lu';
import { DossierEntry} from "@/app/types/dossier";
import {dossierEntries} from "@/app/mock/dossier2";
import {AIInsights} from "@/app/lib/ai/hr/types";


export default function ClientDossierDemo() {
    const [loadingAI, setLoadingAI] = useState<boolean>(false);
    const [insights, setInsights] = useState<AIInsights | null>(null);

    const handleAnalyze = async () => {
        setLoadingAI(true);

        try {
            const res = await fetch('/api/analyze', {
                method: 'POST',
                body: JSON.stringify({ entries: dossierEntries }),
            });

            const data: AIInsights = await res.json();
            const safeData: AIInsights = {
                summary: data.summary ?? '',
                patterns: data.patterns ?? [],
                alerts: data.alerts ?? [],
                suggestions: data.suggestions ?? [],
            };

            setInsights(safeData);
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingAI(false);
        }
    };

    return (
        <div className="w-100 p-4 bg-white" style={{ minHeight: '100vh', borderRadius: '8px' }}>

            {/* Header */}
            <div className="d-flex align-items-start mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Client Dossier</h2>
                    <p className="text-muted mb-0">Professional annotations and documents.</p>
                </div>
            </div>

            {/* AI Button */}
            <div className="mb-4">
                <button
                    onClick={handleAnalyze}
                    className="btn-ryvar d-flex align-items-center justify-content-center gap-2 text-uppercase"
                    style={{ backgroundColor: '#234b0a', border: 'none', padding: '10px 20px' }}
                    disabled={loadingAI}
                >
                    {loadingAI ? (
                        <span className="spinner-border spinner-border-sm" role="status"></span>
                    ) : (
                        <LuSparkles />
                    )}
                    {loadingAI ? 'Thinking...' : 'AI Analyze'}
                </button>
            </div>

            {/* AI Results */}
            {insights && (
                <div className="p-4  rounded shadow shadow-md " style={{ background:"#e3f5ec" }}>
                    <h5 className="fw-bold mb-3">  <LuLightbulb className="text-info" size={24} color={"green"} /> AI Insights</h5>

                    <p><strong>Summary:</strong> {insights.summary}</p>

                    <div className="mb-3">
                        <strong>Patterns:</strong>
                        <ul>
                            {insights.patterns?.map((p, i) => (
                                <li key={i} style={{listStyleType:"none"}}> <span style={{ color: '#55828B'}}>✦</span> {p}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong>Alerts:</strong>
                        <ul>
                            {insights.alerts?.map((a, i) => (
                                <li key={i} style={{listStyleType:"none"}}>
                                    <span style={{color: '#55828B'}}>✦</span> {a.message} ({a.severity})
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <strong>Suggestions:</strong>
                        <ul>
                            {insights.suggestions?.map((s, i) => (
                                <li key={i} style={{listStyleType:"none"}} > <span style={{color: '#55828B'}}>✦</span> {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Entries */}
            <div className="d-flex flex-column gap-3 mb-5">
                {dossierEntries.map((entry: DossierEntry) => (
                    <div
                        key={entry.id}
                        className="p-4"
                        style={{ border: '1px solid #EBEAED', borderRadius: '12px' }}
                    >
                        <div className="mb-2">
                            <h6 className="mb-0 fw-bold">{entry.professional_name}</h6>
                            <small className="text-muted">{entry.date}</small>
                        </div>

                        <p style={{ color: '#4A4A4A', whiteSpace: 'pre-line' }}>
                            {entry.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}