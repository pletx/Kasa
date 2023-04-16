import React from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import data from "../../data.json";
import NotFound from '../NotFound/NotFound';
import Collapse from '../../Components/collapse/Collapse';
import Carousel from '../../Components/Carousel/Carousel';
import Profil from '../../Components/profil/profil';
import Arrowleft from '../../Assets/Arrowleft.png'
import Arrowright from '../../Assets/Arrowright.png'
import'./Fichelogement.css'
import star from'../../Assets/star.png'
import starempty from'../../Assets/starempty.png'
function FicheLogement() {
  var {id} = useParams();
  const info = data.find(info => info.id === id);
  if (!info) {
    return(
      <Routes>
    <Route path="*" element={<NotFound />} />
    </Routes>
    )
  }
  const ticket = info['tags'].map((item, index) => (
    <div key={index} className='ticket'>{item}</div> 
  ))
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= info.rating) {
      stars.push(<img key={i} className="star-full" src={star}></img>);}
    else{
      stars.push(<img key={i} className="star-empty" src={starempty}></img>);}
  
    }
  return (
    <div id='page'>
      <Carousel images={info.pictures} arrowleft={Arrowleft} arrowright={Arrowright}/>

     
    <div className='info'>
 
      <div className='info-contener'>
      <h2>{info.title} </h2>
      <p>{info.location} </p>
      <div className='tickets'>{ticket}</div>
      </div>

      <div className='info-rating'>
      <Profil hostpicture={info.host.picture} hostname={info.host.name} />
      <div className="rating">{stars}</div>
      </div>
    </div>  
      <div className='collapse-contener'>
      <Collapse title='Description'children={info.description} />
      <Collapse title='Équipements'>
      {info.equipments.map((item, index) => (
  <p key={index}>{item}</p>
))}
</Collapse>

      </div>
    </div>
  );
}

export default FicheLogement;
