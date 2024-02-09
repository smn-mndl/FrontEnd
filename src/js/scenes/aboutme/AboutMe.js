import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="aboutus">
      <div className="suman-img">
        {/* <img src={sumanImg} alt={"about"}></img> */}
        <p>
          <h1>About Me</h1>I am a creative and detail-oriented individual, with
          a passion for building elegant and functional websites. With 6 years of experience in the field, I have honed my skills in HTML,
          CSS, JavaScript, and various web development frameworks and libraries.
          My goal is to create websites that not only look great, but also
          provide a seamless and intuitive user experience.
          <br></br>
          <br></br>
          I've worked at <a href="https://www.infosys.com/">Infosys</a> for 3 years as an junior web developer.
          <br></br>
          Currently, I'm working at <a href="https://www.cognizant.com/us/en">Cognizant</a> as a React JS developer. I'm building micro-frontends for a variety of clients.
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
