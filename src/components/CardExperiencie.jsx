function CardExperience({ company, period, position, bullets = [] }) {
    return (
        <article className="experience-card">
            <header className="experience-card-header">
                <div className="experience-card-heading">
                    <h3>{company}</h3>
                    {position && <p>{position}</p>}
                </div>
                {period && <span className="experience-date">{period}</span>}
            </header>
            {bullets.length > 0 && (
                <ul>
                    {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
            )}
        </article>
    );
}

export default CardExperience;