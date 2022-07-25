import React from "react";
import "./AboutMe.scss";
import sumanImg from "../../../images/suman_bio.jpg";

const AboutMe = () => {
  return (
    <div className="aboutus">
      <div className="suman-img">
        <img src={sumanImg} alt={"about"}></img>
        <p>
          <h1>About Me</h1>
          I am a web developer with 3.5 years of experience in HTML, CSS. My main
          interests are object-oriented and user-centric design.
          <br></br>
          <br></br>
          My expertise is in the area of responsive & interactive websites.
          <br></br>
          <br></br>
          <strong>Frontend Development - </strong> I primarily use React JS &
          JavaScript.
          <br></br>
          <br></br>
          <strong>Backend Development - </strong> Mainly used Node JS and
          Express JS for microservices.
          <br></br>
          <br></br>
          <strong>Database - </strong> MongoDB.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
