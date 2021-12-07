import {createStore, applyMiddleware} from 'redux';
import {Action} from './actions';
import thunk from 'redux-thunk';


//STATE WON'T UPDATE????
const initialState = {
    artists: [
      'The Album Leaf',
      'Balmorhea',
      'Library Tapes',
      'Nils Frahm',
      'Ólafur Arnalds',
    ],
  
    // These a Balmorhea's albums...
    albums: [
      'Balmorhea',
      'Rivers Arms',
      'All Is Wild, All Is Silent',
      'Constellations',
      'Stranger',
      'Clear Language',
      'The Wind',
    ],
  
    // These are the tracks of Rivers Arms...
    tracks: [
      'San Solomon',
      'Lament',
      'The Summer',
      'The Winter',
      'Greyish Tapering Ash',
      'Baleen Morning',
      'Barefoot Pilgrims',
      'Context',
      'Process',
      'Divisadero',
      'Limmat',
      'Theme No. 1',
      'Windansea',
      'San Solomon (Reprise)',
    ],
  };

  function reducer(state, action) {
      switch (Action.type) {
          case Action.LoadArtists: {
              return {
                  ...state,
                  //[action.payload.slug]: action.payload.LoadArtists,
                  artists: action.payload,
              };
          }
          case Action.LoadAlbums: {
              return {
                  ...state,
                  albums: action.payload,
              };
          }
          case Action.LoadTracks: {
              return {
                  ...state,
                  tracks: action.payload,
              };
          }
          default:
              return state;
      }
  }

  export const store = createStore(reducer, initialState, applyMiddleware(thunk));