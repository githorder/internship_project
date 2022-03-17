import React from 'react';

import './Main.css';
import Title from '../../Title/Title';
import Bio from '../../Bio/Bio';
import ReviewsBlock from '../../ReviewsBlock/ReviewsBlock';

function Main() {
  return (
    <div className="main">
      <Title />
      <Bio />
      <ReviewsBlock />
    </div>
  );
}

export default Main;
