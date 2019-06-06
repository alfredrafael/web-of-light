import React from "react";
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
      if (scrollStatus > 700) {
        $(".navbarStyles").css("background" , "rgba(19, 22, 62, 0.31)"); // changes to...
        $(".navbarStyles").css("transition" , "2s");
      }
      else {
        $(".navbarStyles").css("background" , "rgba(186, 177, 177, 0.31)"); // back to default...
      }
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
            background: "rgba(186, 177, 177, 0.31)",
            color: "grey"
          }}
          className="navbarStyles"
        >
        
          <NavbarBrand
            href="/"
            style={{ color: "white", textShadow: "1px 1px 0 rgba(0,0,0,.75)" }}
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
            style={{ background: "rgba(20, 26, 72, 0.44)", position: 'absolute', right: '3%' }}
          >
            <i style={{ color: "white"}} className="fas fa-bars" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{ zIndex: "9", color: "grey" }}>
                <NavLink
                  style={{
                    color: "white",
                    textShadow: "1px 1px 0 rgba(0,0,0,.75)"
                  }}
                  href="/components/"
                >
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    color: "white",
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
                    textShadow: "1px 1px 0 rgba(0,0,0,.75)"
                  }}
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
