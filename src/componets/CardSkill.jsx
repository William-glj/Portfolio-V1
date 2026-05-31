import "../styles/CardSkill.css";

function CardSkill(props) {
    return (
     
        <div className="cardSkill-firstContainer">
            <div className="secondClassCube">
                <h2>{props.title}</h2>
            </div>
            <div className="containerSVG">
            {props.image1 && <img src={props.image1} alt={props.description}/>}
            {props.image2 && <img src={props.image2} alt={props.description}/>}
            {props.image3 && <img src={props.image3} alt={props.description}/>}
            {props.image4 && <img src={props.image4} alt={props.description}/>}
            {props.image5 && <img src={props.image5} alt={props.description}/>}
            {props.image6 && <img src={props.image6} alt={props.description}/>}
            {props.image7 && <img src={props.image7} alt={props.description}/>}
            {props.image8 && <img src={props.image8} alt={props.description}/>}
            {props.image9 && <img src={props.image9} alt={props.description}/>}
            </div>
        </div>
       
        
    );
}

export default CardSkill;