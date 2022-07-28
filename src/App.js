import "./App.scss";
import "antd/dist/antd.css";
import HomePage from "./js/scenes/home/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./js/components/navbar/Navbar";
import AboutMe from "./js/scenes/aboutme/AboutMe";
import Resume from "./js/scenes/resume/Resume";
import { useState } from "react";
import Services from "./js/scenes/services/Services";
import Contact from "./js/scenes/contact/Contact";

const App = () => {
  const [currentTab, setCurrentTab] = useState("");

  const url = window.location.href;
  const route = url.split("/")[3];
  console.log("params", route);
  function download(filename, textInput) {
    debugger;
    let link = document.createElement("a");
    link.download = "SUMANMONDAL_CV.docx";
    link.href = "static/media/SUMANMONDAL_CV.72a353ee.docx";
    link.click();
  }
  return (
    <Router>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {route === "resume" && (
        <>
          {/* <div className="download-btn">
          <span onClick={() => download("abc", "abce")}>Download CV</span>
        </div> */}
          <a className="download-btn" href={"/SUMANMONDAL_CV.docx"} download>
            <span>Download CV</span>
          </a>
        </>
      )}
      <main className="app-content">
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
      </main>
      <footer>© 2021. Created By Suman Mondal</footer>
    </Router>
  );
};

export default App;
