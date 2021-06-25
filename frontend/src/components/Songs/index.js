import { useDispatch, useSelector } from "react-redux";
//import { Redirect } from "react-router-dom";
import { getSongs } from "../../store/songs.js";
import './Songs.css';
import { useEffect } from 'react';
import Song from './song';

function SongsList() {
    const dispatch = useDispatch();
    //const sessionUser = useSelector((state) => state.session.user);
    const songs = useSelector((state) => state.songs);
    // console.log(songs)
    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch]);

    return (
        <div>
            <ul>
                {Object.values(songs).map((song) => {
                    if (song?.songUrl) {
                        return <Song song={song} key={song.id} />
                    }
                    return null;
                })}
            </ul>
        </div>
    )
};

export default SongsList;