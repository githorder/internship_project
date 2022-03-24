import React from 'react';

import './ReviewsBlock.css';
import plus from './add-line.svg';

import Review from '../Review/Review';
import Carousel, { CarouselItem } from '../Carousel/Carousel';

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

function ReviewsBlock({ showForm }) {
  const reviewsComponents = new Array(4).fill(0).map((rev, index) => {
    return (
      <CarouselItem key={index + rev}>
        <Review
          key={index + rev}
          name={reviewsList[index].name}
          date={reviewsList[index].date}
          description={reviewsList[index].description}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="reviews_section">
      <div className="reviews_block">
        <div className="reviews_header">
          <h2>Отзывы</h2>
          <button onClick={showForm}>
            <img src={plus} alt="plus" />
            <span className="hide_sm">Добавить отзыв</span>
          </button>
        </div>
        <div className="reviews_container">
          <Carousel>{reviewsComponents}</Carousel>
        </div>
      </div>
    </div>
  );
}

export default ReviewsBlock;
