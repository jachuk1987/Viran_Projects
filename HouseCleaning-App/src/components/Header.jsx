import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <Container className="nav-wrapper d-flex justify-content-between align-items-center">

        {/* NAV */}
        <Navbar expand="lg" className="p-0 w-100">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-menu">

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>

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

              <Nav.Link href="/contact">Contact</Nav.Link>

              {/* LOCATION DROPDOWN */}
              <div className="nav-item has-dropdown">
                <span className="nav-link">Location + ▾</span>

                <ul className="dropdown cities">
                  <li className="city">
                    <a href="/">Bangalore</a>
                  </li>
                  <li className="city">
                    <a href="/location">Hyderabad</a>
                  </li>
                </ul>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* SOCIAL ICONS */}
        <div className="social-icons">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-pinterest"></i></a>
        </div>

      </Container>
    </header>
  );
};

export default Header;