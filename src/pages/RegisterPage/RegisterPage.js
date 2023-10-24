// General Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

// Component Imports

// Util Imports
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
	const { registerUser } = useContext(AuthContext);
	const defaultValues = {
		username: "",
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	};
	const [formData, handleInputChange, handleSubmit] = useCustomForm(
		registerUser,
		defaultValues
	);

	return (
		<div className='page'>
			<form className='form' onSubmit={handleSubmit}>
				<div className='form reg'>
					<label>
						First Name:{" "}
						<input
							type='text'
							name='firstName'
							value={formData.firstName}
							onChange={handleInputChange}
						/>
					</label>
					<label>
						Last Name:{" "}
						<input
							type='text'
							name='lastName'
							value={formData.lastName}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<label>
					Email:{" "}
					<input
						type='text'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Username:{" "}
					<input
						type='text'
						name='username'
						value={formData.username}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Password:{" "}
					<input
						type='password'
						name='password'
						value={formData.password}
						onChange={handleInputChange}
					/>
				</label>
				<Link to='/login'>
					<button type='submit'>Register!</button>
				</Link>
			</form>
		</div>
	);
};

export default RegisterPage;
