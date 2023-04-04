import React from 'react';
import Collapse from '../Components/Collapse';
import data from '../data.json'
import Banner from"../Components/banner"
import './Fichelogement.css'
function ficheLogement(){
    return (<div>
        <Banner bannerscr={data[1]['img']}/>
    <div className='collapse-contener'>
        <Collapse title='hello' children="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>
        <Collapse title='world' children="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>
        </div>  
    </div>) 
}
export default ficheLogement;