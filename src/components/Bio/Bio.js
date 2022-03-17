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
            <span className="bio_namebirth_name">Диёр Байназаров</span>
            <span className="bio_namebirth_birth">29.09.2000</span>
          </div>

          <ul className="bio_details_container">
            <li className="bio_details">
              <span>Город:</span> Ташкент
            </li>
            <li className="bio_details">
              <span>Пол:</span> Мужчина
            </li>
            <li className="bio_details">
              <span>Возраст:</span> 21
            </li>
          </ul>

          <p className="bio_description">
            <span>О себе:</span> Всем привет! Меня зовут Яна, мне 22 года, я
            студент. Учусь на программиста, но хочу стать продуктовым
            аналитиком. Недавно, например, я начала проходить курс на известной
            платформе, который поможет мне устроиться на работу моей мечты!
          </p>
          <div className="bio_pet">
            <img className="bio_pet_img" src={petPucture} alt="pet" />
            <p>
              <span>Домашнее животное:</span>есть
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
