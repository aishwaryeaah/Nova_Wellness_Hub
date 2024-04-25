import React, { useState, useEffect, useRef } from 'react';

function Vara() {
  const [isVisible, setIsVisible] = useState(false);
  const varaRef = useRef(null);

  useEffect(() => {
    const handleVisibility = () => {
      const topPos = varaRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (topPos < windowHeight * 0.75 && topPos > -windowHeight * 0.25) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Call handleVisibility when component mounts to check visibility on page load
    handleVisibility();

    // Call handleVisibility when scrolling
    window.addEventListener('scroll', handleVisibility);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleVisibility);
  }, []);

  return (
    <div ref={varaRef} style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <header style={{ padding: '20px', textAlign: 'center', fontFamily: 'Anta, san-serif', overflow: 'hidden' }}>
        <h1 style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-100vw)', transition: 'transform 2s', display: 'inline-block', color:'#333'}}>CURIOUS SHE , </h1>
        <h1 style={{ transform: isVisible ? 'translateX(0)' : 'translateX(100vw)', transition: 'transform 2s', display: 'inline-block', marginLeft: '10px', color:'#333' }}>CONFIDENT SHE</h1>
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1, transition: 'transform 1s', transform: isVisible ? 'translateY(0)' : 'translateY(-100vh)' }}>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/b44073102680611.5f4bb4f87274b.png" 
          alt="Image 1" style={{ maxHeight: '50vh', transitionDelay: '0.5s' }}
        />
      </div>
    </div>
  );
}

export default Vara;
