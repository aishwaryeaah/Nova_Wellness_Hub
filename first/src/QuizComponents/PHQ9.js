import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PHQ9.css'; // Import CSS for styling

const PHQ9 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(9).fill(0));
  const [totalScore, setTotalScore] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    "To what extent have you lost interest or pleasure in activities that used to be enjoyable to you?",
    "How often have you felt a persistent sense of sadness, emptiness, or hopelessness?",
    "Have you experienced difficulty in falling asleep, staying asleep, or waking up too early, more often than not?",
    "How frequently have you felt unusually fatigued or lacked energy, even after adequate rest?",
    "Have you experienced significant changes in your appetite or weight (either loss or gain) recently?",
    "How often have you found yourself being overly self-critical, feeling like a failure, or letting down yourself or others?",
    "Have you noticed a decline in your ability to concentrate on tasks, make decisions, or remember things?",
    "Do you find yourself physically slowed down or excessively agitated, to the point where others may notice?",
    "Have you had recurring thoughts of death, dying, or harming yourself in some way?"
  ];
  

  const handleResponseChange = (value) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = parseInt(value);
    setResponses(newResponses);
  };

  const evaluateScore = () => {
    const total = responses.reduce((acc, curr) => acc + curr, 0);
    setTotalScore(total);

    if (total >= 5 && (responses[0] > 0 || responses[1] > 0)) {
      if (total >= 20) {
        setSeverity("Severe depression");
      } else if (total >= 15) {
        setSeverity("Moderately severe depression");
      } else if (total >= 10) {
        setSeverity("Moderate depression");
      } else if (total >= 5) {
        setSeverity("Mild depression");
      }
    } else {
      setSeverity("No significant depression detected");
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
    setResponses(Array(9).fill(0));
    setTotalScore(null);
    setSeverity(null);
    setSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  const suggestionsBasedOnSeverity = {
    "Severe depression": [
      "Seek immediate professional help from a mental health specialist.",
      "Consider hospitalization for intensive treatment and monitoring.",
      "Involve close friends or family for support and assistance."
    ],
    "Moderately severe depression": [
      "Schedule an appointment with a mental health counselor or therapist.",
      "Explore medication options under the guidance of a psychiatrist.",
      "Engage in activities that bring joy and relaxation, even if they seem difficult at first."
    ],
    "Moderate depression": [
      "Start therapy sessions to address underlying issues and coping mechanisms.",
      "Develop a routine that includes regular exercise and healthy eating habits.",
      "Join a support group to connect with others experiencing similar challenges."
    ],
    "Mild depression": [
      "Practice self-care activities such as mindfulness, meditation, or yoga.",
      "Reach out to trusted friends or family members for emotional support.",
      "Consider lifestyle changes to reduce stress and improve mood, such as better sleep habits."
    ],
    "No significant depression detected": [
      "Continue monitoring your mood and seek help if symptoms worsen.",
      "Maintain healthy habits and social connections to support overall well-being.",
      "Explore stress-reduction techniques to prevent future episodes."
    ]
  };

  return (
    <div style={{padding: '20px'}}>
      <div className="phq9-container">
        <h1 style={{ fontFamily: 'Anta, san-serif', color: '#044189' }}>Patient Health Questionnaire (PHQ-9)</h1>
        <div className="instruction-section">
          <p className="instruction-text" style={{ fontFamily: 'Rubik', color: '#044189' }}>
            This quiz consists of 9 questions. For each question, select the option that best describes how often you have been bothered by the mentioned problem over the last 2 weeks.
          </p>
          <p className="instruction" style={{ fontFamily: 'Rubik', color: '#044189' }}>After selecting the "Next" tab following the final question, the score will be calculated and the results will be displayed.</p>
        </div>
  
        <div className="tab-container">
          {questions.map((question, index) => (
            <button key={index} onClick={() => navigateToQuestion(index)} className={currentQuestionIndex === index ? 'active' : ''}>Q{index + 1}</button>
          ))}
        </div>
        
        {/* Rest of your component */}
        {(!submitted) ? (
          <div className="question-container">
            <p className="question" style={{ fontFamily: 'Rubik', color: '#044189' }}>{questions[currentQuestionIndex]}</p>
            <div className="response-options">
              <select value={responses[currentQuestionIndex]} onChange={(e) => handleResponseChange(e.target.value)} className="response-select">
                <option value={0}>Not At All</option>
                <option value={1}>Several Days</option>
                <option value={2}>More Than Half The Days</option>
                <option value={3}>Nearly Every Day</option>
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

export default PHQ9;
