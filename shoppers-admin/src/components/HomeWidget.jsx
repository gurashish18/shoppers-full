/** @format */

import React from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HomeWidget = ({ title, value, description, change, isPositive }) => {
	return (
		<Container>
			<Wrapper>
				<Title>{title}</Title>
				<SalesInfo>
					<Sale>$ {value}</Sale>
					<Change>
						<ChangeValue>{change}</ChangeValue>
						{isPositive ? (
							<ArrowUpwardIcon style={{ color: "#4BB543" }} />
						) : (
							<ArrowDownwardIcon style={{ color: "#FF0000" }} />
						)}
					</Change>
				</SalesInfo>
				<Desc>{description}</Desc>
			</Wrapper>
		</Container>
	);
};

export default HomeWidget;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Wrapper = styled.div`
	padding: 20px;
`;
const Title = styled.h1`
	font-size: 20px;
	color: gray;
`;
const SalesInfo = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;
const Sale = styled.h1`
	font-size: 28px;
`;
const Change = styled.div`
	display: flex;
	align-items: center;
	margin-left: 30px;
`;
const ChangeValue = styled.p``;
const Desc = styled.p`
	font-weight: 300;
	font-size: 14px;
`;
