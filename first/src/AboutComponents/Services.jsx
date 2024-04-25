import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Footer from "../NavComponents/DashFooter";
import './AboutApp.css';
import indraniImage from "./images/indrani.jpg";
import Ritisha from "./images/ritisha.jpg";
import Suprava from "./images/suprava.jpg";
import Harshita from './images/harshita.jpg';
import aish from './images/aish.jpeg';
import reet from './images/reet.jpeg';
import sir from './images/sir.jpeg';



function Services() {
  return (
    <div>
      <div className="about-dashboard">
        
        <div className="container">
          <div className="col-md-12 text-center heading" style={{ backgroundColor: "#FFE28A", padding: '20px', borderRadius: '10px', animation: 'fadeIn 2s ease-out' }}>
            <h2 style={{ color: '#333', fontFamily: 'Anta, san-serif', letterSpacing: '3px' }}>Meet the Team Behind Nova Wellness</h2>
            <h4 style={{ fontFamily: "Anta, san-serif", fontSize: '1rem', letterSpacing: '2px', marginTop: '-10px', color: '#333' }}>Empowering Women, Building Community</h4>

            <p className="paragraph" style={{ color: '#333', paddingBottom: '20px' }}>
              Welcome to our vibrant online community dedicated to women's empowerment and education.
              At Nova Wellness, we're more than just a website - we're a team of passionate individuals
              committed to making a difference. Founded by final year engineering students in the Computer
              Science and Engineering (CSE) department, from KIIT University, our platform is the culmination of our shared vision
              to create a space where women can thrive, connect, and learn.
              <br /><br />
              Under the expert guidance of Professor Ajit Kumar Pasayat, our mentor and guide,
              we've poured our hearts and minds into building a platform that empowers women with
              knowledge and support. Each member of our team brings unique skills and perspectives
              to the table, united by our dedication to the cause. Join us on this journey as we expand Nova Wellness, empowering women to prioritize their
              health and build a brighter future. Together, there's no limit to what we can achieve.
            </p>
          </div>
          
          <h2 style={{
            marginTop:"50px",
            marginBottom: "-20px",
            fontFamily: 'Anta, sans-serif', /* Change font family for headings */
            fontSize: "32px", /* Increase font size */
            textAlign: "center",
          }}>Meet The Team</h2>

          <div className="row justify-content-center">
            {/* Teacher Section */}
            <div className="container">
              <div className="teacher">
              <img src={sir} className="team-img" alt="pic" /> 
                <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1px' }}>Prof. Ajit Kumar Pasayat</h3>
                <div className="team-info"><h4>Assistant Professor</h4></div>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><FaTwitter /></a></li>
                  <li><a href="https://www.instagram.com/ajitkpasayat" className="instagram"><FaInstagram /></a></li>
                  <li><a href="#" className="facebook"><FaFacebook /></a></li>
                </ul>
                <p>Prof. Ajit Kumar Pasayat is an Assistant Professor in the School of Computer Science Engineering at Kalinga Institute of Industrial Technology (KIIT), DU, India. 
                  <br></br>
                  He is an advocate for women's health and empowerment, believing that understanding menstruation is vital for all genders. He has encouraged and inspired the creation of Nova Wellness, a pioneering project dedicated to educating and empowering women about their bodies and health, aiming to redefine the narrative surrounding women's health by fostering a vibrant, 
                  inclusive, and supportive community where every woman feels valued, heard, and empowered to prioritize and advocate for her health and wellbeing. Nova Wellness offers comprehensive, accurate, and empowering information, fostering open dialogue, challenging stigmas, and contributing to a healthier, more equitable, and inclusive future for all women globally.</p>
              </div>
            </div>
                        {/* Second set of three team members */}
                        <div className="col-sm-6 col-md-4 mb-4">
              <div className="team-item">
              <img src={Ritisha} className="team-img" alt="pic" />                
                <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1px' }}>Ritisha Nanda</h3>
                <div className="team-info"><h4>Student</h4></div>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><FaTwitter /></a></li>
                  <li><a href="https://www.instagram.com/ritishaaa/" className="instagram"><FaInstagram /></a></li>
                  <li><a href="#" className="facebook"><FaFacebook /></a></li>
                </ul>
                <p>I'm Ritisha Nanda, deeply committed to advancing women's health and well-being. As the visionary behind Nova Wellness for Women, I strive to cultivate holistic solutions that empower and uplift. Together, we chart a transformative path toward comprehensive women's wellness. With a blend of innovation and compassion, I am dedicated to redefining the standards of women's healthcare, ensuring every woman thrives in body, mind, and spirit. Join me in this empowering journey towards holistic well-being.</p>
              </div>
            </div>
            {/* Team Item 5 */}
            <div className="col-sm-6 col-md-4 mb-4">
              <div className="team-item">
              <img src={aish} className="team-img" alt="pic" />                
                <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1px' }}>Aishwarya Basu</h3>
                <div className="team-info"><h4>Student</h4></div>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><FaTwitter /></a></li>
                  <li><a href="https://www.instagram.com/aaishwaryaaa/" className="instagram"><FaInstagram /></a></li>
                  <li><a href="#" className="facebook"><FaFacebook /></a></li>
                </ul>
                <p>I am a results-driven individual passionate about optimizing algorithms and developing intuitive web applications. Nova Wellness, is an online community dedicated to empowering women through medically verified content and interactive mental health quizzes. Together, we're creating a space where women can prioritize their health and well-being, fostering a supportive community and embracing a proactive approach to self-care.</p>
              </div>
            </div>
            {/* Team Item 6 */}
            <div className="col-sm-6 col-md-4 mb-4">
              <div className="team-item">
              <img src={Harshita} className="team-img" alt="pic" />                
                <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1px' }}>Harshita Singh</h3>
                <div className="team-info"><h4>Student</h4></div>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><FaTwitter /></a></li>
                  <li><a href="https://www.instagram.com/harsh_ita5489/" className="instagram"><FaInstagram /></a></li>
                  <li><a href="#" className="facebook"><FaFacebook /></a></li>
                </ul>
                <p>As a student in computer science and engineering, Nova Wellness holds immense significance to me. It's not just a website; it's a passion project where I combine my love for software development with my dedication to promoting women's health. Nova Wellness is my platform to create positive change, providing a space where women can connect, share, and empower each other on their health journeys. Join us as we make a difference together.</p>
              </div>
            </div>

            {/* First three team members */}
            <div className="col-sm-6 col-md-4 mb-4">
            <div className="team-item">
              <img src={indraniImage} className="team-img" alt="pic" />                
              <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1px' }}>Indrani Sarkar</h3>
                <div className="team-info"><h4>Student</h4></div>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><FaTwitter /></a></li>
                  <li><a href="https://www.instagram.com/desparicito/" className="instagram"><FaInstagram /></a></li>
                  <li><a href="#" className="facebook"><FaFacebook /></a></li>
                </ul>
                <p>A rookie with a passion for data analytics and data Science, excited to embark on this technical journey leveraging skills in python and SQL to delve into the realm of Storytelling through data. Nova Health for me is the new age platform educating empowering & women about their bodies along with their overall well being, it’s a celebration of the amount of power the ‘Yoni’ beholds and the love & care one deserves. Hence learning about her body is the best way to invest in her capital.</p>
              </div>
            </div>
            {/* Team Item 2 */}
            <div className="col-sm-6 col-md-4 mb-4">
              <div className="team-item">
              <img src={Suprava} className="team-img" alt="pic" />                
                <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1px' }}>Suprava Samal</h3>
                <div className="team-info"><h4>Student</h4></div>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><FaTwitter /></a></li>
                  <li><a href="https://www.instagram.com/__.suprava.___/" className="instagram"><FaInstagram /></a></li>
                  <li><a href="#" className="facebook"><FaFacebook /></a></li>
                </ul>
                <p>My expertise lies in both frontend and backend technologies, allowing me to create dynamic and engaging web applications. I am skilled in HTML, CSS, JavaScript for frontend development, and proficient in backend frameworks such as Node.js and php. I enjoy solving complex problems and implementing innovative solutions to create seamless user experiences.</p>
              </div>
            </div>
            {/* Team Item 3 */}
            <div className="col-sm-6 col-md-4 mb-4">
              <div className="team-item">
              <img src={reet} className="team-img" alt="pic" />                
                <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1px' }}>Reetika Samantra</h3>
                <div className="team-info"><h4>Student</h4></div>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><FaTwitter /></a></li>
                  <li><a href="https://www.instagram.com/ivory_tulip/" className="instagram"><FaInstagram /></a></li>
                  <li><a href="#" className="facebook"><FaFacebook /></a></li>
                </ul>
                <p>As a recent graduate, I am eager to launch my career in the field of software development. My technical skills encompass expertise in multiple programming languages, a thorough understanding of software design patterns, and strong problem-solving abilities.I see a chance to combine technology and healthcare with Nova Health, where I can help develop creative solutions that improve patient outcomes and care. This seems to be accordance with my enthusiasm for leveraging technology to improve people's lives in significant ways.</p>
              </div>
            </div>
      </div>
      </div>
        </div>
        <Footer />
    </div>
  );
}

export default Services;
