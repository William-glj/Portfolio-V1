function ProjectCard({ title, image1, imageAlt = "", description, showArrow = false }) {
    return (
        <article className="project-card">
            {title && <h3 className="project-card-title">{title}</h3>}
            {image1 && (
                <div className="project-image">
                    <img src={image1} alt={imageAlt || title || description || ""} loading="lazy" />
                </div>
            )}
            <div className="project-card-footer">
                {description && <p>{description}</p>}
                {showArrow && (
                    <span className="project-arrow-wrapper">
                        <svg
                            aria-hidden="true"
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
        </article>
    );
}

export default ProjectCard;