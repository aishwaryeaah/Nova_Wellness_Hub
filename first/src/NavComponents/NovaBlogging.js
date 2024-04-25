import React, { useState } from 'react';
import NovaBloggingImage from './Images/NovaBlogging.png'; // Adjust the image path and name if needed

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
    backgroundImage: `url(${NovaBloggingImage})`, // Corrected backgroundImage syntax
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the image
    backgroundAttachment: 'fixed', // Keep the background fixed
    marginTop:'20px'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(246, 240, 226, 0.7)', // Dark semi-transparent background
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    fontFamily: 'Anta', // Changed to Georgia font
    fontSize: '50px',
    color: '#333',
    position: 'relative', // Ensure it's above the overlay
    marginTop: '20px', // Adjusted margin-top
  },
};

const NovaBlogging = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> {/* Dark semi-transparent overlay */}
      <div style={styles.content}> {/* Adjusted margin-top */}
        <h3 style={{ letterSpacing: '3px', textTransform: 'uppercase', lineHeight: '1.6', margin: '0' }}>
          Nova Blogging
        </h3>
        <button
          className={isHovered ? 'button hovered' : 'button'}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: 'transparent', // Original background transparent
            border: "2px solid #FB6B44",
            color: '#FB6B44', // White text color
            padding: '10px 20px', // Padding for the button
            fontSize: '18px', // Font size for the button text
            cursor: 'pointer', // Cursor style on hover
          }}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default NovaBlogging;
