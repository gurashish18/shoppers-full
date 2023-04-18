/** @format */

import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartProduct = ({ product }) => {
	return (
		<Container>
			<ImageContainer>
				<Image src={product.img} />
			</ImageContainer>
			<InfoContainer>
				<ContentInfo>
					<Title>Product: {product.title}</Title>
					<Id>ID: {product._id}</Id>
					<Size>Size: {product.selectedsize}</Size>
				</ContentInfo>
				<PriceInfo>
					<ControlQuantity>
						<AddIcon style={{ fontSize: "20px", cursor: "pointer" }} />
						<Quantity>{product.quantity}</Quantity>
						<RemoveIcon style={{ fontSize: "20px", cursor: "pointer" }} />
					</ControlQuantity>
					<Price>Rs. {product.price * product.quantity}</Price>
				</PriceInfo>
			</InfoContainer>
		</Container>
	);
};

export default CartProduct;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 350px;
	margin: 40px 0px;
	border: 1px solid lightgray;
	border-radius: 10px;
`;
const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0.4;
`;
const Image = styled.img`
	height: 100%;
`;
const InfoContainer = styled.div`
	flex: 0.6;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const ContentInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-right: 50px;
`;
const Title = styled.span`
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 10px;
`;
const Id = styled.span`
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 10px;
`;
const Size = styled.span`
	font-size: 18px;
	font-weight: 400;
`;
const PriceInfo = styled.div`
	flex: 1;
`;
const ControlQuantity = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 50px;
	border: 1px solid gray;
	padding: 5px;
	border-radius: 10px;
	margin-bottom: 50px;
	width: max-content;
`;
const Quantity = styled.span`
	font-size: 20px;
	margin: 0px 20px;
`;
const Price = styled.h1`
	font-size: 24px;
	font-weight: 300;
	letter-spacing: 3px;
`;
