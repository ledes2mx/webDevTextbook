export const Action = Object.freeze({
   LoadArtists: 'LoadArtists',
   LoadAlbums: 'LoadAlbums',
   LoadTracks: 'LoadTracks', 
});

export function loadArtists(artists) {
    return {type: Action.LoadArtists, payload: artists};
}

export function loadAlbums(albums) {
    return {type: Action.LoadAlbums, payload: albums};
}

export function loadTracks(tracks) {
    return {type: Action.LoadTracks, payload: tracks};
}

function assertResponse(response) {
    if (response.status >= 200 || response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

export function fetchArtists() {
    return dispatch => {
        fetch(`https://dukebox.twodee.org:8443/artists`)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                    dispatch(loadArtists(data));
            });
    };
}

export function fetchAlbums(artist) {
    return dispatch => {
        fetch(`https://dukebox.twodee.org:8443/artists/${artist}`)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                    dispatch(loadAlbums(data));
            });
    };
}
export function fetchTracks(artist, album) {
    return dispatch => {
        fetch(`https://dukebox.twodee.org:8443/artists/${artist}/${album}`)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                    dispatch(loadTracks(data));
            });
    };
}