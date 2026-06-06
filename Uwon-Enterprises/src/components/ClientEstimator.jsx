import React, { useState, useEffect } from 'react';

const INDUSTRY_HOURLY_RATES = {
    Construction: 28,
    Hospitality: 22,
    Logistics: 25,
    Admin: 30,
    Tech: 48
};

const INDUSTRY_LABELS = {
    Construction: "Construction & Civils",
    Hospitality: "Hospitality & Events",
    Logistics: "Logistics & Warehousing",
    Admin: "Corporate & Office Admin",
    Tech: "IT / Technical Support"
};

export default function ClientEstimator({ addClientRequest, defaultIndustry }) {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [industry, setIndustry] = useState(defaultIndustry || '');
    const [staffCount, setStaffCount] = useState(10);
    const [duration, setDuration] = useState(4);
    const [requirements, setRequirements] = useState('');

    // Update industry if defaultIndustry prop changes (e.g. redirected from Services tab)
    useEffect(() => {
        if (defaultIndustry) {
            setIndustry(defaultIndustry);
        }
    }, [defaultIndustry]);

    // Cost Estimator Calculations
    const hourlyRate = INDUSTRY_HOURLY_RATES[industry] || 0;
    const totalHoursPerWorker = duration * 40;
    const totalJobHours = staffCount * totalHoursPerWorker;
    const estimatedInvoice = totalJobHours * hourlyRate;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!industry) {
            alert("Please select a sector/industry.");
            return;
        }

        const newRequest = {
            id: `req-${Date.now()}`,
            name,
            company,
            email,
            phone,
            industry,
            staffCount,
            duration,
            requirements,
            estimatedValue: estimatedInvoice,
            status: "pending",
            date: new Date().toISOString().split('T')[0]
        };

        addClientRequest(newRequest);

        // Reset Form
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setIndustry('');
        setStaffCount(10);
        setDuration(4);
        setRequirements('');
    };

    return (
        <div class="container py-5">
            <div class="layout-split">
                {/* Client Request Wizard */}
                <div class="form-wrapper">
                    <div class="form-header">
                        <h2>Submit a Staffing Inquiry</h2>
                        <p>Describe your staffing needs, and we'll reply with custom proposals within 24 hours.</p>
                    </div>

                    <form id="staffing-request-form" class="interactive-form" onSubmit={handleSubmit}>
                        <div class="form-row">
                            <div class="form-group">
                                <label htmlFor="client-name">Your Name *</label>
                                <input
                                    type="text"
                                    id="client-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label htmlFor="client-company">Company Name *</label>
                                <input
                                    type="text"
                                    id="client-company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="Acme Construction Ltd"
                                    required
                                />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label htmlFor="client-email">Email Address *</label>
                                <input
                                    type="email"
                                    id="client-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label htmlFor="client-phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="client-phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+94 (77) 123-4567"
                                    required
                                />
                            </div>
                        </div>

                        <div class="form-group">
                            <label htmlFor="client-industry">Workplace Sector / Industry *</label>
                            <select
                                id="client-industry"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                required
                            >
                                <option value="">-- Select Industry --</option>
                                <option value="Construction">Construction & Civils</option>
                                <option value="Hospitality">Hospitality & Events</option>
                                <option value="Logistics">Logistics & Warehousing</option>
                                <option value="Admin">Corporate & Office Admin</option>
                                <option value="Tech">IT / Technical Support</option>
                            </select>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label htmlFor="staff-count">Number of Staff Needed *</label>
                                <div class="slider-container">
                                    <input
                                        type="range"
                                        id="staff-count"
                                        min="1"
                                        max="100"
                                        value={staffCount}
                                        onChange={(e) => setStaffCount(parseInt(e.target.value))}
                                        class="custom-slider"
                                    />
                                    <span id="staff-count-badge" class="slider-badge">
                                        {staffCount} {staffCount === 1 ? 'Worker' : 'Workers'}
                                    </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label htmlFor="duration-weeks">Project Duration (Weeks) *</label>
                                <div class="slider-container">
                                    <input
                                        type="range"
                                        id="duration-weeks"
                                        min="1"
                                        max="52"
                                        value={duration}
                                        onChange={(e) => setDuration(parseInt(e.target.value))}
                                        class="custom-slider"
                                    />
                                    <span id="duration-weeks-badge" class="slider-badge">
                                        {duration} {duration === 1 ? 'Week' : 'Weeks'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label htmlFor="client-requirements">Special Requirements / Certifications</label>
                            <textarea
                                id="client-requirements"
                                rows="4"
                                value={requirements}
                                onChange={(e) => setRequirements(e.target.value)}
                                placeholder="E.g., CSCS green cards required, shift starts at 6:00 AM, forklift licenses essential."
                            ></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-client-request">
                            <i class="fa-solid fa-paper-plane"></i> Submit Request
                        </button>
                    </form>
                </div>

                {/* Pricing Calculator & Value Card */}
                <div class="calculator-panel">
                    <div class="glass-card sticky-panel">
                        <h3><i class="fa-solid fa-calculator"></i> Cost Estimator</h3>
                        <p class="panel-desc">Get an instant budgetary guide for Uwon workforce deployment. Final quotes may vary depending on skill levels and locations.</p>

                        <div class="calculator-details">
                            <div class="calc-row">
                                <span>Selected Industry:</span>
                                <span id="calc-industry-val" class="bold-text">
                                    {industry ? INDUSTRY_LABELS[industry] : "Select one"}
                                </span>
                            </div>
                            <div class="calc-row">
                                <span>Base Rate / Hour:</span>
                                <span id="calc-rate-val" class="bold-text">
                                    {industry ? `$${hourlyRate.toFixed(2)}` : "$0.00"}
                                </span>
                            </div>
                            <div class="calc-row">
                                <span>Total Headcount:</span>
                                <span id="calc-count-val" class="bold-text">
                                    {staffCount} {staffCount === 1 ? 'Worker' : 'Workers'}
                                </span>
                            </div>
                            <div class="calc-row">
                                <span>Duration:</span>
                                <span id="calc-duration-val" class="bold-text">
                                    {duration} {duration === 1 ? 'Week' : 'Weeks'} ({totalHoursPerWorker} Hours / worker)
                                </span>
                            </div>
                            <hr class="calc-divider" />
                            <div class="total-billing">
                                <span>Estimated Invoice:</span>
                                <span id="calc-total-invoice" class="price-text">
                                    ${estimatedInvoice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                            </div>
                            <p class="invoice-terms">* Includes social security, workforce insurance, safety gear, and payroll handling fee.</p>
                        </div>

                        <div class="calculator-perks">
                            <h4>Included in all agreements:</h4>
                            <ul>
                                <li><i class="fa-solid fa-shield-check text-success"></i> Comprehensive Public Liability Insurance</li>
                                <li><i class="fa-solid fa-rotate text-success"></i> Free replacement within 48 hours if unsatisfied</li>
                                <li><i class="fa-solid fa-id-card text-success"></i> Completed payroll & tax reporting handled by UWON</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 