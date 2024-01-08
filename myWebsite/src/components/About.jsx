import React, { useState, useEffect } from "react"
import profilePic from "../assets/me.jpg"

function About() {
    var birthDate = new Date("1999-01-25T12:00:00");
    var diff = Math.abs(new Date() - birthDate);
    var myAge = diff / 31536000000;

    const [currentAge, setTime] = useState(myAge);

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(Math.abs(new Date() - birthDate) / 31536000000);
        }, 1);

        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <div id="profile"></div>
            <img id="profile-pic" src={profilePic} alt="Jose's Profile Picture" />
            <p id="bio">I am currently <span id="currAge">{currentAge.toFixed(9)}</span> years old and a recent graduate from 
            Fresno State University with a Bachelor's in Computer Science. I grew up in 
            Dinuba, CA working many tough jobs since a young age. I began picking fruit from
            many farms located throughout the central valley and then shifted to general labor in
            various factories. Through the experience of grueling labor,
            I have developed a great work ethic and passion for learning new things. I am currently
            looking for a full-time job in the software industry.
            </p>
            <a id="msg" href="mailto: dolfonieblas@gmail.com">Send Message</a>
        </>
    )

    
}

export default About