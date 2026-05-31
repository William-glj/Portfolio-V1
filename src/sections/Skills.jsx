import CardSkill from '../componets/CardSkill.jsx';
import javaIcon from '../assets/icons/java.svg';
import reactIcon from '../assets/icons/react.svg';
import dockerIcon from '../assets/icons/java.svg';
import gitHub from '../assets/icons/react.svg';
import hibernateIcon from '../assets/icons/hibernate.svg';
import htmlIcon from '../assets/icons/html.svg';
import intellijIcon from '../assets/icons/intellij.svg';
import javaScriptIcon2 from '../assets/icons/javaScript2.svg';
import javaScriptIcon from '../assets/icons/javaScript.svg';
import postgreSQLIcon from '../assets/icons/postgresql.svg';
import postmanIcon from '../assets/icons/postman.svg';
import pAutomateIcon from '../assets/images/images.AVIF';
import serverSQLIcon from '../assets/icons/serversql.svg';
import springIcon from '../assets/icons/spring.svg';
import sqlIcon from '../assets/icons/sql.svg';
import vscIcon from '../assets/icons/vscode.svg';
import wordpressIcon from '../assets/icons/wordpress.svg';
import xamppIcon from '../assets/icons/xampp.svg';
import mySQLIcon from '../assets/icons/mysql.svg';
import cssIcon from '../assets/icons/css.svg';

import "../styles/Skills.css";




//"min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900"

function Skills() {
    return (
        <div id="Skills">
        <div className="skills-container">
            <CardSkill title="Lenguajes" image1={javaIcon} alt="Java" image2={javaIcon} alt="Java" image3={javaIcon} alt="Java" image4={javaIcon} alt="Java"/>
            <CardSkill title="Backend" image1={javaIcon} alt="Java" image2={javaIcon} alt="Java" image3={javaIcon} alt="Java" image4={javaIcon} alt="Java"/>
            <CardSkill title="Frontend" image1={reactIcon} alt="React" image2={javaScriptIcon} alt="JavaScript" image3={cssIcon} alt="CSS" image4={htmlIcon} alt="HTML"/>
            <CardSkill title="Bases de Datos" image1={postgreSQLIcon} alt="PostgreSQL" image2={mySQLIcon} alt="MySQL" image3={sqlIcon} alt="SQL" image4={serverSQLIcon} alt="Server SQL"/>
            <CardSkill title="Arquitectura" image1={springIcon} alt="Spring" image2={hibernateIcon} alt="Hibernate" image3={dockerIcon} alt="Docker" image4={gitHub} alt="GitHub"/>
            <CardSkill title="Herramientas" image1={intellijIcon} alt="IntelliJ IDEA" image2={vscIcon} alt="Visual Studio Code" image3={postmanIcon} alt="Postman" image4={pAutomateIcon} alt="Power Automate"/>
            <CardSkill title="Otros" image1={javaIcon} alt="Java" image2={javaIcon} alt="Java" image3={javaIcon} alt="Java" image4={javaIcon} alt="Java"/>  
        </div>    
        </div>        
    );
}

export default Skills;  