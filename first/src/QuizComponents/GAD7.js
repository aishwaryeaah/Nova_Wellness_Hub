import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GAD7.css'; // Import CSS for styling

const GAD7 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(7).fill(0));
  const [totalScore, setTotalScore] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    "How often have you felt nervous or anxious without a specific reason?",
    "Do you often find it difficult to control or stop worrying?",
    "Have you been worrying excessively about various things?",
    "How often have you found it hard to relax?",
    "Do you often feel restless and find it hard to sit still?",
    "How frequently do you become easily irritated or annoyed?",
    "How often do you feel a sense of impending doom or fear without any clear cause?"
  ];

  const handleResponseChange = (value) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = parseInt(value);
    setResponses(newResponses);
  };

  const evaluateScore = () => {
    const total = responses.reduce((acc, curr) => acc + curr, 0);
    setTotalScore(total);

    if (total >= 5 && total <= 9) {
      setSeverity("Mild anxiety");
    } else if (total >= 10 && total <= 14) {
      setSeverity("Moderate anxiety");
    } else if (total >= 15) {
      setSeverity("Severe anxiety");
    } else {
      setSeverity("Minimal anxiety");
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

  const getRecommendations = () => {
    switch (severity) {
      case "Mild anxiety":
        return [
          "Practice mindfulness or meditation for a few minutes each day.",
          "Engage in regular physical activity like walking, jogging, or yoga.",
          "Limit caffeine and alcohol intake, as they can increase feelings of anxiety.",
          "Consider talking to a therapist or counselor for additional support."
        ];
      case "Moderate anxiety":
        return [
          "Develop a daily relaxation routine to manage stress levels.",
          "Try deep breathing exercises or progressive muscle relaxation techniques.",
          "Seek out social support from friends, family, or support groups.",
          "Explore therapy options such as cognitive-behavioral therapy (CBT) with a mental health professional."
        ];
      case "Severe anxiety":
        return [
          "Seek immediate support from a mental health professional or counselor.",
          "Consider medication options if recommended by a healthcare provider.",
          "Practice self-care activities daily, such as getting enough sleep and eating healthily.",
          "Engage in activities that bring joy and relaxation, such as hobbies or spending time outdoors."
        ];
      default:
        return [];
    }
  };

  const recommendations = getRecommendations();

  return (
    <div style={{padding: '20px'}}>
      <div className="gad7-container">
        <h1 style={{ fontFamily: 'Anta, san-serif', color: '#044189' }}>Generalized Anxiety Disorder (GAD-7)</h1>        
        {/* Add the instruction section here */}
        <div className="instruction-section">
          <p className="instruction-text" style={{ fontFamily: 'Rubik', color: '#044189' }}>
            This quiz consists of 7 questions. For each question, select the option that best describes how often you have been bothered by the mentioned problem over the last 2 weeks.
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
            <p style={{ fontFamily: 'Rubik', color: '#044189' }}>Anxiety Severity: {severity}</p>
            {recommendations.length > 0 && (
              <div>
                <p style={{ fontFamily: 'Rubik', color: '#044189', marginBottom: '10px' }}>Suggestions for self-improvement:</p>
                <ul>
                  {recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            )}
            <button onClick={resetQuiz} style={{ backgroundColor: '#68A0D5', color: '#FAF1DA', fontFamily: 'Rubik' }}>Retake Quiz</button>
            <button onClick={navigateToQuizDash} style={{ backgroundColor: '#68A0D5', color: '#FAF1DA', fontFamily: 'Rubik' }}>Back to Quiz Dashboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GAD7;
