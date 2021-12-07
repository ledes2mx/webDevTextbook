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

    const track = useSelector(state => state.tracks);

    return (
        <div className="tracks">
            <h2>Tracks!</h2>
            {track.map(track =>
                <p key={artist, album, track.track} artist={artist}
                album={album} track={track} />
            )}
        </div>
    );
}