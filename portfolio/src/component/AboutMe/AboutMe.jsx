import React from "react";
import "./AboutMe.css";
import smileIcon from "../../assets/smiley-face.png";

const AboutMe = () => {
  return (
    <>
      <div className="about-me-div">

        <div className="left-side">
          <div className="photo">
            <img src="" alt="" />
          </div>
          <div className="description">
            Lorem ipsum dolor, sit amet
            <br /> consectetur adipisicing elit. Maxime
            <br />
            corrupti aut ullam est impedit unde,
            <br /> saepe nam eum. In velit sint
            <br />
            cumque optio recusandae cum
            <br /> hic dolor officia quibusdam maxime.
            <br />
          </div>
        </div>

        <div className="right-side">
          <h2 className="heading">My Tech skils</h2>

          <div className="topics">
            <div className="skills">
              <p>HTML / CSS </p>
              <div className="skill">
                <div className="percentage"></div>
              </div>
            </div>
            <div className="skills">
              <p>JavaScipt</p>
              <div className="skill"><div className="percentage"></div></div>
            </div>
            <div className="skills">
              <p>ReactJS</p>
              <div className="skill"><div className="percentage"></div></div>
            </div>
            <div className="skills">
              <p>Node.js - Express</p>
              <div className="skill"><div className="percentage"></div></div>
            </div>
            <div className="skills">
              <p>Python</p>
              <div className="skill"><div className="percentage"></div></div>
            </div>
            <div className="skills">
              <p>C++</p>
              <div className="skill"><div className="percentage"></div></div>
            </div>
          </div>
        </div>

      </div>

      <hr />
    </>
  );
};

export default AboutMe;
