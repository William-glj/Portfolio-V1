import fotoPerfil_1 from '../assets/images/profile_1.AVIF';
import '../styles/Intro.css';
import Contact from './Contact.jsx';

function Intro() {
    return (
        <section id="Intro" className="intro-container" aria-labelledby="intro-heading">
            <div className="intro-wrapper">
                <p className="section-subtitle">Presentación</p>
                
                <div className="intro-card">
                    <div className="spacer">
                        <div className="profileDiv">
                            <img id="Profile" src={fotoPerfil_1} alt="Guillermo Lemos Jiménez" />
                        </div>
                        
                        <div className="textDiv">
                            <p className="intro-role">Desarrollador Full Stack</p>
                            <h1 id="intro-heading">Guillermo Lemos Jiménez</h1>
                            <p className="intro-description">
                              Soy Guillermo, desarrollador Full Stack con enfoque en backend y experiencia con Java y Spring Boot.
                              He trabajado con arquitecturas monolíticas y de microservicios, bases de datos relacionales y APIs REST.
                              También desarrollo interfaces con React y JavaScript, conectando la lógica del servidor con experiencias
                              web dinámicas.
                            </p>
                        </div>
                    </div>
                  <div className="intro-footer-row">
                        <div className="footer-block">
                            <h3>Tecnologías principales</h3>
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
        </section>
    );
}

export default Intro;