import "../CssFolder/About.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <>
      <div className="AboutDiv">
        <section className="AboutSection">
          <h2>Career overview</h2>
          <h5>
            Fresher MERN STACK Developer skilled in JavaScript, React, Express
            and MongoDB, Passionate about building dynamic web application and
            eager to grow in a challenging development role. I am currently
            seeking opportunities to leverage my expertise in a professional
            setting as I complete my internship in Srishti Innovative.
          </h5>
        </section>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard">
                <Card.Body className="CardBody" style={{ height: "400px" }}>
                  <Card.Title>LANGUAGES KNOWN</Card.Title>
                  <button type="button">English</button>
                  <button type="button">Tamil</button>
                  <button type="button">Malayalam</button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard" style={{ height: "400px" }}>
                <Card.Body className="CardBody">
                  <Card.Title>TECHNICAL SKILLS</Card.Title>
                  <button type="button">MERN Stack</button>
                  <button type="button">FrontEnd Developer</button>
                  <button type="button">BackEnd Developer</button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard" style={{ height: "400px" }}>
                <Card.Body className="CardBody">
                  <Card.Title>HOBBIES</Card.Title>
                  <button type="button">Watch Tech Videos</button>
                  <button type="button">Learn New Skills</button>
                  <button type="button">Solve Quizzes</button>
                  <button type="button">Gardening</button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard" style={{ height: "400px" }}>
                <Card.Body className="CardBody">
                  <Card.Title> QUALIFICATION</Card.Title>
                  <button type="button">SSLC</button>
                  <button type="button">HSC</button>
                  <button type="button">BSC</button>
                  <button type="button">MERNStack Internship</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
