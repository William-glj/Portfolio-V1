import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import react from "../assets/icons/react.svg";
import dl from "../assets/icons/download.svg";
import download from "../assets/resume/Guillermo_Lemos_J_CV.pdf";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <a 
            href="https://github.com/William-glj?tab=overview&from=2026-05-01&to=2026-05-25"
            title="Abrir perfil de GitHub"
            target="_blank" 
            rel="noreferrer">
                <img src={github} alt="GitHub" />
            </a>
           <a 
            href="mailto:guillermolemos0024@gmail.com" 
            title="Enviar un correo a guillermolemos0024@gmail.com"
            target="_blank" 
            rel="noreferrer"
            >
                <img src={gmail} alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com/in/guillermo-lemos-24glj24" 
            title="Abrir perfil de LinkedIn"
            target="_blank"
            rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
            </a>
            <a 
            href={download} 
            title="Descargar CV"
            target="_blank"
            rel="noreferrer">
                <img src={dl} alt="Descargar CV" />
            </a>
        </div>
    );
}

export default Contact;