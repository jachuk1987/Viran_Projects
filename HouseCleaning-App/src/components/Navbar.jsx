import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo2 from '../assets/images/logo2.png';

const NavigationBar = () => {
    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <Container className="top-content">
                    <div className="brand">
                        <div className="logo-box">
                            <img src={logo2} alt="House Cleaning Solutions Logo" />
                        </div>
                        <div className="brand-text">
                            <h4>House Cleaning Solutions</h4>
                            <small>Best Services For Better Life</small>
                        </div>
                    </div>

                    <div className="contact-info d-none d-lg-flex">
                        <a
                            href="mailto:narasimha87narasimha@gmail.com"
                            className="contact-btn email"
                        >
                            <i className="fa-solid fa-envelope"></i>
                            <span>Email</span>
                        </a>

                        <a
                            href="tel:7338446560"
                            className="contact-btn call"
                        >
                            <i className="fa-solid fa-phone"></i>
                            <span>Call</span>
                        </a>

                        <a
                            href="https://wa.me/918073326822"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn whatsapp"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>
                    </div>

                </Container>
            </div>

            {/* Main Header / Navigation */}
            <header className="main-header">
                <Container className="nav-wrapper">
                    <Navbar expand="lg" variant="dark" className="w-100 p-0">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="main-nav me-auto mb-2 mb-lg-0">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#blog">Blog</Nav.Link>
                                <Nav.Link href="#services">Services +</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#location">Location +</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        {/* Social Icons - Hidden on mobile toggle for simpler layout or kept visible */}
                        <div className="social-icons d-none d-lg-flex">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                        </div>
                    </Navbar>
                </Container>
            </header>
        </>
    );
};

export default NavigationBar;
