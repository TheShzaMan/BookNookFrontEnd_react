import "./SearchBar.css";
import React from "react";

const SearchBar = ({ searchInput = "", setSearchInput, handleSubmit }) => {
	return (
		<form onSubmit={(e) => handleSubmit(e)} className='search-form'>
			<button type='submit' className='search-button'>
				SEARCH
			</button>
			<input
				className='search-field'
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
		</form>
	);
};

export default SearchBar;
