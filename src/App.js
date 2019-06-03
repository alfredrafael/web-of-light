import React, { Component } from "react";
import "./App.css";
import Exploratory from "./components/Exploratory";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppNavbar from "./components/AppNavbar/";


class App extends Component {
  render() {
    return (
      <Router>
      <AppNavbar/>
          <React.Fragment style={{ background: "rgb(123, 123, 228)" }}>
           
            <Route path="/exploratory" component={Exploratory} />
           
          </React.Fragment>
      </Router>
    );
  }
}

export default App;
