import React, { Component } from 'react';
import {
  Collapse,
  Col,
  Row,
  Card,
  CardBody,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Link,
  Brand,
  Button,
  Form,
  FormControl,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

//css du composant
const navStyle = {
  margin: '40px',
  border: '5px solid pink',
  marginBottom: '1rem'
};

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <header>
        <Row>
          <Col sm="12" md="12" lg="12">
            <Navbar className="navbar-inverse bg-primary" toggleable>
              <NavbarToggler right onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/">aaa</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">bbb</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </header>
    )
  }
}

export default NavBar;