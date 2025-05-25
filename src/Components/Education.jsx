import "../CssFolder/Education.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import School from "../ImageFolder/School.jpg";
import Highschool from "../ImageFolder/Highschool.jpg";
import College from "../ImageFolder/College.jpg";

function Education() {
  return (
    <>
      <div className="EducationDiv">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Card  className="MainCard">
                <Card.Img variant="top" src={School} />
                <Card.Body className="CardBody">
                  <Card.Title>SSLC.....(2015-2016)</Card.Title>
                  <Card.Text>
                    St.Joseph High School Karunyapuram Poothurai,
                    Kanyakumari.dist || Achieved (91.2%)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card  className="MainCard">
                <Card.Img variant="top" src={Highschool} />
                <Card.Body className="CardBody">
                  <Card.Title>HSC.....(2016-2018)</Card.Title>
                  <Card.Text>
                    Pius Xll Higher Secondary School Thoothoor, Kanyakumari.dist
                    || Achieved (70.17%)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard">
                <Card.Img variant="top" src={College} />
                <Card.Body className="CardBody">
                  <Card.Title>BSC.....(2018-2021)</Card.Title>
                  <Card.Text>
                    St.Jude's Art and Science College, Thoothoor,
                    Kanyakumari.dist | | Achieved (8.00 CGPA)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="MainCard">
                <Card.Img variant="top" src={College} />
                <Card.Body className="CardBody">
                  <Card.Title>  MERN Stack.....(2024-2025)</Card.Title>
                  <Card.Text>
                  
                  Srishti Innovative, Thiruvananthapuram <br /> Kerala.dist 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Education;
