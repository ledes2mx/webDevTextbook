import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Quizzes} from './Quizzes';
import {Quiz} from './Quiz';
import {Question} from './Question';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
