import React from 'react';

export default function Footer({ switchTab }) {
    return (
        <footer class="main-footer">
            <div class="container footer-grid">
                <div class="footer-brand">
                    <div class="logo-area">
                        <div class="logo-icon">
                            <i class="fa-solid fa-people-carry-box"></i>
                        </div>
                        <span class="logo-text text-white">UWON <span class="accent-text">Enterprises</span></span>
                    </div>
                    <p class="footer-desc">Premium workforce supply & staffing solutions built on integrity, competence, and reliability. Empowering teams, powering businesses.</p>
                    <div class="social-icons">
                        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h4>For Clients</h4>
                    <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); switchTab('services-tab'); }}>Sectors Available</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); switchTab('clients-tab'); }}>Staffing Request Form</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); switchTab('clients-tab'); }}>Pricing Estimator</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); switchTab('contact-tab'); }}>Support Hotline</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>For Candidates</h4>
                    <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); switchTab('candidates-tab'); }}>Browse Job Openings</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); switchTab('candidates-tab'); }}>Submit Profile</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); switchTab('contact-tab'); }}>Careers Advice</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); switchTab('contact-tab'); }}>Interview FAQs</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Legal & Safety</h4>
                    <ul>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Workplace Insurance Policies</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Compliance Certification</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container footer-bottom-flex">
                    <p>&copy; 2026 Uwon Enterprises. All rights reserved. Registered Manpower Supplier.</p>
                    <p>Designed By Viranapps</p>
                </div>
            </div>
        </footer>
    );
}
