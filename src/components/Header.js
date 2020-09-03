import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <header className="header navbar-light bg-light">
      <Navbar className="container" collapseOnSelect expand="lg">
        <Navbar.Brand href="#hello">My résumé</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#hello">HELLO</Nav.Link>
            <Nav.Link href="#skill">SKILL</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
