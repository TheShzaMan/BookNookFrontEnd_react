import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
	const { loginUser, isServerError } = useContext(AuthContext);
	const defaultValues = { userName: "", password: "" };
	const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
		loginUser,
		defaultValues
	);

	useEffect(() => {
		if (isServerError) {
			reset();
		}
	}, [isServerError]);

	return (
		<div className='page'>
			<form className='form' onSubmit={handleSubmit}>
				<label>
					Username:{" "}
					<input
						type='text'
						name='userName'
						value={formData.userName}
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
				{isServerError ? (
					<p className='error'>
						Login failed, incorrect credentials!
					</p>
				) : null}
				<button>Login!</button>
				<p>Need to sign-up first?</p>
				<Link to='/register' className='register-link'>
					Click to register!
				</Link>
			</form>
		</div>
	);
};

export default LoginPage;
