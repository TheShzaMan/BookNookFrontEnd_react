// General Imports
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

// Component Imports
import FavBooks from "../../components/ResultsDisplay/FavBooks";

// Util Imports

const FavoritesPage = () => {
	const [user, token] = useAuth();
	const [favorites, setFavorites] = useState();

	useEffect(() => {
		fetchFavorites();
	}, [token]);

	const fetchFavorites = async () => {
		try {
			let response = await axios.get(
				"https://localhost:5001/api/favorites/myFavorites",
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			console.log(response);
			setFavorites(response.data);
		} catch (error) {
			console.log(error.response.data, error);
		}
	};

	return (
		<div className='page'>
			{favorites ? (
				<div>
					<h2>{user.userName}'s Favorites</h2>
					<div className='favorites-container'>
						<FavBooks queryResults={favorites} />
					</div>
				</div>
			) : (
				<div>
					<h2>You have no favorites yet.</h2>
					<h3>
						Find books on the Search page and add them to your
						collection.
					</h3>
				</div>
			)}
		</div>
	);
};

export default FavoritesPage;
