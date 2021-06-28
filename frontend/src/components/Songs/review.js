
const Reviews = ({ review }) => {
    // const user = User.findById(review.userId);
    // const userName = user.username;
    return (
        <div>
            {/* <p className="reviewer" >{review.author}</p> */}
            <p className="review-display">{review.review}</p>
        </div>
    )
}

export default Reviews;