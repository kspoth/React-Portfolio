import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="photo-container">
          <img
            src="assets/ProfilePic.jpeg"
            alt="Kevin Spoth's Profile"
            className="card-img bio-image"
          />
        </div>
        <h5 className="title-name">Kevin Spoth</h5>
        <p className="short-bio">
          Aspiring full stack web developer at the University of Richmond's
          Full-Stack Web Development Bootcamp. I am experienced with programming
          technologies such as JavaScript, HTML, CSS, Web API's, Heroku NodeJS,
          JQuery, MySQL, MongoDB, DOM Manipulation, ReactJS, Git and Github
          through working on projects and daily programming exercises. I am
          certain that my passion and interest in technology and business
          background will benefit your orginization. I look forward to my future
          as a software developer and would certainly like the chance to discuss
          how my qualifications meet your company’s needs.
        </p>
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
              href="assets/ResumeKevinSpoth04-17-2021FSW.pdf"
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
