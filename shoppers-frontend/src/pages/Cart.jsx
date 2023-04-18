/** @format */

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartProduct from "../components/CartProduct";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
	const { products, totalprice, cartquantity } = useSelector(
		(state) => state.cart
	);
	const { user } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const handleCheckout = () => {
		if (products.length === 0) {
			toast.warning("Please add some products", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else {
			publicRequest
				.post("/checkout/create-checkout-session", {
					products,
					userId: user._id,
				})
				.then((res) => {
					if (res.data.url) {
						window.location.href = res.data.url;
					}
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	};

	return (
		<Container>
			<ToastContainer />
			<Wrapper>
				<Title>YOUR CART</Title>
				<TopContainer>
					<ContinueShopping onClick={() => navigate("/")}>
						CONTINUE SHOPPING
					</ContinueShopping>
					<TopTitles>
						<CartTitle>Your cart({cartquantity})</CartTitle>
						<WishlistTitle>Your wishlist(0)</WishlistTitle>
					</TopTitles>
					{user === null ? (
						<Checkout onClick={() => navigate("/login")}>LOGIN</Checkout>
					) : (
						<Checkout onClick={() => handleCheckout()}>CHECKOUT</Checkout>
					)}
				</TopContainer>
				<BottomContainer>
					<ProductsContainer>
						{products?.length > 0 ? (
							products.map((product) => (
								<CartProduct product={product} key={product.id} />
							))
						) : (
							<EmptyCart>No products in cart</EmptyCart>
						)}
					</ProductsContainer>
					<SummaryContainer>
						<Title>ORDER SUMMARY</Title>
						<Subtotal>Subtotal: $ {totalprice / 80}</Subtotal>
						<Shipping>Shipping cost: $ 0</Shipping>
						<Total>Total: $ {totalprice / 80}</Total>
						{user === null ? (
							<Checkout onClick={() => navigate("/login")}>LOGIN</Checkout>
						) : (
							<Checkout onClick={() => handleCheckout()}>CHECKOUT</Checkout>
						)}
					</SummaryContainer>
				</BottomContainer>
			</Wrapper>
		</Container>
	);
};

export default Cart;

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Title = styled.h1`
	width: 100%;
	font-weight: 200;
	letter-spacing: 3px;
	font-size: 24px;
	text-align: center;
`;
const TopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-top: 40px;
`;
const ContinueShopping = styled.button`
	font-size: 14px;
	padding: 10px;
	background-color: white;
	border: 2px solid #000000;
	font-weight: 600;
	cursor: pointer;
	letter-spacing: 2px;
`;
const TopTitles = styled.div``;
const CartTitle = styled.span`
	font-size: 16px;
	margin-right: 20px;
	text-decoration: underline;
	cursor: pointer;
`;
const WishlistTitle = styled.span`
	font-size: 16px;
	text-decoration: underline;
	cursor: pointer;
`;
const Checkout = styled.button`
	color: white;
	font-size: 14px;
	padding: 10px;
	background-color: #000000;
	border: 1px solid white;
	font-weight: 600;
	cursor: pointer;
	letter-spacing: 2px;
	align-self: center;
`;
const BottomContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
`;
const ProductsContainer = styled.div`
	flex: 0.7;
`;
const SummaryContainer = styled.div`
	width: 100%;
	flex: 0.3;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border: 1px solid lightgray;
	border-radius: 10px;
	height: max-content;
	margin-top: 40px;
	margin-left: 20px;
	padding: 10px;
`;
const Subtotal = styled.span`
	margin-top: 40px;
	font-size: 22px;
	font-weight: 300;
`;
const Shipping = styled.span`
	margin-top: 20px;
	font-size: 22px;
	font-weight: 300;
`;
const Total = styled.h4`
	margin-top: 20px;
	margin-bottom: 40px;
	font-size: 24px;
	font-weight: 800;
`;
const EmptyCart = styled.h1`
	text-align: center;
	margin-top: 100px;
	font-size: 18px;
	font-weight: 300;
`;
