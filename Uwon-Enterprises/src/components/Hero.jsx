import React from 'react';

export default function Hero({ switchTab }) {
    return (
        <>
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
        </>
    );
}
