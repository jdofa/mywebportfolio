import React from "react"
import pdf from "../assets/JoseNieblasResume.pdf"
import arrow from "../assets/arrow.png"

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
                    <a className="nav-element" href={pdf} target="_blank">Grab Resume</a>
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
            </nav>
        </div>
    )
}

export default Navbar