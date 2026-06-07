import React, { useState } from 'react';

const DEFAULT_JOBS = [
    {
        id: "job-1",
        title: "Concrete Mason & Civil Construction Laborer",
        category: "Construction",
        location: "Colombo",
        salary: "$18.50 - $22.00 / Hour",
        type: "Full-Time",
        description: "Join our commercial building construction crews. Primary tasks involve concrete mixing, setting structural rebar forms, assisting masonry teams, leveling wet cement platforms, and executing basic site cleanup. Requirements: Physical stamina, steel-toe safety boots, and a valid CSCS / construction safety card. Transport coordinates provided from Colombo Central."
    },
    {
        id: "job-2",
        title: "Certified Reach Truck & Forklift Operator",
        category: "Logistics",
        location: "Gampaha",
        salary: "$21.00 - $25.00 / Hour",
        type: "Contract",
        description: "Operate modern electric reach trucks and counterbalance forklifts in a temperature-controlled FMCG warehouse facility. Primary duties consist of pallet loading/unloading, inventory management utilizing RF scanners, sorting pallets on industrial rack groupings, and completing routine machine checks. Requirements: Active forklift operator license with at least 2 years warehouse experience."
    },
    {
        id: "job-3",
        title: "Kitchen Porter & Food Preparation Assistant",
        category: "Hospitality",
        location: "Negombo",
        salary: "$16.00 - $19.00 / Hour",
        type: "Part-Time",
        description: "Provide support to our hotel's main buffet restaurant. Tasks involve operating commercial washing systems, organizing kitchen utensils, preparing vegetable segments under chef instructions, cleaning workstation surfaces, and unpacking food ingredients shipments. Requirements: Food handler certificate and high standard of personal hygiene."
    },
    {
        id: "job-4",
        title: "Administrative Data Entry Specialist",
        category: "Admin",
        location: "Colombo 03",
        salary: "$19.00 - $23.00 / Hour",
        type: "Temporary",
        description: "Manage large data translation rosters for an upcoming corporate financial audit. Responsibilities: Digitizing invoices, compiling data within MS Excel trackers, reconciling data records, and answering customer helpdesk lines. Requirements: High typing accuracy (45+ WPM) and intermediate spreadsheet skills."
    },
    {
        id: "job-5",
        title: "IT Infrastructure Support Technician (L1)",
        category: "Tech",
        location: "Colombo 07",
        salary: "$28.00 - $35.00 / Hour",
        type: "Full-Time",
        description: "Deliver hardware, software, and local network support inside corporate offices. Responsibilities include system installations, reset user passwords, troubleshooting print and local connectivity issues, and tracking helpdesk requests in Jira. Requirements: CompTIA A+ Certification or equivalent diploma."
    },
    {
        id: "job-6",
        title: "Guest Relations Officer & Receptionist",
        category: "Hospitality",
        location: "Kandy",
        salary: "$20.00 - $24.00 / Hour",
        type: "Full-Time",
        description: "Manage front-desk customer experience for a premium boutique hotel. Duties: Check-in/check-out guest registration, processing payments via Opera PMS, resolving customer queries, and arranging transport schedules. Requirements: Fluent English communication skills and professional grooming."
    },
    {
        id: "job-7",
        title: "CISRS Advanced Scaffolding Erecter",
        category: "Construction",
        location: "Hambantota",
        salary: "$24.50 - $30.00 / Hour",
        type: "Full-Time",
        description: "Direct assembly of structural tube-and-fitting scaffolding towers for industrial maritime ports. Responsibilities include load calculations, safety net installations, routine scaffolding safety checks, and rigging crane loads. Requirements: Advanced CISRS card and working-at-height clearance."
    },
    {
        id: "job-8",
        title: "Logistics Delivery Fleet Driver (Class 4)",
        category: "Logistics",
        location: "Galle",
        salary: "$22.00 - $26.00 / Hour",
        type: "Full-Time",
        description: "Execute distribution routes of industrial components from Gampaha assembly plants to Hambantota ports. Responsibilities: Safe transit of freight containers, logging mileage, checking cargo security straps, and verifying delivery slips. Requirements: Clean Class 4 heavy commercial driving license."
    },
    {
        id: "job-9",
        title: "Senior HR Generalist & Payroll Administrator",
        category: "Admin",
        location: "Colombo 02",
        salary: "$32.00 - $40.00 / Hour",
        type: "Full-Time",
        description: "Oversee internal HR and payroll setups for our agency's deployed staff rosters. Responsibilities include onboarding documents, tracking employee logs, calculating weekly salary structures, and managing insurance claims. Requirements: Bachelor's in Human Resources and 3+ years experience."
    },
    {
        id: "job-10",
        title: "Full-Stack Software Developer (Spring/React)",
        category: "Tech",
        location: "Colombo 03",
        salary: "$45.00 - $60.00 / Hour",
        type: "Full-Time",
        description: "Design and implement web portals for cloud-based logistics databases. Responsibilities: Sourcing REST API endpoints with Java Spring Boot, designing dashboard components in React, and building relational database scripts (PostgreSQL). Requirements: 3+ years experience with Java & Javascript."
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
