import React from 'react';

import './Bio.css';
import bioPicture from './portrait.jpg';
import petPucture from './pet.svg';

function Bio() {
  return (
    <div className="bio_container">
      <div className="bio_img_container">
        <img className="bio_img" src={bioPicture} alt="bio" />
      </div>

      <div className="bio_content">
        <div className="bio_content_wrapper">
          <div className="bio_namebirth">
            <span className="bio_namebirth_name">Diyor Baynazarov</span>
            <span className="bio_namebirth_birth">29.09.2000</span>
          </div>

          <ul className="bio_details_container">
            <li className="bio_details">
              <span>City:</span> Tashkent
            </li>
            <li className="bio_details">
              <span>Gender:</span> Make
            </li>
            <li className="bio_details">
              <span>Age:</span> 21
            </li>
          </ul>

          <p className="bio_description">
            Hello there! My name is Diyor and I am 22 year old student living in
            Tashkent. I study at INHA University in Tashkent (IUT) and willing
            to become a professional fullstack developer in about 2 years. Very
            curious about physics and math, fictional liturature and physical
            training.
          </p>
          <div className="bio_pet">
            <img className="bio_pet_img" src={petPucture} alt="pet" />
            <p>
              <span>Domestic pet:</span>Nope
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
