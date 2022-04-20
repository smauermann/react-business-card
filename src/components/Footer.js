import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/smauermann" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
      <a href="https://www.instagram.com/cluelessclimber/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a>
    </div>
  );
}

export default Footer;
