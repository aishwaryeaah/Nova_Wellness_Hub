import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MDQ.css'; // Import CSS for styling

const MDQ = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(13).fill(0));
  const [totalScore, setTotalScore] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    "Has there ever been a period of time when you were not your usual self and you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?",
    "Has there ever been a period of time when you were not your usual self and you were so irritable that you shouted at people or started fights or arguments?",
    "Has there ever been a period of time when you were not your usual self and you felt much more self-confident than usual?",
    "Has there ever been a period of time when you were not your usual self and you got much less sleep than usual and found you didn’t really miss it?",
    "Has there ever been a period of time when you were not your usual self and you were much more talkative or spoke faster than usual?" ,
    "Has there ever been a period of time when you were not your usual self and thoughts raced through your head or you couldn’t slow your mind down?",
    "Has there ever been a period of time when you were not your usual self and you were so easily distracted by things around you that you had trouble concentrating or staying on track?",
    "Has there ever been a period of time when you were not your usual self and you had much more energy than usual?",
    "Has there ever been a period of time when you were not your usual self and you were much more active or did many more things than usual?",
    "Has there ever been a period of time when you were not your usual self and you were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
    "Has there ever been a period of time when you were not your usual self and you were much more interested in sex than usual?",
    "Has there ever been a period of time when you were not your usual self and you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
    "Has there ever been a period of time when you were not your usual self and spending money got you or your family in trouble?" ,
  
  ];
  

  const handleResponseChange = (value) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = parseInt(value);
    setResponses(newResponses);
  };

  const evaluateScore = () => {
    const total = responses.reduce((acc, curr) => acc + curr, 0);
    setTotalScore(total);

    if (total >= 1 && total <= 4) {
      setSeverity("Low Risk of Bipolar Disorder");
    } else if (total >= 5 && total <= 6) {
      setSeverity("Moderate Risk of Bipolar Disorder");
    } else if (total >= 7) {
      setSeverity("High Risk of Bipolar Disorder");
    } else {
      setSeverity("No Significant Symptoms");
    }

    setSubmitted(true);
  };

  const navigateToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const navigateToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      evaluateScore();
    }
  };

  const navigateToQuizDash = () => {
    navigate('/quiz');
  };

  const resetQuiz = () => {
    setResponses(Array(13).fill(0));
    setTotalScore(null);
    setSeverity(null);
    setSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  const suggestionsBasedOnSeverity = {
    "High Risk of Bipolar Disorder": [
      "Contact a mental health professional for a comprehensive evaluation and guidance.",
      "Consider seeking therapy or medication management to support your mental health.",
      "Develop a support network of friends and family, and consider joining a support group.",
      "Learn about the condition to better understand it and how to manage it effectively.",
      "Be patient and kind to yourself as you navigate your mental health journey."
    ],
    "Moderate Risk of Bipolar Disorder": [
      "Discuss your concerns with a mental health professional in a supportive environment.",
      "Keep a mood diary to track your symptoms and identify patterns.",
      "Engage in stress-reducing activities like meditation, exercise, or hobbies you enjoy."
    ],
    "Low Risk of Bipolar Disorder": [
      "Continue to monitor your mood.",
      "Maintain healthy lifestyle habits.",
      "If you have any concerns, consider consulting with a mental health professional for guidance and support."
    ],
    "No Significant Symptoms": [
      "Continue monitoring your mood and seek help if symptoms worsen.",
      "Maintain healthy habits and social connections to support overall well-being.",
      "Explore stress-reduction techniques to prevent future episodes."
    ]
  };

  return (
    <div style={{padding: '20px'}}>
      <div className="mdq-container">
        <h1 style={{ fontFamily: 'Anta, san-serif', color: '#044189' }}>Mood Disorder Questionnaire (MDQ)</h1>
        <div className="instruction-section">
          <p className="instruction-text" style={{ fontFamily: 'Rubik', color: '#044189' }}>
            This quiz consists of 13 questions. For each question, select the option that best describes how often you have been bothered by the mentioned problem over the last 2 weeks.
          </p>
          <p className="instruction" style={{ fontFamily: 'Rubik', color: '#044189' }}>After selecting the "Next" tab following the final question, the score will be calculated and the results will be displayed.</p>
        </div>
  
        <div className="tab-container">
          <div className="tab-scroll">
            {questions.map((question, index) => (
              <button key={index} onClick={() => navigateToQuestion(index)} className={currentQuestionIndex === index ? 'active' : ''}>Q{index + 1}</button>
            ))}
          </div>
        </div>
        
        {/* Rest of your component */}
        {(!submitted) ? (
          <div className="question-container">
            <p className="question" style={{ fontFamily: 'Rubik', color: '#044189' }}>{questions[currentQuestionIndex]}</p>
            <div className="response-options">
              <select value={responses[currentQuestionIndex]} onChange={(e) => handleResponseChange(e.target.value)} className="response-select">
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </select>
            </div>
            <button onClick={navigateToNextQuestion} className="next-button" style={{ backgroundColor: '#FB6B44', color: '#FAF1DA', fontFamily: 'Rubik' }}>Next</button>
          </div>
        ) : (
          <div className="result-container">
            <p style={{ fontFamily: 'Rubik', color: '#044189' }}>Total Score: {totalScore}</p>
            <p style={{ fontFamily: 'Rubik', color: '#044189' }}>Depression Severity: {severity}</p>
            <div>
              <h3>Suggestions:</h3>
              {suggestionsBasedOnSeverity[severity].map((suggestion, index) => (
                <p key={index}>{suggestion}</p>
              ))}
            </div>
            <button onClick={resetQuiz} style={{ backgroundColor: '#68A0D5', color: '#FAF1DA', fontFamily: 'Rubik' }}>Retake Quiz</button>
            <button onClick={navigateToQuizDash} style={{ backgroundColor: '#68A0D5', color: '#FAF1DA', fontFamily: 'Rubik' }}>Back to Quiz Dashboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MDQ;
