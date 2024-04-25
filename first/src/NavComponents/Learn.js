import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import articles from '../LearnComponents/data/articles';
import period from './Images/period.jpg';
import sleep from './Images/slep.jpg';
import body from './Images/body.jpg';
import medi from './Images/medi.jpg';
import cancer from './Images/cancer.jpg';
import comm from './Images/comm.jpg';
import './Learn.css'; // Import the CSS file

const DashLearn = () => {
  
  useEffect(() => {
    document.body.style.backgroundColor = '#FAF1DA'; // Set default background color
  }, []);
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
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    content: {
      zIndex: 2,
      fontFamily: 'Anta', // Changed to Georgia font
      fontSize: '50px',
      color: '#4E4637',
      position: 'relative', // Ensure it's above the overlay
    },
  };
  
    const [animationIndex, setAnimationIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
      const animationInterval = setInterval(() => {
        setAnimationIndex(prevIndex => (prevIndex + 1) % 3);
      }, 2000); // Adjust the interval duration as needed
  
      return () => clearInterval(animationInterval);
    }, []);
    
    
  return (
    <div style={{
      padding: '0 7%',
    }}>
      <div className="learn-dash-dashboard" style={{marginBottom:"40px", marginTop:'20px'}}>
        <div className="container">
          <div className="col-md-12 text-center heading" style={{ backgroundColor: "#F8AFA6", padding: '20px', borderRadius: '10px', animation: 'fadeIn 2s ease-out' }}>
            <h2 style={{ color: '#333', letterSpacing:'3px' }}>LEARN</h2>
            <h4 style={{ fontFamily: "Anta, san-serif", fontSize: '1rem', letterSpacing:'2px',  marginTop: '-10px', color: '#333' }}>Unlock the Secrets to Women's Health and Wellness</h4>
            <p className="paragraph" style={{ color: '#333', paddingBottom: '20px' }}>
            Unlock the secrets to women's health and wellness through Nova Wellness's Learn section. Here, women embark on a journey of self-discovery and empowerment, armed with comprehensive resources 
            tailored to their unique health needs. From understanding menstrual health to nurturing mental well-being, this curated space offers insightful articles and expert guidance, guiding women 
            towards informed decisions and holistic wellness.

              <br/><br/>
              Delve into a plethora of topics, from reproductive health to self-care practices, presented in an accessible and engaging format. Through informative articles and personal stories, gain a deeper 
              understanding of your body and practical strategies to enhance overall well-being. Nova Wellness fosters a supportive community where women can connect, share experiences, and find solidarity in 
              their health journey, amplifying diverse voices to cultivate a culture of openness and empowerment.
            </p>
          </div>
        </div>
      </div>

    <div className="dash-container">
      <div className="dash-row">
        <DashLearnImage
          imageSrc={sleep}
          title="Techniques of Improving Sleep Quality"
          text="Consistent schedule, comfortable environment. Read More ➜"
          link="/mental_health/4"
          bodyColor="#86B971"
        />
        <DashLearnImage
          imageSrc={body}
          title="Understanding Female Reproductive Anatomy"
          text="Ovaries, fallopian tubes, uterus, vagina. Read More ➜"
          link="/sexual_health/1"
          bodyColor="#DEE8C2"
        />
        <DashLearnImage
          imageSrc={period}
          title="Exploring Irregular Menstruation Pattern"
          text="Hormonal, stress, lifestyle, medical, irregular. Read More ➜"
          link="/menstrual_health/3"
          bodyColor="#D26D50"
        />
      </div>
      <div className="dash-row">
        <DashLearnImage
          imageSrc={cancer}
          title="Understanding Breast Cancer Risk Factors"
          text="Genetics, age, hormones, lifestyle, environment. Read More ➜"
          link="/cancer/1"
          bodyColor="#86B971"
        />
        <DashLearnImage
          imageSrc={comm}
          title="Building and Maintaining Healthy Relationships"
          text="Communication, trust, respect, boundaries, empathy. Read More ➜"
          link="/resilience/6"
          bodyColor="#DEE8C2"
        />
        <DashLearnImage
          imageSrc={medi}
          title="Understanding Benefits of Meditation and Mindfulness"
          text="Stress reduction, focus, emotional balance. Read More ➜"
          link="/wellness/5"
          bodyColor="#D26D50"
        />
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
    <Link to="/learn">
      <button className={isHovered ? 'dash-learn-button hovered' : 'dash-learn-button'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        LEARN MORE
        </button>
      </Link>

      </div>
    </div>
  );
}

const DashLearnImage = ({ imageSrc, title, text, link, bodyColor }) => {
  const handleMouseEnter = () => {
    document.body.style.transition = 'background-color 0.3s ease'; // Smooth transition
    document.body.style.backgroundColor = bodyColor; // Change body color when image is hovered
  };

  const handleMouseLeave = () => {
    document.body.style.transition = 'background-color 0.3s ease'; // Smooth transition
    document.body.style.backgroundColor = '#FAF1DA';
  };

  return (
    <div className="dash-learn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dash-learn__content">
        <h3 className="dash-learn__title" style={{ fontFamily: 'Anta, san-serif' }}>
          {title}
        </h3>
        <p className="dash-learn__text" style={{ fontFamily: 'Bona Nova, serif', letterSpacing:'2px' }}>{text}</p>
        <a href={link} className="dash-learn__link">
          <span>Read More</span>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>        
        </a>
      </div>
      <img src={imageSrc} alt="Random Image" />
    </div>
  );
}

export default DashLearn;
