import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizDash.css'; // Import your CSS file for component-specific styles
import Footer from "../NavComponents/DashFooter.js";

const QuizDash = () => {
  const quizRef = useRef(null);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (quizRef.current) {
        const introHeight = document.querySelector('.intro-container')?.offsetHeight || 0;
        const quizTop = quizRef.current.offsetTop;
        const quizBottom = quizTop + quizRef.current.offsetHeight;

        const scrollPosition = window.scrollY + window.innerHeight;

        setShowScrollUp(scrollPosition > introHeight);
        setShowScrollDown(scrollPosition < quizBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="quiz-dashboard">
        <div className="container">
          <div className="col-md-12 text-center heading" style={{ backgroundColor: "#F6C2B3", padding: '20px', borderRadius: '10px', animation: 'fadeIn 2s ease-out' }}>
            <h2 style={{ color: '#333', letterSpacing:'3px',  }}>Elevate Your Well-Being</h2>
            <h4 style={{ fontFamily: "Anta, san-serif", fontSize: '1rem', letterSpacing:'2px', marginTop: '-10px', color: '#333' }}>Interactive Mental Health Quizzes</h4>
            <p className="paragraph" style={{ color: '#333', paddingBottom: '20px' }}>
            Welcome to our dedicated space for nurturing mental well-being through interactive quizzes. 
            At Nova Wellness, we recognize that mental health is just as important as physical health, 
            and we're committed to providing accessible resources to support your journey towards 
            greater well-being. Our quizzes cover mental health conditions, offering personalized insights to empower your mental wellness.
              <br/><br/>
              Explore our curated selection of quizzes, each designed to provide valuable insights and 
              foster self-awareness. Whether you're curious about depression (assessed through the PHQ-9), 
              generalized anxiety disorder (GAD-7), insomnia, 
              or bipolar disorder, our quizzes offer a user-friendly and informative experience. 
              Join us in prioritizing mental health and embracing a proactive approach to self-care. 
              Our interactive quizzes are here to support you on your journey towards greater well-being, 
              offering guidance, validation, and empowerment every step of the way. 
            </p>
          </div>
          <div ref={quizRef} className="quiz-container">

            <div className="quiz-box" style={{backgroundColor: "#FB6B44"}}>
              <h3>Patient Health Questionnaire</h3>
              <p>The PHQ-9 quiz is a widely used tool in healthcare, designed to screen for 
                symptoms of depression and assess their severity through nine questions.</p>
              <Link to="/phq9">Take Quiz</Link>
            </div>

            <div className="quiz-box" style={{backgroundColor: "#68A0D5"}}>
              <h3>Generalized Anxiety Disorder</h3>
              <p>The GAD-7 quiz is a brief self-assessment tool designed to measure the severity 
                of generalized anxiety disorder symptoms.</p>
              <Link to="/gad7">Take Quiz</Link>
            </div>
            
            <div className="quiz-box" style={{backgroundColor: "#FCAC94"}}>
              <h3>Insomnia Severity Index Questionnaire</h3>
              <p>The Insomnia Severity Index (ISI) quiz evaluates sleep difficulties 
                based on seven questions, offering guidelines for scoring and interpretation.</p>
              <Link to="/isi">Take Quiz</Link>
            </div>
            <div className="quiz-box" style={{backgroundColor: "#044189"}}>
              <h3>Mood Disorder Questionnaire</h3>
              <p>The MDQ quiz assesses potential symptoms 
                of manic-depressive illness, aiding in determining the 
                need for further medical evaluation.</p>
              <Link to="/mdq">Take Quiz</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default QuizDash;
