import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import './Songs.css';
import './Playlist.css';
import Song from '../Songs'
import PlaylistSongs from './paylistSongs';
// import Song from '../../components/Songs/index';
import { addPlaylistSongs, getPlaylistSongs, deletePlaylistSongs } from '../../store/playlist.js';
// import playlist from '../../../../backend/db/models/playlist';

const Playlist = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    // const [update, setUpdate] = useState(0);
    // let songs;
    useEffect(() => {
        dispatch(getPlaylistSongs(userId));
    }, [dispatch, userId]);
    const songs = useSelector(state => Object.values(state)); 
    // let songs = dispatch(getPlaylistSongs(userId))
    console.log('state', songs)
    // songs()

    // console.log('songs', songs)

    return (
        <div className="playlist-field">
            {/* <button onClick={showPlaylist}>Show Playlist</button> */}
            {/* {Object.values(songs)?.map(song=>      
                <Song song={song} key={song.id}/>)} */}

            {/* {playlistIds.map(id=><h1>{id}</h1>)} */}
            <h1>{userId}</h1>
        </div>
    )       
}

export default Playlist;