import React from 'react';
import CarouselHero from '../CarouselHero';
import About from '../About';

import Choices from '../Choices'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
            <CarouselHero />
            <Choices />
            <About/>
            

            <Link to="/exploratory">What Is it</Link>

            </React.Fragment>
        );
   }
}
export default Home;