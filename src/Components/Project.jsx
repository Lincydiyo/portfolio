import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import library from "../ImageFolder/library.png";
import portfolio from "../ImageFolder/portfolio.jpg";
import "../CssFolder/Project.css";
import restaurent from "../ImageFolder/restaurent.png";

function Project() {
  return (
    <>
      <div className="ProjectDiv">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard">
                <Card.Img variant="top" src={library} />
                <Card.Body className="CardBody">
                  <Card.Title>Library Management System</Card.Title>
                  <button type="button">
                    <a
                      href="  https://lincydiyo.github.io/Library-Management-System/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Here
                    </a>
                  </button>
                </Card.Body>
              </Card>
            </Col>
                <Col xs={12} md={6} lg={3}>
              <Card className="MainCard">
                <Card.Img variant="top" src={restaurent} />
                <Card.Body className="CardBody">
                  <Card.Title>Restaurent Website</Card.Title>
                  <button type="button">
                    <a
                      href="https://lincydiyo.github.io/Restaurent-Website/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Here
                    </a>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard">
                <Card.Img variant="top" src={portfolio} />
                <Card.Body className="CardBody">
                  <Card.Title>Portfolio</Card.Title>
                  <button type="button">
                    <a
                      href="https://lincydiyo.github.io/portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Here
                    </a>
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard">
                <Card.Img variant="top" src={library} />
                <Card.Body className="CardBody">
                  <Card.Title>Library Management System</Card.Title>
                  <button type="button">
                    <a
                      href="  https://lincydiyo.github.io/Library-Management-System/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Here
                    </a>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Project;
