import React, { useState } from 'react';
import './Carousel.css'
import PropTypes from 'prop-types';
function Carousel(props) {
	var images=props.images
  var arrowleft=props.arrowleft
  var arrowright=props.arrowright
  const [Image, setImage] = useState(0);

  const previousImage = () => {
    setImage(Image === 0 ? images.length - 1 : Image - 1);
  };
  const nextImage = () => {
    setImage(Image === images.length - 1 ? 0 : Image + 1);
  };
if(images.length==1){
  return (
   
     <div className="carousel">
      <div>{Image}/{images.length}</div>
     <img className="carousel-image" src={images[Image]} />
   </div>);
}
else{
  return(
    <div className="carousel">
      <div className='imgcompte'>{Image + 1}/{images.length}</div>
    <img className="carousel-image" src={images[Image]} alt={`Image ${Image + 1}`} />
    <img className="arrow-left" src={arrowleft} onClick={previousImage} ></img>
    <img className="arrow-right" src={arrowright}onClick={nextImage} ></img>
    
  </div>)
}
}
Carousel.propTypes = {
  images:PropTypes.array,
  arrowleft: PropTypes.string,
  arrowright: PropTypes.string,
}
export default Carousel;
