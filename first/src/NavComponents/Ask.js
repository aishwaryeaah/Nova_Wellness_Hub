import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Ask.css'; // Assuming your CSS file is named Ask.css

const Ask = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      height: '100vh', 
      padding: '0 7%', 
      backgroundColor : '#FAF1DA',
    }}>
      <div style={{ width: '35%' }}>
        <h4 style={{ color: '#333',  fontFamily: "Rubik, sans-serif",letterSpacing:'3px', marginBottom: '5px', fontSize: '1.5rem', fontWeight: 600}}>COMMUNITY</h4>
        <h3  style={{ color: '#333', fontSize: '2rem', fontWeight: '700', letterSpacing:'2px',fontFamily: 'Anta, san-serif',fontStyle: 'normal' }}>Ask, Learn, Empower.</h3>
        <p style={{ color: '#333', fontFamily: "Rubik, sans-serif", fontWeight: '400',fontStyle: 'normal', lineHeight: '1.6' }}>Hey ladies! Explore your health journey fearlessly. Ask about wellness, curiosity, and more. Let's empower each other to thrive!</p>
        <Link to="/login"> {/* Wrap button with Link component */}
          <button className={isHovered ? 'button hovered' : 'button'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            ASK AWAY!
          </button>
        </Link>
      </div>
      <div style={{ position: 'relative', width: '60%', overflow: 'hidden' }}>
        <div style={{ 
            border: '1px solid #6D2D4A', 
            height: '400px',
            position: 'relative', 
            overflow: 'hidden',
            boxShadow: '0px 5px 10px rgba(251, 107, 68, 0.5)'
        }}>
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/90a3b2130194683.617aaea8892fa.png" 
            alt="Your Image" 
            style={{ 
              width: '100%', 
              height: '100%', 
              margin: 0,
              objectFit: 'cover',
              boxShadow: 'inset 0px 0px 20px rgba(251, 107, 68, 0.5)'
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Ask;
