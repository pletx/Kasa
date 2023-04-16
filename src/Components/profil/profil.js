import React from 'react';
import './profil.css';
import PropTypes from 'prop-types';
function Profil(props) {
  return (
    <div className='profile'>
        <p>{props.hostname}</p>
      <div className='hostpicture'>
        <img src={props.hostpicture}></img>
     </div>
    </div>
  );
}
Profil.propTypes = {
  hostpicture:PropTypes.string,
  hostname:PropTypes.string
}
export default Profil;