import React, { Component } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container fluid id="homeWrapper">
          <div id="Hero">
            <div className="imagecontainer">
              <img
                id="image"
                src="https://i.pinimg.com/originals/ea/3f/d3/ea3fd3102ccf575e3c33954f73eab78d.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
