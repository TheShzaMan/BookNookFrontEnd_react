import React from "react";
import "./ResultsDisplay.css";
import BookDisplayCard from "../BookDisplayCard/BookDisplayCard";

const ResultsDisplay = ({ queryResults = [] }) => {
	const displayCards = queryResults.map((singleBook, index) => (
		<BookDisplayCard singleBook={singleBook} key={index} />
	));

	return <div className='results-container'>{displayCards}</div>;
};

export default ResultsDisplay;
