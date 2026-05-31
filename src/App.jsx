import { useState } from 'react';
import Intro from './sections/Intro.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Navbar from './sections/Navbar.jsx';

function App() {
  

  return (
    <>
    <Navbar/>
    <Intro/>
    <Experience/>
    <Skills/>
    </>
  )
}

export default App
