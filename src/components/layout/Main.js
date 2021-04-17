import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="photo-container">
          <img
            src="assets/ProfilePic.jpeg"
            alt="Kevin Spoth's Profile Picture"
            className="card-img bio-image"
          />
        </div>
        <h5 className="title-name">Kevin Spoth</h5>
        <p className="short-bio">About me section</p>
        <div className="row justify-content-center short-bio links-row">
          <div className="col-auto">
            {/* change to redirect to new component */}
            <Link className="highlight-me" to="/projects">
              Portfolio
            </Link>
          </div>
          <div className="col-auto">
            <a
              className="highlight-me"
              href="assets/Resume Kevin Spoth 3-25-2021 FSW.pdf"
              download="Kevin_Spoth_Resume"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="descrp-text">
              <i className="fas fa-envelope"></i> ks2145@email.vccs.edu
            </p>
          </div>
          <div className="col-auto">
            <p className="descrp-text">
              <i className="fas fa-phone"></i> (703) 498-9381
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
