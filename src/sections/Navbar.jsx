import  '../styles/Navbar.css';
function Navbar() {
  return (
      <nav>
        <div className="navTitle">Dev<span>Portfolio.</span></div> 
          <div className="classMenu">
            <a href="#Intro">Inicio</a>
            <a href="#Experience">Experiencia</a>
            <a href="#Projects">Proyectos</a>
            <a href="#Skills">Habilidades</a>
          </div>
      </nav>
  );
}

export default Navbar;