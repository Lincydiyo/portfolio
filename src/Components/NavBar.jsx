import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"; 
import "../CssFolder/NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="MainNav">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <i>Lincy D</i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="MiniNav">
              <Nav.Link as={NavLink} to="/">
                <i>Home</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/skills">
                <i>Skills</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/education">
                <i>Education</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/project">
                <i>Project</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                <i>About</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                <i>Contact</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/resume">
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
