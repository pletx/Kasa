import React from 'react';
import './header.css'
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();
  console.log(location.pathname); 

  return (
    <header className="header">
      <a href={props.logolink}><img src={props.logoSrc} alt="Logo" className="logo" /></a>
      <nav>
        <a className={`home ${location.pathname === '/' ? 'active' : ''}`} href="../">Accueil</a>
        <a className={`about ${location.pathname === '/APropos' ? 'active' : ''}`}  href="../APropos">À propos</a>
      </nav>
    </header>
  );
}

Header.propTypes =  {
  logolink: PropTypes.string,
  logoSrc: PropTypes.string
}

export default Header;
