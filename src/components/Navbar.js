import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationPane() {
  return (
    <>      
    <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
          </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="gallery">Gallery</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default NavigationPane