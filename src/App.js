import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row } from "reactstrap";
import Exploratory from "./components/Exploratory";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: 1rem;
  margin: 1rem 2rem;
  font-size: 1rem;
  font-family: "Colfax Regular", "Helvetica Neue", HelveticaNeue, Helvetica,
    sans-serif;
  background-color: #0076fe;
  color: #fff;
  cursor: pointer;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Row style={{ background: "blue" }}>
          <Container style={{ background: "rgb(123, 123, 228)" }}>
            
            <img src={logo} className="App-logo" alt="logo" />
           
            This is <strong>App.js</strong> &nbsp;<i class="fas fa-home" style={{ color: "white" }} /><br />
           
            If this background is blue, layed out as a row and a container, your <strong>"reactstrap"</strong> is working. <br />
           
            If you see a home icon on this component, your <strong>"fontAwesome"</strong> is working" <br />
         
            If you change the url to /extra, or click <Link to="/extra"> here </Link> it works, your <strong>"react-router"</strong>is working <br />
            
            If <Button>this</Button> looks like a button, then your "styled components" is working <br/>

            <Route path="/exploratory" component={Exploratory} />
          
          </Container>
        </Row>
      </Router>
    );
  }
}

export default App;
