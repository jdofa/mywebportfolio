import React from "react"
import profilePic from "../assets/me.jpg"

function About() {
    return(
        <>
            <div id="profile"></div>
            <img id="profile-pic" src={profilePic} alt="Jose's Profile Picture" />
            <p id="bio">I am currently 24.85 years old  and recently graduated from 
            Fresno State University with a Bachelor's in Computer Science. 
            
            </p>
            <a id="msg" href="mailto: dolfonieblas@gmail.com">Send Message</a>
        </>
    )
}

export default About