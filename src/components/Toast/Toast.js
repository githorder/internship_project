import React from 'react';

import './Toast.css';

import union from './union.svg';
import ecl1 from './ecl1.svg';
import ecl2 from './ecl2.svg';
import fail from './fail.svg';
import success from './success.svg';
import close from './close.svg';

function Toast({ isValid, isSubmiting }) {
  return (
    <div className={isSubmiting ? 'toast_container' : 'hide'}>
      <div
        className="toast"
        style={
          isValid
            ? { background: '#b5ffa2', color: '#333' }
            : { background: '#F64B3C', color: '#fff' }
        }
      >
        <div className="wrapper">
          <div className="title">
            <span>{isValid ? 'Успешно!' : 'Что-то не так...'}</span>
            <img className="closen" src={close} alt="close" />
          </div>
          <p>
            {isValid
              ? 'Спасибо за отзыв о нашей компании :)'
              : 'Не получилось отправить отзыв. Попробуйте еще раз!'}
          </p>
        </div>
        <img src={union} alt="union" className="union" />
        <img src={ecl1} alt="ecl1" className="ecl1" />
        <img src={ecl2} alt="ecl2" className="ecl2" />
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
