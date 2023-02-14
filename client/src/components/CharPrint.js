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
	ModalContent,
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

const CharacterPrint = (charToPrintData) => {
	console.log(charToPrintData);
	return (
		<Box fontFamily={Signika} width="100%" bgColor="white">
			<ArwesThemeProvider>
				<VStack alignItems="left" flex>
					<Box>
						<Image src={CharacterSheetP1}></Image>
					</Box>
					{/* <Image src={CharacterSheetP2} />
						<Image src={CharacterSheetP3} />
						<Image src={CharacterSheetP4} />
						<Image src={CharacterSheetP5} />
						<Image src={CharacterSheetP6} /> */}
				</VStack>
			</ArwesThemeProvider>
		</Box>
	);
};

export default CharacterPrint;
