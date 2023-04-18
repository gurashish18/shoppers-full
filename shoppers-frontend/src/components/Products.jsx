/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import axios from "axios";



const Products = ({ category, filters, sort }) => {
	const [products, setProducts] = useState([]);
	// const [filteredProducts, setfilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(category ? `http://localhost:8000/api/products?category=${category}` : "http://localhost:8000/api/products/");
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	}, [category])
	return (
		<>
			<Container>
				{products.map((product) => (
					<ProductItem product={product} />
				))}
			</Container>
		</>
	);
};

export default Products;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 20px;
`;
