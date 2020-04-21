import React, { Component } from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import splash from "./images/paint.png";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={splash}
            width="45"
            height="45"
            className="d-inline-block"
          />{" "}
          Splash
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Why splash?</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
          <Nav className="my-2 my-lg-0">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link className="active" href="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavbarComponent;
