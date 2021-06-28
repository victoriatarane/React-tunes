import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import './Songs.css';
import { likeSong, leaveReview, getSongs } from '../../store/songs.js';
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
    const [numLikes, setNumLikes] = useState(song.Likes.length);

    const songId = song.id;

    const handleLikeSubmit = async (e) => {
        e.preventDefault();
        setLikes(!likes);
        setNumLikes(likes!==true ? numLikes+1 : numLikes-1)
        const payload = {
            userId,
            songId,
            likes,
        };
        await dispatch(likeSong(payload))
        dispatch(getSongs())
    }

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        setReview(e.target.value);
        const payload = {
            userId,
            songId,
            review,
        };
        await dispatch(leaveReview(payload));
        dispatch(getSongs())
        // console.log(payload)
    }

    return (
        <li className="song-li">
            <label className="artist">
                <p>{song.Artist.artistName}</p>
            </label>
            <label className="song-name">
                <i className="fas fa-compact-disc"/> 
                <p>{song.title}</p>
            </label>
            <audio className="audio" controls>
                <source src={song.songUrl} type="audio/ogg"></source>
            </audio>
            <label className="likes">Likes: {numLikes}</label>
            <button onClick={handleLikeSubmit}>Like <i className="far fa-thumbs-up"/></button>
            <button className="showReviews" onClick={() => setShowReviews(!showReviews)}>View Comments <i className="fas fa-comments"/></button>
            {showReviews ?
                song.Reviews.map((review) => <Review key={review.id} className="reviewDiv" review={review}></Review>)
                : null}
            <input className="review" value={review} onChange={(e) => setReview(e.target.value)} />
            <button className="submit" type="submit" onClick={handleReviewSubmit}>Submit Comment <i className="far fa-comment-dots"/></button>


        </li>
    )
}


export default Song;
