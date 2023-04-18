/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	useEffect(() => {
		if (user !== null) {
			navigate("/cart");
		}
	}, [user, navigate])

	const handleRegister = async () => {
		try {
			const userData = {
				firstname: firstName,
				lastname: lastName,
				username: username,
				email: email,
				password: password
			};

			dispatch(register(userData));
			navigate("/login");

		} catch (error) {
			toast.error(error.message, {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	}
	return (
		<Container>
			<ToastContainer />
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="first name" type="text" onChange={(e) => setFirstName(e.target.value)} />
					<Input placeholder="last name" type="text" onChange={(e) => setLastName(e.target.value)} />
					<Input placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
					<Input placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
					<Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
					<Input placeholder="confirm password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
				</Form>
				<Agreement>
					By Registering, I agree to the Shoppers Membership Terms and
					conditions.
				</Agreement>
				<Button onClick={() => handleRegister()}>REGISTER</Button>
				<NoAccount>
					Already have an account <Signin href="/login">SIGN IN</Signin>
				</NoAccount>
			</Wrapper>
		</Container>
	);
};

export default Register;


const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
		url("https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?w=1800&t=st=1678436154~exp=1678436754~hmac=5fe7b7aac5bdcdf26086d32b3a66f0d69f87786d5ef59a3f0df0fda631be1b5c")
			center no-repeat;
	background-size: cover;
`;
const Wrapper = styled.div`
	background-color: white;
	width: 40%;
	padding: 20px;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 200;
	letter-spacing: 3px;
	margin-bottom: 30px;
	text-align: center;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 10px;
	padding: 10px;
	font-size: 16px;
`;
const Agreement = styled.p`
	margin: 20px 10px;
	font-weight: 100;
	font-size: 14px;
`;
const Button = styled.button`
	letter-spacing: 2px;
	margin: 10px 10px;
	padding: 10px;
	background-color: lightskyblue;
	border: none;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	:hover {
		background-color: #000000;
		color: white;
		transition: all 0.5s ease;
	}
`;
const NoAccount = styled.p`
	margin: 20px 10px;
	font-weight: 200;
`;
const Signin = styled.a`
	text-decoration: none;
	color: black;
	font-weight: 400;
	font-style: italic;
`;
