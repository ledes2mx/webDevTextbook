import {Link} from 'react-router-dom';
import {Fragment} from 'react';

export function Artists(props) {
    const {artist} = props;
    const artistEntry = artist.toLocaleString('default', {
        artist: 'string',
    });

    //(artistEntry) is the actual string of the artists
    return (
        /*
        THIS GETS ALBUMS I THINK FOR SOME REASON
        <div className="artist-list">
            <h2>Artists</h2>
            <ol>
                {Object.values(artist).map(album =>
                    <li key={album.slug}>
                        <Link to={`/artist/${album.slug}`}>{album.entry}</Link>
                    </li>
                )}
            </ol>
        </div>
        /*\\

        FIRST TEST OF ARTISTS THAT WORKS BUT ISNT A LINK
        /*<Fragment>
            <div className="artist-list">
                <span className="artist"
                onClick={() => dispatch(fetchAlbums(artistEntry))}
                >{artistEntry}</span>
            </div>
        </Fragment>
        */
        <Fragment>
            <div className="artists">
                <Link to={`/albums/${artistEntry}`}>{artistEntry}</Link>
            </div>
        </Fragment>

    );
}