import React from 'react';

import './ReviewsBlock.css';
import plus from './add-line.svg';
import left from './left.svg';
import right from './right.svg';
import Review from '../Review/Review';

const reviewsList = [
  {
    name: 'Буба Бубенцов',
    date: '08.01.2022',
    description:
      'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.',
  },

  {
    name: 'Илья Анташкевич',
    date: '08.01.2022',
    description:
      'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.',
  },
  {
    name: 'Буба Бубенцов',
    date: '08.01.2022',
    description:
      'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.',
  },
  {
    name: 'Буба Бубенцов',
    date: '08.01.2022',
    description:
      'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.',
  },
];

function ReviewsBlock() {
  const reviewsComp = new Array(4).fill(0).map((rev, index) => {
    return (
      <Review
        key={index + rev}
        name={reviewsList[index].name}
        date={reviewsList[index].date}
        description={reviewsList[index].description}
      />
    );
  });

  return (
    <div className="reviews_section">
      <div className="reviews_block">
        <div className="reviews_header">
          <h2>Отзывы</h2>
          <button>
            <img src={plus} alt="plus" />
            <span className="hide_sm">Добавить отзыв</span>
          </button>
        </div>
        <div className="reviews_container">{reviewsComp}</div>
        <div className="page_container">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="scroll_container">
        <button className="arrow_left_btn">
          <img src={left} alt="left" />
        </button>
        <button className="arrow_right_btn">
          <img src={right} alt="right" />
        </button>
      </div>
    </div>
  );
}

export default ReviewsBlock;
