import "./SearchBar.css";
import React from "react";

const SearchBar = ({ searchTerm = "", setSearchTerm, handleSubmit }) => {
	return (
		<form onSubmit={(e) => handleSubmit(e)} className='search'>
			<button type='submit' className='search-button'>
				SEARCH
			</button>
			<input
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className='search-field'
			/>
		</form>
	);
};

export default SearchBar;
