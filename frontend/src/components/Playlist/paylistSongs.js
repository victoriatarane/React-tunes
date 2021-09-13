
import { useDispatch, useSelector } from 'react-redux';
import { addPlaylistSongs, getPlaylistSongs, deletePlaylistSongs } from '../../store/playlist.js';

const PlaylistSongs = (song) => {
    const dispatch = useDispatch();
    const handleDelete = (song) => {
        // e.preventDefault();
        // console.log(song.id)
        dispatch(deletePlaylistSongs(song.id));
        
    }
    return (
        <li className="song-li">
            <label className="artist">
                {/* <p>{song}</p> */}
            </label>
            <label className="song-name">
                <i className="fas fa-compact-disc" />
                {/* <p>{song}</p> */}
            </label>
            <audio className="audio" controls>
                {/* <source src={song.songUrl} type="audio/ogg"></source> */}
            </audio>
            <button className="delete" type="submit" onClick={handleDelete}>Submit Comment <i className="far fa-trash" /></button>
        </li>
    )
}
export default PlaylistSongs;