import React from 'react'
const Card = (props) => {
    return (
        <div class="blocks">
            <div class="icon">
                {props.svg}
            </div>
            <div class="heading">
                <h2 style={{color:props.color}}>{props.heading}</h2>
            </div>
            <div class="head-title">
                <p>{props.title}</p>
            </div>
            <div class="block-btn">
                {props.button}
            </div>
        </div>
    )
}

export default Card
