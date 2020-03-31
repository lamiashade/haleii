import React from 'react'

const Card = props => {
    return(
        <React.Fragment>  
            <div className="card">
                <img src={props.imgsrc} alt="" lassName="overflow" />
            </div>
            <h4 className="card-title">{props.title}</h4>
        </React.Fragment>
    );
}

export default Card;