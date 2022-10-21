import React from "react";

// import styling dependancies
import { Container, Flex, Text } from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";
import "../../App.css";
import { Link } from "react-router-dom";

//bringing in the vault pallet and logo
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

function Footer() {
	return (
		<Container
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'"
			bg={vaultRasin}
			width="100%"
			maxWidth="100vw"
			padding="10px"
		>
			<Flex>
				<ArwesThemeProvider>
					<Text fontSize=".8rem">
						© Copyright 2022 Team Rex Games. All Rights Reserved.
					</Text>
				</ArwesThemeProvider>
			</Flex>
		</Container>
	);
}
export default Footer;
