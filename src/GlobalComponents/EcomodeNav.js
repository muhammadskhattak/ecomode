import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import MediaQuery from 'react-responsive';
import '../Stylesheets/Navbar.css';

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
          <h1 className='pageHeader'><a className='homeLink' href='/home'>ECOMODE</a></h1>
          <Navbar style={{opacity:0.90, fontSize:'20px', paddingTop:'3px'}} color="light" light expand="md">
            <MediaQuery minWidth={768}>
              <NavbarBrand href="/home"></NavbarBrand>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <NavbarBrand href="/home">Project Ecomode</NavbarBrand>
            </MediaQuery>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/strategy">Business Strategy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tickets">Buying Tickets</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
