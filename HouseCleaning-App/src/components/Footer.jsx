import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row className="gy-4">
                    <Col md={4}>
                        <h5 className="fw-bold mb-3">House Cleaning Solutions</h5>
                        <p className="text-secondary small">
                            Providing top-notch home cleaning services to make your life easier. Reliable, affordable, and trusted by many.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-secondary text-decoration-none hover-white">Home</a></li>
                            <li><a href="#about" className="text-secondary text-decoration-none hover-white">About Us</a></li>
                            <li><a href="#services" className="text-secondary text-decoration-none hover-white">Services</a></li>
                            <li><a href="#contact" className="text-secondary text-decoration-none hover-white">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="fw-bold mb-3">Contact Info</h5>
                        <p className="text-secondary small mb-1">
                            <i className="bi bi-geo-alt me-2"></i> 123 Main Street, City, Country
                        </p>
                        <p className="text-secondary small mb-1">
                            <i className="bi bi-telephone me-2"></i> +91 98765 43210
                        </p>
                        <p className="text-secondary small mb-1">
                            <i className="bi bi-envelope me-2"></i> info@housecleaning.com
                        </p>
                    </Col>
                </Row>
                <hr className="border-secondary" />
                <Row>
                    <Col className="text-center text-secondary small">
                        &copy; {new Date().getFullYear()} House Cleaning Solutions. All Rights Reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
