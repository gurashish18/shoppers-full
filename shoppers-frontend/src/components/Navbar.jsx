/** @format */

import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../redux/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
	const dispatch = useDispatch();
	const { cartquantity } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		toast.warning("Logged out!", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
	return (
		<Container>
			<ToastContainer />
			<Wrapper>
				<Left>
					<SearchContainer>
						<Input />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>
						<Link to="/">SHOPPERS.</Link>
					</Logo>
				</Center>
				<Right>
					{user !== null ? (
						<>
							<ItemContainer onClick={() => handleLogout()}>
								<MenuItem>{user.username}</MenuItem>
								<LogoutIcon />
							</ItemContainer>
							<MenuItem>
								<Link to={`orders/${user._id}`}>MY ORDERS</Link>
							</MenuItem>
							<MenuItem>
								<Link to="cart">
									<Badge badgeContent={cartquantity} color="primary">
										<ShoppingCartOutlinedIcon />
									</Badge>
								</Link>
							</MenuItem>
						</>
					) : (
						<>
							<MenuItem>
								<Link to="login">LOGIN</Link>
							</MenuItem>
							<MenuItem>
								<Link to="register">REGISTER</Link>
							</MenuItem>
							<MenuItem>
								<Link to="cart">
									<Badge badgeContent={cartquantity} color="primary">
										<ShoppingCartOutlinedIcon />
									</Badge>
								</Link>
							</MenuItem>
						</>
					)}
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	height: 60px;
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
`;
const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	border: 0.5px solid gray;
	border-radius: 5px;
	padding: 5px;
`;
const Input = styled.input`
	border: none;
	outline: none;
`;
const Center = styled.div`
	flex: 1;
`;
const Logo = styled.h1`
	font-weight: 800;
	text-align: center;
	letter-spacing: 3px;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;
const ItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
`;
