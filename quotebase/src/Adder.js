import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addQuotation } from './actions';

export function Adder() {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    return (
        <div id="adder-panel" className="panel">
          <label htmlFor="author-input">Author</label>
          <input
            id="author-input"
            type="text"
            value={author}
            onChange={event => setAuthor(event.target.value)}
          />
          <label htmlFor="text-input">Quotation</label>
          <textarea
            id="text-input"
            value={text}
            onChange={event => setText(event.target.value)}
          />
          <button
            onClick={() => dispatch(addQuotation(author, text))}
          >Add</button>
        </div>
      );
  }