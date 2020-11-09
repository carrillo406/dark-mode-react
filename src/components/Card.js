import React from 'react';
import './styles/card.css';
function Card(props){
    const cardClass = `card ${props.name}`;
    return(
        <article className={cardClass}>
            <p className="card-title">
                <img src={props.icon} alt="" />
                {props.username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{props.followers}</span>
                <span className="card-followers-title">followers</span>
            </p>
            <p className="card-today">
                <img src="images/icon-up.svg" alt="" /> 
                {props.todayFollwers} Today
            </p>
        </article>        
    );
}

export default Card;