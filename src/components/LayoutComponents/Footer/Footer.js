import React from 'react';

import './Footer.css';
import telegram from './telegram.svg';
import vk from './vk.svg';
import reddit from './reddit.svg';

function Footer() {
  return (
    <div className="footer">
      <h3>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</h3>
      <div className="socialmedia_container">
        <img src={vk} alt="vk" />
        <img src={reddit} alt="reddit" />
        <img src={telegram} alt="telegram" />
      </div>
    </div>
  );
}

export default Footer;
