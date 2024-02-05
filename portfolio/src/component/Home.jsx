import React from "react";
import Logo from "../assets/Logo.png";
import downloadLogo from "../assets/download.png";
import nameArrow from "../assets/name-arrow-logo.png";
import sunLogo from "../assets/rd-logo.png";
import threeLineLogo from "../assets/three-line-logo.png";
import smileIcon from "../assets/smiley-face.png";
import bulbLogo from "../assets/bulb-logo.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="nav-bar">
          <div className="logo-div">
            <img src={Logo} alt="" />
            <p>Name</p>
          </div>
          <div className="infos-div">
            <p className="home">Home</p>
            <p className="About-me">About me</p>
            <p className="projects">Projects</p>
            <div className="resume-div">
              <p>Resume</p>
              <img className="download-logo" src={downloadLogo} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="name-arrow-div">
        <img className="name-arrow" src={nameArrow} alt="" />
      </div>
      <div className="main-body">
        <div className="main-left">
          <img src={sunLogo} alt="" />
          <h2 className="title">
            Hi, I build web applications!
            <br />
            I am a full stack developer
            <br />
          </h2>
          <div className="sp-btn-div">
            <button className="see-portfolio">See Portfolio</button>
            <div className="tl-div">
              <img className="three-lines" src={threeLineLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="picture">
            <img src={smileIcon} alt="" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
