import "../CssFolder/Skills.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Html from "../ImageFolder/Html.webp";
import Css from "../ImageFolder/Css.png";
import Bootstrap from "../ImageFolder/Bootstrap.png";
import Javascript from "../ImageFolder/Javascript.png";
import React from "../ImageFolder/React.png";
import Node from "../ImageFolder/Node.png";
import Express from "../ImageFolder/Express.png";
import MongoDB from "../ImageFolder/MongoDB.webp";

function Skills() {
  return (
    <>
      <div className="SkillsDiv">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Card >
                <Card.Img variant="top" src={Html} width={50} height={200}/>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card >
                <Card.Img variant="top" src={Css} width={50} height={200}/>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card >
                <Card.Img variant="top" src={Bootstrap} width={50} height={200}/>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card >
                <Card.Img variant="top" src={Javascript} width={50} height={200}/>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card >
                <Card.Img variant="top" src={React} width={50} height={200}/>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card >
                <Card.Img variant="top" src={Node} width={50} height={200}/>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card >
                <Card.Img variant="top" src={Express} width={50} height={200}/>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card >
                <Card.Img variant="top" src={MongoDB} width={50} height={200}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Skills;
