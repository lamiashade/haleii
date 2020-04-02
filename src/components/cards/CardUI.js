import React from 'react'

const Card = props => {
    return(
        <React.Fragment>  
            <div className="card">
                <img src={props.imgsrc} alt="" className="overflow" />
                <div className="card-title">{props.title}</div>
            </div>
        </React.Fragment>
    );
}

export default Card;