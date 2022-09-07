import logo from "./assets/imgs/VaultLogoforsite.png";
import "./App.css";
import React, { useState } from "react";

import { Container, Image, VStack, Text, Box, LinkBox } from "@chakra-ui/react";

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
	"Welcome Mercenary.",
];
const duration = { enter: 1000, exit: 1000 };

function displayHome() {
	const homeNav = document.getElementById("homeNav");
	homeNav.style.display = "";
}

function App() {
	const [childrenIndex, setChildrenIndex] = React.useState(0);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			const isLastIndex = childrenIndex === loadingText.length - 1;
			const nextIndex = isLastIndex ? 4 : childrenIndex + 1;
			setChildrenIndex(nextIndex);
			if (nextIndex === 4) {
				const textfield = document.getElementById("loadingField");
				textfield.style.color = vaultGreen;
			}
			displayHome();
		}, 1000);
		return () => clearTimeout(timeout);
	}, [childrenIndex]);

	return (
		<Container bg={vaultRasin} h="100vw" maxW="100vw" centerContent>
			<VStack>
				<Box className="App-header">
					<Image src={logo} maxW="60%"></Image>
					<h1 className="spraypaint">Make a Killing</h1>
				</Box>
				<Box color={vaultYellow}>
					<Text
						id="loadingField"
						fontSize="3rem"
						as="h1"
						animator={{ duration }}
					>
						{loadingText[childrenIndex]}
					</Text>
					<LinkBox id="homeNav" hidden></LinkBox>
				</Box>
			</VStack>
		</Container>
	);
}

export default App;
