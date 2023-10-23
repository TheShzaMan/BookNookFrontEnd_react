import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import SearchResults from "../../components/SearchResults/SearchResults";
const SearchPage = () => {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState();

	const fetchBooks = async () => {
		try {
			let searchTerm = searchInput.toLowerCase();
			let response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}/`
			);
			console.log(response.data.items);

			setSearchResults(response.data.items);
		} catch (error) {
			console.log("Error in fetchBooks: ", error);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetchBooks();
	};

	return (
		<div className='page'>
			<div className='searchbar-container'>
				<h2>Search Library</h2>
				<SearchBar
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					handleSubmit={handleSubmit}
				/>
			</div>
			{searchResults ? (
				<div className='searchResults-container'>
					<SearchResults searchResults={searchResults} />
				</div>
			) : (
				<h2>...</h2>
			)}
		</div>
	);
};

export default SearchPage;
