import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import BooksImg from "../../assets/books-stack-of-three-svgrepo-com.svg";
import BooksImg2 from "../../assets/books-stack-inverse.svg";

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
					<Link to='/'>
						<img
							src={BooksImg}
							alt='stack of books'
							width={60}
							height={60}
							className='brand'
						/>
					</Link>
				</li>
				<li>
					<Link to='/' style={{ textDecoration: "none" }}>
						<button>Search</button>
					</Link>
				</li>
				<li>
					<Link to='/favorites' style={{ textDecoration: "none" }}>
						<button>MyFavs</button>
					</Link>
				</li>
				<li>
					{user ? (
						<Link to='/search' style={{ textDecoration: "none" }}>
							<button onClick={logoutUser}>Logout</button>
						</Link>
					) : (
						<Link to='/login' style={{ textDecoration: "none" }}>
							<button>Login</button>
						</Link>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
