import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <section id="about" className="py-5">
            <Container>
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h6 className="text-primary fw-bold text-uppercase">About Us</h6>
                        <h2 className="fw-bold mb-3">Why Choose Home Care Solutions?</h2>
                        <div className="mx-auto bg-primary mb-4" style={{ height: '3px', width: '80px' }}></div>
                        <p className="text-muted lead">
                            We are dedicated to providing the best house cleaning services in the city. Our team of professionals is trained to handle all your cleaning needs with precision and care.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col md={4} className="text-center">
                        <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-sc">
                            <div className="display-5 text-primary mb-3">
                                <i className="bi bi-people-fill"></i>
                            </div>
                            <h4 className="fw-bold">Expert Staff</h4>
                            <p className="text-muted">Our cleaners are vetted, trained, and experienced professionals.</p>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-sc">
                            <div className="display-5 text-primary mb-3">
                                <i className="bi bi-shield-check"></i>
                            </div>
                            <h4 className="fw-bold">Quality Guaranteed</h4>
                            <p className="text-muted">We use high-quality, eco-friendly products for a safe clean.</p>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-sc">
                            <div className="display-5 text-primary mb-3">
                                <i className="bi bi-clock-history"></i>
                            </div>
                            <h4 className="fw-bold">On Time Service</h4>
                            <p className="text-muted">We value your time and ensure punctual service execution.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUs;
