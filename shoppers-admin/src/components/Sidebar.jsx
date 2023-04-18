/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MailIcon from "@mui/icons-material/Mail";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SendIcon from "@mui/icons-material/Send";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	minwidth: "50%",
	boxShadow: 24,
	p: 4,
};

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// for sprint
	const [sprint, setSprint] = useState(null);
	const [sprintError, setSprintError] = useState(null);

	// for sprint week
	const [sprintWeek, setSprintWeek] = useState(null);
	const [sprintWeekError, setSprintWeekError] = useState(null);

	// for ticket type
	const [ticketType, setTicketType] = useState(null);
	const [ticketTypeError, setTicketTypeError] = useState(null);

	// for ticket number
	const [ticketNumber, setTicketNumber] = useState(null);
	const [ticketNumberError, setTicketNumberError] = useState(null);

	// for parent ticket number
	const [parentTicketNumber, setParentTicketNumber] = useState(null);
	const [parentTicketNumberError, setParentTicketNumberError] = useState(null);

	// for effort hours
	const [effortHours, setEffortHours] = useState(null);
	const [effortHoursError, setEffortHoursError] = useState(null);

	// for status
	const [status, setStatus] = useState(null);
	const [statusError, setStatusError] = useState(null);

	// for comments
	const [comment, setComment] = useState(null);
	const [commentError, setCommentError] = useState(null);

	const validateAlphaNumericAndHyphen = (val) => {
		const regex = new RegExp("^[a-zA-Z0-9-]+$");
		return regex.test(val);
	};

	const validate = () => {
		// check sprint value
		if (sprint === null || !validateAlphaNumericAndHyphen(sprint)) {
			setSprintError("Only Alpha numeric and hyphen allowed!");
		}

		// check sprint week
		if (sprintWeek === null) {
			setSprintWeekError("This is a required field.");
		}

		// check ticket type
		if (ticketType === null) {
			setTicketTypeError("This is a required field.");
		}

		// check parent ticket number
		if (
			parentTicketNumber === null ||
			!validateAlphaNumericAndHyphen(parentTicketNumber)
		) {
			setParentTicketNumberError("Only Alpha numeric and hyphen allowed!");
		}

		// check ticket number
		if (ticketNumber === null || !validateAlphaNumericAndHyphen(ticketNumber)) {
			setTicketNumberError("Only Alpha numeric and hyphen allowed!");
		}

		// check effort hours
		if (effortHours === null) {
			setEffortHoursError("This is a required field");
		}

		// check status
		if (status === null) {
			setStatusError("This is a required field");
		}

		// check comment
		if (comment === null) {
			setCommentError("This is a required field");
		}

		if (
			sprintError !== null ||
			sprintWeekError !== null ||
			ticketTypeError !== null ||
			parentTicketNumberError !== null ||
			ticketNumberError !== null ||
			effortHoursError !== null ||
			statusError !== null ||
			commentError !== null
		)
			return false;
		else return true;
	};
	const handleSubmit = () => {
		if (validate() === true) {
			alert("Sucess");
			handleClose();
		}
	};
	return (
		<Container>
			<Wrapper>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Form>
							<Column>
								<InputField>
									<Label for="sprint">Sprint</Label>
									<Input
										type="text"
										name="sprint"
										onChange={(e) => setSprint(e.target.value)}
										value={sprint}
									/>
									<Error>{sprintError}</Error>
								</InputField>
								<InputField>
									<Label for="sprintweek">Sprint Week</Label>
									<Select
										name="sprintweek"
										id="sprintweek"
										value={sprintWeek}
										onChange={(e) => setSprintWeek(e.target.value)}
									>
										<Option value="week1">Week 1</Option>
										<Option value="week2">Week 2</Option>
										<Option value="week3">Week 3</Option>
										<Option value="week4">Week 4</Option>
									</Select>
									<Error>{sprintWeekError}</Error>
								</InputField>
								<InputField>
									<Label for="ticketType">Ticket Type</Label>
									<Select
										name="ticketType"
										id="ticketType"
										value={ticketType}
										onChange={(e) => setTicketType(e.target.value)}
									>
										<Option value="Story">Story</Option>
										<Option value="Task">Task</Option>
										<Option value="Defect">Defect</Option>
										<Option value="Bug">Bug</Option>
									</Select>
									<Error>{ticketTypeError}</Error>
								</InputField>
								<InputField>
									<Label for="ticketno">Ticket Number</Label>
									<Input
										name="ticketno"
										value={ticketNumber}
										onChange={(e) => setTicketNumber(e.target.value)}
									/>
									<Error>{ticketNumberError}</Error>
								</InputField>
							</Column>
							<Column>
								<InputField>
									<Label for="parentticketno">Parent Ticket Number</Label>
									<Input
										name="parentticketno"
										value={parentTicketNumber}
										onChange={(e) => setParentTicketNumber(e.target.value)}
									/>
									<Error>{parentTicketNumberError}</Error>
								</InputField>
								<InputField>
									<Label for="efforthours">Effort Hours</Label>
									<Select
										name="efforthours"
										id="efforthours"
										value={effortHours}
										onChange={(e) => setEffortHours(e.target.value)}
									>
										<Option value="1">1</Option>
										<Option value="2">2</Option>
										<Option value="3">3</Option>
										<Option value="4">4</Option>
										<Option value="5">5</Option>
										<Option value="6">6</Option>
										<Option value="7">7</Option>
										<Option value="8">8</Option>
									</Select>
									<Error>{effortHoursError}</Error>
								</InputField>
								<InputField>
									<Label for="status">Status</Label>
									<Select
										name="status"
										id="status"
										value={status}
										onChange={(e) => setStatus(e.target.value)}
									>
										<Option value="In Progress">In Progress</Option>
										<Option value="Completed">Completed</Option>
										<Option value="Blocked">Blocked</Option>
									</Select>
									<Error>{statusError}</Error>
								</InputField>
								<InputField>
									<Label for="comment">Comment</Label>
									<Input
										name="comment"
										value={comment}
										onChange={(e) => setComment(e.target.value)}
									/>
									<Error>{commentError}</Error>
								</InputField>
							</Column>
						</Form>
						<Submit>
							<SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
						</Submit>
					</Box>
				</Modal>
				<SidebarMenu>
					<Button onClick={handleOpen}>Tracker</Button>
				</SidebarMenu>
				<SidebarMenu>
					<SidebarMenuTile>Dashboard</SidebarMenuTile>
					<SidebarMenuList>
						<SidebarMenuListItem>
							<HomeIcon />
							HOME
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<AnalyticsIcon />
							ANALYTICS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<TrendingUpIcon />
							SALES
						</SidebarMenuListItem>
					</SidebarMenuList>
				</SidebarMenu>
				<SidebarMenu>
					<SidebarMenuTile>Quick Menu</SidebarMenuTile>
					<SidebarMenuList>
						<SidebarMenuListItem>
							<GroupIcon />
							USERS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<CategoryIcon />
							PRODUCTS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<ReceiptLongIcon />
							TRANSACTIONS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<SummarizeIcon />
							REPORTS
						</SidebarMenuListItem>
					</SidebarMenuList>
				</SidebarMenu>
				<SidebarMenu>
					<SidebarMenuTile>Notifications</SidebarMenuTile>
					<SidebarMenuList>
						<SidebarMenuListItem>
							<MailIcon />
							MAIL
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<FeedbackIcon />
							FEEDBACKS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<SendIcon />
							MESSAGES
						</SidebarMenuListItem>
					</SidebarMenuList>
				</SidebarMenu>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;

const Container = styled.div`
	flex: 1;
	border-right: 1px solid lightgray;
	height: calc(100vh - 60px);
	position: sticky;
	top: 60px;
`;
const Wrapper = styled.div`
	padding: 10px;
`;
const SidebarMenu = styled.div`
	margin-bottom: 20px;
`;
const SidebarMenuTile = styled.h1`
	font-size: 18px;
	color: gray;
	font-weight: 300;
	letter-spacing: 2px;
`;
const SidebarMenuList = styled.ul`
	list-style: none;
	margin-top: 10px;
`;
const SidebarMenuListItem = styled.li`
	display: flex;
	align-items: center;
	margin: 10px 0px;
	gap: 5px;
	cursor: pointer;
	border-radius: 5px;
	padding: 5px;
	color: black;
	font-weight: 300;
	font-size: 12px;
	&:hover {
		background-color: #f6e5e5;
	}
`;
const Button = styled.button`
	border: none;
	width: 100%;
	padding: 10px 20px;
	background-color: white;
	cursor: pointer;
	border: 1px solid black;
	border-radius: 10px;
`;
const Label = styled.label``;
const Input = styled.input`
	width: 100%;
	border: none;
	border: 1px solid gray;
	border-radius: 8px;
	height: 25px;
	padding: 5px;
	font-size: 14px;
	margin-top: 10px;
`;
const Form = styled.form`
	display: flex;
	width: 100%;
	height: 100%;
	gap: 40px;
`;
const Error = styled.span`
	font-size: 12px;
	color: red;
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
const InputField = styled.div`
	margin: 10px 0px;
`;
const Select = styled.select`
	width: 100%;
	border: none;
	border: 1px solid gray;
	border-radius: 8px;
	height: 35px;
	line-height: 35px;
	-webkit-appearance: menulist-button;
	-moz-appearance: none;
	font-size: 14px;
	margin-top: 10px;
`;
const Option = styled.option``;
const Submit = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px 0px;
`;
const SubmitButton = styled.button`
	width: 50%;
	border: none;
	background-color: #000000;
	border: 1px solid #ffffff;
	color: #ffffff;
	border-radius: 10px;
	padding: 12.5px 0px;
	cursor: pointer;
`;
