import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

import {
	Box,
	Container,
	Divider,
	ErrorMessage,
	FormControl,
	Form,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Heading,
	Input,
	Image,
	InputGroup,
	InputLeftAddon,
	Link,
	List,
	ListItem,
	Grid,
	GridItem,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";
import "../App.css";

import logo from "../assets/imgs/VaultLogoforsite.png";
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

const UserProfile = () => {
	let { username } = useParams();
	// console.log(id);

	const { loading, data, error } = useQuery(QUERY_USER, {
		variables: { username: username },
	});

	if (loading) return "Loading...";

	const user = data?.user || [];
	console.log(user);

	return (
		<Container
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
			bg={vaultRasin}
			height="100vh"
			width="100%"
			maxWidth="100vw"
		>
			{Auth.loggedIn() ? (
				<>
					<Box paddingTop="2rem">
						<Image src={logo} maxW="20%"></Image>
						<Heading
							size="sm"
							fontFamily="Rock Salt,
								Oribitron,
								Impact,
								Haettenschweiler,
								'Arial Narrow Bold',
								sans-serif;"
							color={vaultPink}
						>
							Make a Killing
						</Heading>
					</Box>
					<Divider mt="2rem" />
					<Box mt="1rem">
						<ArwesThemeProvider>
							<Grid templateColumns="repeat(4, 1fr)" gap={1}>
								<GridItem colSpan="4">
									<Heading
										pb="1rem"
										fontFamily="Orbitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'"
									>
										{user.username}
									</Heading>
								</GridItem>

								<GridItem colSpan="3">
									<Heading color={vaultYellow} as="h3" size="md">
										Account Details:
									</Heading>
									<TableContainer>
										<Table size="sm">
											<Tbody>
												<Tr>
													<Td>Username:</Td>
													<Td color={vaultGreen}>{user.username}</Td>
													<Td>
														<ButtonArwes
															disabled
															palette={vaultGreen}
															FrameComponent={FrameHexagon}
														>
															Edit
														</ButtonArwes>
													</Td>
												</Tr>
												<Tr>
													<Td>Email:</Td>
													<Td color={vaultGreen}>{user.email}</Td>
													<Td>
														<ButtonArwes
															disabled
															palette={vaultGreen}
															FrameComponent={FrameHexagon}
														>
															Edit
														</ButtonArwes>
													</Td>
												</Tr>
												<Tr>
													<Td>Password:</Td>
													<Td color={vaultGreen}>***********</Td>
													<Td>
														<ButtonArwes
															disabled
															palette={vaultGreen}
															FrameComponent={FrameHexagon}
														>
															Edit
														</ButtonArwes>
													</Td>
												</Tr>
											</Tbody>
										</Table>
									</TableContainer>
								</GridItem>
							</Grid>
						</ArwesThemeProvider>
					</Box>
				</>
			) : (
				<Link to="/">
					You need to be logged in to view this page. Please login.
				</Link>
			)}
		</Container>
	);
};
export default UserProfile;
