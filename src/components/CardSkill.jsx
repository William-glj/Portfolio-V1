import "../styles/CardSkill.css";


function CardSkill(props) {
    const skills = Array.from({ length: 9 }, (_, index) => {
        const number = index + 1;
        return {
            image: props[`image${number}`],
            alt: props[`alt${number}`],
        };
    }).filter((skill) => skill.image);

    return (
        <article className="skill-card">
            <div className="skill-card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="skill-icons">
                {skills.map(({ image, alt }) => (
                    <img key={alt} src={image} alt={alt || ""} loading="lazy" />
                ))}
            </div>
        </article>
    );
}

export default CardSkill;