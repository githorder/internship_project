import React from 'react';

import './Logo.css';
import logo1 from './logo1.svg';
import logo2 from './logo2.svg';

function Logo() {
  return (
    <div className="logo_container">
      <img className="logo_img" src={logo1} alt="logo" />
      <img className="logo_img" src={logo2} alt="logo" />
    </div>
  );
}

export default Logo;
