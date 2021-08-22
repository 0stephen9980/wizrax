import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css";

export default function header() {
  return (
    <Navbar
      className="navHeight"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container fluid>
        <Navbar.Brand href="#home">WazirxClone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="allignNavLink" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">EXCHANGE</Nav.Link>
            {/* <Nav.Divider /> */}
            <Nav.Link className="jumbotron" href="#pricing">
              P2P
            </Nav.Link>
            <Nav.Link href="#deets">LOG IN</Nav.Link>
            <Nav.Link href="#memes">SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
