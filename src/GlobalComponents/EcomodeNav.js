import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '../Stylesheets/Navbar.css';
import { Route } from 'react-router-dom';
// Importing all the pages for routing
import App from '../App/App'
import Home from '../Home/Home';
import About from '../About/About';

export default class EcomodeNav extends React.Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/Home">Project Ecomode</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/About">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Signup">Sign Up</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    More Information
                  </DropdownToggle>
                  <DropdownMenu right>
                    <NavItem>
                      <NavLink href="/Strategy">Business Strategy</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/Tickets">Buying Tickets</NavLink>
                    </NavItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
