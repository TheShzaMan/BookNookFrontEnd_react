import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";

const SearchPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

    const fetchBooks = async () => {
        try {
            let search = searchTerm.toLowerCase();
            let response = await axios.get()  //enter url in the parenthesis
            setSearchResults(response.data)
        } catch (error) {
            console.log("Error in fetchBooks: ", error);
            
        }
    
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchBooks();
    } 

	return (
		<div className='container'>
			<h1>Search Library</h1>
			<SearchBar />;
		</div>
	);
};

export default SearchPage;
