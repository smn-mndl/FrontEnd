import "./App.scss";
import 'antd/dist/antd.css'; 
import HomePage from "./js/scenes/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./js/components/navbar/Navbar";
import AboutMe from "./js/scenes/aboutme/AboutMe";
import Resume from "./js/scenes/resume/Resume";
import { useState } from "react";
import Services from "./js/scenes/services/Services";
import Contact from "./js/scenes/contact/Contact";
import Amplify from "aws-amplify";

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const App = () => {
  const [currentTab, setCurrentTab] = useState("");
  return (
    <Router>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="app-content">
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/expertises">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
      <footer>© 2021. Created By Suman Mondal</footer>
    </Router>
  );
};

export default App;
