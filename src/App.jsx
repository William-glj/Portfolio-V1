import { useState } from 'react';
import Intro from './sections/Intro.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Projects.jsx';
import Studies from './sections/Studies.jsx';

function App() {
  

  return (
    <>
    <Navbar/>
    <Intro/>
    <Experience/>
    <Studies/>
    <Projects/>
    <Skills/>

    </>
  )
}

export default App;
