import React from "react";
import Fade from "react-reveal/Fade";
import "./Choices.css";
import { Card, Button } from "react-bootstrap";
import { Row, Col, Container } from "reactstrap";

const Choices = props => {
  return (
    <div className="choicesContainer">
    <Fade>
      <Row className="myRow">
        <Col md="4" sm="4">
          <Card style={{ width: "22rem" }} className="growEffect card">
            <Card.Img variant="top" src="https://i.imgur.com/cDP6ZnX.jpg" />
            <Card.Body>
              <Card.Title className='cardTitle'>Dark What?</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" sm="4">
          <Card style={{ width: "22rem" }} className="growEffect card">
            <Card.Img variant="top" src="https://i.imgur.com/zDZA91i.jpg" />
            <Card.Body>
              <Card.Title className='cardTitle'>Known Thinkers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" sm="4">
          <Card style={{ width: "22rem" }} className="growEffect card">
            <Card.Img variant="top" src="https://i.imgur.com/iJxqhHv.jpg" />
            <Card.Body>
              <Card.Title className='cardTitle'>Core Concepts</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fade>
    </div>
  );
};

export default Choices;
