import React from 'react';
import '../styles/component-styles/card.css';

const  Card = (props) => {
  return (
    <div className='product-card'>
      <img src={props.image} alt="" id='card-img'/>
      <div className='card-info'>
        <p>{props.name}</p>
        <p>{props.price + " TL"}</p>
        <button className='btn btn-primary' id='card-btn'>Learn More</button>
      </div>
    </div>
  )
}

export default Card;