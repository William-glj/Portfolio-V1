import React from 'react';

function ProjectCard(props) {
    return (
        <div className="cardProject-firstContainer">
            {props.title && (
                <div className="secondClassCube">
                    <h2>{props.title}</h2>
                </div>
            )}
            
            {props.image1 && (
                <div className="containerIMG">
                    <img src={props.image1} alt={props.title}/>
                </div>
            )}
            
            {/* Contenedor inferior unificado */}
            <div className="cardProject-footer">
                {props.description && (
                    <p 
                        className="containerDescription" 
                        title={props.fullDescription} /* Muestra el texto completo al pasar el ratón */
                    >
                        {props.description}
                    </p>
                )}
                
                {/* La flecha condicional según el prop booleano showArrow */}
                {props.showArrow && (
                    <span className="project-arrow-wrapper">
                        <svg 
                            className="project-arrow" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2.5} 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6M19.5 10.5h-15" />
                        </svg>
                    </span>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;