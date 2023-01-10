// importing utility dependancies
import { useState } from "react";
import Auth from "../utils/auth";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";

// import styling dependancies
import CharacterSheetP1 from "../assets/imgs/CSP1.png";
import CharacterSheetP2 from "../assets/imgs/CSP2.png";
import CharacterSheetP3 from "../assets/imgs/CSP3.png";
import CharacterSheetP4 from "../assets/imgs/CSP4.png";
import CharacterSheetP5 from "../assets/imgs/CSP5.png";
import CharacterSheetP6 from "../assets/imgs/CSP6.png";
import {
	Box,
	Button,
	Center,
	Container,
	Divider,
	Heading,
	Spacer,
	VStack,
	Wrap,
	Image,
} from "@chakra-ui/react";
import { HStack, Text, Link } from "@chakra-ui/react";
import { ArwesThemeProvider, FrameHexagon } from "@arwes/core";

//bringing in the vault pallet and fonts
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

const CharacterPrint = ({ route }) => {
	// const returnURL = window.location.pathname.replace("/print", "");
	console.log(route);
	return (
		// overall containter

		<Box
			fontFamily={Signika}
			// padding="20px"
			width="100%"
			// height="3300px"
			// centerContent
			// mb="100px"
			bgColor="white"
		>
			{/* <Link href={returnURL} background="white"> */}
			{/* Arwes theme add-on wrapper */}
			<ArwesThemeProvider>
				{/* Main view area */}
				{/* <Box
					width="95%"
					// maxWidth="2400px"
					mt="2%"
					mb="2%"
					p="2%"
					borderWidth="2px"
					borderColor={vaultYellow}
					borderRadius="15px"
					boxShadow="0px 0px 40px 5px #4d7ea8"
					flex={1}
				> */}
				<VStack alignItems="left" flex>
					<Image src={CharacterSheetP1} />
					<Image src={CharacterSheetP2} />
					<Image src={CharacterSheetP3} />
					<Image src={CharacterSheetP4} />
					<Image src={CharacterSheetP5} />
					<Image src={CharacterSheetP6} />
				</VStack>
				{/* </Box> */}
			</ArwesThemeProvider>
			{/* </Link> */}
		</Box>
	);
};

export default CharacterPrint;
