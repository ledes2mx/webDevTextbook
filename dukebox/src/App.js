import './App.css';
import {Route, Routes} from 'react-router-dom';
import {fetchArtists} from './actions';
import {Albums} from './Albums';
import {Artists} from './Artists';
import {Tracks} from './Tracks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const artists = useSelector(state => state.artists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="artists">
        <h2>Artists</h2>
        {artists.map(artist =>
          <Artists key={artist.artist} artist={artist} />  
        )}
        <Routes>
        <Route path="/artists" />
        <Route path="/albums/:artistSlug" element={<Albums />} />
        <Route path="/albums/:artistSlug/tracks/:albumSlug" element={<Tracks />} /> 
      </Routes>
      </div>
    </div>
  );
}

export default App;
