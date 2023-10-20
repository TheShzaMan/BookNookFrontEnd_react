import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";

const SearchPage = () => {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const fetchBooks = async () => {
		try {
			let searchTerm = searchInput.toLowerCase();
			let response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes/${searchTerm}/`
			);
			console.log(response.data);
		} catch (error) {
			console.log("Error in fetchBooks: ", error);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetchBooks();
	};

	return (
		<div className='container'>
			<h1>Search Library</h1>
			<SearchBar
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default SearchPage;
