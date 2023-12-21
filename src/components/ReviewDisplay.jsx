import React from "react";

const ReviewDisplay = ({ review, index }) => {
	return (
		<div className='review-display'>
			<div className='review-topline'>
				<div className='reviewer'>@{review.userName}</div>
				<div className='review-rating'>Rating: {review.rating}</div>
			</div>
			<div className='review-text'>{review.text}</div>
		</div>
	);
};

export default ReviewDisplay;
