/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector(state => state.auth);
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	useEffect(() => {
		if (user !== null) {
			navigate("/cart");
		}
	}, [user, navigate])

	const handleLogin = async () => {
		const userData = {
			email,
			password
		};
		try {
			dispatch(login(userData));
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
				<Title>LOGIN</Title>
				<Form>
					<Input placeholder="email" type="email" onChange={(e) => setemail(e.target.value)} />
					<Input placeholder="password" type="password" onChange={(e) => setpassword(e.target.value)} />
				</Form>

				<Button onClick={() => handleLogin()}>LOGIN</Button>
				<NoAccount>
					Don't have an account <Signup href="/register">SIGN UP</Signup>
				</NoAccount>
			</Wrapper>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
		url("https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?w=1800&t=st=1678435866~exp=1678436466~hmac=46094b3f113f43bebbe213f42c533d58562b6c2856bee01fe734fbc8c2f0c397")
			center no-repeat;
	background-size: cover;
`;
const Wrapper = styled.div`
	background-color: white;
	width: 25%;
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
	min-width: 80%;
	margin: 10px 10px;
	padding: 10px;
	font-size: 16px;
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
const Signup = styled.a`
	text-decoration: none;
	color: black;
	font-weight: 400;
	font-style: italic;
`;
