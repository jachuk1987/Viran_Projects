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
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">
                Professional <span>House Cleaning</span> Solutions
              </h1>

              <p className="hero-text">
                Experience the joy of a spotless home. We provide top-tier
                cleaning solutions tailored to your needs. Fast, reliable, and
                thorough.
              </p>

              <div className="hero-buttons">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-pill px-4"
                  href="#contact"
                >
                  Book Now
                </Button>

                <Button
                  variant="outline-primary"
                  size="lg"
                  className="rounded-pill px-4"
                  href="#services"
                >
                  Our Services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sticky Enquiry Button */}
      <a href="#contact" className="enquiry-btn">
        Enquiry Now
      </a>
    </>
  );
};

export default Hero;
