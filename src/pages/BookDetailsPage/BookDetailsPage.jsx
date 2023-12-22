// General Imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Assets Imports
import favHeart from "../../assets/favourite-alt-svgrepo-com.svg";
import emptyHeart from "../../assets/favourite-heart-alt-empty.svg";
import noImage from "../../assets/no-image-svgrepo-com.svg";

// Component Imports
import ReviewDisplay from "../../components/ReviewDisplay";
import "./BookDetailsPage.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

// Util Imports
import useAuth from "../../hooks/useAuth";
import usePopup from "../../hooks/usePopup";

const BookDetailsPage = () => {
	const { id } = useParams();
	const [bookDetails, setBookDetails] = useState([]);
	const [reviewDetails, setReviewDetails] = useState([]);
	const [user, token] = useAuth();
	const { popupState, openPopup, closePopup, togglePopup } = usePopup();
	const [reviewText, setReviewText] = useState("");
	const [reviewRating, setReviewRating] = useState("");
	useEffect(() => {
		fetchGoogleBookDetails();
	}, []);

	useEffect(() => {
		user && fetchReviewDetails();
	}, [bookDetails, user]);

	const fetchGoogleBookDetails = async () => {
		try {
			let response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes/${id}/`
			);
			setBookDetails(response.data);
		} catch (error) {
			console.log("Error in fetchGoogleBookDetails: ", error);
		}
	};

	const fetchReviewDetails = async () => {
		try {
			let response = await axios.get(
				`https://localhost:5001/api/BookDetails/${id}/`,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			setReviewDetails(response.data);
		} catch (error) {
			console.warn("Error in fetchReviewDetails: ", error);
		}
	};

	const postNewReview = async () => {
		const reviewFormData = {
			BookId: id,
			Text: reviewText,
			Rating: reviewRating,
		};
		try {
			let response = await axios.post(
				"https://localhost:5001/api/reviews",
				reviewFormData,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			response.status === 201 && fetchReviewDetails();
		} catch (error) {
			console.warn("Error submitting review in BookDetailsPage: ", error);
		}
	};

	const addFavorite = async () => {
		const favoriteData = {
			BookId: id,
			Title: bookDetails.volumeInfo.title,
			ThumbnailUrl: bookDetails.volumeInfo.imageLinks.smallThumbnail
				? bookDetails.volumeInfo.imageLinks.smallThumbnail
				: "",
		};
		try {
			let response = await axios.post(
				"https://localhost:5001/api/favorites",
				favoriteData,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			response.status === 201 && fetchReviewDetails();
		} catch (error) {
			console.warn("Error submitting review in BookDetailsPage: ", error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postNewReview();
		closePopup();
	};

	return (
		<div className='page detail'>
			{bookDetails?.volumeInfo?.title ? (
				<div className='title-line'>
					<div className='title'>
						<h2>{bookDetails.volumeInfo.title}</h2>
					</div>
					<div className='favbuttons'>
						{reviewDetails.isFavorite ? (
							<img
								src={favHeart}
								alt='favorite heart icon'
								className='fav'
								width={60}
								height={60}
							/>
						) : (
							<div className='favbuttons'>
								<img
									className='unfav'
									src={emptyHeart}
									alt='unselected heart icon'
									width={60}
									height={60}
									onClick={() => {
										addFavorite();
									}}
								/>
								Add To Favorites
							</div>
						)}
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
			{bookDetails?.volumeInfo?.authors && (
				<div className='description'>
					<div className='authors'>
						{bookDetails.volumeInfo.authors}
					</div>
					<div className='text'>
						{bookDetails.volumeInfo.description}
					</div>
				</div>
			)}
			<div className='reviews'>
				{reviewDetails?.avgRating > 0 && (
					<div className='average'>
						<h4>Avg User Rating: </h4>
						{reviewDetails.avgRating} out of 5
					</div>
				)}

				{!user ? (
					<div className='no-post'>
						<h3>Log in to post reviews</h3>
					</div>
				) : (
					<>
						<button onClick={openPopup}>Submit A Review</button>
						<ReviewForm
							popupState={popupState}
							handleSubmit={handleSubmit}
							setReviewRating={setReviewRating}
							reviewRating={reviewRating}
							setReviewText={setReviewText}
							reviewText={reviewText}
						/>
					</>
				)}
				<br></br>
				<h3>Reviews:</h3>
				<div className='reviewsList'>
					{!reviewDetails.reviews ? (
						<h5>Be the first to review this book</h5>
					) : (
						<>
							{reviewDetails.reviews.map((review, index) => (
								<ReviewDisplay review={review} key={index} />
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};
export default BookDetailsPage;
