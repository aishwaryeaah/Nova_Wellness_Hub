import React from 'react';
import './GetInTouch.css'; // Import CSS file for styling
import image1 from './InstaImages/1.jpeg';
import image2 from './InstaImages/2.png';
import image3 from './InstaImages/3.jpeg';
import image4 from './InstaImages/4.jpeg';
import image5 from './InstaImages/5.jpeg';
import image6 from './InstaImages/6.jpeg';
import image7 from './InstaImages/7.jpeg';
import image8 from './InstaImages/8.png';

// Import other images as needed

const GetInTouch = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    // Add other images here
  ];

  // Duplicate images to ensure continuous scrolling
  const duplicatedImages = [...images, ...images];

  return (
    <div className="get-in-touch">
      <h2 style={{ color: '#333', fontFamily: "Anta, sans-serif", letterSpacing: '2px', marginBottom: '5px', fontSize: '2rem', fontWeight: 600 }}>
        <a href="https://www.instagram.com/periodsandchocolates" target="_blank" rel="noopener noreferrer" className="instagram-link" style={{textDecoration:"none", color: "#333"}}>FOLLOW US ➜</a>
      </h2>
      <div className="train-container">
        <div className="train">
          {duplicatedImages.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} style={{ marginRight: '20px' }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
