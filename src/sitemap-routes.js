import React from 'react';
// import { Route } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./js/scenes/home/HomePage";
import AboutMe from "./js/scenes/aboutme/AboutMe";
import Resume from "./js/scenes/resume/Resume";
import Services from "./js/scenes/services/Services";
import Contact from "./js/scenes/contact/Contact";
 
export default (
    <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/expertise">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
    </Switch>
);