import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";
import {
	Box,
	Container,
	ErrorMessage,
	FormControl,
	Form,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Image,
	InputGroup,
	InputLeftAddon,
	Link,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";

import "../App.css";

import Auth from "../utils/auth";

import logo from "../assets/imgs/VaultLogoforsite.png";
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

const UserProfile = () => {
	return (
		<Container
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
			bg={vaultRasin}
			height="100vh"
			width="100%"
			maxWidth="100vw"
			centercontent="true"
		>
			{Auth.loggedIn() ? (
				<>
					<Box paddingTop="2rem" className="App-header">
						<Image src={logo} maxW="20%"></Image>
						<h1 className="spraypaint">Make a Killing</h1>
					</Box>
					<ArwesThemeProvider></ArwesThemeProvider>
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
