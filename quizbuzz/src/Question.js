import {NavLink, useParams, useNavigate} from 'react-router-dom';
import {quizzes} from './catalog';
import {useDispatch, useSelector} from 'react-redux';
import {setResponse} from './actions';

export function Question(props) {
  const params = useParams();
  const quiz = quizzes[params.quizSlug];
  const index = quiz.questions.findIndex(question => question.slug === params.questionSlug);
  const question = quiz.questions[index];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const responses = useSelector(state => state.responses);

  let inputs;
  if (question.type === 'true-false') {
    inputs =
      <div className="response">
        <label>
          <input
            type="radio"
            name="group"
            checked={responses[question.slug] === true}
            onChange={() => dispatch(setResponse(question.slug, true))}
          />
          True
        </label>
        <label>
          <input
            type="radio"
            name="group"
            checked={responses[question.slug] === false}
            onChange={() => dispatch(setResponse(question.slug, false))}
          />
          False
        </label>
      </div>;
  } else if (question.type === 'blank') {
    inputs =
      <div className="response">
        <input
          type="text"
          value={responses[question.slug] || ''}
          onChange={event => {
            dispatch(setResponse(question.slug, event.target.value));
          }}
        />
      </div>;
  }

  let button;
  if (index < quiz.questions.length - 1) {
    button =
      <button
        onClick={() => navigate(`/quiz/${quiz.slug}/question/${quiz.questions[index + 1].slug}`)}
      >Next</button>;
  } else {
    button =
      <button>Submit</button>;
  }

  return (
    <div className="question-page">
      <div className="current-question">
        <ol className="question-picker">
            {quiz.questions.map(question =>
            <li key={question.title}>
                <NavLink
                to={`/quiz/${quiz.slug}/question/${question.slug}`}
                className="question-link"
                >{question.title}</NavLink>
            </li>
            )}
        </ol>
        <h2>{index + 1}. {question.title}</h2>
        <p>{question.prompt}</p>
        {inputs}
        {button}
      </div>
    </div>
  );
}