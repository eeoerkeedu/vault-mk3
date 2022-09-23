import logo from "../assets/imgs/VaultLogoforsite.png";
import React, { useState, useEffect } from "react";
import "../App.css";
import {
	Container,
	Image,
	VStack,
	Box,
	ScaleFade,
	Link,
} from "@chakra-ui/react";
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

const loadingText = [
	"Loading App......",
	"Establishing Connection......",
	"Building Encryption......",
	"Confirming User......",
	"Welcome Mercenary",
];

function Home() {
	const [childrenIndex, setChildrenIndex] = React.useState(0);
	const duration = { enter: 5000, exit: 5000 };

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			const isLastIndex = childrenIndex === loadingText.length - 1;
			const nextIndex = isLastIndex ? 4 : childrenIndex + 1;
			setChildrenIndex(nextIndex);
		}, 500);
		return () => clearTimeout(timeout);
	}, [childrenIndex]);

	return (
		<Container bg={vaultRasin} height="100vh" width="100%" maxWidth="100vw">
			<Box paddingTop="3rem" className="App-header">
				<Image src={logo} maxW="40%"></Image>
				<h1 className="spraypaint">Make a Killing</h1>
			</Box>

			<Box color={vaultYellow} fontSize="2rem" padding="1rem" marginLeft="5%">
				<ArwesThemeProvider>
					<Text id="loadingField" as="h1" animator={{ duration }}>
						{loadingText[childrenIndex]}
					</Text>
				</ArwesThemeProvider>
				<ScaleFade initialScale={0.75} in={true}>
					<ArwesThemeProvider>
						<Link href="/" padding=".5rem">
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								Character Builder
							</ButtonArwes>
						</Link>
						<Link href="/" padding=".5rem">
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								View Characters Roster
							</ButtonArwes>
						</Link>
						<Link href="/" padding=".5rem">
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								View Profile
							</ButtonArwes>
						</Link>
						<Link href="/downloads" padding=".5rem">
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								Downloads
							</ButtonArwes>
						</Link>
						<Link href="/login" padding=".5rem">
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								Sign-Out
							</ButtonArwes>
						</Link>
					</ArwesThemeProvider>
				</ScaleFade>
			</Box>
		</Container>
	);
}

export default Home;
