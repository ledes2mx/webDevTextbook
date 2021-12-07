import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export function Artists(props) {
    const artists = useSelector(state => state.artists);

    //(artistEntry) is the actual string of the artists
    return (
        /*
        //IS THIS THE ACTUAL ALBUM LIST?
        <div className="artist-list">
            <h2>{artistEntry}</h2>
            <ol>
                {Object.values(artist).map(album =>
                    <li key={album.slug}>
                        <Link to={`/artist/${album.slug}`}>{album.slug}</Link>
                    </li>
                )}
            </ol>
        </div>
        */
       <div className="artist-list">
           <h2>Artists</h2>
           <ol>
               {artists.map(artist => 
                    <li key={artist}>
                        <Link to={`/albums/${artist}`}>{artist}</Link>
                    </li>
                )}
           </ol>
       </div>
        

        //FIRST TEST OF ARTISTS THAT WORKS BUT ISNT A LINK
        /*<Fragment>
            <div className="artist-list">
                <span className="artist"
                onClick={() => dispatch(fetchAlbums(artistEntry))}
                >{artistEntry}</span>
            </div>
        </Fragment>
        */
       /*
       <div className="holder">
            <Fragment>
                <div className="artists">
                    <Link to={`/albums/${artistEntry}`}>{artistEntry}</Link>
                </div>
            </Fragment>
        </div>

        */
        
    );
}