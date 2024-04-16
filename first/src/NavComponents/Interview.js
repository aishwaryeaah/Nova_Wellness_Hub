// Interview.js
import React, { useState } from 'react';
import './Interview.css';

const slides = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
  { id: 4, content: 'Slide 4' },
  { id: 5, content: 'Slide 5' }
];

const Interview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="interview">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <button onClick={goToPrevSlide} className="prev">&#10094;</button>
      <button onClick={goToNextSlide} className="next">&#10095;</button>
      <div className="pagination">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={index === currentSlide ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Interview;
