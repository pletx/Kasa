import React from 'react';

import Card from '../Components/card';
import data from "../data.json";
import "../Pages/Home.css"
import Banner from"../Components/banner"

import bannerimg from "../Pages/IMG.png"
function Home() {
    const gallery = data.map(item => (
      <Card key={item.id} cardtxt={item.title} />
    ));
    return (
      <div>
       
        <Banner bannerscr={bannerimg}/>
        <div className='gallery'>
          {gallery}
        </div>
      </div>
    );

  }
  
  export default Home;
 

  
  