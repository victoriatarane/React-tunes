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
    const songId = song.id;
    
    // useEffect(() => {
    //     dispatch(likeSong(likes))
    //     dispatch(leaveReview(review))
    // }, [dispatch, userId, songId, likes, review])

    const numLikes = () => {
        let num = 0;
        Object.values(likes).forEach((l) => {
            if (l.like){
                num++
            }
        })
        return num
    }

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
        setReview(e.target.value);
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
                <i class="fas fa-compact-disc"/> 
                <p>{song.title}</p>
            </label>
            <audio className="audio" controls>
                <source src={song.songUrl} type="audio/ogg"></source>
            </audio>
            <label className="likes">Likes: {numLikes}</label>
            <button onClick={handleLikeSubmit}>Like <i class="far fa-thumbs-up"/></button>
            <button className="showReviews" onClick={() => setShowReviews(!showReviews)}>View Comments <i class="fas fa-comments"/></button>
            {showReviews ?
                song.Reviews.map((review) => <Review key={review.id} className="reviewDiv" review={review}></Review>)
                : null}
            <input className="review" value={song.review} onClick={(e) => setReview(e.target.value)} />
            <button className="submit" type="submit" onClick={handleReviewSubmit}>Submit Comment <i class="far fa-comment-dots"/></button>


        </li>
    )
}


export default Song;
