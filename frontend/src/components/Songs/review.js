import { getSongs, deleteReviews } from '../../store/songs.js';
import { useDispatch, useSelector } from 'react-redux';
import './Songs.css';


const Reviews = ({ review }) => {
    const dispatch = useDispatch();
    const author = useSelector((state) => state.session.user.username)
    // const user = User.findById(review.userId);
    // const userName = user.username;
    const handleDelete = async (review) => {
        // e.preventDefault();
        // console.log(review.id)
        const reviewId = review.id;
        await dispatch(deleteReviews(reviewId));
        dispatch(getSongs());
        window.location.reload(false);
        
    }

    return (
        <div className="review-display">
            <p className="reviewer" >{author}: </p>
            <p className="review-display">{review.review}</p>
            <button onClick={()=>handleDelete(review)}><i className="fas fa-trash-alt"/></button>
        </div>
    )
}

export default Reviews;