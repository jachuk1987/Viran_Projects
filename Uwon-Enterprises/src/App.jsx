import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ClientEstimator from './components/ClientEstimator';
import JobDirectory from './components/JobDirectory';
import AdminDashboard from './components/AdminDashboard';
import ContactPanel from './components/ContactPanel';
import Footer from './components/Footer';
import Toast from './components/Toast';

// --- Default Data Definitions ---
const DEFAULT_CLIENT_REQUESTS = [
    {
        id: "req-1",
        name: "Samantha Perera",
        company: "Skyline Builders PLC",
        email: "samantha@skyline.lk",
        phone: "+94 77 123 4567",
        industry: "Construction",
        staffCount: 15,
        duration: 12,
        requirements: "Requires 12 skilled mason workers and 3 supervisors. Safety induction starts June 15.",
        estimatedValue: 201600,
        status: "pending",
        date: "2026-06-01"
    },
    {
        id: "req-2",
        name: "David Silva",
        company: "Apex Distribution Services",
        email: "d.silva@apexlogistics.lk",
        phone: "+94 71 888 9900",
        industry: "Logistics",
        staffCount: 8,
        duration: 4,
        requirements: "Forklift certificate required. Rotating shift schedules (Morning & Night).",
        estimatedValue: 32000,
        status: "contacted",
        date: "2026-06-02"
    }
];

const DEFAULT_CANDIDATE_APPLICATIONS = [
    {
        id: "app-1",
        jobId: "job-2",
        jobName: "Certified Forklift Operator (Reach/Counterbalance)",
        name: "Nimal Wickramasinghe",
        email: "nimal.wick@outlook.com",
        phone: "+94 72 445 1290",
        experience: "3-5 Years",
        skills: "Reach Truck License, CSCS Green Card, Warehouse Safety Vetted",
        message: "Can start immediately. Have 4 years experience operating high bay forklifts in retail warehouses.",
        status: "shortlisted",
        date: "2026-06-02"
    },
    {
        id: "app-2",
        jobId: "job-3",
        jobName: "Kitchen Porter & Food Prep Assistant",
        name: "Fathima Ruzna",
        email: "fathima.ru@gmail.com",
        phone: "+94 75 901 2345",
        experience: "1-3 Years",
        skills: "Food Safety Level 1, HACCP compliance, Culinary Prep",
        message: "Looking for part-time night shifts during weekdays.",
        status: "pending",
        date: "2026-06-03"
    }
];

export default function App() {
    const [currentTab, setCurrentTab] = useState('home-tab');
    const [theme, setTheme] = useState('dark');
    
    // Database states
    const [clientRequests, setClientRequests] = useState([]);
    const [candidateApplications, setCandidateApplications] = useState([]);
    
    // Est. sector select state
    const [redirectIndustry, setRedirectIndustry] = useState('');

    // Toast Alert states
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');
    const [isToastVisible, setIsToastVisible] = useState(false);
    const [toastTimeoutId, setToastTimeoutId] = useState(null);

    // Load initial values on start
    useEffect(() => {
        // Theme config loading
        const savedTheme = localStorage.getItem("uwon_theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);

        // Database loading
        if (!localStorage.getItem("uwon_client_requests")) {
            localStorage.setItem("uwon_client_requests", JSON.stringify(DEFAULT_CLIENT_REQUESTS));
        }
        if (!localStorage.getItem("uwon_job_applications")) {
            localStorage.setItem("uwon_job_applications", JSON.stringify(DEFAULT_CANDIDATE_APPLICATIONS));
        }

        setClientRequests(JSON.parse(localStorage.getItem("uwon_client_requests")));
        setCandidateApplications(JSON.parse(localStorage.getItem("uwon_job_applications")));
    }, []);

    // Theme toggler
    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("uwon_theme", nextTheme);
    };

    // Toast alert triggers
    const triggerToast = (message, type = 'success') => {
        if (toastTimeoutId) {
            clearTimeout(toastTimeoutId);
        }

        setToastMessage(message);
        setToastType(type);
        setIsToastVisible(true);

        const id = setTimeout(() => {
            setIsToastVisible(false);
        }, 4000);
        setToastTimeoutId(id);
    };

    // Router Tab switcher
    const switchTab = (tabId) => {
        setCurrentTab(tabId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Card links in Services to Client wizard
    const openStaffingWizard = (industryCode) => {
        setRedirectIndustry(industryCode);
        switchTab('clients-tab');
    };

    // Database Actions: Add Inquiries
    const addClientRequest = (newRequest) => {
        const updated = [newRequest, ...clientRequests];
        setClientRequests(updated);
        localStorage.setItem("uwon_client_requests", JSON.stringify(updated));
        
        triggerToast("Inquiry submitted! Check the Agency Panel for updates.", "success");
        setRedirectIndustry(''); // Clear any wizard redirects
        
        // Go to Admin Dashboard immediately to view
        setTimeout(() => switchTab("dashboard-tab"), 400);
    };

    // Database Actions: Apply jobs
    const addJobApplication = (newApp) => {
        const updated = [newApp, ...candidateApplications];
        setCandidateApplications(updated);
        localStorage.setItem("uwon_job_applications", JSON.stringify(updated));

        triggerToast("Application submitted successfully!", "success");

        // Go to Admin Dashboard to view candidate list
        setTimeout(() => {
            switchTab("dashboard-tab");
        }, 400);
    };

    // Database Actions: Update client status
    const updateClientStatus = (id, newStatus) => {
        const updated = clientRequests.map(req => {
            if (req.id === id) {
                return { ...req, status: newStatus };
            }
            return req;
        });
        setClientRequests(updated);
        localStorage.setItem("uwon_client_requests", JSON.stringify(updated));
        triggerToast("Client request status updated!", "success");
    };

    // Database Actions: Update candidate status
    const updateCandidateStatus = (id, newStatus) => {
        const updated = candidateApplications.map(app => {
            if (app.id === id) {
                return { ...app, status: newStatus };
            }
            return app;
        });
        setCandidateApplications(updated);
        localStorage.setItem("uwon_job_applications", JSON.stringify(updated));
        triggerToast("Candidate application status updated!", "success");
    };

    // Database Actions: Reset dummy databases
    const resetDatabase = () => {
        setClientRequests(DEFAULT_CLIENT_REQUESTS);
        setCandidateApplications(DEFAULT_CANDIDATE_APPLICATIONS);
        localStorage.setItem("uwon_client_requests", JSON.stringify(DEFAULT_CLIENT_REQUESTS));
        localStorage.setItem("uwon_job_applications", JSON.stringify(DEFAULT_CANDIDATE_APPLICATIONS));
        triggerToast("Dummy data restored to database!", "success");
    };

    return (
        <div className="app-root-layout">
            <Toast 
                message={toastMessage} 
                type={toastType} 
                isVisible={isToastVisible} 
            />

            <Header 
                currentTab={currentTab} 
                switchTab={switchTab} 
                theme={theme} 
                toggleTheme={toggleTheme} 
            />

            <main className="main-content">
                {currentTab === 'home-tab' && (
                    <div className="tab-panel active">
                        <Hero switchTab={switchTab} />
                    </div>
                )}
                {currentTab === 'services-tab' && (
                    <div className="tab-panel active">
                        <Services openStaffingWizard={openStaffingWizard} />
                    </div>
                )}
                {currentTab === 'clients-tab' && (
                    <div className="tab-panel active">
                        <ClientEstimator 
                            addClientRequest={addClientRequest} 
                            defaultIndustry={redirectIndustry} 
                        />
                    </div>
                )}
                {currentTab === 'candidates-tab' && (
                    <div className="tab-panel active">
                        <JobDirectory addJobApplication={addJobApplication} />
                    </div>
                )}
                {currentTab === 'dashboard-tab' && (
                    <div className="tab-panel active">
                        <AdminDashboard 
                            clientRequests={clientRequests} 
                            candidateApplications={candidateApplications}
                            updateClientStatus={updateClientStatus}
                            updateCandidateStatus={updateCandidateStatus}
                            resetDatabase={resetDatabase}
                        />
                    </div>
                )}
                {currentTab === 'contact-tab' && (
                    <div className="tab-panel active">
                        <ContactPanel showToast={triggerToast} />
                    </div>
                )}
            </main>

            <Footer switchTab={switchTab} />

            {/* Floating WhatsApp Contact Button */}
            <a 
                href="https://wa.me/919885058859" 
                className="whatsapp-float" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
    );
}
