import { fetchAlbums } from "./actions";
import { useEffect } from 'react';
import {Fragment} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { Tracks } from "./Tracks";
import {useParams} from 'react-router-dom';

export function Albums(props) {
    const params = useParams();
    const artist = params.artistSlug;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums(artist));
    }, [dispatch, artist]);

    const albums = useSelector(state => state.albums);
    console.log(albums);

    return (
        /*
        <div className="albums">
            <h2>Albums</h2>
            {album.map(album => 
                //<Tracks key={artist, album.album} artist={artist} album={album} />
                //<Link key={artist, album.album} artist={artist} album={album} to={`/albums/${artist}/tracks/${album.album}`}>{album.album}</Link>   
            )}
        </div>
        */

        /*
        <div className="albums">
            <h2>Albums</h2>
            <Fragment>
                <Link to={`/albums/${artist}/tracks/${album}`}>{album}</Link>
            </Fragment>
        </div>
        */

        
        <div className="albums">
            <h2>Albums</h2>
            <ol>
                {albums.map(album =>
                    <li key={album}>
                        <Link to={`/artist/${album}`}>{album}</Link>
                    </li>
                )}
            </ol>
        </div>

        
        
    );
}