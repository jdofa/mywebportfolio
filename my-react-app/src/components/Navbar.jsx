import React from "react"
import pdf from "../assets/JoseNieblasResume.pdf"
import arrow from "../assets/arrow.png"
import linkedInLogo from "../assets/linkedin_logo.png"
import githubLogo from "../assets/githubLogo.png"
import emailLogo from "../assets/email_logo.png"

/* Make each link turn blue when on that page
const currURL = window.location.href;
const urlArr = currURL.split("/");
var currLink = urlArr[urlArr.length - 1];

const blue = {
    color: '#147efb'
};

const white = {
    color: '#FDFFF5'
};
*/

function Navbar() {
    return(
        <div id="nav-wrapper">
            <nav>
                <div className="nav-element-wrapper">
                    <img id="nav-arrow-1" src={arrow} alt="arrow selector"/>
                    <a className="nav-element" href="#profile">About Me</a>
                </div>
                <div className="nav-element-wrapper">
                    <img id="nav-arrow-2" src={arrow} alt="arrow selector"/>
                    <a className="nav-element" href={pdf} target="_blank" rel="noreferrer">Grab Resume</a>
                </div>
                <div className="nav-element-wrapper">
                    <img id="nav-arrow-3" src={arrow} alt="arrow selector"/>
                    <a className="nav-element" href="#p1">Project 1</a>
                </div>
                <div className="nav-element-wrapper">
                    <img id="nav-arrow-4" src={arrow} alt="arrow selector"/>
                    <a className="nav-element" href="#p2">Project 2</a>
                </div>
                <div className="nav-element-wrapper">
                    <img id="nav-arrow-5" src={arrow} alt="arrow selector"/>
                    <a className="nav-element" href="#p3">Project 3</a>
                </div>
                <div id="nav-element-logos">
                    <a href="https://www.linkedin.com/in/jose-nieblas-b96b4a25a/" target="_blank" rel="noreferrer">
                        <img className="nav-logos" src={linkedInLogo} alt="LinkedIn Logo"/>
                    </a>
                    <a href="https://github.com/jdofa" target="_blank" rel="noreferrer">
                        <img className="nav-logos" src={githubLogo} alt="GitHub Logo"/>
                    </a>
                    <a href="mailto: joserodolfonieblas@gmail.com">
                        <img className="nav-logos" src={emailLogo} alt="Email Logo"/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar