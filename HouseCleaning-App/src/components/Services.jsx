import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const services = [
    {
        title: "Full Home Deep Cleaning",
        description: "Complete cleaning of your home including dusting, mopping, and sanitizing all corners.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Kitchen Deep Cleaning",
        description: "Remove tough stains, grease, and grime from your kitchen cabinets and appliances.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Bathroom Cleaning",
        description: "Thorough cleaning and disinfecting of toilets, sinks, tiles, and fittings.",
        image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" // Placeholder, maybe change
    },
    {
        title: "Sofa/Carpet Shampooing",
        description: "Revitalize your upholstery with our expert shampooing services.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Water Tank Cleaning",
        description: "Hygienic cleaning of overhead and underground water tanks.",
        image: "https://plus.unsplash.com/premium_photo-1661962360790-2c7b50f681a9?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Move-In/Out Cleaning",
        description: "Make your new home ready or leave the old one spotless.",
        image: "https://images.unsplash.com/photo-1527513915038-526379364998?auto=format&fit=crop&w=600&q=80"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-5 bg-light">
            <Container>
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h6 className="text-primary fw-bold text-uppercase">Our Services</h6>
                        <h2 className="fw-bold mb-3">Professional Cleaning Solutions</h2>
                        <div className="mx-auto bg-primary mb-4" style={{ height: '3px', width: '80px' }}></div>
                    </Col>
                </Row>
                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col md={6} lg={4} key={index}>
                            <Card className="h-100 border-0 shadow-sm overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <Card.Img variant="top" src={service.image} className="w-100 h-100 object-fit-cover" />
                                </div>
                                <Card.Body className="p-4">
                                    <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                                    <Card.Text className="text-muted mb-4">
                                        {service.description}
                                    </Card.Text>
                                    <Button variant="outline-primary" className="w-100 rounded-pill" href="#contact">Book Service</Button>
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
