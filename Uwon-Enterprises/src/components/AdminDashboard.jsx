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
