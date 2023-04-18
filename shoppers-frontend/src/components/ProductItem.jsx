/** @format */

import React from "react";
import styled from "styled-components";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
	return (
		<Container>
			<Image src={product.img} />
			<Info>
				<Icon>
					<AddShoppingCartOutlinedIcon />
				</Icon>
				<Icon>
					<Link to={`/product/${product._id}`}>
						<SearchOutlinedIcon />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlinedIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default ProductItem;

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
	background-color: rgba(0, 0, 0, 0.4);
	transition: all 0.5s ease;
`;
const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 350px;
	min-width: 280px;
	margin: 10px;
	position: relative;
	&:hover ${Info} {
		opacity: 1;
	}
`;
const Image = styled.img`
	height: 100%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;
