/** @format */

import React from "react";
import HomeWidget from "../components/HomeWidget";
import styled from "styled-components";
import Chart from "../components/Chart";
import NewUser from "../components/NewUser";
import LatestTransaction from "../components/LatestTransaction";

const Home = () => {
	return (
		<Container>
			<Wrapper>
				<HomeWidgets>
					<HomeWidget
						title={"Revenue"}
						value={"2,415"}
						description="compared to last month"
						change={"-11.4"}
						isPositive={false}
					/>
					<HomeWidget
						title={"Sales"}
						value={"4,415"}
						description="compared to last month"
						change={"-1.4"}
						isPositive={false}
					/>
					<HomeWidget
						title={"Cost"}
						value={"2,250"}
						description="compared to last month"
						change={"+2.4"}
						isPositive={true}
					/>
				</HomeWidgets>
				<Chart />
				<UsersInfo>
					<NewUsers>
						<Title>New Users</Title>
						<ItemContainer>
							<NewUser />
							<NewUser />
							<NewUser />
							<NewUser />
						</ItemContainer>
					</NewUsers>
					<LatestTransactions>
						<Title>Latest Transactions</Title>
						<ItemContainer>
							<LatestTransaction />
						</ItemContainer>
					</LatestTransactions>
				</UsersInfo>
			</Wrapper>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	width: 100%;
`;
const Wrapper = styled.div`
	padding: 20px 40px;
`;
const HomeWidgets = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 50px;
`;
const UsersInfo = styled.div`
	display: flex;
	margin-top: 50px;
	gap: 20px;
`;
const NewUsers = styled.div`
	flex: 1;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	padding: 20px;
`;
const LatestTransactions = styled.div`
	flex: 2;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	padding: 20px;
`;
const Title = styled.h1`
	font-size: 22px;
	margin-bottom: 20px;
	font-weight: 400;
`;
const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
