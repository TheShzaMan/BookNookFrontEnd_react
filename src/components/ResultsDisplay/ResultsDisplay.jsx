import React from "react";
import "./ResultsDisplay.css";
import BookDisplayCard from "../BookDisplayCard/BookDisplayCard";
import { Link } from "react-router-dom";

const ResultsDisplay = ({ queryResults = [] }) => {
	const displayCards = queryResults.map((singleBook, index) => (
		<Link to={`/${singleBook.id}`} key={index}>
			<BookDisplayCard singleBook={singleBook} key={index} />
		</Link>
	));

	return <div className='results-container'>{displayCards}</div>;
};

export default ResultsDisplay;
