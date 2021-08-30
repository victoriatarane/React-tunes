import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import './Songs.css';
import PlaylistSongs from './paylistSongs';
import { addPlaylistSongs, getPlaylistSongs, deletePlaylistSongs } from '../../store/playlist.js';
// import playlist from '../../../../backend/db/models/playlist';

const Playlist = ({ userId }) => {
    const songs = [{"Artist" : "Nirvana", "title": "This is it", "songUrl": "youtube.com"}]
    const mysongs = useSelector(state=> state);
    console.log("mysongs", mysongs)
    
    
    return (
        <div>
            {songs?.map(song=>
                <PlaylistSongs song={song} />
            )}
            <h1>{mysongs}</h1>
        </div>
    )       
}

export default Playlist;