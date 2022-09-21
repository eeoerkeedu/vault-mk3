import logo from "./assets/imgs/VaultLogoforsite.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
	Container,
	Image,
	VStack,
	Box,
	LinkBox,
	Link,
	Button,
} from "@chakra-ui/react";
// import { AnimatorGeneralProvider } from "@arwes/animation";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	Text,
	FrameHexagon,
} from "@arwes/core";

const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

// import NavbarComp from "./componets/Navbar/Navbar";
// import Footer from "./componets/Footer/Footer";

const loadingText = [
	"Loading App......",
	"Establishing Connection......",
	"Building Encryption......",
	"Confirming User......",
	"Welcome Mercenary",
];

let currentColor = vaultGreen;
let hideME = "flex";

const duration = { enter: 250, exit: 250 };

function displayHome() {
	const homeNav = document.getElementById("homeNav");
	currentColor = vaultGreen;
	hideME = "flex";
}

function App() {
	const [childrenIndex, setChildrenIndex] = React.useState(0);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			currentColor = vaultYellow;
			const isLastIndex = childrenIndex === loadingText.length - 1;
			const nextIndex = isLastIndex ? 4 : childrenIndex + 1;
			setChildrenIndex(nextIndex);
			if (nextIndex === 4) {
				displayHome();
			}
		}, 500);

		return () => clearTimeout(timeout);
	}, [childrenIndex]);

	return (
		<Container bg={vaultRasin} height="100vw" maxW="100vw">
			<Box className="App-header">
				<Image src={logo} maxW="40%"></Image>
				<h1 className="spraypaint">Make a Killing</h1>
			</Box>

			<Box color={currentColor} fontSize="2rem" padding="1rem" marginLeft="5%">
				<ArwesThemeProvider>
					<Text id="loadingField" as="h1" animator={{ duration }}>
						{loadingText[childrenIndex]}
					</Text>
				</ArwesThemeProvider>
				<VStack id="homeNav" display={hideME} marginTop={4} align="stretch">
					<ArwesThemeProvider>
						<ButtonArwes palette="vaultGreen" FrameComponent={FrameHexagon}>
							<Text>Character Builder</Text>
						</ButtonArwes>
						<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
							<Text>View Characters Roster</Text>
						</ButtonArwes>
						<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
							<Text>View Profile</Text>
						</ButtonArwes>
						<ButtonArwes
							palette={vaultGreen}
							FrameComponent={FrameHexagon}
							href="/"
						>
							<Text>Downloads</Text>
						</ButtonArwes>
						<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
							<Text>Sign-Out</Text>
						</ButtonArwes>
					</ArwesThemeProvider>
				</VStack>
			</Box>
		</Container>
	);
}

export default App;
