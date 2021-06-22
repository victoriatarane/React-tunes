import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Song = ({ song }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const [showReviews, setShowReviews] = useState(false);
    const [userId, setUserId] = useState(1);
    const [songId, setSongId] = useState(1);
    // const [review, setReview] = useState('');
    // const [likes, setLikes] = useState(false);

    const updateUserId = (e) => setUserId(e.target.value);
    const updateSongId = (e) => setSongId(e.target.value);
    // const updateReview = (e) => setReview(e.target.value);
    // const updateLikes = (e) => setLikes(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            songId,
            // review,
            // likes,
        };

        return (
            <li class="song-li">Song name: {song.title}
                <audio class="audio" controls>
                    <source src={song.songUrl} type="audio/ogg"></source>
                </audio>
            </li>
        )
    }
}

export default Song;
