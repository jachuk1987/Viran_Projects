import React from 'react';

export default function Services({ openStaffingWizard }) {
    return (
        <div class="container py-5">
            <div class="section-header text-center">
                <span class="subtitle">Our Sectors of Expertise</span>
                <h2>Staffing Solutions for Diverse Industries</h2>
                <p class="section-desc text-center-margin">We supply labor across multiple categories, fully customized for construction sites, modern hotels, distribution warehouses, corporate settings, and medical centers.</p>
            </div>
            
            <div class="sectors-grid">
                {/* Construction */}
                <div class="sector-card">
                    <div class="sector-image">
                        <i class="fa-solid fa-helmet-safety"></i>
                    </div>
                    <div class="sector-body">
                        <h3>Construction & Civils</h3>
                        <p>General laborers, steel fixers, bricklayers, certified welders, scaffolders, and heavy equipment operators.</p>
                        <ul class="sector-list">
                            <li><i class="fa-solid fa-check"></i> Safety compliance trained</li>
                            <li><i class="fa-solid fa-check"></i> PPE and site cards provided</li>
                            <li><i class="fa-solid fa-check"></i> On-site supervisors available</li>
                        </ul>
                        <button class="btn btn-outline" onClick={() => openStaffingWizard('Construction')}>
                            Request Construction Crew
                        </button>
                    </div>
                </div>

                {/* Hospitality */}
                <div class="sector-card">
                    <div class="sector-image">
                        <i class="fa-solid fa-bell-concierge"></i>
                    </div>
                    <div class="sector-body">
                        <h3>Hospitality & Events</h3>
                        <p>Waitstaff, cooks, kitchen helpers, housekeepers, front-desk agents, and event setup crews.</p>
                        <ul class="sector-list">
                            <li><i class="fa-solid fa-check"></i> Uniformed & customer-centric</li>
                            <li><i class="fa-solid fa-check"></i> Food handler certifications</li>
                            <li><i class="fa-solid fa-check"></i> Flexible part-time/seasonal rosters</li>
                        </ul>
                        <button class="btn btn-outline" onClick={() => openStaffingWizard('Hospitality')}>
                            Request Hospitality Staff
                        </button>
                    </div>
                </div>

                {/* Logistics */}
                <div class="sector-card">
                    <div class="sector-image">
                        <i class="fa-solid fa-truck-ramp-box"></i>
                    </div>
                    <div class="sector-body">
                        <h3>Logistics & Warehousing</h3>
                        <p>Forklift operators, pickers and packers, inventory handlers, loaders, and delivery dispatch drivers.</p>
                        <ul class="sector-list">
                            <li><i class="fa-solid fa-check"></i> Licensed forklift drivers</li>
                            <li><i class="fa-solid fa-check"></i> Shift-flexible schedules</li>
                            <li><i class="fa-solid fa-check"></i> High productivity standards</li>
                        </ul>
                        <button class="btn btn-outline" onClick={() => openStaffingWizard('Logistics')}>
                            Request Logistics Support
                        </button>
                    </div>
                </div>

                {/* Admin & Support */}
                <div class="sector-card">
                    <div class="sector-image">
                        <i class="fa-solid fa-keyboard"></i>
                    </div>
                    <div class="sector-body">
                        <h3>Corporate & Office Admin</h3>
                        <p>Data entry specialists, receptionists, customer service reps, administrative assistants, and mail room coordinators.</p>
                        <ul class="sector-list">
                            <li><i class="fa-solid fa-check"></i> Background and credit checked</li>
                            <li><i class="fa-solid fa-check"></i> Proficient in office suites</li>
                            <li><i class="fa-solid fa-check"></i> Native communication skills</li>
                        </ul>
                        <button class="btn btn-outline" onClick={() => openStaffingWizard('Admin')}>
                            Request Admin Staff
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
