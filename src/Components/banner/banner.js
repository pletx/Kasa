import React from 'react';
import './banner.css';
import PropTypes from 'prop-types';
function Banner(props){
    return(
    <div className='banner'>
       
        <img src={props.bannerscr} alt='banner'></img> 
    <div className='bannertxt'>{props.bannertxt}</div>
     </div>
    )
}
Banner.propTypes = {
    bannerscr: PropTypes.string,
    bannertxt: PropTypes.string,
  }

export default Banner;