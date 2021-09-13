import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import './Songs.css';
import '../../components/SignupFormPage/SignupForm.css';
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
    // let theSongs;
    const songs = useSelector(state => state.songs);
    useEffect(() => {
        dispatch(getPlaylistSongs(userId));
    }, [dispatch, userId]);
    // songs()
    console.log('songs', songs)
    // useEffect(()=> {
    // }, [dispatch])
    // console.log(songs, 'react')
    const forceUpdate = () => {
        setUpdate(prev => prev+1)
    }
    return (
        <div className="input-field">
            <p>Hello YYY333 world</p>
            {Object.values(songs)?.map(song=>
                <PlaylistSongs song={song} key={song.id}/>)}
            <button onClick={forceUpdate}>Click me</button>
            <h1>{userId}</h1>
        </div>
    )       
}

export default Playlist;