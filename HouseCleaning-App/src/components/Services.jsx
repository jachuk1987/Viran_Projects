import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  HouseDoor,
  Building,
  Tools,
  Brush,
  Droplet,
  ShieldCheck,
} from 'react-bootstrap-icons';

const services = [
  {
    icon: <HouseDoor />,
    title: 'Home Cleaning',
    text: 'Complete home cleaning solutions for apartments and independent houses.',
  },
  {
    icon: <Building />,
    title: 'Office Cleaning',
    text: 'Professional office cleaning for a hygienic and productive workspace.',
  },
  {
    icon: <Brush />,
    title: 'Deep Cleaning',
    text: 'Intensive deep cleaning for kitchens, bathrooms, and living areas.',
  },
  {
    icon: <Tools />,
    title: 'Post Construction',
    text: 'Dust and debris removal after construction or renovation work.',
  },
  {
    icon: <Droplet />,
    title: 'Bathroom Cleaning',
    text: 'Sanitized bathroom cleaning with safe and effective products.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Sofa & Carpet',
    text: 'Professional sofa and carpet shampooing services.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <Container>
        <div className="section-header text-center">
          <h2>Our Cleaning Services</h2>
          <p>
            Reliable, affordable, and professional cleaning solutions tailored
            to your needs.
          </p>
        </div>

        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="service-card h-100">
                <div className="service-icon">{service.icon}</div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
