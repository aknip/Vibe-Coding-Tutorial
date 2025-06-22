import React, { useState, useEffect } from 'react';

const Scoreboard = ({ score, totalQuestions, onPlayAgain, onSaveScore }) => {
  const [playerName, setPlayerName] = useState('');
  const [highScores, setHighScores] = useState([]);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    // Load high scores from localStorage
    const savedScores = JSON.parse(localStorage.getItem('triviaHighScores')) || [];
    setHighScores(savedScores);
  }, []);

  const handleSaveScore = (e) => {
    e.preventDefault();
    if (!playerName.trim()) return;

    const newScore = {
      name: playerName,
      score,
      total: totalQuestions,
      date: new Date().toISOString()
    };

    const updatedScores = [...highScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Keep only top 10 scores

    localStorage.setItem('triviaHighScores', JSON.stringify(updatedScores));
    setHighScores(updatedScores);
    setShowForm(false);
  };

  return (
    <div className="scoreboard">
      <h2>Game Over!</h2>
      <p className="final-score">Your Score: {score} out of {totalQuestions}</p>
      
      {showForm && (
        <form onSubmit={handleSaveScore} className="save-score-form">
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
            maxLength="20"
            required
          />
          <button type="submit">Save Score</button>
        </form>
      )}

      <div className="high-scores">
        <h3>High Scores</h3>
        {highScores.length > 0 ? (
          <ol>
            {highScores.map((score, index) => (
              <li key={index}>
                <span className="score-name">{score.name}</span>
                <span className="score-value">{score.score}/{score.total}</span>
                <span className="score-date">
                  {new Date(score.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ol>
        ) : (
          <p>No high scores yet!</p>
        )}
      </div>

      <button onClick={onPlayAgain} className="play-again-btn">
        Play Again
      </button>
    </div>
  );
};

export default Scoreboard;
