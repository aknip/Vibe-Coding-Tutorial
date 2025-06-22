import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🎮 Trivia Game</h1>
        <p>Test your knowledge and try to get the highest score!</p>
      </header>
      
      <main className="app-main">
        <Game />
      </main>
      
      <footer className="app-footer">
        <p>Created with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
