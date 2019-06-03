import React from 'react';
import CarouselHero from '../CarouselHero';
import WhatIs from '../WhatIs'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
            <CarouselHero />
            <WhatIs />
            

            <Link to="/whatIs">What Is it</Link>

            </React.Fragment>
        );
   }
}
export default Home;