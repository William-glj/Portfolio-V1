import CardExperience from "../components/CardExperiencie.jsx";
import "../styles/CardExperience.css";
import "../styles/Studies.css"; 


function Experience() {
    return (
        <section id="Experience" className="studies-main-container" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="section-subtitle">Experiencia</h2>
            
            <div className="experience-grid">
                    <CardExperience 
                        company="Verisure" 
                        period="Junio 2026 - actualidad" 
                        position="Técnico de Oficina y Ventas"
                        bullets={[
                            "Gestión de flujos de datos comerciales mediante software CRM y herramientas empresariales.",
                            "Asesoramiento personalizado, negociación y captación de clientes por canales telefónicos e interactivos.",
                            "Análisis de necesidades de seguridad y diseño de soluciones adaptadas a cada cliente.",
                            "Optimización del ciclo de venta y registro de operaciones en sistemas corporativos.",
                            "Colaboración en la eficiencia operativa del departamento y en los objetivos comerciales."
                        ]}
                    />
                    <CardExperience 
                        company="Grupo Aldesa" 
                        period="Marzo - Septiembre 2024" 
                        position="Técnico en Desarrollo de Software"
                        bullets={[
                            "Diseño de soluciones backend: arquitectura, flujos de datos y modelos de bases de datos.",
                            "Desarrollo de aplicaciones y módulos con Java y Spring Boot, integrados con SQL Server.",
                            "Gestión de bases de datos en entornos locales y servidores de pruebas.",
                            "Implementación de APIs REST con operaciones CRUD, peticiones HTTP y serialización JSON.",
                            "Pruebas unitarias con JUnit para validar la lógica de negocio.",
                            "Mantenimiento evolutivo, refactorización y documentación técnica."
                        ]}
                    />
                    <CardExperience 
                        company="Laboratorios Indas" 
                        period="Abril - Agosto 2022" 
                        position="Transformación Digital"
                        bullets={[
                            "Análisis y depuración de código para mejorar la calidad, estabilidad y eficiencia.",
                            "Diseño, construcción y optimización de algoritmos para distintas necesidades funcionales.",
                            "Programación y automatización de procesos con Power Automate y Azure.",
                            "Diseño y validación de pruebas, con revisión de código y datos en SharePoint y Power Automate.",
                            "Elaboración de manuales de pruebas y documentación técnica.",
                            "Implementación de automatizaciones orientadas a mejorar la eficiencia operativa.",
                            "Administración de datos, creación de tablas y flujos automatizados en SharePoint."
                        ]}
                    />
            </div>
        </section>
    );
}

export default Experience;

                    
