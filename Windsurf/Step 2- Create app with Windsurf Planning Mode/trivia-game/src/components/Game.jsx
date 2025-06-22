import React, { useState, useEffect } from 'react';
import Question from './Question';
import Scoreboard from './Scoreboard';
import questionsData from '../triviaQuestions.json';
import './Game.css';

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Shuffle questions and set up the game
  useEffect(() => {
    // Shuffle the questions array
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setIsLoading(false);
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    // Check if answer is correct
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or end game
    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 1500);
  };

  const handlePlayAgain = () => {
    // Reset game state
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setSelectedAnswer('');
    setShowResult(false);
    
    // Reshuffle questions for a new game
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  if (isLoading) {
    return <div className="loading">Loading game...</div>;
  }

  if (gameOver) {
    return (
      <Scoreboard 
        score={score} 
        totalQuestions={shuffledQuestions.length} 
        onPlayAgain={handlePlayAgain}
      />
    );
  }

  if (!currentQuestion) {
    return <div>No questions available. Please try again later.</div>;
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <div className="score">Score: {score}</div>
        <div className="question-count">
          Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
        </div>
      </div>
      
      <Question
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        showResult={showResult}
        correctAnswer={currentQuestion.correctAnswer}
      />
      
      {showResult && (
        <div className={`feedback ${selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}`}>
          {selectedAnswer === currentQuestion.correctAnswer 
            ? 'Correct! 🎉' 
            : `Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`}
        </div>
      )}
    </div>
  );
};

export default Game;
