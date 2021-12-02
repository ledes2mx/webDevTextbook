import {createStore} from 'redux';
import {Action} from './actions';

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
                  loadArtists: action.payload,
              };
          }
          case Action.LoadAlbums: {
              return {
                  ...state,
                  loadAlbums: action.payload,
              };
          }
          case Action.LoadTracks: {
              return {
                  ...state,
                  loadTracks: action.payload,
              };
          }
          default:
              return state;
      }
  }