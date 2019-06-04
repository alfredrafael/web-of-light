import React from "react";
import "./About.css";
import {Media} from "reactstrap";
import Slide from 'react-reveal/Slide';


class About extends React.Component {
  render() {
    return (
      <div className="aboutComponent">
          <Media body>
          
           <Media heading>
           
             <h1 className="headerText introHeaderMobile">
              About the Intellectual <br/><span style={{textDecoration: 'line-through'}}>Dark</span> Web of Light 
             </h1>
           </Media>
           <Slide bottom>

           <p className='generalText generalTextMobile'>          
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
           dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
           anim id est laborum.
           </p>
           </Slide>
        </Media>
      </div>
    );
  }
}
export default About;