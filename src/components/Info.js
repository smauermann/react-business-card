import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import RandomMailGenerator from "./RandomMailGenerator";
import Me from "../images/me.png";

function Info() {
  return (
    <div className="info">
      <img src={Me} alt="profile" />
      <h1>Stephan Mauermann</h1>
      <h2>DevOps Engineer</h2>
      <h3><a href="https://mauermann.io" target="_blank" rel="noreferrer">mauermann.io</a></h3>
      <div className="info--buttons padded">
        <button className="info--btn info--btn-email">
          <FontAwesomeIcon icon={faEnvelope} />
          <RandomMailGenerator _class={"info--btn-label"} label={"Email"} />
        </button>
        <button className="info--btn info--btn-linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          <a className="info--btn-label" href="https://www.linkedin.com/in/stephanmauermann/" target="_blank" rel="noreferrer">LinkedIn</a>
        </button>
      </div >
    </div >
  );
}

export default Info;
