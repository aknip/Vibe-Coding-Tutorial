# Trivia Game Web App - Implementation Prompts

## Phase 1: Project Setup and Foundation

### 1.1 Initialize Project ✅ COMPLETED
```
Create a new Vite + React project with TypeScript template. Initialize Git and set up the project structure with these directories:
- /src
  - /components
  - /context
  - /data
  - /utils
  - /tests
  - /styles

Add these development dependencies:
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event
- @types/react
- @types/react-dom
- @types/node
- @vitejs/plugin-react
- vitest
- eslint
- prettier
- eslint-config-prettier
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y

Create these configuration files:
- .eslintrc.cjs
- .prettierrc
- .gitignore
- tsconfig.json
- vite.config.ts
- vitest.config.ts

Initialize a Git repository and make an initial commit.
```

### 1.2 Configure Routing
```
Install React Router DOM:
npm install react-router-dom @types/react-router-dom

Create these route components:
- Home: Landing page with game title and Start button
- Game: Main game screen
- Results: Score and leaderboard display

Set up the router in App.tsx with proper navigation between routes.
Add basic styling for layout and navigation.
Write tests for route navigation.
```

### 1.3 Testing Setup
```
Configure Vitest with React Testing Library.
Add test scripts to package.json:
- "test": "vitest"
- "test:coverage": "vitest run --coverage"
- "test:ui": "vitest --ui"

Create a test utilities file with custom render functions.
Add a setupTests.ts file with necessary imports and configurations.
Write basic tests for the App component and routing.
```

## Phase 2: Core Game Logic

### 2.1 Data Structure
```
Create /src/data/questions.json with sample questions following this interface:
{
  id: string;
  category: 'movies' | 'general';
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

Include at least 10 questions (5 movies, 5 general knowledge) with varying difficulties.
Create a TypeScript interface for the Question type.
Write tests to validate the question data structure.
```

### 2.2 Game Context
```
Create /src/context/GameContext.tsx with the following state:
- currentQuestionIndex: number
- score: number
- gameStatus: 'idle' | 'playing' | 'finished'
- questions: Question[]
- userAnswers: (number | null)[]

Implement these actions:
- startGame: Initialize game state
- answerQuestion: Handle user's answer
- nextQuestion: Move to next question
- resetGame: Reset to initial state

Add error handling for invalid state transitions.
Write comprehensive tests for all context functions.
```

### 2.3 Question Component
```
Create /src/components/Question/Question.tsx with:
- Question text display
- 4 answer options as buttons
- Visual feedback for selected/correct/incorrect answers
- Disabled state after selection
- Timer (bonus)

Props:
- question: Question
- onAnswer: (answerIndex: number) => void
- selectedAnswer: number | null
- isAnswered: boolean

Add prop types and write unit tests covering:
- Rendering question and options
- Answer selection
- Visual states
- Timer functionality
```

## Phase 3: Game Flow

### 3.1 Game Screen
```
Create /src/components/Game/Game.tsx that:
- Uses GameContext for state management
- Shows current question number and total
- Displays the score
- Renders the Question component
- Handles navigation to results

Add loading and error states.
Write integration tests for the game flow.
```

### 3.2 Results Screen
```
Create /src/components/Results/Results.tsx that:
- Shows final score
- Displays correct/incorrect answers
- Provides a form to enter username
- Shows high score submission status
- Has a Play Again button

Implement form validation and submission logic.
Write tests for the results display and form submission.
```

### 3.3 High Score System
```
Create /src/utils/highScores.ts with functions to:
- Save high score to localStorage
- Get high scores (sorted by score, then date)
- Check if a score is a high score

Implement high score submission in Results component.
Create a HighScores component to display the leaderboard.
Add tests for high score functionality.
```

## Phase 4: UI/UX Polish

### 4.1 Styling
```
Add a design system with:
- Color variables
- Typography
- Spacing system
- Responsive breakpoints

Style all components using CSS Modules.
Implement a light/dark theme system.
Ensure mobile-first responsive design.
```

### 4.2 Animations
```
Add subtle animations for:
- Question transitions
- Button presses
- Score updates
- Loading states

Use React Spring or Framer Motion.
Ensure animations are performant and accessible.
```

### 4.3 Accessibility
```
Add:
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast checks
- Skip to content

Test with screen readers and keyboard navigation.
```

## Phase 5: Testing and Refinement

### 5.1 Comprehensive Testing
```
Add integration tests for:
- Complete game flow
- High score submission
- Error states
- Edge cases

Add end-to-end tests using Cypress.
Test on different screen sizes.
```

### 5.2 Performance Optimization
```
Implement:
- Code splitting
- Lazy loading
- Image optimization
- Bundle analysis
- Performance budgets

Run Lighthouse audits and address issues.
```

### 5.3 Final Polish
```
Add:
- Error boundaries
- Loading states
- 404 page
- Favicon
- Meta tags
- PWA support (bonus)

Update README with setup and deployment instructions.
```

## Phase 6: Deployment

### 6.1 Build and Deploy
```
Configure production build.
Set up deployment to Vercel/Netlify.
Add CI/CD pipeline.
Test production build.
```

### 6.2 Monitoring
```
Add:
- Error tracking (Sentry)
- Analytics (Google Analytics)
- Performance monitoring

Set up alerts for errors.
```

## Getting Started

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start development server
3. Run `npm test` to run tests
4. Run `npm run build` to create production build

## Next Steps

1. Would you like me to start with Phase 1.1 (Project Initialization) and provide the detailed code implementation for that step?
2. Or would you like to review and adjust any part of this plan before we proceed?

Each implementation step includes:
- Clear objectives
- Required dependencies
- File structure
- Testing requirements
- Success criteria
