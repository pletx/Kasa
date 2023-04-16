import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';

function footer(props) {
  return (
    <footer className="footer">
      <img src={props.logoSrc} alt="Logo" className="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
footer.propTypes = {
  logoSrc:PropTypes.string,
}
export default footer;