import React from "react";
import CardExperience from "../components/CardExperiencie.jsx"; 
import ProjectCard from "../components/CardProject.jsx"; 
import courseraA from "../assets/images/C-A.AVIF";
import courseraB from "../assets/images/C-B.AVIF";
import Cloud from "../assets/images/Cloud.AVIF";
import IA1 from "../assets/images/IA-1.AVIF";
import IA2 from "../assets/images/IA-2.AVIF";
import "../styles/Studies.css";

function Studies() { 
    return (
        <div id="Studies" className="studies-main-container">
            {/* Bloque 1: Estudios Oficiales (Ocupará todo el ancho) */}
            <div className="studies-full-width-section">
                <h2 className="section-subtitle">Estudios Oficiales</h2>
                <div className="studies-stack">
                    <CardExperience 
                        company="Técnico Superior en Desarrollo de Aplicaciones Multiplataforma" 
                        period="2022 - 2024" 
                        bullet1="IES Arquitecto Ventura Rodríguez"
                    />
                    <CardExperience 
                        company="Técnico en Sistemas Microinformáticos y Redes" 
                        period="2020 - 2022" 
                        bullet1="IES Arquitecto Ventura Rodríguez"
                    />
                </div>
            </div>

            {/* Bloque 2: Certificaciones (Abajo, ocupando su propia cuadrícula completa) */}
            <div className="projects-section-wrapper">
                <h2 className="section-subtitle">Certificaciones</h2>
                <div className="projects-grid"> 
                    <ProjectCard  image1={courseraA} description="Curso de React Avanzado" showArrow={false}/>
                    <ProjectCard  image1={courseraB} description="Curso de React Básico " showArrow={false}/>
                    <ProjectCard  image1={Cloud} description="Tecnología en la Nube" showArrow={false}/>
                    <ProjectCard  image1={IA1} description=". . ." showArrow={false}/>
                    <ProjectCard  image1={IA2} description=". . ." showArrow={false}/>
                </div>
            </div>
        </div> 
    );
}

export default Studies;