import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Global, css } from '@emotion/react';
import Home from './components/Home';
import Game from './components/Game';
import HighScores from './components/HighScores';

const theme = {
  colors: {
    primary: '#6e8efb',
    secondary: '#a777e3',
    background: '#f5f7ff',
    text: '#333',
    white: '#ffffff',
  },
  fonts: {
    body: '"Poppins", sans-serif',
    heading: '"Poppins", sans-serif',
  },
};

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.fonts.body};
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
  }
  
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
  }
  
  button {
    font-family: ${theme.fonts.body};
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/highscores" element={<HighScores />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
