import React, { useState } from 'react';

const INDUSTRY_LABELS = {
    Construction: "Construction & Civils",
    Hospitality: "Hospitality & Events",
    Logistics: "Logistics & Warehousing",
    Admin: "Corporate & Office Admin",
    Tech: "IT / Technical Support"
};

export default function AdminDashboard({
    clientRequests,
    candidateApplications,
    updateClientStatus,
    updateCandidateStatus,
    resetDatabase
}) {
    const [activeSubTab, setActiveSubTab] = useState('clients'); // 'clients' or 'candidates'

    // Calculate Pipeline Sum (Pending and Contacted requests value)
    const pipelineSum = clientRequests
        .filter(req => req.status === "pending" || req.status === "contacted")
        .reduce((sum, req) => sum + req.estimatedValue, 0);

    // Calculate Roster Deployments based on Fulfilled requests
    const getDeployedCount = (sector, baseValue) => {
        return baseValue + clientRequests
            .filter(req => req.industry === sector && req.status === "fulfilled")
            .reduce((sum, req) => sum + req.staffCount, 0);
    };

    const rosterData = {
        Construction: {
            label: "Construction",
            icon: "fa-helmet-safety",
            capacity: 500,
            deployed: getDeployedCount("Construction", 340)
        },
        Logistics: {
            label: "Logistics",
            icon: "fa-truck-ramp-box",
            capacity: 400,
            deployed: getDeployedCount("Logistics", 290)
        },
        Hospitality: {
            label: "Hospitality",
            icon: "fa-bell-concierge",
            capacity: 300,
            deployed: getDeployedCount("Hospitality", 180)
        },
        Admin: {
            label: "Admin Support",
            icon: "fa-keyboard",
            capacity: 150,
            deployed: getDeployedCount("Admin", 95)
        },
        Tech: {
            label: "Tech Roster",
            icon: "fa-network-wired",
            capacity: 80,
            deployed: getDeployedCount("Tech", 45)
        }
    };

    return (
        <div class="container py-5">
            <div class="dashboard-header">
                <div>
                    <h2>Agency Portal</h2>
                    <p>Track incoming staffing requests, review job candidates, and manage deployment pipeline in real-time.</p>
                </div>
                <div class="dashboard-stats-summary">
                    <div class="stat-badge">
                        <span class="stat-count" id="dash-stat-clients">{clientRequests.length}</span>
                        <span class="stat-label">Client Demands</span>
                    </div>
                    <div class="stat-badge">
                        <span class="stat-count" id="dash-stat-candidates">{candidateApplications.length}</span>
                        <span class="stat-label">Applications</span>
                    </div>
                    <div class="stat-badge">
                        <span class="stat-count" id="dash-stat-pipeline">
                            ${pipelineSum.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </span>
                        <span class="stat-label">Active Pipeline</span>
                    </div>
                </div>
            </div>

            {/* Standby Roster Status Panel */}
            <div class="glass-card" style={{ marginBottom: '32px', padding: '30px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i class="fa-solid fa-chart-simple" style={{ color: 'var(--primary)' }}></i>
                    Standby Workforce & Deployment Levels
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {Object.keys(rosterData).map(sector => {
                        const { deployed, capacity, label, icon } = rosterData[sector];
                        const percentage = Math.round((deployed / capacity) * 100);
                        let statusColor = 'var(--primary)'; // green
                        let statusText = 'Optimal';
                        if (percentage >= 75) {
                            statusColor = 'var(--accent)'; // amber
                            statusText = 'Low Standby';
                        }
                        if (percentage >= 90) {
                            statusColor = 'var(--danger)'; // red
                            statusText = 'Critical';
                        }
                        return (
                            <div key={sector} style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)', padding: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i class={`fa-solid ${icon}`} style={{ color: 'var(--text-muted)' }}></i>
                                        {label}
                                    </span>
                                    <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: statusColor }}>
                                        {statusText}
                                    </span>
                                </div>
                                <div style={{ fontSize: '24px', fontWeight: '800', marginBottom: '6px' }}>
                                    {deployed} <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>/ {capacity}</span>
                                </div>
                                <div class="mini-progress-bar" style={{ height: '6px', marginBottom: '6px' }}>
                                    <div 
                                        className="progress-fill" 
                                        style={{ 
                                            width: `${percentage}%`, 
                                            backgroundColor: statusColor, 
                                            background: 'none' 
                                        }}
                                    ></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)' }}>
                                    <span>Deployed Level:</span>
                                    <span style={{ fontWeight: '600' }}>{percentage}%</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Dashboard Tabs Selector */}
            <div class="sub-nav">
                <button
                    class={`sub-nav-btn ${activeSubTab === 'clients' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('clients')}
                >
                    <i class="fa-solid fa-building-user"></i> Client Staffing Inquiries
                </button>
                <button
                    class={`sub-nav-btn ${activeSubTab === 'candidates' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('candidates')}
                >
                    <i class="fa-solid fa-user-graduate"></i> Candidate Applications
                </button>
                <button
                    class="btn btn-outline btn-sm reset-dash-btn"
                    onClick={resetDatabase}
                >
                    <i class="fa-solid fa-arrow-rotate-left"></i> Reset Dummy Data
                </button>
            </div>

            {/* Sub-tab 1: Client Inquiries Workspace */}
            {activeSubTab === 'clients' && (
                <div id="dash-client-panel" class="sub-tab-panel active">
                    <div class="table-container">
                        <table class="dashboard-table">
                            <thead>
                                <tr>
                                    <th>Client / Company</th>
                                    <th>Industry</th>
                                    <th>Details</th>
                                    <th>Estimated Value</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientRequests.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" class="text-center" style={{ padding: '32px', color: 'var(--text-muted)' }}>
                                            No staffing inquiries in database. Use the 'For Clients' tab to add.
                                        </td>
                                    </tr>
                                ) : (
                                    clientRequests.map(req => (
                                        <tr key={req.id}>
                                            <td>
                                                <div class="bold-text">{req.name}</div>
                                                <div class="small-text">{req.company}</div>
                                            </td>
                                            <td>
                                                <span class="job-badge" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
                                                    {req.industry}
                                                </span>
                                            </td>
                                            <td>
                                                <div><strong>{req.staffCount} Workers</strong> for <strong>{req.duration} Weeks</strong></div>
                                                <div
                                                    class="small-text"
                                                    style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                                    title={req.requirements || 'None'}
                                                >
                                                    {req.requirements || 'No special requirements'}
                                                </div>
                                            </td>
                                            <td class="bold-text">${req.estimatedValue.toLocaleString()}</td>
                                            <td>
                                                <span class={`status-badge ${req.status}`}>{req.status}</span>
                                            </td>
                                            <td>
                                                <select
                                                    class="status-select"
                                                    value={req.status}
                                                    onChange={(e) => updateClientStatus(req.id, e.target.value)}
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="contacted">Contacted</option>
                                                    <option value="fulfilled">Fulfilled</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Sub-tab 2: Candidate Applications Workspace */}
            {activeSubTab === 'candidates' && (
                <div id="dash-candidate-panel" class="sub-tab-panel active">
                    <div class="table-container">
                        <table class="dashboard-table">
                            <thead>
                                <tr>
                                    <th>Candidate Name</th>
                                    <th>Role Applied</th>
                                    <th>Experience</th>
                                    <th>Resume/Skills</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {candidateApplications.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" class="text-center" style={{ padding: '32px', color: 'var(--text-muted)' }}>
                                            No job applications in database. Use the 'Find Work' tab to apply.
                                        </td>
                                    </tr>
                                ) : (
                                    candidateApplications.map(app => (
                                        <tr key={app.id}>
                                            <td>
                                                <div class="bold-text">{app.name}</div>
                                                <div class="small-text">{app.email} | {app.phone}</div>
                                            </td>
                                            <td>
                                                <div class="bold-text">{app.jobName}</div>
                                            </td>
                                            <td>{app.experience}</td>
                                            <td>
                                                <div style={{ maxWidth: '250px', fontSize: '12px', color: 'var(--text-secondary)' }} title={app.skills}>
                                                    <strong>Skills:</strong> {app.skills}
                                                </div>
                                                <div
                                                    class="small-text"
                                                    style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                                    title={app.message || 'None'}
                                                >
                                                    <strong>Msg:</strong> {app.message || 'None'}
                                                </div>
                                            </td>
                                            <td>
                                                <span class={`status-badge ${app.status}`}>{app.status}</span>
                                            </td>
                                            <td>
                                                <select
                                                    class="status-select"
                                                    value={app.status}
                                                    onChange={(e) => updateCandidateStatus(app.id, e.target.value)}
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="shortlisted">Shortlisted</option>
                                                    <option value="hired">Hired</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
