import  '../styles/Navbar.css';

function Navbar() {
  return (
      <nav className="site-nav" aria-label="Navegación principal">
        <a className="navTitle" href="#Intro" aria-label="Guillermo Lemos, inicio">
          GL<span>.</span>
        </a>
        <div className="classMenu">
          <a href="#Intro">Inicio</a>
          <a href="#Experience">Experiencia</a>
          <a href="#Studies">Estudios</a>
          <a href="#Projects">Proyectos</a>
          <a href="#Skills">Habilidades</a>
        </div>
      </nav>
  );
}


export default Navbar;