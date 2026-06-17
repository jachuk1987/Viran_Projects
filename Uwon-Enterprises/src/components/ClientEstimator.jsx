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

    const handleDownloadProposal = () => {
        if (!industry) return;

        const printWindow = window.open('', '_blank', 'width=800,height=900');
        if (!printWindow) {
            alert("Please allow popups to download your proposal.");
            return;
        }

        const dateStr = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
        const quoteRef = `UWON-${Date.now().toString().slice(-6)}`;

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>UWON Enterprises - Staffing Proposal ${quoteRef}</title>
                <style>
                    body {
                        font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
                        color: #1e293b;
                        line-height: 1.5;
                        padding: 40px;
                        background: #fff;
                    }
                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        border-bottom: 2px solid #10b981;
                        padding-bottom: 20px;
                        margin-bottom: 30px;
                    }
                    .logo-title {
                        font-size: 24px;
                        font-weight: 800;
                        color: #0f172a;
                        margin: 0;
                    }
                    .logo-accent {
                        color: #f59e0b;
                    }
                    .doc-title {
                        font-size: 28px;
                        font-weight: 700;
                        margin: 0 0 10px 0;
                        color: #059669;
                        text-align: right;
                    }
                    .meta-details {
                        text-align: right;
                        font-size: 14px;
                        color: #64748b;
                    }
                    .client-box {
                        background: #f8fafc;
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        padding: 20px;
                        margin-bottom: 30px;
                    }
                    .client-box h3 {
                        margin: 0 0 12px 0;
                        font-size: 16px;
                        color: #334155;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .details-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                        font-size: 14px;
                    }
                    .detail-row span {
                        font-weight: 600;
                        color: #475569;
                    }
                    .specs-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 30px;
                    }
                    .specs-table th {
                        background: #f1f5f9;
                        border-bottom: 2px solid #cbd5e1;
                        padding: 12px;
                        text-align: left;
                        font-size: 14px;
                        font-weight: 700;
                        color: #334155;
                    }
                    .specs-table td {
                        border-bottom: 1px solid #e2e8f0;
                        padding: 12px;
                        font-size: 14px;
                    }
                    .total-section {
                        display: flex;
                        justify-content: flex-end;
                        margin-bottom: 40px;
                    }
                    .total-box {
                        background: #f0fdf4;
                        border: 1px solid #bbf7d0;
                        border-radius: 8px;
                        padding: 20px;
                        min-width: 300px;
                    }
                    .total-box div {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 8px;
                        font-size: 14px;
                        color: #475569;
                    }
                    .total-box .grand-total {
                        font-size: 20px;
                        font-weight: 700;
                        color: #059669;
                        border-top: 1px solid #bbf7d0;
                        padding-top: 8px;
                        margin-top: 8px;
                        margin-bottom: 0;
                    }
                    .terms-box {
                        font-size: 12px;
                        color: #64748b;
                        border-top: 1px solid #e2e8f0;
                        padding-top: 20px;
                    }
                    .terms-box h4 {
                        margin: 0 0 8px 0;
                        color: #475569;
                    }
                    .terms-box ul {
                        padding-left: 18px;
                        margin: 0;
                    }
                    .terms-box li {
                        margin-bottom: 4px;
                    }
                    .footer-note {
                        text-align: center;
                        font-size: 11px;
                        color: #94a3b8;
                        margin-top: 40px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <div>
                        <h1 class="logo-title">UWON <span class="logo-accent">Enterprises</span></h1>
                        <div style="font-size: 13px; color: #64748b; margin-top: 4px;">Premium Manpower Supplying & Recruitment Agency</div>
                    </div>
                    <div>
                        <div class="doc-title">Staffing Proposal</div>
                        <div class="meta-details">
                            <div><strong>Proposal Ref:</strong> ${quoteRef}</div>
                            <div><strong>Date generated:</strong> ${dateStr}</div>
                            <div><strong>Validity:</strong> 30 Days</div>
                        </div>
                    </div>
                </div>

                <div class="client-box">
                    <h3>Client Profile Details</h3>
                    <div class="details-grid">
                        <div class="detail-row">
                            <span>Client Name: </span>${name || "N/A"}
                        </div>
                        <div class="detail-row">
                            <span>Company Name: </span>${company || "N/A"}
                        </div>
                        <div class="detail-row">
                            <span>Email Address: </span>${email || "N/A"}
                        </div>
                        <div class="detail-row">
                            <span>Phone Number: </span>${phone || "N/A"}
                        </div>
                    </div>
                </div>

                <table class="specs-table">
                    <thead>
                        <tr>
                            <th>Industry Sector</th>
                            <th>Workers Needed</th>
                            <th>Duration</th>
                            <th>Est. Hours / Worker</th>
                            <th>Hourly Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${INDUSTRY_LABELS[industry]}</td>
                            <td>${staffCount} personnel</td>
                            <td>${duration} Weeks</td>
                            <td>${duration * 40} Hours</td>
                            <td>$${hourlyRate.toFixed(2)} / Hr</td>
                        </tr>
                    </tbody>
                </table>

                <div class="total-section">
                    <div class="total-box">
                        <div>
                            <span>Total Estimated Hours:</span>
                            <span>${totalJobHours.toLocaleString()} Hrs</span>
                        </div>
                        <div>
                            <span>Workforce Compliance Fee:</span>
                            <span>Included</span>
                        </div>
                        <div>
                            <span>Liability Insurance:</span>
                            <span>Included</span>
                        </div>
                        <div class="grand-total">
                            <span>Estimated Total:</span>
                            <span>$${estimatedInvoice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                </div>

                <div class="terms-box">
                    <h4>Terms & Project Criteria:</h4>
                    <ul>
                        <li>The values detailed above represent budgetary guides. Standard agreements are subject to contract adjustments.</li>
                        <li>Includes full compliance coverage: social security, ETF/EPF, local workers compensation, and health checks.</li>
                        <li><strong>48-Hour Replacement Policy:</strong> If any worker supplied by UWON does not meet your site requirements, replacement will be supplied within 48 hours without administrative overhead.</li>
                        <li>Workforce complies with national occupational health & safety regulations and is supplied with standard safety PPE.</li>
                    </ul>
                </div>

                <div class="footer-note">
                    Uwon Enterprises Manpower Supplier &bull; 45, Galle Road, Colombo 03, Sri Lanka &bull; info@uwonenterprises.lk
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
                            <button
                                type="button"
                                class="btn btn-outline btn-block"
                                onClick={handleDownloadProposal}
                                style={{ marginTop: '16px' }}
                                disabled={!industry}
                            >
                                <i class="fa-solid fa-file-pdf"></i> Download PDF Proposal
                            </button>
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
 