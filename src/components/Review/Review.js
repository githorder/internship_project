import React from 'react';

import './Review.css';
import camera from './Camera.svg';

function Review({ name, date, description }) {
  return (
    <div className="review_container">
      <div className="review_profile">
        <div className="review_profile_details">
          <div className="review_profile_img">
            <img src={camera} alt="camera" />
          </div>
          <span className="review_profile_name">{name}</span>
        </div>
        <span className="review_profile_date">{date}</span>
      </div>
      <p className="review_description">{description}</p>
    </div>
  );
}

export default Review;
