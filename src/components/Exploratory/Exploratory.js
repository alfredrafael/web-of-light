import React from "react";
import "./Exploratory.css";
import { AnimatedBg, Transition } from "scroll-background";
import AppNavbar from "../AppNavbar";

class Exploratory extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* //////////////////////////////////////////////// */}
        <div style={{height: '100vh'}}>
          <AnimatedBg>
           
            <Transition
              height="11.5vh"
              from="#388E3C"
              to="#FFA000"
            >

            <AppNavbar />
            </Transition>
          </AnimatedBg>
        </div>
        {/* //////////////////////////////////////////////// */}
      </div>
    );
  }
}
export default Exploratory;
