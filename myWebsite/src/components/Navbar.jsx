import React from "react"
import pdf from "../assets/JoseNieblasResume.pdf"

function Navbar() {
    return(
        <nav>
            <a href="#profile">About Me</a>
            <a href="#p1">Project 1</a>
            <a href="#p2">Project 2</a>
            <a href="#p3">Project 3</a>
            <a href={pdf} target="_blank">Grab Resume</a>
        </nav>
    )
}

export default Navbar