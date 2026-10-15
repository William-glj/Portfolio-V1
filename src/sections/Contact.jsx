import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import dl from "../assets/icons/download.svg";
import email from "../assets/icons/email.svg";
import resumePdf from "../assets/resume/Guillermo_Lemos_J_CV.pdf"; 
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact-container">
             
            <a 
                href="https://github.com/William-glj"
                title="Abrir perfil de GitHub"
                aria-label="Abrir perfil de GitHub"
                target="_blank" 
                rel="noopener noreferrer">
                <img src={github} alt="" />
            </a>
            <a 
                href="mailto:guillermolemos0024@gmail.com" 
                title="Enviar un correo a guillermolemos0024@gmail.com"
                aria-label="Enviar un correo electrónico">
                <img src={email} alt="" />
            </a>
            <a 
                href="https://www.linkedin.com/in/guillermo-lemos-24glj24" 
                title="Abrir perfil de LinkedIn"
                aria-label="Abrir perfil de LinkedIn"
                target="_blank"
                rel="noopener noreferrer">
                <img src={linkedin} alt="" />
            </a>
            <a 
                href={resumePdf} 
                download="Guillermo_Lemos_CV.pdf" 
                title="Descargar CV"
                aria-label="Descargar currículum en PDF">
                <img src={dl} alt="" />
            </a>
        </div>
    );
}

export default Contact;