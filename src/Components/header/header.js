import React from 'react';
import './header.css'
import PropTypes from 'prop-types';
function Header(props) {
  return (
    <header className="header">
      <a href={props.logolink}><img src={props.logoSrc} alt="Logo" className="logo" /></a>
      <nav>
          <a href="../">Accueil</a>
          <a href="../APropos">À propos</a>
      </nav>
    </header>
  );
}
Header.propTypes =  {
  logolink:PropTypes.string,
  logoSrc:PropTypes.string
}
export default Header;
