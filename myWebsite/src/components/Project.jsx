import React from "react"

function Project(prop) {
    const myTools = prop.tools.map((tool) => {
        return (<li>{tool}</li>)
    })

    return(
        <div className="project-wrapper">
            <p className="project-anchor" id={prop.anchor}></p>
            <h3 className="project-title">{prop.title}</h3>
            <img className="project-img" src={prop.coverImg} alt="Project Cover"/>
            <h3 className="project-title">Description</h3>
            <p>"{prop.description}"</p>
            <div id="tools-wrapper">
                <h3 className="project-title">Tools Used</h3>
                <ul>
                    {myTools}
                </ul>
            </div>
            <a id="git-link" href={prop.link} target="_blank">{prop.link}</a>
        </div>
    )
}

export default Project