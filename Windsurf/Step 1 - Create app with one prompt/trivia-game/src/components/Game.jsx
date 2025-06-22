import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import triviaQuestions from '../data/triviaQuestions';

const GameContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const QuestionContainer = styled.div`
  margin-bottom: 2rem;
`;

const QuestionText = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OptionItem = styled.li`
  margin: 0.8rem 0;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  
  &:hover {
    background: #f5f5f5;
    border-color: #a777e3;
  }
  
  &.selected {
    background: #a777e3;
    color: white;
    border-color: #a777e3;
  }
  
  &.correct {
    background: #4caf50;
    color: white;
    border-color: #4caf50;
  }
  
  &.incorrect {
    background: #f44336;
    color: white;
    border-color: #f44336;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &.next {
    background: #6e8efb;
    color: white;
    
    &:hover {
      background: #5a7df4;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Score = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #333;
`;

const Game = () => {
  const [questions] = useState([...triviaQuestions].sort(() => Math.random() - 0.5).slice(0, 10));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  
  const navigate = useNavigate();
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    // Reset states when starting a new game
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
  }, []);

  const handleOptionSelect = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    const isCorrect = option === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (!isAnswered) return;
    
    if (isLastQuestion) {
      setShowNameInput(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const saveScore = () => {
    if (!playerName.trim()) return;
    
    const highscores = JSON.parse(localStorage.getItem('triviaHighscores') || '[]');
    const newScore = {
      name: playerName.trim(),
      score,
      total: questions.length,
      date: new Date().toISOString()
    };
    
    const updatedScores = [...highscores, newScore]
      .sort((a, b) => b.score - a.score || new Date(b.date) - new Date(a.date))
      .slice(0, 10); // Keep only top 10 scores
    
    localStorage.setItem('triviaHighscores', JSON.stringify(updatedScores));
    navigate('/highscores');
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  if (showNameInput) {
    return (
      <GameContainer>
        <h2>Game Over!</h2>
        <p>Your score: {score} out of {questions.length}</p>
        <div>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
            style={{
              padding: '0.8rem',
              margin: '1rem 0',
              width: '100%',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ddd'
            }}
          />
          <Button 
            onClick={saveScore}
            disabled={!playerName.trim()}
            style={{ width: '100%', background: '#4caf50', color: 'white' }}
          >
            Save Score
          </Button>
        </div>
      </GameContainer>
    );
  }

  return (
    <GameContainer>
      <Score>Question {currentQuestionIndex + 1} of {questions.length}</Score>
      <Score>Score: {score}</Score>
      
      <QuestionContainer>
        <QuestionText>{currentQuestion.question}</QuestionText>
        <OptionsList>
          {currentQuestion.options.map((option, index) => {
            let className = '';
            if (isAnswered) {
              if (option === currentQuestion.correctAnswer) {
                className = 'correct';
              } else if (option === selectedOption && option !== currentQuestion.correctAnswer) {
                className = 'incorrect';
              }
            } else if (option === selectedOption) {
              className = 'selected';
            }
            
            return (
              <OptionItem key={index}>
                <OptionButton
                  onClick={() => handleOptionSelect(option)}
                  className={className}
                  disabled={isAnswered}
                >
                  {option}
                </OptionButton>
              </OptionItem>
            );
          })}
        </OptionsList>
      </QuestionContainer>
      
      <Navigation>
        <Button onClick={() => navigate('/')}>Quit</Button>
        <Button 
          className="next" 
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {isLastQuestion ? 'Finish' : 'Next'}
        </Button>
      </Navigation>
    </GameContainer>
  );
};

export default Game;
