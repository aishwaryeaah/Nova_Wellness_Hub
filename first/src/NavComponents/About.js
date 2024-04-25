import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './About.css'; 

const DashAbout = () => {
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
      <div style={{ position: 'relative', width: '60%', overflow: 'hidden' }}>
        <div 
          style={{ 
            border: '1px solid #6D2D4A', 
            height: '400px',
            position: 'relative', 
            overflow: 'hidden',
          }}
        >
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/846893176467141.64c7a24b28f69.png" 
            alt="Your Image" 
            style={{ 
              width: '100%', 
              height: '100%', 
              margin: 0,
              objectFit: 'cover' 
            }} 
          />
          <div 
            style={{
              position: 'absolute',
              bottom: isHovered ? 0 : '-100%',
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              transition: 'bottom 0.5s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Center the artist details
              justifyContent: 'center', // Center vertically
              padding: '20px',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          </div>
        </div>
      </div>
      <div style={{ width: '35%' }}>
        <h3 style={{ color: '#333',  fontFamily: "Rubik, sans-serif", letterSpacing:'3px',marginBottom: '5px', fontSize: '1.5rem', fontWeight: 600 }}>ABOUT</h3>
        <h1 style={{ color: '#333', fontSize: '2rem', fontWeight: '700',letterSpacing:'2px', fontFamily: 'Anta, san-serif',fontStyle: 'normal'}}>Explore, Engage, Rise.</h1>
        <p style={{ color: '#333', fontFamily: "Rubik, sans-serif", fontWeight: '400',fontStyle: 'normal', lineHeight: '1.6' }}>We’re a women-centric company focused on creating healthcare products and curating scientifically backed information for you.</p>
        <Link to="/about"> {/* Wrap button with Link component */}
          <button className={isHovered ? 'button hovered' : 'button'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            MEET THE TEAM
          </button>
        </Link>
      </div>
    </div>
    
    
  );
};

export default DashAbout;
