import { fetchTracks } from "./actions";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import { useParams } from "react-router";

export function Tracks(props) {
    const params = useParams();
    const artist = [params.artistSlug];
    const album = [params.albumSlug];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracks(artist, album));
    }, [dispatch, album, artist]);

    const tracks = useSelector(state => state.tracks);

    return (
        <div className="tracks">
            <h2>Tracks</h2>
            {tracks.map(track =>
                <li key={track}>
                    <p>{track}</p>
                </li>
            )}
        </div>
    );
}