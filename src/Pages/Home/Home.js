import React from 'react';
import Card from '../../Components/card/card.js';
import data from "../../data.json";
import "./Home.css"
import Banner from"../../Components/banner/banner"
import bannerimg from "../../Assets/IMG.png"
function Home() {
    const gallery = data.map(item => (
      <Card key={item.id}  cardtxt={item.title} cardimg={item.cover} link='./Fichelogement' id={item.id}/>
    ));
    return (
      <div className='homepage'>
        <Banner bannerscr={bannerimg} bannertxt='Chez vous, partout et ailleurs'/>
        <div className='gallery'>
          {gallery}
        </div>
      </div>
    );

  }
  
  export default Home;
 

  
  