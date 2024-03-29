import React, { useState, useEffect } from "react"
import profilePic from "../assets/me.jpg"

function About() {

    const [currentAge, setTime] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Math.abs(new Date() - new Date("1999-01-31T00:00:00")) / 31536000000);
        }, 1);
        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <div id="profile">
                <img id="profile-pic" src={profilePic} />
                <h1 id="profile-title">joserodolfonieblas@gmail.com</h1>
                <p id="bio">I am currently <span id="currAge">{currentAge.toFixed(9)}</span> years old and a recent graduate from 
                Fresno State University with a Bachelor's in Computer Science. 
                I grew up in Dinuba, CA where my early years were marked by challenging jobs in agriculture and factories, molding me into a resilient individual.
                Now seeking a full-time role in the software industry, I bring a diverse background, coupled with genuine enthusiasm for contributing to innovative projects. 
                I am eager to contribute my skills and dedication to a collaborative and forward-thinking team.
                </p>
                <a id="msg" href="mailto: joserodolfonieblas@gmail.com">Send Message</a>
            </div>
        </>
    )

    
}

export default About