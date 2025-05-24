import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CssFolder/NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="MainNav">
        <Container>
          <Navbar.Brand href="#home">
            <i>Lincy D</i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="MiniNav">
              <Nav.Link href="/">
                <i>Home</i>
              </Nav.Link>
              <Nav.Link href="/skills">
                <i>Skills</i>
              </Nav.Link>
              <Nav.Link href="/education">
                <i>Education</i>
              </Nav.Link>
              <Nav.Link href="/project">
                <i>Project</i>
              </Nav.Link>
              <Nav.Link href="/about">
                <i>About</i>
              </Nav.Link>
              <Nav.Link href="/contact">
                <i>Contact</i>
              </Nav.Link>
              <Nav.Link href="resume">
                <i>Resume</i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
