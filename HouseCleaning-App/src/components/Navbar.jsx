import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo2 from '../assets/images/logo2.png';

const NavigationBar = () => {
    return (
        <>
            {/* TOP BAR */}
            <div className="top-bar">
                <Container className="top-content">
                    <div className="brand">
                        <div className="logo-box">
                            <img src={logo2} alt="logo" />
                        </div>
                        <div className="brand-text">
                            <h4>House Cleaning Solutions</h4>
                            <small>Best Services For Better Life</small>
                        </div>
                    </div>

                    <div className="contact-info d-none d-lg-flex">
                        <span><i className="bi bi-envelope"></i> narasimha87narasimha@gmail.com</span>
                        <span><i className="bi bi-telephone"></i> 7338446560</span>
                        <span><i className="bi bi-whatsapp"></i> 8073326822</span>
                    </div>
                </Container>
            </div>

            {/* HEADER */}
            <header className="main-header">
                <Container className="nav-wrapper">
                    <Navbar expand="lg" className="w-100 p-0">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="main-nav me-auto">

                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>
                                <Nav.Link href="#">Blog</Nav.Link>

                                {/* SERVICES DROPDOWN */}
                                <div className="nav-item has-dropdown">
                                    <span className="nav-link">Services ▾</span>

                                    <ul className="dropdown cities">

                                        <li className="city">
                                            <span>Bangalore ▸</span>
                                            <ul className="services-list">
                                                <li><a href="#">House Deep Cleaning</a></li>
                                                <li><a href="#">Office Cleaning</a></li>
                                                <li><a href="#">Sofa Carpet Cleaning</a></li>
                                                <li><a href="#">Kitchen Cleaning</a></li>
                                                <li><a href="#">Chimney Cleaning</a></li>
                                                <li><a href="#">Bathroom Cleaning</a></li>
                                                <li><a href="#">Residential Cleaning</a></li>
                                                <li><a href="#">Villa Cleaning</a></li>
                                                <li><a href="#">Apartment Cleaning</a></li>
                                                <li><a href="#">Carpet Cleaning</a></li>
                                            </ul>
                                        </li>

                                        <li className="city">
                                            <span>Hyderabad ▸</span>
                                            <ul className="services-list">
                                                <li><a href="#">House Deep Cleaning</a></li>
                                                <li><a href="#">Office Cleaning</a></li>
                                                <li><a href="#">Sofa Cleaning</a></li>
                                                <li><a href="#">Kitchen Cleaning</a></li>
                                                <li><a href="#">Bathroom Cleaning</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>

                                <Nav.Link href="#">Contact</Nav.Link>

                                {/* LOCATION DROPDOWN */}
                                <div className="nav-item has-dropdown">
                                    <span className="nav-link">Location ▾</span>

                                    <ul className="dropdown cities">
                                        <li className="city"><a href="#">Bangalore</a></li>
                                        <li className="city"><a href="#">Hyderabad</a></li>
                                    </ul>
                                </div>

                            </Nav>
                        </Navbar.Collapse>

                        {/* SOCIAL ICONS */}
                        <div className="social-icons d-none d-lg-flex">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-pinterest"></i></a>
                        </div>
                    </Navbar>
                </Container>
            </header>

            {/* CSS INSIDE SAME FILE */}
            <style>{`

            .top-bar {
                background: #fff;
                padding: 10px 0;
            }

            .top-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .brand {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .logo-box img {
                width: 50px;
            }

            .contact-info span {
                margin-left: 20px;
                font-size: 14px;
            }

            /* HEADER */
            .main-header {
                background: linear-gradient(120deg, #0b66c3 75%, #f9d400 25%);
            }

            .nav-wrapper {
                display: flex;
                align-items: center;
            }

            .main-nav .nav-link {
                padding: 20px 20px;
                color: #fff !important;
                font-weight: 600;
                cursor: pointer;
            }

            .main-nav .nav-link:hover {
                background: #084298;
            }

            /* DROPDOWN */
            .has-dropdown {
                position: relative;
            }

            .dropdown,
            .services-list {
                position: absolute;
                background: #fff;
                list-style: none;
                padding: 0;
                margin: 0;
                opacity: 0;
                visibility: hidden;
                transition: 0.2s;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                border-radius: 6px;
                z-index: 999;
            }

            .dropdown.cities {
                top: 100%;
                left: 0;
                min-width: 180px;
                padding: 10px 0;
            }

            .services-list {
                top: 0;
                left: 100%;
                min-width: 200px;
                padding: 10px;
                display: grid;
                gap: 5px;
            }

            .has-dropdown:hover > .dropdown {
                opacity: 1;
                visibility: visible;
            }

            .city:hover > .services-list {
                opacity: 1;
                visibility: visible;
            }

            .dropdown li a,
            .services-list li a,
            .city span {
                display: block;
                padding: 8px 12px;
                color: #222;
                text-decoration: none;
            }

            .dropdown li a:hover,
            .services-list li a:hover {
                background: #f2f6ff;
                color: #0b66c3;
            }

            /* SOCIAL */
            .social-icons {
                display: flex;
                gap: 15px;
            }

            .social-icons a {
                color: #000;
                font-size: 18px;
            }

            .social-icons a:hover {
                color: #0b66c3;
            }

            `}</style>
        </>
    );
};

export default NavigationBar;