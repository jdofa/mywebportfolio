import React, {useState} from "react"
import pdf from "../assets/JoseNieblasResume.pdf"
import arrow from "../assets/arrow.png"
import linkedInLogo from "../assets/linkedin_logo.png"
import githubLogo from "../assets/githubLogo.png"
import emailLogo from "../assets/email_logo.png"

function Navbar() {

    const [navElements, setNav] = useState({about: true, p1: false, p2: false, p3: false});
   
    const lightBlue = {
        color: '#147efb'
    };

    const white = {
        color: '#FDFFF5'
    };

    return(
        <div id="nav-wrapper">
            <h2 id="my-name">Jose Rodolfo Nieblas</h2>
            <nav>
                <div id="nav-links-wrapper">
                    <div className="nav-element-wrapper">
                        <img id="nav-arrow-1" src={arrow} alt="arrow selector"/>
                        <a 
                            className="nav-element" 
                            href={pdf} 
                            target="_blank" 
                            rel="noreferrer">
                        Grab Resume</a>
                    </div>
                    <div className="nav-element-wrapper">
                        <img id="nav-arrow-2" src={arrow} alt="arrow selector"/>
                        <a 
                            onClick={() => setNav({about: true, p1: false, p2: false, p3: false})}
                            style={navElements.about === true ? white : lightBlue} 
                            className="nav-element" 
                            href="#profile">
                        About Me</a>
                    </div>
                    <div className="nav-element-wrapper">
                        <img id="nav-arrow-3" src={arrow} alt="arrow selector"/>
                        <a 
                            onClick={() => setNav({about: false, p1: true, p2: false, p3: false})}
                            style={navElements.p1 === true ? white : lightBlue} 
                            className="nav-element" 
                            href="#p1">
                        Project 1</a>
                    </div>
                    <div className="nav-element-wrapper">
                        <img id="nav-arrow-4" src={arrow} alt="arrow selector"/>
                        <a 
                            onClick={() => setNav({about: false, p1: false, p2: true, p3: false})}
                            style={navElements.p2 === true ? white : lightBlue} 
                            className="nav-element" 
                            href="#p2">
                        Project 2</a>
                    </div>
                    <div className="nav-element-wrapper">
                        <img id="nav-arrow-5" src={arrow} alt="arrow selector"/>
                        <a 
                            onClick={() => setNav({about: false, p1: false, p2: false, p3: true})}
                            style={navElements.p3 === true ? white : lightBlue} 
                            className="nav-element" 
                            href="#p3">
                        Project 3</a>
                    </div>
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