// components/hr/PerformanceDashboard.tsx
'use client';

import React from 'react';
import { LuCircle, LuActivity, LuUserX } from 'react-icons/lu';
import { HRInsights } from '@/app/types/hr-analysis';

interface Props {
    insights: HRInsights;
    professionalName: string;
}

export default function PerformanceDashboard({ insights, professionalName }: Props) {
    const isHighRisk = insights.riskOfToxicEnvironment === 'high';
    const scoreColor = insights.professionalismScore > 75 ? 'text-success' : insights.professionalismScore > 50 ? 'text-warning' : 'text-danger';

    return (
        <div className="card shadow-sm border-0 mt-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold mb-0">
                        <LuActivity className="me-2" />
                        AI Performance Audit: {professionalName}
                    </h5>
                    <span className={`badge ${isHighRisk ? 'bg-danger' : 'bg-success'} p-2 px-3`}>
                        {insights.riskOfToxicEnvironment.toUpperCase()} RISK
                    </span>
                </div>
            </div>

            <div className="card-body">
                {/* Score & Summary Row */}
                <div className="row mb-4">
                    <div className="col-md-3 text-center d-flex flex-column justify-content-center border-end">
                        <h1 className={`display-3 fw-bold mb-0 ${scoreColor}`}>
                            {insights.professionalismScore}
                        </h1>
                        <span className="text-muted text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                            Professionalism Score
                        </span>
                    </div>
                    <div className="col-md-9 d-flex align-items-center">
                        <p className="lead text-muted mb-0 ps-3">
                            {insights.summary}
                        </p>
                    </div>
                </div>

                <hr className="text-muted opacity-25" />

                {/* Alerts Section */}
                {insights.alerts.length > 0 && (
                    <div className="mb-4">
                        <h6 className="fw-bold text-danger mb-3">
                            <LuCircle className="me-2" />
                            Critical Alerts
                        </h6>
                        <div className="d-flex flex-column gap-2">
                            {insights.alerts.map((alert, idx) => (
                                <div key={idx} className="alert alert-danger mb-0 py-2 border-start border-danger border-4">
                                    <strong>{alert.severity.toUpperCase()}:</strong> {alert.message}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Patterns Section */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h6 className="fw-bold mb-3">Detected Behavior Patterns</h6>
                        <ul className="list-group list-group-flush">
                            {insights.patterns.map((pattern, idx) => (
                                <li key={idx} className="list-group-item bg-transparent px-0 border-light">
                                    <span style={{ color: '#55828B' }} className="me-2">✦</span> {pattern}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Recommendation Footer */}
                <div className="p-3 rounded bg-light border">
                    <h6 className="fw-bold mb-2">
                        <LuUserX className="me-2" />
                        Management Recommendation
                    </h6>
                    <p className="mb-0 fw-medium text-dark">
                        {insights.recommendation}
                    </p>
                </div>
            </div>
        </div>
    );
}