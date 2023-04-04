import React from 'react';
import "../Components/card.css"
function Card(props) {
  return (
    <div className="card">
     <div className='cardtext'>{props.cardtxt}</div>
    </div>
  );
}

export default Card;