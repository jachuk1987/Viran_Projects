import React, { useState } from 'react';

const FAQ_DATA = [
    {
        question: "How fast can Uwon deploy workers to our project site?",
        answer: "For general labor, logistics packers, and standby warehouse staff, we can deploy personnel within 24 hours. For highly specialized technical roles (certified welders, scaffolders, L2 support engineers), placement typically takes 2 to 4 business days."
    },
    {
        question: "Who is responsible for workers' insurance, legal compliance, and payroll?",
        answer: "Uwon Enterprises acts as the employer of record. We handle all employee registration, EPF/ETF contributions, payroll processing, and public liability insurance coverage, lifting the administrative burden entirely off your HR team."
    },
    {
        question: "What happens if a supplied worker does not meet our performance standard?",
        answer: "We offer a 48-hour replacement guarantee. If any worker fails to meet your performance standards or safety expectations within their first two shifts, notify us immediately and we will supply a qualified replacement at no extra charge."
    },
    {
        question: "Do you supply personal protective equipment (PPE) and site transport?",
        answer: "Yes, we ensure all deployed workers arrive with standard PPE (safety boots, high-visibility jackets, and helmets) matching site safety criteria. We also coordinate daily transport routes to and from major transit hubs to ensure prompt arrival."
    }
];

export default function Hero({ switchTab }) {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null);
        } else {
            setActiveFaq(index);
        }
    };

    return (
        <>
            {/* Hero Banner Section */}
            <section class="hero-section">
                <div class="hero-bg-accent"></div>
                <div class="container hero-container">
                    <div class="hero-content">
                        <span class="hero-badge"><i class="fa-solid fa-shield-halved"></i> Certified & Bonded Manpower Agency</span>
                        <h1 class="hero-title">Empowering Growth With <span class="gradient-text">Reliable Manpower</span></h1>
                        <p class="hero-lead">We connect industry leaders with skilled, semi-skilled, and general labor. Tailored workforce solutions designed to meet your schedules, scale operations, and boost efficiency.</p>
                        <div class="hero-actions">
                            <button class="btn btn-primary btn-lg" onClick={() => switchTab('clients-tab')}>
                                <i class="fa-solid fa-business-time"></i> Hire Skilled Staff
                            </button>
                            <button class="btn btn-secondary btn-lg" onClick={() => switchTab('candidates-tab')}>
                                <i class="fa-solid fa-user-tie"></i> Find a Job
                            </button>
                        </div>
                    </div>
                    
                    <div class="hero-visual">
                        <div class="glow-sphere"></div>
                        <div class="visual-card main-visual-card">
                            <i class="fa-solid fa-users-gear visual-icon"></i>
                            <h3>UWON Workforce</h3>
                            <p>Seamlessly vetted, compliance ready, and ready to deploy globally.</p>
                            <div class="mini-progress-bar">
                                <div class="progress-fill" style={{ width: '94%' }}></div>
                            </div>
                            <span class="visual-tag">94% Client Retention</span>
                        </div>
                        <div class="visual-card offset-card">
                            <div class="avatar-group">
                                <span class="avatar"><i class="fa-solid fa-user"></i></span>
                                <span class="avatar"><i class="fa-solid fa-user"></i></span>
                                <span class="avatar"><i class="fa-solid fa-user"></i></span>
                                <span class="avatar-plus">+1k</span>
                            </div>
                            <p class="small-text">Active workers deployed this month across various sectors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Bar */}
            <section class="metrics-section">
                <div class="container">
                    <div class="metrics-grid">
                        <div class="metric-item">
                            <span class="metric-number">15,000+</span>
                            <span class="metric-label">Workers Deployed</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-number">24 Hours</span>
                            <span class="metric-label">Avg. Response Time</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-number">100%</span>
                            <span class="metric-label">Compliance & Insurance</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-number">12+</span>
                            <span class="metric-label">Regional Hubs</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick About / Value Proposition */}
            <section class="about-summary">
                <div class="container">
                    <div class="section-header text-center">
                        <span class="subtitle">Why Choose UWON Enterprises</span>
                        <h2>Bridging Talent & Opportunity Since 2018</h2>
                        <p class="section-desc text-center-margin">We take care of the entire recruitment cycle—sourcing, background checks, medical screenings, and payroll processing—so you can focus on scale.</p>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon"><i class="fa-solid fa-user-shield"></i></div>
                            <h3>100% Vetted Personnel</h3>
                            <p>Every worker goes through strict background verification, professional skill tests, and health evaluations.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon"><i class="fa-solid fa-bolt"></i></div>
                            <h3>Rapid Deployment</h3>
                            <p>Access our standby roster. Need 50 workers for tomorrow's shift? Our emergency crew is ready.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon"><i class="fa-solid fa-file-invoice-dollar"></i></div>
                            <h3>Cost Optimization</h3>
                            <p>Save on administrative costs, advertising, benefits, and HR overhead. We supply compliant labor efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Recruitment Process Workflow */}
            <section class="workflow-section py-5" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                <div class="container">
                    <div class="section-header text-center">
                        <span class="subtitle">Our Process</span>
                        <h2>How We Supply Top Personnel</h2>
                        <p class="section-desc text-center-margin">A streamlined, 4-step recruitment cycle designed to provide certified manpower to your workspace with zero administrative friction.</p>
                    </div>
                    
                    <div class="workflow-timeline">
                        <div class="workflow-step">
                            <div class="step-num">01</div>
                            <h3>Inquiry Analysis</h3>
                            <p>We consult on your specific skill requirements, headcounts, shifts, safety standards, and project timelines.</p>
                        </div>
                        <div class="workflow-step">
                            <div class="step-num">02</div>
                            <h3>Database Vetting</h3>
                            <p>We filter matches from our active standby roster, completing background checks and reference validations.</p>
                        </div>
                        <div class="workflow-step">
                            <div class="step-num">03</div>
                            <h3>Compliance Check</h3>
                            <p>All candidates undergo medical fitness audits and verify safety card qualifications prior to deployment.</p>
                        </div>
                        <div class="workflow-step">
                            <div class="step-num">04</div>
                            <h3>Site Deployment</h3>
                            <p>We handle coordinates, supply safety PPE gear, and dispatch workers under our managed payroll structure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: FAQ Section */}
            <section class="faq-section py-5">
                <div class="container">
                    <div class="section-header text-center">
                        <span class="subtitle">Support Desk</span>
                        <h2>Frequently Asked Questions</h2>
                        <p class="section-desc text-center-margin">Find immediate answers to key operational questions regarding recruitment compliance, deployment timelines, and replacement terms.</p>
                    </div>

                    <div class="faq-wrapper" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {FAQ_DATA.map((faq, index) => (
                            <div 
                                key={index} 
                                class={`faq-item ${activeFaq === index ? 'active' : ''}`}
                                style={{ 
                                    backgroundColor: 'var(--bg-secondary)', 
                                    border: '1px solid var(--border-color)', 
                                    borderRadius: 'var(--border-radius)',
                                    overflow: 'hidden',
                                    transition: 'all var(--transition-fast)'
                                }}
                            >
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    style={{ 
                                        width: '100%', 
                                        padding: '20px 24px', 
                                        textAlign: 'left', 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center',
                                        fontWeight: '600',
                                        fontSize: '17px',
                                        color: 'var(--text-primary)'
                                    }}
                                >
                                    <span>{faq.question}</span>
                                    <i 
                                        className={`fa-solid ${activeFaq === index ? 'fa-minus' : 'fa-plus'}`}
                                        style={{ color: 'var(--primary)', transition: 'transform var(--transition-fast)' }}
                                    ></i>
                                </button>
                                
                                {activeFaq === index && (
                                    <div 
                                        style={{ 
                                            padding: '0 24px 20px 24px', 
                                            fontSize: '15px', 
                                            lineHeight: '1.6', 
                                            color: 'var(--text-secondary)',
                                            borderTop: '1px solid var(--border-color)',
                                            paddingTop: '16px'
                                        }}
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
