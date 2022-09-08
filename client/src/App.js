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
	LinkOverlay,
	Link,
} from "@chakra-ui/react";
// import { AnimatorGeneralProvider } from "@arwes/animation";
import { ArwesThemeProvider, Text, FrameHexagon } from "@arwes/core";

const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

const loadingFieldEL = document.getElementById("loadingField");

// import NavbarComp from "./componets/Navbar/Navbar";
// import Footer from "./componets/Footer/Footer";

const loadingText = [
	"Loading App......",
	"Establishing Connection......",
	"Building Encryption......",
	"Confirming User......",
	"Welcome Mercenary",
];

let currentColor = vaultYellow;

const duration = { enter: 250, exit: 250 };

function displayHome() {
	const homeNav = document.getElementById("homeNav");
	currentColor = vaultGreen;
	homeNav.classList.remove("hidden");
}

function App() {
	const [childrenIndex, setChildrenIndex] = React.useState(0);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
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
		<Container bg={vaultRasin} h="100vw" maxW="100vw" centerContent>
			<VStack>
				<Box className="App-header">
					<Image src={logo} maxW="40%"></Image>
					<h1 className="spraypaint">Make a Killing</h1>
				</Box>

				<Box color={currentColor} fontSize="2rem">
					<ArwesThemeProvider>
						<Text id="loadingField" as="h1" animator={{ duration }}>
							{loadingText[childrenIndex]}
						</Text>
					</ArwesThemeProvider>
					<LinkBox color={vaultBlue} id="homeNav" className="hidden">
						<Link href="/">Character Builder</Link>
						<Link href="/">View Character Roster</Link>
						<Link href="/">View Profile</Link>
						<Link href="/">Sign-Out</Link>
					</LinkBox>

					<FrameHexagon hover>
						<div style={{ width: 200, height: 50 }} />
					</FrameHexagon>
				</Box>
			</VStack>
		</Container>
	);
}

export default App;
