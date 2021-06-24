import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import './Songs.css';
import { likeSong, leaveReview } from '../../store/songs.js';
import Review from './review.js';


const Song = ({ song }) => {
    const dispatch = useDispatch();
    // const history = useHistory();
    const [showReviews, setShowReviews] = useState(false);
    const userId = useSelector((state) => state.session.user.id)
    //const [userId, setUserId] = useState(1);
    // const [songId, setSongId] = useState(1);
    const [review, setReview] = useState('');
    const [likes, setLikes] = useState(false);

    // const updateUserId = (e) => setUserId(e.target.value);
    // const updateSongId = (e) => setSongId(e.target.value);
    // const updateReview = (e) => setReview(e.target.value);
    // const updateLikes = (e) => setLikes(e.target.value);
    
    // useEffect(() => {
    //     dispatch(likeSong())
    // }, [dispatch])

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

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        setReview(e.value);
        const payload = {
            userId,
            songId,
            review,
        };
        dispatch(leaveReview(payload));
        console.log(payload)
    }

    return (
        <li className="song-li">
            <label className="song-name">
                Song name: {song.title}
            </label>
            <audio className="audio" controls>
                <source src={song.songUrl} type="audio/ogg"></source>
            </audio>
            <label className="likes">Likes: {likes.length}</label>
            <button onClick={handleLikeSubmit}>Like</button>
            <button className="showReviews" onClick={() => setShowReviews(!showReviews)}>Show Reviews</button>
            {showReviews ?
                song.Reviews.map((review) => <Review key={review.id} review={review}></Review>)
                : null}
            <input className="review" value={song.review} onClick={(e) => setReview(e.target.value)} />
            <button className="submit" type="submit" onClick={handleReviewSubmit}>Submit Review</button>


        </li>
    )
}


export default Song;
