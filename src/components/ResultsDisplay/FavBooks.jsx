import React from "react";
import "./ResultsDisplay.css";
import FavBookDisplayCard from "../BookDisplayCard/FavBookDisplayCard";
import { Link } from "react-router-dom";
const FavBooks = ({ queryResults = [] }) => {
	const displayCards = queryResults.map((singleBook, index) => (
		<Link to={`/${singleBook.id}`} key={index}>
			<FavBookDisplayCard singleBook={singleBook} key={index} />
		</Link>
	));

	return <div className='results-container'>{displayCards}</div>;
};

export default FavBooks;
