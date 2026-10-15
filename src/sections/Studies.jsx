import CardExperience from "../components/CardExperiencie.jsx"; 
import ProjectCard from "../components/CardProject.jsx"; 
import courseraA from "../assets/images/C-A.AVIF";
import courseraB from "../assets/images/C-B.AVIF";
import Cloud from "../assets/images/Cloud.AVIF";
import IA1 from "../assets/images/IA-1.AVIF";
import IA2 from "../assets/images/IA-2.AVIF";
import IA from "../assets/images/IA.AVIF";
import "../styles/Studies.css";

function Studies() {
    return (
        <section id="Studies" className="studies-main-container" aria-labelledby="studies-heading">
            <div className="studies-full-width-section">
                <h2 id="studies-heading" className="section-subtitle">Estudios oficiales</h2>
                <div className="studies-stack">
                    <CardExperience 
                        company="Técnico Superior en Desarrollo de Aplicaciones Web" 
                        period=" 2026 - Cursando" 
                        bullets={["IES María de Zayas y Sotomayor "]}
                    />
                    <CardExperience 
                        company="Técnico Superior en Desarrollo de Aplicaciones Multiplataforma" 
                        period="2022 - 2024" 
                        bullets={["IES Arquitecto Ventura Rodríguez"]}
                    />
                    <CardExperience 
                        company="Técnico en Sistemas Microinformáticos y Redes" 
                        period="2020 - 2022" 
                        bullets={["IES Arquitecto Ventura Rodríguez"]}
                    />
                </div>
            </div>

            <div className="projects-section-wrapper">
                <h2 className="section-subtitle">Certificaciones</h2>
                <div className="certificate-grid">
                    <ProjectCard image1={courseraA} imageAlt="Certificado de React Basics de Meta" description="React Basics · Meta" />
                    <ProjectCard image1={courseraB} imageAlt="Certificado de Advanced React de Meta" description="Advanced React · Meta" />
                    <ProjectCard image1={Cloud} imageAlt="Diploma de Tecnología Cloud" description="Tecnología Cloud · 100 horas" />
                    <ProjectCard image1={IA} imageAlt="Diploma de  Inteligencia Artificial y Data Science aplicadas a la empresa" description="MAINJOBS · 100 horas" />
                    <ProjectCard image1={IA1} imageAlt="Certificado de iniciación al desarrollo con inteligencia artificial" description="Desarrollo con IA: de 0 a producción" />
                    <ProjectCard image1={IA2} imageAlt="Certificado de asistencia a un curso de inteligencia artificial" description="IA: de 0 a agentes" />
                
                
                </div>
            </div>
        </section>
    );
}

export default Studies;