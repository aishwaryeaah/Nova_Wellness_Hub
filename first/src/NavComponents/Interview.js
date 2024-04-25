import React, { useState, useEffect } from 'react';
import './Interview.css'; // Import your CSS file for styling
import image1 from './Images/1.png';
import image2 from './Images/2.png';
import image3 from './Images/3.png';
import image4 from './Images/4.png';
import image5 from './Images/5.png';
import image6 from './Images/6.png';

function Interview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="app" style={{marginTop:'20px'}}>
      <div className="text-section" style={{ width: '35%', paddingRight:'30px' }}>
      <h4 style={{ color: '#333', fontFamily: "Rubik, sans-serif", letterSpacing:'3px', marginBottom: '5px', fontSize: '1.5rem', fontWeight: 600}}>INTERVIEW</h4>
        <h3  style={{ color: '#333', fontSize: '2rem', fontWeight: '700', fontFamily: 'Anta, san-serif', letterSpacing:'2px',fontStyle: 'normal' }}>Sarah's Menstrual Struggles</h3>
        <p style={{ color: '#333', fontFamily: "Rubik, sans-serif", fontWeight: '400',fontStyle: 'normal', lineHeight: '1.6', textAlign:'justify'}}>
        Sarah shares her candid experiences dealing with menstrual discomfort, 
          discussing product preferences and her personal journey with managing the 
          challenges of menstruation.
        </p>
        </div>

      <div className="slider-section">
        <button className="arrow-btn prev-btn" onClick={goToPrevSlide}>
          <span>{'<'}</span>
        </button>
        <div className="slide-wrapper">
          <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <img key={index} src={slide} alt={`Slide ${index}`} className="slide" />
            ))}
          </div>
        </div>
        <button className="arrow-btn next-btn" onClick={goToNextSlide}>
          <span>{'>'}</span>
        </button>
      </div>
    </div>
  );
}

export default Interview;
