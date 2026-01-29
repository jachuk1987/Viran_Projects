import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import hero from '../assets/images/hero.png';

const Hero = () => {
    return (
        <section id="home" className="py-5 bg-light" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <h1 className="display-4 fw-bold mb-3 text-dark">
                            Professional <span className="text-primary">House Cleaning</span> Solutions
                        </h1>
                        <p className="lead text-secondary mb-4">
                            Experience the joy of a spotless home. We provide top-tier cleaning solutions tailored to your needs. Fast, reliable, and thorough.
                        </p>
                        <div className="d-flex gap-3">
                            <Button variant="primary" size="lg" className="rounded-pill px-4" href="#contact">Book Now</Button>
                            <Button variant="outline-dark" size="lg" className="rounded-pill px-4" href="#services">Our Services</Button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Image
                            src={hero}
                            fluid
                            className="rounded-4 shadow-lg"
                            alt="Cleaning Service"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
