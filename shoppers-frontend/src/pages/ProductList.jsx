/** @format */

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Products from "../components/Products";
import { categories } from "../data";

const ProductList = () => {
	const location = useLocation();
	const category = location.pathname.split("/")[2];
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("newest")

	const handleFilters = (e) => {
		setFilters({
			...filters,
			[e.target.name]: e.target.value
		})
	}

	return (
		<Container>
			<Title>{category}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select name="category" onChange={handleFilters}>
						{categories.map((category) => (
							<Option>{category.title}</Option>
						))}
					</Select>
					<Select name="size" onChange={handleFilters}>
						<Option defaultChecked>
							M
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select name="sort" onChange={(e) => setSort(e.target.value)}>
						<Option defaultChecked value="newest">
							Newest
						</Option>
						<Option value="asc">Price (asc)</Option>
						<Option value="dsc">Price (dsc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products category={category} filters={filters} sort={sort} />
		</Container>
	);
};

export default ProductList;


const Container = styled.div``;
const Title = styled.h1`
	font-weight: 600;
	letter-spacing: 3px;
	text-align: center;
	margin-top: 50px;
`;
const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	margin-top: 30px;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FilterText = styled.span`
	font-size: 22px;
	margin-right: 20px;
`;
const Select = styled.select`
	padding: 5px;
	font-size: 16px;
	margin: 10px;
`;
const Option = styled.option``;