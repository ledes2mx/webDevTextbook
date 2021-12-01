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