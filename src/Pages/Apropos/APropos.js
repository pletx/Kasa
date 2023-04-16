import React from 'react';
import Banner from '../../Components/banner/banner';
import Collapse from '../../Components/collapse/Collapse';
import Apropoimg from '../../Assets/Apropsimg.png'
import "./Apropos.css"
function APropos() {
    return (
        <div>
          <Banner bannerscr={Apropoimg} />
          <div className='colapses'>
          <Collapse title='Fiabilité' children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
           et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
          <Collapse title='Respect' children='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
           discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
          <Collapse title='Service' children="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question"/>
          <Collapse title='Sécurité' children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
           chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
           Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/> 
        </div>
          </div>
      );
    }
    export default APropos;