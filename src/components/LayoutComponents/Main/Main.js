import React from 'react';

import './Main.css';
import Title from '../../Title/Title';
import Bio from '../../Bio/Bio';
import ReviewsBlock from '../../ReviewsBlock/ReviewsBlock';

function Main({ showForm }) {
  return (
    <div className="main">
      <Title />
      <Bio />
      <ReviewsBlock showForm={showForm} />
    </div>
  );
}

export default Main;
