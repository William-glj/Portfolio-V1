import CardSkill from '../components/CardSkill.jsx';
import "../styles/Skills.css";
import cssIcon from '../assets/icons/css.svg';
import dockerIcon from '../assets/icons/docker.svg';
import gitHubIcon from '../assets/icons/github.svg';
import hibernateIcon from '../assets/icons/hibernate.svg';
import htmlIcon from '../assets/icons/html.svg';
import intellijIcon from '../assets/icons/intellij.svg';
import javaIcon from '../assets/icons/java.svg';
import javaScriptIcon from '../assets/icons/javaScript.svg';
import mySQLIcon from '../assets/icons/mysql.svg';
import postgreSQLIcon from '../assets/icons/postgresql.svg';
import postmanIcon from '../assets/icons/postman.svg';
import reactIcon from '../assets/icons/react.svg';
import serverSQLIcon from '../assets/icons/serversql.svg';
import springIcon from '../assets/icons/spring.svg';
import sqlIcon from '../assets/icons/sql.svg';
import vscIcon from '../assets/icons/vscode.svg';
import wordpressIcon from '../assets/icons/wordpress.svg';
import xamppIcon from '../assets/icons/xampp.svg';
import aws from '../assets/icons/aws.svg';
function Skills() {
    return (
        <section id="Skills" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="section-subtitle">Habilidades tecnológicas</h2>
            <div className="skills-container">
                <CardSkill 
                    title="Lenguajes" 
                    image1={javaIcon} alt1="Java" 
                    image2={javaScriptIcon} alt2="JavaScript" 
                    image4={htmlIcon} alt4="HTML"
                />
                
                <CardSkill 
                    title="Backend" 
                    image1={javaIcon} alt1="Java" 
                    image2={springIcon} alt2="Spring" 
                    image3={hibernateIcon} alt3="Hibernate" 
                    image4={dockerIcon} alt4="Docker"
                />
                
                <CardSkill 
                    title="Frontend" 
                    image1={reactIcon} alt1="React" 
                    image2={javaScriptIcon} alt2="JavaScript" 
                    image3={cssIcon} alt3="CSS" 
                    image4={htmlIcon} alt4="HTML"
                />
                
                <CardSkill 
                    title="Bases de Datos" 
                    image1={postgreSQLIcon} alt1="PostgreSQL" 
                    image2={mySQLIcon} alt2="MySQL" 
                    image3={sqlIcon} alt3="SQL" 
                    image4={serverSQLIcon} alt4="Server SQL"
                />
                
                <CardSkill 
                    title="Arquitectura" 
                    image3={dockerIcon} alt3="Docker" 
                    image4={gitHubIcon} alt4="GitHub" 
                />
                
                <CardSkill 
                    title="Herramientas" 
                    image1={intellijIcon} alt1="IntelliJ IDEA" 
                    image2={vscIcon} alt2="Visual Studio Code" 
                    image3={postmanIcon} alt3="Postman" 
                />
                
                <CardSkill 
                    title="Otros" 
                    image1={wordpressIcon} alt1="WordPress" 
                    image2={xamppIcon} alt2="XAMPP" 
                    image3={aws} alt3="Amazon Web Service" 
                />  
            </div>
        </section>
    );
}

export default Skills;
