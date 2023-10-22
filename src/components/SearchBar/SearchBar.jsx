import "./SearchBar.css";
import React from "react";
import searchIcon from "../../assets/search-thin-lined-svg.svg";

const SearchBar = ({ searchInput = "", setSearchInput, handleSubmit }) => {
	return (
		<form onSubmit={(e) => handleSubmit(e)} className='form search-form'>
			<div className='search-field'>
				<input
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button type='submit' className='search-button'>
					<img src={searchIcon} alt='search icon' />
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
