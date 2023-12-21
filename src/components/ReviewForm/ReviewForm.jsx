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
					<label>
						Book Rating: 0 to 5
						<input
							type='number'
							value={reviewRating}
							min='0'
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
							rows='10'
							cols='60'
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
