// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import BookDetailsPage from "./pages/BookDetailsPage/BookDetailsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<SearchPage />} />

				<Route path='/login' element={<LoginPage />} />

				<Route path='/register' element={<RegisterPage />} />

				<Route path='/favorites' element={<FavoritesPage />} />

				<Route path='/bookDetails' element={<BookDetailsPage />} />

				{/* <Route path='/home' element={<HomePage />} /> */}

				<Route
					path='/home'
					element={
						<PrivateRoute>
							<HomePage />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
