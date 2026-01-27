import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold text-primary fs-3">
                    <span className="text-secondary">Home</span>Care<span className="text-secondary">Solutions</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#home" className="fw-semibold mx-2">Home</Nav.Link>
                        <Nav.Link href="#about" className="fw-semibold mx-2">About Us</Nav.Link>
                        <Nav.Link href="#services" className="fw-semibold mx-2">Our Services</Nav.Link>
                        <Nav.Link href="#contact" className="fw-semibold mx-2">
                            <Button variant="primary" className="rounded-pill px-4">Contact Us</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
