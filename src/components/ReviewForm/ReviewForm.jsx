import React from "react";
import { useEffect } from "react";
const ReviewForm = ({
	popupState,
	handleSubmit,
	setReviewRating,
	reviewRating,
	setReviewText,
	reviewText,
}) => {
	useEffect(() => {
		setReviewRating("");
		setReviewText("");
	}, [popupState]);
	return (
		<div className={popupState}>
			<div className='form'>
				<form onSubmit={handleSubmit}>
					<h3>Submit Review: </h3>
					<label id='rating-form'>
						Book Rating: 0 to 5
						<input
							type='number'
							id='rating-input'
							value={reviewRating}
							min='1'
							max='5'
							onChange={(e) => setReviewRating(e.target.value)}
						/>
					</label>
					<label>
						Enter your review:
						<textarea
							type='text'
							name='text'
							value={reviewText}
							onChange={(e) => setReviewText(e.target.value)}
							rows='3'
						/>
					</label>
					<button className='submit' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ReviewForm;
