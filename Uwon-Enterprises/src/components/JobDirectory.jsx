import React, { useState } from 'react';

const DEFAULT_JOBS = [
    {
        id: "job-1",
        title: "Concrete Mason & General Laborer",
        category: "Construction",
        location: "Colombo",
        salary: "$18.50 - $22.00 / Hour",
        type: "Full-Time",
        description: "Seeking physical workers experienced in cement laying, mixing, steel reinforcing, and heavy loading on commercial construction projects. Safety boots and valid green/site card required. Transport provided from Colombo Central."
    },
    {
        id: "job-2",
        title: "Certified Forklift Operator (Reach/Counterbalance)",
        category: "Logistics",
        location: "Gampaha",
        salary: "$21.00 - $25.00 / Hour",
        type: "Contract",
        description: "Operate modern electric reach trucks in a temperature-controlled FMCG warehouse. Duties include cargo loading, stacking, inventory management using RF scanners, and safety reporting. Active forklift license required."
    },
    {
        id: "job-3",
        title: "Kitchen Porter & Food Prep Assistant",
        category: "Hospitality",
        location: "Negombo",
        salary: "$16.00 - $19.00 / Hour",
        type: "Part-Time",
        description: "Join a high-volume resort kitchen team. Duties include washing dishes, sanitizing stations, peeling vegetables, and unloading weekly grocery shipments. High standard of hygiene and clean background certificate required."
    },
    {
        id: "job-4",
        title: "Junior Data Entry & Office Coordinator",
        category: "Admin",
        location: "Colombo 03",
        salary: "$19.00 - $23.00 / Hour",
        type: "Temporary",
        description: "Provide clerical support during annual financial audits. Duties include digitizing physical documents, spreadsheet management, and answering incoming front-office phone calls. Experience with MS Excel is mandatory."
    },
    {
        id: "job-5",
        title: "IT Support Technician (L1)",
        category: "Tech",
        location: "Colombo 07",
        salary: "$28.00 - $35.00 / Hour",
        type: "Full-Time",
        description: "Provide hardware, software, and networking support for corporate client offices. Setup and configure workstations, reset user passwords, and diagnose local connection issues. A+ Certification preferred."
    },
    {
        id: "job-6",
        title: "Night Duty Hotel Receptionist",
        category: "Hospitality",
        location: "Kandy",
        salary: "$20.00 - $24.00 / Hour",
        type: "Full-Time",
        description: "Manage guest check-ins and check-outs during the night shift. Answer customer requests, oversee safety patrols, and verify billing information using Opera PMS software. Excellent English communication skills required."
    }
];

export default function JobDirectory({ addJobApplication }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    
    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    
    // Form fields states
    const [candName, setCandName] = useState('');
    const [candEmail, setCandEmail] = useState('');
    const [candPhone, setCandPhone] = useState('');
    const [candExp, setCandExp] = useState('Less than 1 year');
    const [candSkills, setCandSkills] = useState('');
    const [candMsg, setCandMsg] = useState('');

    // Open/Close modal functions
    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden"; // Disable scroll
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
        document.body.style.overflow = "auto"; // Enable scroll
        // Reset states
        setCandName('');
        setCandEmail('');
        setCandPhone('');
        setCandExp('Less than 1 year');
        setCandSkills('');
        setCandMsg('');
    };

    // Filter jobs logic
    const filteredJobs = DEFAULT_JOBS.filter(job => {
        const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              job.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!selectedJob) return;

        const newApplication = {
            id: `app-${Date.now()}`,
            jobId: selectedJob.id,
            jobName: selectedJob.title,
            name: candName,
            email: candEmail,
            phone: candPhone,
            experience: candExp,
            skills: candSkills,
            message: candMsg,
            status: "pending",
            date: new Date().toISOString().split('T')[0]
        };

        addJobApplication(newApplication);
        closeModal();
    };

    return (
        <div class="container py-5">
            <div class="section-header text-center">
                <span class="subtitle">Join Our Standby Roster</span>
                <h2>Immediate Openings Across Key Industries</h2>
                <p class="section-desc text-center-margin">We supply leading companies with top-tier personnel. Apply to our database to get matched with active jobs immediately.</p>
            </div>

            {/* Job Search & Filter */}
            <div class="filter-controls">
                <div class="search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search job titles, skills, or locations..." 
                    />
                </div>
                <div class="filter-buttons">
                    {['All', 'Construction', 'Hospitality', 'Logistics', 'Admin'].map(cat => (
                        <button 
                            key={cat}
                            class={`filter-btn ${categoryFilter === cat ? 'active' : ''}`}
                            onClick={() => setCategoryFilter(cat)}
                        >
                            {cat === 'All' ? 'All Jobs' : cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Job Catalog Grid */}
            <div class="jobs-grid">
                {filteredJobs.length === 0 ? (
                    <div class="empty-results-box" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', border: '1px dashed var(--border-color)', borderRadius: 'var(--border-radius-lg)' }}>
                        <i class="fa-solid fa-briefcase" style={{ fontSize: '40px', color: 'var(--text-muted)', marginBottom: '12px', display: 'block' }}></i>
                        <p style={{ color: 'var(--text-secondary)' }}>No job positions found matching your selection.</p>
                    </div>
                ) : (
                    filteredJobs.map(job => (
                        <div class="job-card" key={job.id}>
                            <div class="job-card-header">
                                <span class="job-badge">{job.type}</span>
                                <span class="job-category">{job.category}</span>
                            </div>
                            <h3>{job.title}</h3>
                            <p>{job.description.substring(0, 110)}...</p>
                            <div class="job-meta">
                                <div class="job-meta-item">
                                    <i class="fa-solid fa-map-pin"></i>
                                    <span>{job.location}</span>
                                </div>
                                <span class="job-salary">{job.salary.split(' ')[0]}/hr</span>
                            </div>
                            <div class="job-card-actions">
                                <button class="btn btn-outline btn-block" onClick={() => openModal(job)}>
                                    Apply For Position
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Job Application Modal (Candidate Flow) */}
            {isModalOpen && selectedJob && (
                <div class="modal-backdrop">
                    <div class="modal-box">
                        <div class="modal-header">
                            <div>
                                <span class="job-badge">{selectedJob.type}</span>
                                <h3>{selectedJob.title}</h3>
                                <p class="modal-subheading">{selectedJob.category} Department</p>
                            </div>
                            <button class="modal-close-btn" onClick={closeModal} aria-label="Close modal">&times;</button>
                        </div>
                        
                        <div class="modal-body">
                            <div class="modal-details-grid">
                                <div>
                                    <span class="detail-label"><i class="fa-solid fa-map-pin"></i> Location</span>
                                    <span class="detail-value">{selectedJob.location}</span>
                                </div>
                                <div>
                                    <span class="detail-label"><i class="fa-solid fa-money-bill-wave"></i> Payment Rate</span>
                                    <span class="detail-value">{selectedJob.salary}</span>
                                </div>
                            </div>

                            <div class="job-specs-list">
                                <h4>Job Specifications & Responsibilities:</h4>
                                <p>{selectedJob.description}</p>
                            </div>

                            <hr class="modal-divider" />

                            <form id="job-application-form" class="interactive-form" onSubmit={handleFormSubmit}>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label htmlFor="cand-name">Your Full Name *</label>
                                        <input 
                                            type="text" 
                                            id="cand-name" 
                                            value={candName}
                                            onChange={(e) => setCandName(e.target.value)}
                                            required 
                                            placeholder="E.g., Jane Smith" 
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="cand-email">Email Address *</label>
                                        <input 
                                            type="email" 
                                            id="cand-email" 
                                            value={candEmail}
                                            onChange={(e) => setCandEmail(e.target.value)}
                                            required 
                                            placeholder="E.g., jane.smith@domain.com" 
                                        />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group">
                                        <label htmlFor="cand-phone">Contact Phone *</label>
                                        <input 
                                            type="tel" 
                                            id="cand-phone" 
                                            value={candPhone}
                                            onChange={(e) => setCandPhone(e.target.value)}
                                            required 
                                            placeholder="E.g., +94 71 234 5678" 
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="cand-exp">Relevant Experience (Years) *</label>
                                        <select 
                                            id="cand-exp" 
                                            value={candExp}
                                            onChange={(e) => setCandExp(e.target.value)}
                                            required
                                        >
                                            <option value="Less than 1 year">Less than 1 year</option>
                                            <option value="1-3 Years">1-3 Years</option>
                                            <option value="3-5 Years">3-5 Years</option>
                                            <option value="5+ Years">5+ Years</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label htmlFor="cand-skills">List Your Skills / Certifications *</label>
                                    <input 
                                        type="text" 
                                        id="cand-skills" 
                                        value={candSkills}
                                        onChange={(e) => setCandSkills(e.target.value)}
                                        required 
                                        placeholder="E.g., Safety Card, Welding Level 2, Forklift License" 
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="cand-message">Cover Note / Extra Information</label>
                                    <textarea 
                                        id="cand-message" 
                                        rows="3" 
                                        value={candMsg}
                                        onChange={(e) => setCandMsg(e.target.value)}
                                        placeholder="Tell us when you can start or if you need transport support..."
                                    ></textarea>
                                </div>

                                <div class="modal-footer-actions">
                                    <button type="button" class="btn btn-outline" onClick={closeModal}>Cancel</button>
                                    <button type="submit" class="btn btn-primary" id="submit-application">
                                        <i class="fa-solid fa-check"></i> Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
