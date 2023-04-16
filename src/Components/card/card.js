import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./card.css"
function Card(props) {
  return (
    <NavLink className="card" to={`./${props.link}/${props.id}`}>
    <img src={props.cardimg}></img>
     <div className='cardtext'>{props.cardtxt}
     
     </div>
     </NavLink>
  );
}
Card.propTypes = {
  cardimg: PropTypes.string,
  cardtxt: PropTypes.string,
  link:PropTypes.string ,
  id:PropTypes.string,
}
export default Card;