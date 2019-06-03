import React, { Component } from "react";
import "./App.css";
import Exploratory from "./components/Exploratory";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppNavbar from "./components/AppNavbar/";
import Home from './components/Home';

import CarouselHero from './components/CarouselHero';



class App extends Component {
  render() {
    return (
      <Router>
      <AppNavbar/>
      

      <Route exact path="/" component={Home}/>

           
      <Route path="/exploratory" component={Exploratory} />
           
      </Router>
    );
  }
}

export default App;
