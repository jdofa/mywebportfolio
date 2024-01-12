import React from "react"
import gitLogo from "../assets/githubLogo.png"
function Project(prop) {
    const myTools = prop.tools.map((tool) => {
        return (<li>{tool}</li>)
    })

    return(
        <div className="project-wrapper">
            <h3 id={prop.anchor} className="project-title">{prop.title}</h3>
            <img className="project-img" src={prop.coverImg} alt="Project Cover"/>
            <h3 className="project-title">Description</h3>
            <p id="project-description">"{prop.description}"</p>
            <div id="tools-wrapper">
                <h3 className="project-title">Tools Used</h3>
                <ul>
                    {myTools}
                </ul>
            </div>
            <span id="git-container">
                <img id="git-logo" src={gitLogo} alt="Github Logo"/>
                <a id="git-link" href={prop.link} target="_blank">{prop.link}</a>
            </span>
        </div>
    )
}

export default Project