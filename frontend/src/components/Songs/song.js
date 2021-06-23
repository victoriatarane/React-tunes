import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Songs.css';
import {likeSong} from '../../store/songs.js';


const Song = ({ song }) => {
    const dispatch = useDispatch();
    // const history = useHistory();
    // const [showReviews, setShowReviews] = useState(false);
    const userId = useSelector((state) => state.session.user.id)
    //const [userId, setUserId] = useState(1);
    // const [songId, setSongId] = useState(1);
    // // const [review, setReview] = useState('');
    const [likes, setLikes] = useState(false);

    // const updateUserId = (e) => setUserId(e.target.value);
    // const updateSongId = (e) => setSongId(e.target.value);
    // const updateReview = (e) => setReview(e.target.value);
    // const updateLikes = (e) => setLikes(e.target.value);
    const songId = song.id;
    const handleLikeSubmit = async (e) => {
        e.preventDefault();
        setLikes(!likes);
        const payload = {
            userId,
            songId,
            likes,
        };
        dispatch(likeSong(payload))
    }

    return (
        <li className="song-li">
            <label className="song-name">
                Song name: {song.title}
            </label>
            <audio className="audio" controls>
                <source src={song.songUrl} type="audio/ogg"></source>
            </audio>
            <label className="likes">Likes: {likes}</label>
            <button onClick={handleLikeSubmit}>Like</button>


        </li>
    )
}


export default Song;
