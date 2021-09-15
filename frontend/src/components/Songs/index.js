import { useDispatch, useSelector } from "react-redux";
//import { Redirect } from "react-router-dom";
import { getSongs } from "../../store/songs.js";
import './Songs.css';
import { useEffect } from 'react';
import Song from './song';
// import { addPlaylistSongs, getPlaylistSongs, deletePlaylistSongs } from '../../store/playlist.js';

function SongsList() {
    const dispatch = useDispatch();
    //const sessionUser = useSelector((state) => state.session.user);
    const songs = useSelector((state) => state.songs);
    // console.log(songs)
    // const userId = useSelector(state => state.session.user.id);
    useEffect(() => {
        dispatch(getSongs())
        // dispatch(getPlaylistSongs(userId));
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