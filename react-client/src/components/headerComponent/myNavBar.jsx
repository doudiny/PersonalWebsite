import React from 'react';
import Headroom from 'react-headroom';
import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
//import style from './myNavBar.css';



export default class MyNavBar extends React.Component {
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
      <Headroom id="headerComponent">
        <Container id="navBarContainer">
          <Navbar collapseOnSelect expand="sm" bg="bg-transparent" right sticky="top" variant="light" id="myNavBar">
            <Navbar.Brand href="/">Yann's Sandbox</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link href="/Resume">Resume</Nav.Link>
                <Nav.Link href="/Blog">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Headroom>
    );
  }
}