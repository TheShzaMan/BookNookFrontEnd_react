// General Imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Assets Imports
import favHeart from "../../assets/favourite-alt-svgrepo-com.svg";
import emptyHeart from "../../assets/favourite-heart-alt-empty.svg";
import noImage from "../../assets/no-image-svgrepo-com.svg";

// Component Imports

// Util Imports

import useAuth from "../../hooks/useAuth";

const BookDetailsPage = () => {
	const { id } = useParams();
	const [bookDetails, setBookDetails] = useState([]);
	const [reviewDetails, setReviewDetails] = useState([]);
	const [user, token] = useAuth();
	const [reviewText, setReviewText] = useState("");
	const [reviewRating, setReviewRating] = useState("");

	useEffect(() => {
		fetchGoogleBookDetails();
	}, []);
	useEffect(() => {
		fetchReviewDetails();
	}, []);

	const fetchGoogleBookDetails = async () => {
		try {
			let response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes/${id}/`
			);

			console.log(response);
			setBookDetails(response.data);
		} catch (error) {
			console.log("Error in fetchGoogleBookDetails: ", error);
		}
	};
	const fetchReviewDetails = async () => {
		try {
			let responseB = await axios.get(
				`https://localhost:5001/api/BookDetails/${id}/`
			);
			setReviewDetails(responseB.data);
		} catch (error) {
			console.log(
				"Error in fetchReviewDetails axios get request: ",
				error
			);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const reviewFormData = {
			BookId: { id },
			Text: { reviewText },
			Rating: { reviewRating },
		};
		try {
			const response = await axios.post(
				"https://localhost:5001/api/reviews",
				{
					headers: {
						Authorization: "Bearer " + token,
						reviewFormData,
					},
				}
			);
			console.log(response);
			if (response.status === 201) {
				fetchReviewDetails();
			}
		} catch (error) {
			console.warn(
				"Error submitting review in BookDetailsPage axios post request: ",
				error
			);
		}
	};

	return (
		<div className='page detail'>
			{bookDetails?.volumeInfo?.title ? (
				<div className='title-line'>
					<div>
						<h2>{bookDetails.volumeInfo.title}</h2>
					</div>
					<div className='favbuttons'>
						<img
							src={favHeart}
							alt='favorite heart icon'
							className='fav'
							width={80}
							height={80}
						/>
						<img
							src={emptyHeart}
							alt='unselected heart icon'
							className='not-fav'
							width={80}
							height={80}
						/>
					</div>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
			{bookDetails.volumeInfo?.imageLinks?.thumbnail ? (
				<div className='pic'>
					<img
						src={bookDetails.volumeInfo.imageLinks.thumbnail}
						alt='pic of book'
					/>
				</div>
			) : (
				<div>
					<img
						src={noImage}
						alt='no image for this book'
						className='display-thumb'
					/>
				</div>
			)}
			{bookDetails?.volumeInfo?.authors ? (
				<div className='description'>
					<div className='authors'>
						{bookDetails.volumeInfo.authors}
					</div>
					<div className='text'>
						{bookDetails.volumeInfo.description}
					</div>
				</div>
			) : (
				console.log("no")
			)}
			<div className='reviews'>
				<div className='average'>{reviewDetails.avgRating}</div>
				<div className='reviewsList'>
					<h4>Reviews:</h4>
					{reviewDetails.map((review) => {
						<div className='review-for-list'>
							<span>{review.userName}</span>
							<span>{review.rating}</span>
							<p>{review.text}</p>
						</div>;
					})}
				</div>
			</div>
			{user ? (
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
								size='3'
								onChange={(e) =>
									setReviewRating(e.target.value)
								}
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
			) : (
				<div className='no-post'>
					<h3>Log in to post reviews</h3>
				</div>
			)}
		</div>
	);
};
export default BookDetailsPage;
