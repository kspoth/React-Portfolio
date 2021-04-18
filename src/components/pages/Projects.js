import React, { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <div>
        {/* Jog Logger */}
        <div className="row justify-content-md-center project">
          <div className="col-md-auto">
            <img src="assets/Joglogger.gif" className="Jog" alt="Jog Logger" />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-xs-auto">
            <a
              className="descrp-text Jog-app highlight-me"
              href="https://vast-inlet-10059.herokuapp.com/add_workout"
            >
              <i className="far fa-window-restore"></i>
              Joglogger Deployed App
            </a>
          </div>
          <div className="col-xs-auto">
            <a
              className="descrp-text Jog-repo highlight-me"
              href="https://github.com/jxhnkndl/workout-log"
            >
              <i className="fab fa-github"></i>
              Jog Logger GitHub Repo
            </a>
          </div>
        </div>

        {/* Burger Project */}
        <div className="row justify-content-md-center project">
          <div className="col-md-auto">
            <img src="assets/burger.gif" className="burger" alt="Burger" />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-xs-auto">
            <a
              className="descrp-text burger-app highlight-me"
              href="https://polar-crag-98155.herokuapp.com/"
            >
              <i className="far fa-window-restore"></i>
              eat-da-burger Deployed App
            </a>
          </div>
          <div className="col-xs-auto">
            <a
              className="descrp-text burger-repo highlight-me"
              href="https://github.com/kspoth/eat-da-burger"
            >
              <i className="fab fa-github"></i>
              eat-da-burger GitHub Repo
            </a>
          </div>
        </div>

        {/* Workout Tracker */}
        <div className="row justify-content-md-center project">
          <div className="col-md-auto">
            <img src="assets/Fitness.gif" className="Workout" alt="Workout" />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-xs-auto">
            <a
              className="descrp-text workout-app highlight-me"
              href="https://powerful-lake-11175.herokuapp.com/?id=6066948090c72d001524e2ae"
            >
              <i className="far fa-window-restore"></i>
              Workout Tracker Deployed App
            </a>
          </div>
          <div className="col-xs-auto">
            <a
              className="descrp-text bandmates-repo highlight-me"
              href="https://github.com/kspoth/workout-tracker"
            >
              <i className="fab fa-github"></i>
              Workout Tracker GitHub Repo
            </a>
          </div>
        </div>

        {/* Foobar App */}
        <div className="row justify-content-md-center project">
          <div className="col-xs-auto">
            <img
              src="assets/foobar.gif"
              className="foobar-app"
              alt="foobar web app"
            />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-xs-auto">
            <a
              className="descrp-text foobar-app highlight-me"
              href="https://todtsies.github.io/Project-1/"
            >
              <i className="far fa-window-restore"></i>
              The Foobar Finder Deployed App
            </a>
          </div>
          <div className="col-md-auto">
            <a
              className="descrp-text foobar-repo highlight-me"
              href="https://github.com/todtsies/Project-1"
            >
              <i className="fab fa-github"></i>
              The Foobar Finder GitHub Repo
            </a>
          </div>
        </div>

        {/* Coding Quiz */}
        <div className="row justify-content-md-center project">
          <div className="col-md-auto">
            <img
              src="assets/quiz.gif"
              className="quiz-app"
              alt="Coding Quiz web app"
            />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-xs-auto">
            <a
              className="descrp-text quiz-app highlight-me"
              href="https://kspoth.github.io/Coding-Quiz/"
            >
              <i className="far fa-window-restore"></i>
              The Coding Quiz Deployed App
            </a>
          </div>
          <div className="col-xs-auto">
            <a
              className="descrp-text quiz-repo highlight-me"
              href="https://github.com/kspoth/Coding-Quiz"
            >
              <i className="fab fa-github"></i>
              The Coding Quiz GitHub Repo
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
