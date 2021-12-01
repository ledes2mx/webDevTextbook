import './App.css';
import {Albums} from './Albums';
import {Artists} from './Artists';
import {Tracks} from './Tracks';

function App() {
  return (
    <div className="App">
      <Artists />
      <Albums />
      <Tracks />
    </div>
  );
}

export default App;
