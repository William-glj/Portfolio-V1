import fotoPerfil_1 from '../assets/images/profile.AVIF';
import '../styles/Intro.css';
import Contact from './Contact.jsx';
function Intro (){
    return (
        <main id="Intro" className="intro-container">
            <div className="intro-card">
                <div className="profileDiv">
                    <img id="Profile" src={fotoPerfil_1} alt="Imagen de perfil" />
                </div>
                
                <div className="spacer">
                    <div className="textDiv">
                        <h1>FullStack Developer</h1>
                        <h4>Guillermo Lemos Jiménez</h4>
                        <p className="intro-description">
                            Programador Backend de
                            aplicaciones Java, con sólidos
                            conocimientos en bases de
                            datos relacionales, gestión de
                            datos mediante JDBC, diseño de
                            APIs REST y consumo de
                            servicios. 
                            Soluciones Backend, abriendo
                            horizontes como Fullstack.
                        </p>
                    </div>
                    
                     <div className="consoleDiv">
                <div className="terminal-card">
                    <div className="terminal-header">
                      <div className="terminal-buttons">
                        <span className="btn-red"></span>
                        <span className="btn-yellow"></span>
                        <span className="btn-green"></span>
                      </div>
                      <span className="terminal-title">terminal.sh</span>
                    </div>
                    <div className="terminal-body">
                      <p className="terminal-command">&gt; Guillermo.getCurrentStatus()</p>
                      <p className="terminal-response text-cyan">✔ "Buscando nuevos retos Full Stack"</p>
                      <p className="terminal-command">&gt; Guillermo.getPrimaryStack()</p>
                      <p className="terminal-response text-indigo">["Java", "Spring Boot", "React", "SQL"]</p>
                      <p className="terminal-command cursor-blink">&gt; _</p>
                    </div>
                  </div>
            </div>
                </div>
                      <Contact/>
            </div>
          
        </main>
    );
}
export default Intro;
