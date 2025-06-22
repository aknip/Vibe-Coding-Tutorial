import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const ScoreList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ScoreItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 0.5rem 0;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateX(5px);
    background: #e9ecef;
  }
  
  &:nth-of-type(1) {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
  }
  
  &:nth-of-type(2) {
    background: #e2e3e5;
    border-left: 4px solid #6c757d;
  }
  
  &:nth-of-type(3) {
    background: #e2d4b7;
    border-left: 4px solid #d4a76a;
  }
`;

const ScoreInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScoreName = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

const ScoreDate = styled.span`
  font-size: 0.8rem;
  color: #6c757d;
`;

const ScoreValue = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #6e8efb;
`;

const NoScores = styled.p`
  text-align: center;
  color: #6c757d;
  font-style: italic;
`;

const Button = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.8rem 1.5rem;
  background: #6e8efb;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #5a7df4;
  }
`;

const HighScores = () => {
  const [highscores, setHighscores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem('triviaHighscores') || '[]');
    setHighscores(savedScores);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Container>
      <Title>🏆 High Scores</Title>
      
      {highscores.length > 0 ? (
        <ScoreList>
          {highscores.map((score, index) => (
            <ScoreItem key={index}>
              <ScoreInfo>
                <ScoreName>{score.name}</ScoreName>
                <ScoreDate>{formatDate(score.date)}</ScoreDate>
              </ScoreInfo>
              <ScoreValue>{score.score} / {score.total}</ScoreValue>
            </ScoreItem>
          ))}
        </ScoreList>
      ) : (
        <NoScores>No high scores yet. Be the first to play!</NoScores>
      )}
      
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </Container>
  );
};

export default HighScores;
