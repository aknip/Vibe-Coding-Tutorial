import React from 'react';

const Question = ({ 
  question, 
  options, 
  selectedAnswer, 
  onAnswerSelect, 
  showResult,
  correctAnswer 
}) => {
  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>
      <div className="options">
        {options.map((option, index) => {
          let className = 'option';
          
          if (showResult) {
            if (option === correctAnswer) {
              className += ' correct';
            } else if (option === selectedAnswer && option !== correctAnswer) {
              className += ' incorrect';
            }
          } else if (option === selectedAnswer) {
            className += ' selected';
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => onAnswerSelect(option)}
              disabled={showResult}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
