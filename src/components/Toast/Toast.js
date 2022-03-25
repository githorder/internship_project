import React from 'react';

import './Toast.css';

import green from './green.svg';
import red from './red.svg';
import fail from './fail.svg';
import success from './success.svg';
import close from './close.svg';
import closew from './closew.svg';

function Toast({ isValid, isSubmiting }) {
  return (
    <div className={isSubmiting ? 'toast_container' : 'hide'}>
      <div className="relative">
        <div
          className="toast"
          style={
            isValid
              ? { background: '#b5ffa2', color: '#333' }
              : { background: '#F64B3C', color: '#fff' }
          }
        >
          <div className="wrapper">
            <div className="title_container">
              <span>{isValid ? 'Успешно!' : 'Что-то не так...'}</span>
              <img
                className="closen"
                src={isValid ? close : closew}
                alt="close"
              />
            </div>
            <p>
              {isValid
                ? 'Спасибо за отзыв о нашей компании :)'
                : 'Не получилось отправить отзыв. Попробуйте еще раз!'}
            </p>
          </div>
        </div>
        <img src={isValid ? green : red} alt="bubbles" className="bubbles" />
        <img
          className="successOr"
          src={isValid ? success : fail}
          alt="succes or fail"
        />
      </div>
    </div>
  );
}

export default Toast;
