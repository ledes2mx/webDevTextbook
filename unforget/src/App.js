import './App.css';
import {useSelector} from 'react-redux';
import {Memory} from './Memory';

function App() {
  const memories = useSelector(state => state.memories);
  return (
    <div className="App">
      <div className="memories">
        {memories.map(memory =>
          <Memory key={memory.id} memory={memory} />
        )}
      </div>
    </div>
  );
}

export default App;
