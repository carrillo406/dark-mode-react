import React from 'react';
import './styles/cardSmall.css';
export default function CardSmall({growth, pagesViews, icon}){
    return(
        <div className="card-small">
            <p className="card-small-views">Pages views</p>
            <p className="card-small-icon"><img src={icon} alt="" /></p>
            <p className="card-small-number">{pagesViews}</p>
            <p className="card-small-percentage">
                <span>
                    <img src="images/icon-down.svg" alt="" />
                    {growth}%
                </span>
            </p>
        </div>
    );
}