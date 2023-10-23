import React from "react";
import "./BookDisplayCard.css";
import noImage from "../../assets/no-image-svgrepo-com.svg";

const BookDisplay = ({ singleBook, index }) => {
	return (
		<div className='book-display'>
			<div className='display-thumb' key={index}>
				{[singleBook.volumeInfo.imageLinks.smallThumbnail] ? (
					<img
						src={singleBook.volumeInfo.imageLinks.smallThumbnail}
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
				<p className='display-title'>{singleBook.volumeInfo.title}</p>
				<p className='authors'>{singleBook.volumeInfo.authors}</p>
			</div>
		</div>
	);
};

export default BookDisplay;
