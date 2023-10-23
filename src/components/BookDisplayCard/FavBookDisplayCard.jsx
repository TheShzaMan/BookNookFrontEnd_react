import "./BookDisplayCard.css";
import React from "react";
import noImage from "../../assets/no-image-svgrepo-com.svg";

const FavBookDisplayCard = ({ singleBook, index }) => {
	return (
		<div className='book-display fav'>
			<div className='display-thumb' key={index}>
				{singleBook?.thumbnailUrl ? (
					<img
						src={singleBook.thumbnailUrl}
						alt='Book cover thumbnail'
						className='display-thumb'
					/>
				) : (
					<img
						src={noImage}
						alt='no image for this book'
						className='display-thumb'
					/>
				)}
			</div>
			<div className='display-title'>
				<p className='display-title'>{singleBook.title}</p>
			</div>
		</div>
	);
};

export default FavBookDisplayCard;
