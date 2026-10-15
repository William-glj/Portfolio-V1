import ProjectCard from "../components/CardProject.jsx";
import p1 from '../assets/images/p1.AVIF';
import "../styles/CardProject.css";
import "../styles/Projects.css";

function Projects() {
    return (
        <section id="Projects" className="studies-main-container" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="section-subtitle">Proyectos</h2>
            <div className="project-grid">
                <a 
                    href="https://mportfolioup.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Visitar el proyecto Portafolio"
                >
                    <ProjectCard 
                        title="Portafolio" 
                        image1={p1} 
                        imageAlt="Vista previa del sitio web Portafolio"
                        description="Sitio personal desarrollado con React para presentar mi trayectoria, proyectos y competencias."
                        showArrow
                    />
                </a>
            </div>
        </section>
    );
}

export default Projects;