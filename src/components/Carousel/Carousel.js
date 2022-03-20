import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import './Carousel.css';
import left from './left.svg';
import right from './right.svg';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel_item" style={{ width }}>
      {children}
    </div>
  );
};

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateActiveIndex = (newActiveIndex) => {
    if (newActiveIndex < 0) {
      newActiveIndex =
        React.Children.count(children) / (window.innerWidth <= 1245 ? 1 : 2) -
        1;
    } else if (
      newActiveIndex >=
      React.Children.count(children) / (window.innerWidth <= 1245 ? 1 : 2)
    ) {
      newActiveIndex = 0;
    }

    setActiveIndex(newActiveIndex);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!paused) {
        updateActiveIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateActiveIndex(activeIndex + 1),
    onSwipedRight: () => updateActiveIndex(activeIndex - 1),
  });

  return (
    <div className="carousel">
      <div
        {...handlers}
        className="inner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            width: window.innerWidth <= 1245 ? '100%' : '50%',
          });
        })}
      </div>

      <div className="indicators">
        <div className="page_container">
          {React.Children.map(children, (child, index) => {
            if (
              window.innerWidth <= 1245 ||
              (window.innerWidth > 1245 && index <= 1)
            ) {
              return (
                <span
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => updateActiveIndex(index)}
                ></span>
              );
            }
          })}
        </div>
        <div className="scroll_container">
          <button
            className="arrow_left_btn"
            onClick={() => updateActiveIndex(activeIndex - 1)}
          >
            <img src={left} alt="left" />
          </button>
          <button
            className="arrow_left_btn"
            onClick={() => updateActiveIndex(activeIndex + 1)}
          >
            <img src={right} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
