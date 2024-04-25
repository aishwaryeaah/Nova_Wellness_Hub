import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    overflow: 'hidden', // Ensure the background doesn't overflow
    backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/max_632/1010f9102680611.5f4bc88b07ff7.gif')`, // Background image
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the image
    backgroundAttachment: 'fixed', // Keep the background fixed
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    //backgroundColor: 'rgba(246, 240, 226, 0.6)', // Dark semi-transparent background
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    fontFamily: 'Anta', // Changed to Georgia font
    fontSize: '50px',
    color: '#333',
    position: 'relative', // Ensure it's above the overlay
  },
};

const SlideShow = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationIndex(prevIndex => (prevIndex + 1) % 3);
    }, 2000); // Adjust the interval duration as needed

    return () => clearInterval(animationInterval);
  }, []);

  const words = ["Bodies.", "Health Concerns.", "Advocacy." /*"Nurture an inclusive environment for exchanging insights and stories."*/];

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> {/* Dark semi-transparent overlay */}
      <div style={{ position: 'relative', zIndex: 2, fontFamily: "Rubik, sans-serif", fontWeight: 400, marginBottom: '20px', fontSize: '20px', textAlign: 'right', marginLeft: '300px' }}>
        <h3 style={{ marginTop: '-40px', letterSpacing:'3px', textTransform: 'uppercase', lineHeight: '1.6' }}> {/* Adjusting the margin top */}
          DEDICATED TO<br />EDUCATING AND<br />EMPOWERING WOMEN
        </h3>
        <div className="animation" style={{ marginTop: '-10px', letterSpacing:'2px', position: 'relative', fontFamily: "Rubik, sans-serif", fontWeight: 400, fontStyle: 'italic', textAlign: 'right', wordWrap: 'break-word' }}>
          <div className="animation-text" style={{ position: 'absolute', top: 'calc(50% + 30px)', right: '20px', transform: 'translate(0, -50%)', opacity: animationIndex === 0 ? 1 : 0, transition: 'opacity 0.5s' }}>{words[0]}</div>
          <div className="animation-text" style={{ position: 'absolute', top: 'calc(50% + 30px)', right: '20px', transform: 'translate(0, -50%)', opacity: animationIndex === 1 ? 1 : 0, transition: 'opacity 0.5s' }}>{words[1]}</div>
          <div className="animation-text" style={{ position: 'absolute', top: 'calc(50% + 30px)', right: '20px', transform: 'translate(0, -50%)', opacity: animationIndex === 2 ? 1 : 0, transition: 'opacity 0.5s' }}>{words[2]}</div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
