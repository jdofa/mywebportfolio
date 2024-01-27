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
          title="License Plate Scanner"
          coverImg = {p1_img}
          description="This project was created for my Sofware Engineering class, where I was the frontend developer. 
          This project aimed to digitize parking permits, where the user would register in our website and then parking 
          enforcer's would scan the user's license plate to see if they had a valid permit."
          link="https://github.com/150-lab2/License_Plate_Scanner"
          tools={["JavaScript", "CSS3", "HTML5", "Figma", "UML", "SRS", "SDD", "Git", "Waterfall Model"]}
          anchor="p1"
        />
        <Project 
          title="Checkers Web App"
          coverImg = {p2_img}
          description="A web app that allows users to play checkers against each other locally or against an AI. User data is stored
          and displayed on a global and local leaderboard. User's can also register and login to save their game progress."
          link="https://github.com/jdofa/Checkers130"
          tools={["Javascript", "DOM API", "PHP", "MySQL", "Apache", "CSS3", "HTML5", "Session & Cookies"]}
          anchor="p2"
        />
        <Project 
          title="Chat Room"
          coverImg = {p3_img}
          description="A chat room made with Python3 that allows users to connect to a server where they
          can send messages to anyone connected to it, in real time."
          link="https://github.com/jdofa/BreakoutRoom"
          tools={["Python3", "Threading", "Web Sockets"]}
          anchor="p3"
        />
      </section>
    </>
  )
}

export default App
