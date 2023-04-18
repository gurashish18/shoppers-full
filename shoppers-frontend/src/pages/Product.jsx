/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [selectedsize, setSelectedsize] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await publicRequest.get(`/products/find/${id}`);
				setProduct(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		getProduct()
	}, [id]);

	const handleQuantity = (type) => {
		if (type === "inc") {
			setQuantity(quantity + 1);
		}
		else {
			quantity > 1 && setQuantity(quantity - 1);
		}
	}

	const handleAddtoCart = () => {
		toast.success('Product added to cart!', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		dispatch(addProduct({
			...product, quantity, selectedsize
		}))
	}
	return (
		<Container>
			<ToastContainer />
			<Wrapper>
				<ImageContainer>
					<Image src={product.img} />
				</ImageContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Description>
						{product.desc}
					</Description>
					<Price>Rs. {product.price}</Price>
					<Filter>
						<FilterText>Size: </FilterText>
						<Select onChange={(e) => setSelectedsize(e.target.value)}>
							{
								product.size?.map((s) => (
									<Option key={s}>{s}</Option>
								))
							}
						</Select>
					</Filter>
					<QuantityContainer>
						<ControlQuantity>
							<AddIcon onClick={() => handleQuantity("inc")} style={{ fontSize: "20px", cursor: "pointer" }} />
							<Quantity>{quantity}</Quantity>
							<RemoveIcon onClick={() => handleQuantity("dec")} style={{ fontSize: "20px", cursor: "pointer" }} />
						</ControlQuantity>
						<AddtoCartButton onClick={handleAddtoCart}>ADD TO CART</AddtoCartButton>
					</QuantityContainer>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Product;

const Container = styled.div``;
const Wrapper = styled.div`
	display: flex;
	padding: 20px;
`;
const ImageContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 50px;
`;
const Image = styled.img`
	height: 90vh;
	width: 100%;
	object-fit: cover;
`;
const InfoContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;
const Title = styled.h1`
	font-weight: 600;
	letter-spacing: 3px;
	margin-bottom: 20px;
`;
const Description = styled.p`
	font-weight: 400;
	margin-bottom: 20px;
	line-height: 25px;
`;
const Price = styled.span`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 20px;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;
const FilterText = styled.span`
	font-size: 18px;
	margin-right: 10px;
`;
const Select = styled.select`
	padding: 5px;
`;
const Option = styled.option``;
const QuantityContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const Quantity = styled.span`
	font-size: 20px;
	margin: 0px 20px;
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
`;
const AddtoCartButton = styled.button`
	letter-spacing: 2px;
	padding: 8px;
	font-size: 18px;
	background-color: transparent;
	cursor: pointer;
	:hover {
		background-color: #000000;
		color: white;
		transition: all 0.5s ease;
	}
`;
