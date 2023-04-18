/** @format */

import React from "react";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styled from "styled-components";

const NewUser = () => {
	return (
		<Container>
			<Wrapper>
				<Avatar
					src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
					alt="user"
				/>
				<UserInfo>
					<Name>Gurashish Singh</Name>
					<Designation>Software Engineer</Designation>
				</UserInfo>
				<ViewButton>
					<VisibilityIcon fontSize="16px" />
					<Text>View</Text>
				</ViewButton>
			</Wrapper>
		</Container>
	);
};

export default NewUser;

const Container = styled.div`
	border: 1px solid lightgray;
	border-radius: 10px;
`;
const Wrapper = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
const ViewButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	background-color: #fbc8c8;
	padding: 5px 8px;
	border-radius: 8px;
	cursor: pointer;
`;
const Name = styled.span``;
const Designation = styled.span`
	font-weight: 600;
	margin-top: 5px;
`;
const Text = styled.span`
	font-size: 14px;
`;
