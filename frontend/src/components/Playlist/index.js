import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import './Songs.css';
import PlaylistSongs from './paylistSongs';
import { addPlaylistSongs, getPlaylistSongs, deletePlaylistSongs } from '../../store/playlist.js';
// import playlist from '../../../../backend/db/models/playlist';

const Playlist = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    const songs = dispatch(getPlaylistSongs(userId))
    
    
    return (
        <div>
            {Object.values(songs)?.map(item=><PlaylistSongs item={item} />)}
            <h1>{userId}</h1>
        </div>
    )       
}

export default Playlist;