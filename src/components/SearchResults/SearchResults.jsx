import React from "react";
import "./SearchResults.css";
import BookDisplayCard from "../BookDisplayCard/BookDisplayCard";

const SearchResults = ({ searchResults = [] }) => {
	const displayCards = searchResults.map((singleBook, index) => (
		<BookDisplayCard singleBook={singleBook} key={index} />
	));

	return <div className='results-container'>{displayCards}</div>;
};

export default SearchResults;
