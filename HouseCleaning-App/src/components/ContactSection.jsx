import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactSection = () => {
    return (
        <section id="contact" className="py-5">
            <Container>
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h6 className="text-primary fw-bold text-uppercase">Contact Us</h6>
                        <h2 className="fw-bold mb-3">Get A Free Quote</h2>
                        <p className="text-muted">Fill out the form below and we will get back to you shortly.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={8} className="bg-white p-5 rounded-4 shadow-lg">
                        <Form>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" className="bg-light border-0 py-3" />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter phone number" className="bg-light border-0 py-3" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="mb-3">
                                <Form.Group controlId="formService">
                                    <Form.Label>Service Required</Form.Label>
                                    <Form.Select className="bg-light border-0 py-3">
                                        <option>Select a service</option>
                                        <option>Full Home Deep Cleaning</option>
                                        <option>Kitchen Deep Cleaning</option>
                                        <option>Bathroom Cleaning</option>
                                        <option>Sofa Cleaning</option>
                                        <option>Other</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="mb-4">
                                <Form.Group controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Your message or requirements" className="bg-light border-0" />
                                </Form.Group>
                            </div>
                            <div className="text-center">
                                <Button variant="primary" size="lg" className="px-5 rounded-pill" type="submit">
                                    Send Message
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
