import CardExperience from "../components/CardExperiencie.jsx";
import "../styles/CardExperience.css";
import "../styles/Studies.css"; 


function Experience() {
    return (
        <div id="Experience" className="studies-main-container">
            <h2 className="section-subtitle">Experiencia</h2>
            
            <div className="studies-columns-wrapper experience-equal-height">
                <div className="studies-column">
                    <CardExperience 
                        company="Verisure" 
                        period="Junio 2026 - Activo" 
                        position="Técnico de Oficina y Ventas"
                        bullet1="Gestión y administración de flujos de datos comerciales a través de software CRM y herramientas empresariales dedicadas."
                        bullet2="Asesoramiento personalizado, negociación y captación de clientes mediante canales de atención telefónica e interactiva."
                        bullet3="Análisis de necesidades de seguridad del cliente y diseño de soluciones comerciales adaptadas a su perfil."
                        bullet4="Optimización del ciclo de venta y registro exhaustivo de operaciones en sistemas de gestión corporativos."
                        bullet5="Colaboración en la mejora de la eficiencia operativa del departamento y consecución de objetivos comerciales cuantitativos."
                    />
                </div>
                <div className="studies-column">
                    <CardExperience 
                        company="Grupo Aldesa" 
                        period="Marzo - Septiembre 2024" 
                        position="Técnico en Desarrollo de Software"
                        bullet1="Diseño de soluciones backend, definiendo arquitectura básica, flujos de datos y modelos de bases de datos."
                        bullet2="Desarrollo de aplicaciones y módulos backend en Java (Spring Boot), integrados con bases de datos relacionales (SQL Server)."
                        bullet3="Gestión y administración de bases de datos en entornos de desarrollo local y servidores de pruebas."
                        bullet4="Implementación de APIs RESTful con operaciones CRUD, manejo de peticiones HTTP y serialización de datos en formato JSON."
                        bullet5="Desarrollo de pruebas unitarias con JUnit para la validación de la lógica de negocio."
                        bullet6="Mantenimiento evolutivo, refactorización de código y documentación técnica."
                    />
                </div>
                <div className="studies-column">
                    <CardExperience 
                        company="Laboratorios Indas" 
                        period="Abril - Agosto 2022" 
                        position="Trasformación Digital"
                        bullet1="Análisis y depuración de código para mejorar la calidad,estabilidad y eficiencia de los desarrollos."
                        bullet2="Diseño, construcción y optimización de algoritmos adaptados a distintas necesidades funcionales."
                        bullet3="Programación y automatización de procesos mediante PowerAutomate en Azure (PA)."
                        bullet4="Diseño, ejecución y validación de casos de prueba, con revisión yajuste de código y datos (SharePoint y Power Automate)."
                        bullet5="Elaboración de manuales de prueba y documentación técnicaclara y precisa."
                        bullet4="Implementación de soluciones de automatización de procesos, orientadas a la mejora de la eficiencia operativa."
                        bullet5="Administración de datos, creación de tablas y automatización de flujos de trabajo en SharePoint"
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;

                    

