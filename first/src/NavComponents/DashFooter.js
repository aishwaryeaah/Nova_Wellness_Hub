// Footer.js

import React from 'react';
import './DashFooter.css'; // Correct the file path here if needed

function Footer() {
  return (
    <footer className="footer" style={{backgroundColor:'#333'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-section">
              <h5>About Us</h5>
              <p>Join our dynamic online platform exclusively for women, fostering community, empowerment, and education. Connect, share, and seek advice in our social media-like space. Explore our comprehensive "Learn" section featuring articles on women's health. Dive into real-life interviews on menstruation and take interactive quizzes on mental health. Empower women to thrive in a safe, informative, and uplifting environment.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-section">
              <h5>Contact Us</h5>
              <p>Email: user@novawellness.com</p>
              <p>Phone: +91-9437381404</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-section">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="https://www.instagram.com/periodsandchocolates">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-section">
              <h5>Disclaimer</h5>
              <p>This product is not intended to diagnose, treat, cure, or prevent any disease</p>
            </div>
          </div>
        </div>
      </div>
      {/* Straight Line */}
      <hr style={{ borderTop: '1px solid #fff', margin: '20px 0' }} />
      {/* Copyright Notice */}
      <div style={{ textAlign: 'center', fontSize: '0.8rem' }}>
        © 2024 NOVA WELLNESS PRIVATE LIMITED.
      </div>
    </footer>
  );
}

export default Footer;
