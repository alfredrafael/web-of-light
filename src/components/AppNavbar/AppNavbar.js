import React from "react";
import './AppNavbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import darkWebLogo from "../../assets/intellectualdarkweb_png.png";
import { findDOMNode } from 'react-dom';
import $ from 'jquery';


class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount = () => {
    window.onscroll = () => {
      var scrollStatus = $(window).scrollTop();
      if (scrollStatus > 800) {
        $(".navbarStyles").css("background" , "rgba(19, 22, 62, 0.31)"); // changes to...
        $(".navbarStyles").css("transition" , "2s");
        $(".navbarBrand").css("visibility" , "visible");
        $(".navbarBrand").css("transition" , "2s");
      }
      else {
        $(".navbarStyles").css("background" , "rgba(186, 177, 177, 0.31)"); // not back to "tranparent" Mydefault...
      }
    }

    var widthStatus = $(window).width();
    if (widthStatus < 500) {
      $(".navbarBrand").css("marginLeft" , "16%"); // changes to...
      $(".navItem").css("background", "black");
      $(".navItem").css("z-index", "9999"); 
   }
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="navbarContainer">
      

        <Navbar
          expand="md"
          id="nav"
          class="nav"
          style={{
            zIndex: "9",
            position: "fixed",
            background: "transparent",
            color: "grey"
          }}
          className="navbarStyles"
        >
        
          <NavbarBrand
            href="/"
            style={{ color: "white", textShadow: "1px 1px 0 rgba(0,0,0,.75)", visibility: "hidden"}}
            className='navbarBrand'
            
          >
            <img
              src={darkWebLogo}
              style={{ maxWidth: "4%", color: "grey" }}
              alt="page logo"
              className="darkWebLogo"
            />{" "}
            The Intellectual <span>Dark</span>Web
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggle}
            style={{ background: "rgba(20, 26, 72, 0.44)", marginTop: '-12%'}}
          >
            <i style={{ color: "white"}} className="fas fa-bars" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='navItem' style={{ zIndex: "9", color: "grey" }}>
                <NavLink
                  style={{
                    color: "white",
                    fontSize: '125%',
                    fontFamily: 'Lato',
                    textShadow: "1px 1px 0 rgba(0,0,0,.75)"
                  }}
                  href="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className='navItem' style={{ zIndex: "9", color: "grey" }}>
                <NavLink
                  style={{
                    color: "white",
                    fontSize: '125%',
                    fontFamily: 'Lato',
                    textShadow: "1px 1px 0 rgba(0,0,0,.75)"
                  }}
                  href="/exploratory/"
                >
                  Exploratory
                </NavLink>
              </NavItem>
              <NavItem className='navItem'>
                <NavLink
                style={{
                  color: "white",
                  fontSize: '125%',
                  fontFamily: 'Lato',
                  textShadow: "1px 1px 0 rgba(0,0,0,.75)"
                }}
                  href="https://github.com/reactstrap/reactstrap"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                style={{ zIndex: "9", overflowY: "visible" }}
              >
                <DropdownToggle
                  nav
                  caret
                  style={{
                    color: "white",
                    fontSize: '125%',
                    fontFamily: 'Lato',
                    textShadow: "1px 1px 0 rgba(0,0,0,.75)"
                  }}
                  className='navItem'
                >
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          
         
        </Navbar>
        </div>
    );
  }
}

export default AppNavbar;
