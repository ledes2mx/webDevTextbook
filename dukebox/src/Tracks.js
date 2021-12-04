import { fetchTracks } from "./actions";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

export function Tracks(props) {
    const {artist, album} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracks(artist, album));
    }, [dispatch]);

    return (
        <div className="tracks">
            <h2>Hello</h2>
        </div>
    );
}