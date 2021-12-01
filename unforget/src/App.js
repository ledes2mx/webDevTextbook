import './App.css';
import {useSelector} from 'react-redux';
import {Memory} from './Memory';
import {fetchDay} from './actions';
import { useEffect } from 'react';
import {Toolbar} from './Toolbar';

function App() {
  const memories = useSelector(state => state.memories);
  const dispatch = useDispatch();

  useEffect(() => {
    const today = new Date();
    dispatch(fetchDay(today.getMonth() + 1, today.getDate()));
  }, [dispatch]);
  return (
    <div className="App">
      <Toolbar />
      <div className="memories">
        {memories.map(memory =>
          <Memory key={memory.id} memory={memory} />
        )}
      </div>
    </div>
  );
}

export default App;
