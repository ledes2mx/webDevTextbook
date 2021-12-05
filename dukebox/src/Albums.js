import { fetchAlbums } from "./actions";
import { useEffect } from 'react';
import {Fragment} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { Tracks } from "./Tracks";

export function Albums(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const artist = [params.artistSlug];

    useEffect(() => {
        dispatch(fetchAlbums(artist));
    }, [dispatch, artist]);

    const album = fetchAlbums(artist);
    const albumEntry = album.toLocaleString('default', {
        album: 'string',
    });
    return (
        <div className="albums">
            {album.map(album =>
                 <Link to={`/albums/${artist}/tracks/${album.album}`}>{album.album}</Link>   
            )}
        </div>
        
    );
}