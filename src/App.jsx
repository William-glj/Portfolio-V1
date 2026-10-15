import Intro from './sections/Intro.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Projects.jsx';
import Studies from './sections/Studies.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Experience />
        <Studies />
        <Projects />
        <Skills />
      </main>
    </>
  )
}

export default App;
