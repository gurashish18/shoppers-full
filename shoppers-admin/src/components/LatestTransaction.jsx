/** @format */

import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

const LatestTransaction = () => {
	return (
		<Container>
			<Wrapper>
				<Table>
					<Row>
						<Heading>Customer</Heading>
						<Heading>Date</Heading>
						<Heading>Amount</Heading>
						<Heading>Payment status</Heading>
					</Row>
					<Row>
						<Description>
							<User>
								<Avatar
									src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
									alt="user"
								/>
								<Name>Alex Ing</Name>
							</User>
						</Description>
						<Description>
							<Date>2 Jan 2023</Date>
						</Description>
						<Description>
							<Amount>$ 2,456</Amount>
						</Description>
						<Description>
							<Status>
								<StatusText color="#FF0000">pending</StatusText>
							</Status>
						</Description>
					</Row>
					<Row>
						<Description>
							<User>
								<Avatar
									src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
									alt="user"
								/>
								<Name>Alex Ing</Name>
							</User>
						</Description>
						<Description>
							<Date>2 Jan 2023</Date>
						</Description>
						<Description>
							<Amount>$ 2,456</Amount>
						</Description>
						<Description>
							<Status>
								<StatusText color="#FF0000">pending</StatusText>
							</Status>
						</Description>
					</Row>
					<Row>
						<Description>
							<User>
								<Avatar
									src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
									alt="user"
								/>
								<Name>Alex Ing</Name>
							</User>
						</Description>
						<Description>
							<Date>2 Jan 2023</Date>
						</Description>
						<Description>
							<Amount>$ 2,456</Amount>
						</Description>
						<Description>
							<Status>
								<StatusText color="#4BB543">approved</StatusText>
							</Status>
						</Description>
					</Row>
					<Row>
						<Description>
							<User>
								<Avatar
									src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
									alt="user"
								/>
								<Name>Alex Ing</Name>
							</User>
						</Description>
						<Description>
							<Date>2 Jan 2023</Date>
						</Description>
						<Description>
							<Amount>$ 2,456</Amount>
						</Description>
						<Description>
							<Status>
								<StatusText color="#FF0000">pending</StatusText>
							</Status>
						</Description>
					</Row>
					<Row>
						<Description>
							<User>
								<Avatar
									src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
									alt="user"
								/>
								<Name>Alex Ing</Name>
							</User>
						</Description>
						<Description>
							<Date>2 Jan 2023</Date>
						</Description>
						<Description>
							<Amount>$ 2,456</Amount>
						</Description>
						<Description>
							<Status>
								<StatusText color="#4BB543">approved</StatusText>
							</Status>
						</Description>
					</Row>
				</Table>
			</Wrapper>
		</Container>
	);
};

export default LatestTransaction;

const Container = styled.div`
	width: 100%;
`;
const Wrapper = styled.div``;
const Table = styled.table`
	width: 100%;
	border-spacing: 20px;
`;
const Row = styled.tr``;
const User = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 5px;
`;
const Heading = styled.th`
	text-align: left;
`;
const Description = styled.td``;
const Name = styled.span``;
const Date = styled.span``;
const Amount = styled.span``;
const Status = styled.div``;
const StatusText = styled.span`
	color: ${(props) => props.color};
`;
