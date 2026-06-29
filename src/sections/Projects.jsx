import ProjectCard from "../components/CardProject.jsx";
import p1 from '../assets/images/p1.AVIF';
import wip from '../assets/images/WIP.AVIF';
import "../styles/CardProject.css";
import "../styles/Projects.css";

function Projects() {   
    return (   
        <div id="Projects" className="studies-main-container">
            <h2 className="section-subtitle">Proyectos</h2>
            <div className="projects-grid">
                <a 
                    href="https://mportfolioup.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-project-link" 
                >
                    <ProjectCard 
                        title="Portafolio" 
                        image1={p1} 
                        description="Sitio web personal interactivo desarrollado con React. . ."
                        fullDescription="Sitio web personal y portafolio interactivo desarrollado con React y
                         CSS modular, diseñado para exponer mi trayectoria, competencias técnicas en el backend y proyectos de forma clara y adaptativa."
                        showArrow={true}
                    />
                </a>


                <ProjectCard title="En proceso. . ." image1={wip} description="En proceso. . ."
                 fullDescription="Actualmente estoy trabajando en un proyecto de desarrollo web que aún está en proceso."
                showArrow={false}
                />
            </div>
        </div>
    );
}

export default Projects;