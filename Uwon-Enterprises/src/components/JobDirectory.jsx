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
    const [activeSubTab, setActiveSubTab] = useState('jobs'); // 'jobs' or 'cv-builder'
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    // Modal Form fields states
    const [candName, setCandName] = useState('');
    const [candEmail, setCandEmail] = useState('');
    const [candPhone, setCandPhone] = useState('');
    const [candExp, setCandExp] = useState('Less than 1 year');
    const [candSkills, setCandSkills] = useState('');
    const [candMsg, setCandMsg] = useState('');

    // CV Builder Form fields states
    const [cvName, setCvName] = useState('');
    const [cvEmail, setCvEmail] = useState('');
    const [cvPhone, setCvPhone] = useState('');
    const [cvSector, setCvSector] = useState('Construction');
    const [cvDegree, setCvDegree] = useState('');
    const [cvSchool, setCvSchool] = useState('');
    const [cvEduYear, setCvEduYear] = useState('');
    const [cvTitle, setCvTitle] = useState('');
    const [cvCompany, setCvCompany] = useState('');
    const [cvExpYears, setCvExpYears] = useState('');
    const [cvExpDesc, setCvExpDesc] = useState('');
    const [cvSkills, setCvSkills] = useState('');

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

    const handlePrintCV = () => {
        if (!cvName || !cvTitle) return;

        const printWindow = window.open('', '_blank', 'width=800,height=900');
        if (!printWindow) {
            alert("Please allow popups to download your CV.");
            return;
        }

        const dateStr = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Curriculum Vitae - ${cvName}</title>
                <style>
                    body {
                        font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
                        color: #1e293b;
                        line-height: 1.6;
                        padding: 50px;
                        background: #fff;
                    }
                    .header {
                        border-bottom: 3px solid #10b981;
                        padding-bottom: 15px;
                        margin-bottom: 25px;
                    }
                    .name {
                        font-size: 32px;
                        font-weight: 800;
                        color: #0f172a;
                        margin: 0;
                        line-height: 1.1;
                    }
                    .profession {
                        font-size: 18px;
                        font-weight: 700;
                        color: #059669;
                        margin-top: 5px;
                    }
                    .contact-grid {
                        display: flex;
                        gap: 20px;
                        font-size: 13px;
                        color: #64748b;
                        margin-top: 10px;
                        flex-wrap: wrap;
                    }
                    .section-title {
                        font-size: 14px;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        color: #334155;
                        border-bottom: 2px solid #e2e8f0;
                        padding-bottom: 5px;
                        margin-top: 25px;
                        margin-bottom: 15px;
                    }
                    .exp-block, .edu-block {
                        margin-bottom: 15px;
                    }
                    .block-header {
                        display: flex;
                        justify-content: space-between;
                        font-weight: 700;
                        font-size: 15px;
                        color: #334155;
                    }
                    .block-subhead {
                        font-style: italic;
                        color: #475569;
                        font-size: 14px;
                        margin-bottom: 5px;
                    }
                    .block-desc {
                        font-size: 14px;
                        color: #475569;
                        margin: 0;
                    }
                    .skills-list {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    .skill-badge {
                        background: #f1f5f9;
                        color: #475569;
                        padding: 6px 12px;
                        border-radius: 4px;
                        font-size: 13px;
                        font-weight: 600;
                    }
                    .footer-note {
                        text-align: center;
                        font-size: 11px;
                        color: #94a3b8;
                        margin-top: 50px;
                        border-top: 1px solid #e2e8f0;
                        padding-top: 15px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1 class="name">${cvName}</h1>
                    <div class="profession">${cvTitle}</div>
                    <div class="contact-grid">
                        <div><strong>Email:</strong> ${cvEmail || "N/A"}</div>
                        <div><strong>Phone:</strong> ${cvPhone || "N/A"}</div>
                    </div>
                </div>

                <div class="section-title">Work Experience</div>
                <div class="exp-block">
                    <div class="block-header">
                        <span>${cvTitle}</span>
                        <span style="font-weight:500; color:#64748b;">${cvExpYears || "N/A"}</span>
                    </div>
                    <div class="block-subhead">${cvCompany || "N/A"}</div>
                    <p class="block-desc">${cvExpDesc || "No descriptions added."}</p>
                </div>

                <div class="section-title">Education & Qualifications</div>
                <div class="edu-block">
                    <div class="block-header">
                        <span>${cvDegree || "N/A"}</span>
                        <span style="font-weight:500; color:#64748b;">${cvEduYear || "N/A"}</span>
                    </div>
                    <div class="block-subhead">${cvSchool || "N/A"}</div>
                </div>

                <div class="section-title">Skills & Certifications</div>
                <ul class="skills-list">
                    ${cvSkills ? cvSkills.split(',').map(skill => `<li class="skill-badge">${skill.trim()}</li>`).join('') : '<li class="skill-badge">N/A</li>'}
                </ul>

                <div class="footer-note">
                    Resume compiled via Uwon Enterprises Candidate Portal &bull; Generated: ${dateStr}
                </div>

                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() { window.close(); }, 500);
                    };
                </script>
            </body>
            </html>
        `;

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();
    };

    const handleSubmitCVToDatabase = () => {
        if (!cvName || !cvTitle) return;

        const newApp = {
            id: `app-${Date.now()}`,
            jobId: "cv-builder-match",
            jobName: `Roster Match - ${cvTitle}`,
            name: cvName,
            email: cvEmail,
            phone: cvPhone,
            experience: cvExpYears || "1-3 Years",
            skills: cvSkills,
            message: `Resume submitted via online CV Builder. Education: ${cvDegree} at ${cvSchool}. Previous Experience: ${cvExpDesc}`,
            status: "pending",
            date: new Date().toISOString().split('T')[0]
        };

        addJobApplication(newApp);

        // Reset fields
        setCvName('');
        setCvEmail('');
        setCvPhone('');
        setCvDegree('');
        setCvSchool('');
        setCvEduYear('');
        setCvTitle('');
        setCvCompany('');
        setCvExpYears('');
        setCvExpDesc('');
        setCvSkills('');
    };

    return (
        <div class="container py-5">
            <div class="section-header text-center">
                <span class="subtitle">Join Our Standby Roster</span>
                <h2>Immediate Openings Across Key Industries</h2>
                <p class="section-desc text-center-margin">We supply leading companies with top-tier personnel. Apply to our database to get matched with active jobs immediately.</p>
            </div>

            {/* Career Sub-navigation */}
            <div class="sub-nav" style={{ marginBottom: '32px' }}>
                <button
                    class={`sub-nav-btn ${activeSubTab === 'jobs' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('jobs')}
                >
                    <i class="fa-solid fa-briefcase"></i> Browse Job Openings
                </button>
                <button
                    class={`sub-nav-btn ${activeSubTab === 'cv-builder' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('cv-builder')}
                >
                    <i class="fa-solid fa-file-invoice"></i> Professional CV Builder
                </button>
            </div>

            {activeSubTab === 'jobs' && (
                <>
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
                </>
            )}

            {activeSubTab === 'cv-builder' && (
                <div class="layout-split">
                    {/* CV Builder Form */}
                    <div class="form-wrapper">
                        <h3>Build Your Professional CV</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>Fill in your credentials to instantly preview and download a formatted resume.</p>

                        <form class="interactive-form" onSubmit={(e) => e.preventDefault()}>
                            {/* Personal Info */}
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Full Name *</label>
                                    <input type="text" value={cvName} onChange={(e) => setCvName(e.target.value)} placeholder="Jane Doe" required />
                                </div>
                                <div class="form-group">
                                    <label>Profession / Target Role *</label>
                                    <input type="text" value={cvTitle} onChange={(e) => setCvTitle(e.target.value)} placeholder="Forklift Operator / Web Developer" required />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Email Address *</label>
                                    <input type="email" value={cvEmail} onChange={(e) => setCvEmail(e.target.value)} placeholder="jane@example.com" required />
                                </div>
                                <div class="form-group">
                                    <label>Phone Number *</label>
                                    <input type="tel" value={cvPhone} onChange={(e) => setCvPhone(e.target.value)} placeholder="+91 9885058859" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Workplace Sector *</label>
                                <select value={cvSector} onChange={(e) => setCvSector(e.target.value)} required>
                                    <option value="Construction">Construction</option>
                                    <option value="Hospitality">Hospitality</option>
                                    <option value="Logistics">Logistics</option>
                                    <option value="Admin">Admin Support</option>
                                    <option value="Tech">IT & Technical</option>
                                </select>
                            </div>

                            <hr class="calc-divider" />
                            <h4 style={{ fontSize: '16px', color: 'var(--text-primary)' }}>Education & Qualifications</h4>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Degree / Certificate</label>
                                    <input type="text" value={cvDegree} onChange={(e) => setCvDegree(e.target.value)} placeholder="High School Diploma / NVQ Level 4" />
                                </div>
                                <div class="form-group">
                                    <label>Institution / School</label>
                                    <input type="text" value={cvSchool} onChange={(e) => setCvSchool(e.target.value)} placeholder="Colombo Technical College" />
                                </div>
                            </div>
                            <div class="form-group" style={{ maxWidth: '150px' }}>
                                <label>Year Completed</label>
                                <input type="text" value={cvEduYear} onChange={(e) => setCvEduYear(e.target.value)} placeholder="2022" />
                            </div>

                            <hr class="calc-divider" />
                            <h4 style={{ fontSize: '16px', color: 'var(--text-primary)' }}>Latest Work Experience</h4>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Previous Company</label>
                                    <input type="text" value={cvCompany} onChange={(e) => setCvCompany(e.target.value)} placeholder="Apex Logistics Ltd" />
                                </div>
                                <div class="form-group">
                                    <label>Years of Service</label>
                                    <input type="text" value={cvExpYears} onChange={(e) => setCvExpYears(e.target.value)} placeholder="3 Years (2023 - Present)" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Description of Key Duties</label>
                                <textarea rows="3" value={cvExpDesc} onChange={(e) => setCvExpDesc(e.target.value)} placeholder="Responsible for operating forklifts, managing storage catalog scans, and leading shift handovers."></textarea>
                            </div>

                            <hr class="calc-divider" />
                            <div class="form-group">
                                <label>Skills & Certifications (Comma separated) *</label>
                                <input type="text" value={cvSkills} onChange={(e) => setCvSkills(e.target.value)} placeholder="Forklift License, Safety Card, First Aid" required />
                            </div>

                            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                                <button type="button" class="btn btn-primary" onClick={handlePrintCV} style={{ flexGrow: 1 }} disabled={!cvName || !cvTitle}>
                                    <i class="fa-solid fa-file-pdf"></i> Download PDF CV
                                </button>
                                <button type="button" class="btn btn-outline" onClick={handleSubmitCVToDatabase} style={{ flexGrow: 1 }} disabled={!cvName || !cvTitle}>
                                    <i class="fa-solid fa-cloud-upload"></i> Register as Candidate
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* CV Live Preview */}
                    <div class="calculator-panel">
                        <div class="glass-card sticky-panel" style={{ padding: '30px' }}>
                            <h3 style={{ fontSize: '18px', marginBottom: '20px' }}><i class="fa-solid fa-eye" style={{ color: 'var(--primary)' }}></i> Live Preview</h3>

                            <div style={{ backgroundColor: '#ffffff', color: '#1e293b', padding: '24px', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', minHeight: '450px', fontSize: '13px', border: '1px solid var(--border-color)' }}>
                                <div style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '12px', marginBottom: '16px' }}>
                                    <h2 style={{ color: '#0f172a', margin: 0, fontSize: '20px' }}>{cvName || "YOUR NAME"}</h2>
                                    <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '14px', marginTop: '2px' }}>{cvTitle || "Target Profession / Role"}</div>
                                    <div style={{ display: 'flex', gap: '12px', color: '#64748b', fontSize: '11px', marginTop: '6px', flexWrap: 'wrap' }}>
                                        <span><i class="fa-solid fa-envelope"></i> {cvEmail || "email@example.com"}</span>
                                        <span><i class="fa-solid fa-phone"></i> {cvPhone || "Phone Number"}</span>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <h4 style={{ color: '#334155', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', marginBottom: '8px', fontSize: '11px', fontWeight: '700' }}>Work Experience</h4>
                                    {cvCompany || cvExpYears || cvExpDesc ? (
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: '#334155' }}>
                                                <span>{cvTitle || "Role"}</span>
                                                <span style={{ color: '#64748b', fontWeight: '500' }}>{cvExpYears || "Duration"}</span>
                                            </div>
                                            <div style={{ fontStyle: 'italic', color: '#475569', marginBottom: '4px' }}>{cvCompany || "Company Name"}</div>
                                            <p style={{ color: '#64748b', margin: 0 }}>{cvExpDesc || "Duties and achievements..."}</p>
                                        </div>
                                    ) : (
                                        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>No experience details added yet.</p>
                                    )}
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <h4 style={{ color: '#334155', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', marginBottom: '8px', fontSize: '11px', fontWeight: '700' }}>Education</h4>
                                    {cvDegree || cvSchool || cvEduYear ? (
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <div style={{ fontWeight: '700', color: '#334155' }}>{cvDegree || "Degree / Course"}</div>
                                                <div style={{ color: '#475569' }}>{cvSchool || "School / University"}</div>
                                            </div>
                                            <span style={{ color: '#64748b', fontSize: '11px' }}>{cvEduYear || "Year Completed"}</span>
                                        </div>
                                    ) : (
                                        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>No education details added yet.</p>
                                    )}
                                </div>

                                <div>
                                    <h4 style={{ color: '#334155', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', marginBottom: '8px', fontSize: '11px', fontWeight: '700' }}>Skills & Certifications</h4>
                                    {cvSkills ? (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                            {cvSkills.split(',').map((skill, i) => (
                                                <span key={i} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
                                                    {skill.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>No skills entered yet.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
