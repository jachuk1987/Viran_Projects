import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hero from '../assets/images/hero.png';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <Container className="hero-container">
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <small className="hero-tag">HOMECARE SOLUTIONS</small>

              <h1 className="hero-title">
                Best <span>services</span> for better life
              </h1>

              <p className="hero-text">
                Homecare Solutions provides world-class Home cleaning services
                with a flexible pricing option. We have a group of certified
                Home cleaners in Bangalore and our main aim is to ensure your
                convenience.
              </p>

              <Button className="hero-btn">Book Now</Button>
            </Col>
          </Row>
        </Container>

        {/* Sticky Enquiry */}
        <a href="#contact" className="enquiry-btn">Enquiry Now</a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          WhatsApp
        </a>
      </section>
    </>
  );
};

export default Hero;
