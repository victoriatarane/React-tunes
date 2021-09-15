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
    console.log('do we get here')
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    const [update, setUpdate] = useState(0);
    // let songs 
    let theSongs;
    const songs = useSelector(state => state.songs);
    useEffect(() => {
        dispatch(getPlaylistSongs(userId));
    }, [dispatch, userId]);
    // songs()

    // console.log('songs', songs)

    return (
        <div className="playlist-field">
            {/* <button onClick={showPlaylist}>Show Playlist</button> */}
            {Object.values(songs)?.map(song=>      
                <Song song={song} key={song.id}/>)}
            <h1>{userId}</h1>
        </div>
    )       
}

export default Playlist;