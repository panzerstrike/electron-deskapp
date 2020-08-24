import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, Container } from "react-bootstrap";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Logo from "../images/logo192.png";

class Header extends Component {
  render() {
    return (
      <div>
        <Container fluid id="Header">
          <Navbar className="justify-content-between">
            <NavbarBrand className="navBrand" href="#home">
              <img className="brand-logo" src={Logo} alt="logo" />
            </NavbarBrand>
            <Nav>
              <NavLink href="/about">
                <p>About</p>
              </NavLink>
              <div className="separator" />
              <Login />
              <div className="separator" />
              <Register />
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Header;
