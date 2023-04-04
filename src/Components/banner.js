import React from 'react';
import './banner.css'
function Banner(props){
    return(
    <div className='banner'>
        <img src={props.bannerscr} alt='banner'></img> 
    <div className='bannertxt'>Chez vous, partout et ailleurs</div>
     </div>
    )
}


export default Banner;