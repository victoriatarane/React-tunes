import { getSongs } from '../../store/songs.js';
import { useDispatch } from 'react-redux';

const Reviews = ({ review }) => {
    const dispatch = useDispatch();
    // const user = User.findById(review.userId);
    // const userName = user.username;
    // const handleDelete = (e) => {
    //     e.prevenetDefault();
    //     const reviewId = review.id;
    //     const payload = {
    //         reviewId
    //     }
    //     dispatch(deleteReviews(reviewId));
    //     dispatch(getSongs())
    // }
    return (
        <div>
            {/* <p className="reviewer" >{review.author}</p> */}
            <p className="review-display">{review.review}</p>
            <button><i className="fas fa-trash-alt"/></button>
        </div>
    )
}

export default Reviews;