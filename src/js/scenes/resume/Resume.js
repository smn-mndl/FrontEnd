import React from "react";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-left-sec">
        <h1>Education</h1>
        <p>
          <h3>College</h3>
        </p>
        <p>
          <i>
            <strong>
              <div>Indian Institue of Technology, Jodhpur, India</div>
            </strong>
            <div>Aug, 2022 - Present</div>
          </i>
          <br></br>
          <div>Master's in Technology in Computational Data Science.</div>
          <hr></hr>
          <i>
            <strong>
              <div>Haldia Institute of Technology, West Bengal, India</div>
            </strong>
            <div>Aug, 2013 - July, 2017</div>
          </i>

          <br></br>
          <div>Bachelor's in Technology in Mechanical Engineering.</div>
        </p>
        <hr></hr>
        <p>
          <h3>High School</h3>
        </p>
        <p>
          <i>
            <strong>
              <div>Jadavpur Vidyapith, West Bengal, India</div>
            </strong>
            <div>May, 2011 - May, 2013</div>
          </i>

          <br></br>
          <div>
            Higher Secondary education from board of West Bengal Council of
            Higher Secondary Education.
          </div>
        </p>
      </div>
      <div className="resume-right-sec">
        <h1>Experience</h1>
        <p>
          <h3>Companies</h3>
        </p>
        <p>
          <i>
            <strong>
              <div>Cognizant Technology, Bangalore, India</div>
            </strong>
            <div>May, 2021 - Present</div>
          </i>

          <br></br>
          <div>Working as React JS/JavaScript developer.</div>
        </p>
        <hr></hr>
        <p>
          <i>
            <strong>
              <div>Infosys Limited, Bhubaneswar, India</div>
            </strong>
            <div>Feb, 2018 - Apr, 2021</div>
          </i>

          <br></br>
          <div>Worked as a UI developer primarily based on React JS.</div>
        </p>
        <hr></hr>
        <p>
          <h3>Certifications</h3>
        </p>
        <p>
          <i>
            <strong>
              <div>SharePoint Development</div>
            </strong>
            <div>May, 2021 - Jun, 2021</div>
          </i>

          <br></br>
          <div>
            An intermediate level training for SharePoint Development using
            SPFx, PowerApps and Power Automate.
          </div>
        </p>
        <hr></hr>
        <p>
          <i>
            <strong>
              <div>Infosys Certified Agile Developer</div>
            </strong>
            <div>May, 2020 - Present</div>
          </i>

          {/* <br></br>
          <div>Worked as a UI developer primarily based on React JS.</div> */}
        </p>

        <hr></hr>
        <p>
          <i>
            <strong>
              <div>Angular 5 and TypeScript</div>
            </strong>
            <div>May, 2018 - Jun, 2018</div>
          </i>
          <br></br>
          <div>
            Creating responsive webpages using Angular 5 and TypeScript.
          </div>
        </p>
      </div>
    </div>
  );
};

export default Resume;
