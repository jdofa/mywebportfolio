import React from "react"

function Project(prop) {
    return(
        <div className="project-wrapper">
            <p className="project-anchor" id={prop.anchor}></p>
            <p>Project Title</p>
            <p>Project Description</p>
            <p>Tools Used</p>
            <p>Github Link</p>
        </div>
    )
}

export default Project