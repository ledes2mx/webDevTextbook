import {createStore} from 'redux';
import {Action} from './actions';

const initialState = {
    quotations: {
      "Condoleeza Rice": [
        "I firmly believe you never should spend your time being the former anything.",
        "We need a common enemy to unite us.",
      ],
      "Audre Lord": [
        "When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak.",
        "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.",
        "The master's tools will never dismantle the master's house.",
      ],
      "Poop": [
          "Poopy Pee Pee!"
      ],
    },
    selectedAuthor: null,
  };


  function reducer(state, action) {
      switch (action.type) {
          case Action.SelectAuthor: {
              return {
                  ...state,
                  selectedAuthor: action.payload,
              };
            }
          case Action.AddQuotation: {
              const {author, text} = action.payload;
              const oldQuotations = state.quotations[author] ?? [];
              return {
                  ...state,
                  quotations: {
                      ...state.quotations,
                      [author]: [...oldQuotations, text],
                  },
              };
          }
          default:
              return state;
      }
  }

  const persistedState = JSON.parse(localStorage.getItem('quotebase.db'));
  export const store = createStore(reducer, persistedState ?? initialState);

  store.subscribe(() => {
    const json = JSON.stringify(store.getState());
    localStorage.setItem('quotebase.db', json);
  });