import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Clock from './components/Clock'
import About from './components/About'
import Project from './components/Project'

import './App.css'

function App() {
  return (
    <>
      <div id="hero">
        <h1 id="greeter">Hello! My name is...</h1>
        <h2 id="my-name">Jose Rodolfo Nieblas</h2>
      </div>
      <Navbar />
      <Clock />
      <section id="content">
        <About />
        <Project anchor="p1"/>
        <Project anchor="p2"/>
        <Project anchor="p3"/>
      </section>
    </>
  )
}

export default App
