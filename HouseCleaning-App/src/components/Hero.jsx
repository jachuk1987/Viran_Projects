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
              <small className="hero-tag">HOUSE CLEANING SOLUTIONS</small>

              <h1 className="hero-title">
                Professional <span>House Cleaning</span> Solutions
              </h1>

              <p className="hero-text">
                Experience the joy of a spotless home. We provide top-tier cleaning
                solutions tailored to your needs. Fast, reliable, and thorough.
              </p>

              <div className="hero-buttons">
                <Button className="hero-btn">Book Now</Button>
                <Button className="hero-outline-btn">Our Services</Button>
              </div>

            </Col>
          </Row>
        </Container>

        {/* Sticky Enquiry */}
        <a href="#contact" className="enquiry-btn">Enquiry Now</a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918073326822"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <i className="bi bi-whatsapp"></i>
        </a>

      </section>
    </>
  );
};

export default Hero;
