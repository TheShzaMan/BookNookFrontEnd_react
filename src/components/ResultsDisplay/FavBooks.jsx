import React from "react";
import "./ResultsDisplay.css";
import FavBookDisplayCard from "../BookDisplayCard/FavBookDisplayCard";
const FavBooks = ({ queryResults = [] }) => {
	const displayCards = queryResults.map((singleBook, index) => (
		<FavBookDisplayCard singleBook={singleBook} key={index} />
	));

	return <div className='results-container'>{displayCards}</div>;
};

export default FavBooks;
