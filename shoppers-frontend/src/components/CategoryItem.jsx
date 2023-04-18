/** @format */

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const CategoryItem = ({ category }) => {
	const navigate = useNavigate();
	return (
		<Container>
			<Image src={category.img} />
			<Info>
				<Title>{category.title}</Title>
				<Button onClick={() => navigate(`products/${category.title}`)}>SHOP NOW</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;

const Container = styled.div`
	display: flex;
	flex: 1;
	margin: 10px;
	position: relative;
	:hover {
		transition: all 1.5s ease;
		transform: scale(1.1);
		cursor: pointer;
	}
`;
const Image = styled.img`
	width: 100%;
`;
const Info = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	text-align: center;
	margin-bottom: 20px;
	font-weight: 800;
	color: white;
	letter-spacing: 2px;
`;
const Button = styled.button`
	padding: 10px;
	background-color: white;
	border: none;
	font-weight: 600;
	cursor: pointer;
	:hover {
		background-color: #000000;
		color: white;
		transition: all 0.5s ease;
	}
`;
