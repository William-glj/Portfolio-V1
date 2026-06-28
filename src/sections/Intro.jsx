import fotoPerfil_1 from '../assets/images/profile.AVIF';
import '../styles/Intro.css';
import Contact from './Contact.jsx';

function Intro() {
    return (
        <main id="Intro" className="intro-container">
            <div className="intro-wrapper">
                <h2 className="section-subtitle">Presentación</h2>
                
                <div className="intro-card cardExperience-firstContainer">
                    <div className="spacer">
                        <div className="profileDiv">
                            <img id="Profile" src={fotoPerfil_1} alt="Imagen de perfil" />
                        </div>
                        
                        <div className="textDiv">
                            <h1>FullStack Developer</h1>
                            <h4>Guillermo Lemos Jiménez</h4>
                            <p className="intro-description">
                              Buenas, soy Guillermo, pragamador Full Stack centrado en el desarrollo Backend. Mi fuerte es el lenguaje de Java
                               y el entorno de Spring Boot. Trabajo con arquitecturas monolíticas y microservicios,
                                además de gestionar bases de datos relacionales y APIs con operaciones CRUD.

                                No me dedico solo a la parte lógica del servidor;
                                también me sumerjo en la creación de interfaces con React y JavaScript en el Frontend.
                                Esto me permite conectar perfectamente el back con el front,
                                integrando soluciones de extremo a extremo con interfaces dinámicas.
                            </p>
                        </div>
                    </div>
                  <div className="intro-footer-row">
                        <div className="footer-block">
                            <h3>Tech Stack</h3>
                            <div className="stack-horizontal-box">
                                <p>Java</p>
                                <p>React</p>
                                <p>SQL</p>
                                <p>Spring Boot</p>
                            </div>
                        </div>

                        <div className="footer-block">
                            <h3>Contacto</h3>
                            <Contact />
                        </div>
                   </div>

                </div>
            </div>
        </main>
    );
}

export default Intro;