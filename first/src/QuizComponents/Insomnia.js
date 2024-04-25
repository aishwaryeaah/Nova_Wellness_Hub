import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Insomnia.css'; // Import CSS for styling

const InsomniaSeverityIndex = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(7).fill(0));
  const [totalScore, setTotalScore] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    "How much difficulty have you had falling asleep in the last two weeks?",
    "How much difficulty have you had staying asleep in the last two weeks?",
    "How much difficulty have you had waking up too early in the last two weeks?",
    "How satisfied/dissatisfied are you with your current sleep pattern?",
    "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
    "How worried/distressed are you about your current sleep problem?",
    "To what extent do you consider your sleep problem to INTERFERE with your daily functioning (e.g. daytime fatigue, mood, ability to function at work/daily chores, concentration, memory, mood, etc.) CURRENTLY?"
  ];

  const handleResponseChange = (value) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = parseInt(value);
    setResponses(newResponses);
  };

  const evaluateScore = () => {
    const total = responses.reduce((acc, curr) => acc + curr, 0);
    setTotalScore(total);

    if (total >= 22) {
      setSeverity("Clinical insomnia (severe)");
    } else if (total >= 15) {
      setSeverity("Clinical insomnia (moderate severity)");
    } else if (total >= 8) {
      setSeverity("Subthreshold insomnia");
    } else {
      setSeverity("No clinically significant insomnia");
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
    setResponses(Array(7).fill(0));
    setTotalScore(null);
    setSeverity(null);
    setSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  const suggestionsBasedOnSeverity = {
    "Clinical insomnia (severe)": [
      "Seek immediate professional help from a sleep specialist.",
      "Consider hospitalization for intensive treatment and monitoring.",
      "Implement cognitive-behavioral therapy for insomnia (CBT-I)."
    ],
    "Clinical insomnia (moderate severity)": [
      "Schedule an appointment with a sleep specialist or therapist.",
      "Consider medications under the guidance of a healthcare provider.",
      "Implement cognitive-behavioral therapy for insomnia (CBT-I)."
    ],
    "Subthreshold insomnia": [
      "Start practicing good sleep hygiene.",
      "Establish a relaxing bedtime routine.",
      "Consider trying over-the-counter sleep aids, after consulting with a healthcare provider."
    ],
    "No clinically significant insomnia": [
      "Continue practicing good sleep hygiene.",
      "Explore stress-reduction techniques to improve sleep quality.",
      "Maintain a regular sleep schedule."
    ]
  };

  return (
    <div style={{padding: '20px'}}>
      <div className="isi-container">
        <h1 style={{ fontFamily: 'Anta, san-serif', color: '#044189' }}>Insomnia Severity Index (ISI) Quiz</h1>
        <div className="instruction-section">
          <p className="instruction-text" style={{ fontFamily: 'Rubik', color: '#044189' }}>
            This quiz consists of 7 questions. For each question, select the option that best describes your situation over the last 2 weeks.
          </p>
          <p className="instruction" style={{ fontFamily: 'Rubik', color: '#044189' }}>After selecting the "Next" tab following the final question, the score will be calculated and the results will be displayed.</p>
        </div>
  
        <div className="tab-container">
          {questions.map((question, index) => (
            <button key={index} onClick={() => navigateToQuestion(index)} className={currentQuestionIndex === index ? 'active' : ''}>Q{index + 1}</button>
          ))}
        </div>
        
        {!submitted ? (
          <div className="question-container">
            <p className="question" style={{ fontFamily: 'Rubik', color: '#044189' }}>{questions[currentQuestionIndex]}</p>
            <div className="response-options">
              <select value={responses[currentQuestionIndex]} onChange={(e) => handleResponseChange(e.target.value)} className="response-select">
                <option value={0}>Very Satisfied / Not worried </option>
                <option value={1}>Satisfied / A Little </option>
                <option value={2}>Moderately Satisfied / Somewhat </option>
                <option value={3}>Dissatisfied / Much </option>
                <option value={4}>Very Dissatisfied / Very Much </option>
              </select>
            </div>
            <button onClick={navigateToNextQuestion} className="next-button" style={{ backgroundColor: '#FB6B44', color: '#FAF1DA', fontFamily: 'Rubik' }}>Next</button>
          </div>
        ) : (
          <div className="result-container">
            <p style={{ fontFamily: 'Rubik', color: '#044189' }}>Total Score: {totalScore}</p>
            <p style={{ fontFamily: 'Rubik', color: '#044189' }}>Insomnia Severity: {severity}</p>
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

export default InsomniaSeverityIndex;
