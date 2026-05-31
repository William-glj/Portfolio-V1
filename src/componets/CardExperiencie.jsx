import "../styles/CardExperience.css";

function CardExperience(props) {
    return (
        <>
        <div className="cardExperience-firstContainer">
            <div className="secondClassCube">
                <h2>{props.company}</h2>
                <span className="experience-date">{props.period}</span>
                <h3>{props.position}</h3>
            </div>
            
           <ul>
            {props.bullet1 && <li>{props.bullet1}</li>}
            {props.bullet2 && <li>{props.bullet2}</li>}
            {props.bullet3 && <li>{props.bullet3}</li>}
            {props.bullet4 && <li>{props.bullet4}</li>}
            {props.bullet5 && <li>{props.bullet5}</li>}
            {props.bullet6 && <li>{props.bullet6}</li>}
            {props.bullet7 && <li>{props.bullet7}</li>}
            {props.bullet8 && <li>{props.bullet8}</li>}
            {props.bullet9 && <li>{props.bullet9}</li>}
           </ul>
           
        </div>
        </>
        
    );
}

export default CardExperience;