import React from 'react';
import './footer.css'

function footer(props) {
  return (
    <div className="footer">
      <img src={props.logoSrc} alt="Logo" className="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default footer;