import React from "react";
import NavBar from "./NavBar";
import "../CssFolder/Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LincyImage from "../ImageFolder/LincyImage.jpg";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

function Home() {
  return (
    <>
      <NavBar />
      <div className="HomeMainDiv">
        <Container>
          <Row className="align-items-center">
            <Col sm={6} md={7} className="contentColumn">
              <h1>
                Hi👋,
                <br />I am Lincy D
              </h1>

              <h3>Full-stack developer (MERN)</h3>
              <section className="icon">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram style={{ fontSize: "25px" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/lincy-diyo/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin style={{ fontSize: "25px" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/settings/profile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoLogoGithub style={{ fontSize: "25px" }} />
                    </a>
                  </li>
                </ul>
              </section>
            </Col>
            <Col sm={6} md={5}>
              <img src={LincyImage} alt="LincyImage" className="HomeImage" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
