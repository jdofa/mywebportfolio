import React from 'react'
import Navbar from './components/Navbar'
import Clock from './components/Clock'
import About from './components/About'
import Project from './components/Project'
import p1_img from './assets/project1_cover.jpg'
import p2_img from './assets/project2_cover.jpg'
import p3_img from './assets/project3_cover.jpg'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Clock />
      <section id="content">
        <About />
        <Project 
          title="PlateMate"
          coverImg = {p1_img}
          description="This project was created for my Sofware Engineering class, where I was the front-end developer. 
          This project aims to digitize parking permits, where a user registers in our website and buys a permit. Then 
          enforcer's would scan the user's license plate to see if they bought and have a non-expired, valid permit."
          link="https://github.com/150-lab2/License_Plate_Scanner"
          tools={["JavaScript", "CSS", "HTML", "Figma", "UML", "SRS", "SDD", "Git", "Waterfall Model", "Firebase"]}
          anchor="p1"
        />
        <Project 
          title="Checkers Web App"
          coverImg = {p2_img}
          description="A web app that allows users to play checkers against each other locally or against a bot. User data is stored
          and displayed on a global and local leaderboards. User's can also register and login to save their game progress to both leaderboards."
          link="https://github.com/jdofa/Checkers130"
          tools={["Javascript", "DOM API", "PHP", "MySQL", "Apache", "CSS", "HTML", "Session & Cookies"]}
          anchor="p2"
        />
        <Project 
          title="Chat Room"
          coverImg = {p3_img}
          description="A chat room made with Python. A server is created and users can connect to it and chat with each other, but 
          is limited to users on the same network."
          link="https://github.com/jdofa/BreakoutRoom"
          tools={["Python", "Threading", "Web Sockets"]}
          anchor="p3"
        />
      </section>
    </>
  )
}

export default App
