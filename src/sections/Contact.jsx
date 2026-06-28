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
                rel="noreferrer">
                <img src={email} alt="Gmail" />
            </a>
            <a 
                href="https://www.linkedin.com/in/guillermo-lemos-24glj24" 
                title="Abrir perfil de LinkedIn"
                target="_blank"
                rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
            </a>
            <a 
                href={resumePdf} 
                download="Guillermo_Lemos_CV.pdf" 
                title="Descargar CV"
                target="_blank"
                rel="noreferrer">
                <img src={dl} alt="Descargar CV" />
            </a>
        </div>
    );
}

export default Contact;