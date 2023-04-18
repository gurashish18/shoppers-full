/** @format */

import React from "react";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
	return (
		<div>
			<Slider />
			<Categories />
			<Title>Popular products</Title>
			<Products />
		</div>
	);
};

export default Home;

const Title = styled.h1`
	font-weight: 600;
	letter-spacing: 3px;
	text-align: center;
	margin-top: 50px;
`;