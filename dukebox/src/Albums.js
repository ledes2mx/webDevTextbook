import { fetchAlbums } from "./actions";
import { useEffect } from 'react';
import {Fragment} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { Tracks } from "./Tracks";

export function Albums(props) {
    const params = useParams();
    const {album} = props;
    const artist = [params.artistEntry];
    const albumEntry = album.toLocaleString('default', {
        albums: 'string',
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums(artist));
    }, [dispatch]);

    return (
        <Fragment>
            <div className="album">
                <Link to={`/albums/${artist}/tracks/${albumEntry}`}>{albumEntry}</Link>
            </div>
        </Fragment>
    );
}