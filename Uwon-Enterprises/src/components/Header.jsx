import React, { useState } from 'react';
 
export default function Header({ currentTab, switchTab, theme, toggleTheme }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = (tabId) => {
        switchTab(tabId);
        setMobileMenuOpen(false);
    };
 
    return (
        <header className="main-header">
            <div class="header-container">
                <a href="#" class="logo-area" onClick={(e) => { e.preventDefault(); handleLinkClick('home-tab'); }}>
                    <div class="logo-icon">
                        <i class="fa-solid fa-people-carry-box"></i>
                    </div>
                    <span class="logo-text">UWON <span class="accent-text">Enterprises</span></span>
                </a>

                <nav class={`navbar ${mobileMenuOpen ? 'mobile-active' : ''}`} id="navbar">
                    <button
                        class={`nav-link ${currentTab === 'home-tab' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('home-tab')}
                    >
                        Home
                    </button>
                    <button
                        class={`nav-link ${currentTab === 'services-tab' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('services-tab')}
                    >
                        Services
                    </button>
                    <button
                        class={`nav-link ${currentTab === 'clients-tab' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('clients-tab')}
                    >
                        For Clients
                    </button>
                    <button
                        class={`nav-link ${currentTab === 'candidates-tab' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('candidates-tab')}
                    >
                        Find Work
                    </button>
                    <button
                        class={`nav-link ${currentTab === 'dashboard-tab' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('dashboard-tab')}
                    >
                        Agency Panel
                    </button>
                    <button
                        class={`nav-link ${currentTab === 'contact-tab' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('contact-tab')}
                    >
                        Contact
                    </button>
                </nav>

                <div class="header-actions">
                    <button
                        id="theme-toggle-btn"
                        class="theme-btn"
                        aria-label="Toggle Theme"
                        onClick={toggleTheme}
                    >
                        <i class={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    <button class="btn btn-primary" onClick={() => switchTab('clients-tab')}>
                        Request Staff
                    </button>
                    <button
                        class="menu-toggle"
                        id="menu-toggle"
                        aria-label="Toggle navigation menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <i class={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>
        </header>
    );
}
 