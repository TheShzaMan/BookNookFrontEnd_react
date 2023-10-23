import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import BooksImg from "../../assets/books-stack-of-three-svgrepo-com.svg";

const Navbar = () => {
	const { logoutUser, user } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<div className='navBar'>
			<ul>
				<li className='brand'>
					<Link
						to='/'
						style={{
							textDecoration: "none",
							color: "inherit",
						}}
					>
						<h1>the Book Nook</h1>
					</Link>
					<img
						className='brand'
						src={BooksImg}
						alt='stack of books'
						width={60}
						height={60}
					/>
				</li>
				<li>
					{user ? (
						<button onClick={logoutUser}>Logout</button>
					) : (
						<Link to='/login' style={{ textDecoration: "none" }}>
							<button>Login</button>
						</Link>

						// <button onClick={() => navigate("/login")}>
						// 	Login
						// </button>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
