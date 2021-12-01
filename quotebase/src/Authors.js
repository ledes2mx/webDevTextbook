import {useSelector, useDispatch} from "react-redux";
import { selectAuthor } from "./actions";

export function Authors(props) {
    const dispatch = useDispatch();
    const authors = useSelector(state => Object.keys(state.quotations));
    return (
      <div id="authors-panel" className="panel">
        <h3>Authors</h3>
        <ul>
          {authors.map(author => 
          <li key={author}>
              <button
          className="author-button" onClick={() => dispatch(selectAuthor(author))}>
                {author}
              </button>
          </li>)}
        </ul>
      </div>
    );
  }