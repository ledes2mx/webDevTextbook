import './App.css';
import {Authors} from './Authors';
import {Quotations} from './Quotations';
import {Adder} from './Adder';

function App() {
  return (
    <div className="App">
      <Authors />
      <Quotations />
      <Adder />
    </div>
  );
}

export default App;
