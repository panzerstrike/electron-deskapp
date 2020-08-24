import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div id="Footer" class="container-fluid fixed-bottom">
        <div className="justify-content-centerr">
          <div class="row">
            <div className="col-lg-4">
              <p>MIT License</p>
            </div>
            <div className="col-lg-4">
              <a href="https://github.com/panzerstrike">
                <p>
                  <FaGithub /> Github
                </p>
              </a>
            </div>
            <div className="col-lg-4">
              <p>Powered by ERS Stack</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
