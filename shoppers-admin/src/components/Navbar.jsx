/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<LeftContainer>
					<Logo>
						<Link to="/">ADMIN DASHBOARD.</Link>
					</Logo>
				</LeftContainer>
				<RightContainer>
					<Icon>
						<Badge badgeContent={4} color="primary">
							<NotificationsIcon />
						</Badge>
					</Icon>
					<Icon>
						<SettingsIcon />
					</Icon>
					<Icon>
						<Avatar
							alt="user"
							src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
						/>
					</Icon>
				</RightContainer>
			</Wrapper>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	width: "100%";
	height: 60px;
	border-bottom: 1px solid lightgray;
	position: sticky;
	top: 0;
	background-color: #ffffff;
	z-index: 999;
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
`;
const LeftContainer = styled.div``;
const RightContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;
const Logo = styled.h1`
	font-weight: 800;
	text-align: center;
	letter-spacing: 3px;
`;
const Icon = styled.div`
	cursor: pointer;
`;
