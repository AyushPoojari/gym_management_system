import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './images/logo.png'

function NavigationPane() {
  return (
    <>      
    <Navbar bg="light">
        <Container>          
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="gallery">Gallery</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default NavigationPane