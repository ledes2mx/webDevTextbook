import {createStore, applyMiddleware} from 'redux';

const initialState = {
    memories: [
        {
            id: 1,
            year: 2010,
            month: 9,
            day: 21,
            entry: "Today I had a soccer tournament. I was about to score a goal when lightning struck the ball. Now my hair won't settle down.",
        },
        {
            id: 2,
            year: 2011,
            month: 9,
            day: 21,
            entry: "It's been a year since the lightning incident, and my hair hasn't changed.",
        },
    ],
};
  
export const store = createStore(reducer, initialState);

function reducer(state,action) {
    switch (action.type) {
        default:
            return state;
    }
}