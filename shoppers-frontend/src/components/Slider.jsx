/** @format */

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data.js";
import { useNavigate } from "react-router-dom";


const Slider = () => {
	const navigate = useNavigate();
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex === 2 ? 0 : slideIndex + 1);
		}
	};
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined style={{ font: 16 }} />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((slide) => (
					<Slide bg={slide.bg} key={slide.id}>
						<ImageContainer>
							<Image src={slide.img} />
						</ImageContainer>
						<InfoContainer>
							<Title>{slide.title}</Title>
							<Description>{slide.desc}</Description>
							<Button onClick={() => navigate("products")}>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined style={{ font: 16 }} />
			</Arrow>
		</Container>
	);
};

export default Slider;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 60px);
	background-color: #f6f5f5;
	display: flex;
	position: relative;
	overflow: hidden;
`;
const Arrow = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
	background-color: #f8f8f8;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	cursor: pointer;
	z-index: 2;
`;
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
	height: calc(100vh-60px);
	width: 100vw;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
	height: 100%;
	flex: 1;
`;
const Image = styled.img`
	height: 100%;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;
const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
	:hover {
		background-color: #000000;
		color: white;
		transition: all 0.5s ease;
	}
`;
