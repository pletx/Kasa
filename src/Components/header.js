import React from 'react';
import './header.css'

function Header(props) {
  return (
    <div className="header">
      <img src={props.logoSrc} alt="Logo" className="logo" />
      <nav>
          <a href="./">Accueil</a>
          <a href="./APropos">À propos</a>
      </nav>
    </div>
  );
}

export default Header;
