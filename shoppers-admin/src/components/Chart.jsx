/** @format */

import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const data = [
	{
		name: "Jan",
		"Active users": 2000,
	},
	{
		name: "Feb",
		"Active users": 3400,
	},
	{
		name: "Mar",
		"Active users": 1200,
	},
	{
		name: "Apr",
		"Active users": 4600,
	},
	{
		name: "May",
		"Active users": 4300,
	},
	{
		name: "Jun",
		"Active users": 5600,
	},
	{
		name: "Jul",
		"Active users": 4300,
	},
	{
		name: "Aug",
		"Active users": 6800,
	},
	{
		name: "Sep",
		"Active users": 5900,
	},
	{
		name: "Oct",
		"Active users": 6100,
	},
	{
		name: "Nov",
		"Active users": 8900,
	},
	{
		name: "Dec",
		"Active users": 6890,
	},
];

const Chart = () => {
	return (
		<Container>
			<Wrapper>
				<ChartTitle>User Analytics</ChartTitle>
				<ResponsiveContainer width="100%" aspect={4 / 1}>
					<LineChart data={data}>
						<XAxis dataKey="name" stroke="#000000" />
						<Line type="monotone" dataKey={"Active users"} stroke="#000000" />
						<Tooltip />
						<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
					</LineChart>
				</ResponsiveContainer>
			</Wrapper>
		</Container>
	);
};

export default Chart;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	margin-top: 50px;
`;
const Wrapper = styled.div`
	padding: 20px;
`;
const ChartTitle = styled.h1`
	font-size: 22px;
	margin-bottom: 20px;
	font-weight: 400;
`;
