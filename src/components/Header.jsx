import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Login from "./Login.jsx";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <h1>Test</h1>
          <Login />
        </Navbar>
      </div>
    );
  }
}

export default Header;
