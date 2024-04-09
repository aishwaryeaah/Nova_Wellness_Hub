import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizDash.css'; // Import your CSS file for component-specific styles

const QuizDash = () => {
  const quizRef = useRef(null);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (quizRef.current) {
        const introHeight = document.querySelector('.intro-container').offsetHeight;
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
    quizRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="quiz-dashboard">
      <div className="intro-container">
      <p>
          Assessing mental health concerns is essential for providing comprehensive healthcare, and various screening tools have been developed to aid in this process. In this document, we present several widely utilized questionnaires for evaluating common mental health conditions, such as Attention-Deficit/Hyperactivity Disorder (ADHD), insomnia, anxiety, depression, and alcohol use disorders. These tools are designed to be completed by patients, offering structured assessments of symptoms over defined time periods, typically the past few weeks or months. Each questionnaire serves as a valuable resource for healthcare professionals to initiate discussions with patients, assess symptom severity, and determine the need for further evaluation or intervention.
        </p>
        <p>
          While these screening tools can help identify potential mental health issues, it's important to recognize that they are not diagnostic instruments on their own. A comprehensive clinical assessment, including a thorough medical history, physical examination, and possibly additional diagnostic tests, may be necessary to establish a formal diagnosis and develop an appropriate treatment plan. By integrating these screening tools into their practice, healthcare professionals can gather valuable information about their patients' mental health status, identify potential areas of concern, and tailor treatment plans accordingly. These resources aim to enhance the recognition and management of mental health disorders in primary care and other healthcare settings, ultimately improving patient outcomes and quality of life. We encourage healthcare professionals to utilize these tools as part of a comprehensive approach to mental health assessment and management.
        </p>
        <button className="scroll-button down" onClick={scrollToQuiz} style={{ display: showScrollDown ? 'block' : 'none' }}>↓</button>
      </div>
      <div ref={quizRef} className="quiz-container">
        <div className="quiz-box">
          <Link to="/phq9">PHQ-9 Quiz</Link>
        </div>
        <div className="quiz-box">
          <Link to="/phq9">PHQ-9 Quiz</Link>
        </div>
        <div className="quiz-box">
          <Link to="/phq9">PHQ-9 Quiz</Link>
        </div>
        <div className="quiz-box">
          <Link to="/phq9">PHQ-9 Quiz</Link>
        </div>
        <div className="quiz-box">
          <Link to="/phq9">PHQ-9 Quiz</Link>
        </div>
        <div className="quiz-box">
          <Link to="/phq9">PHQ-9 Quiz</Link>
        </div>
        {/* Add more quiz boxes here */}
      </div>
      <button className="scroll-button up" onClick={scrollToTop} style={{ display: showScrollUp ? 'block' : 'none' }}>↑</button>
    </div>
  );
};

export default QuizDash;
