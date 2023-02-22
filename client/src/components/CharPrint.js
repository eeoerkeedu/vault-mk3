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
import { ArwesThemeProvider, FrameHexagon, StylesBaseline } from "@arwes/core";
import { createTheme } from "@arwes/design";

//bringing in the vault pallet and fonts
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

const CharacterPrint = (props) => {
	const palette = {
		vaultRasin: "#272932",
		vaultYellow: "#ffc857",
		vaultBlue: "#4d7ea8",
		vaultGreen: "#a4f9c8",
		vaultPink: "#f72585",
	};
	const themeSettings = { palette };
	const data = props.chardata.charToPrintData;
	console.log(data);

	return (
		<Box fontFamily={Signika} width="100%" bgColor="white">
			<ArwesThemeProvider themeSettings={themeSettings}>
				<VStack
					alignItems="left"
					maxW="400px"
					minW="250px"
					justify="space-around"
					minH="350px"
				>
					<Wrap>
						<FrameHexagon palette="vaultRasin">
							<HStack>
								<Heading
									color={vaultBlue}
									size="sm"
									fontFamily={Orbitron}
									fontWeight="bold"
									mb="0"
								>
									MERC NAME:
								</Heading>
								<Heading
									size="sm"
									color={vaultRasin}
									fontFamily={Orbitron}
									fontWeight="bold"
								>
									{data.charName}
								</Heading>
							</HStack>
						</FrameHexagon>
						<FrameHexagon palette="vaultRasin">
							<HStack>
								<Text
									color={vaultBlue}
									fontFamily={Orbitron}
									fontWeight="semibold"
								>
									SPECIES:
								</Text>
								<Text fontFamily={Orbitron} fontWeight="semibold">
									{data.charSpecies}
								</Text>
							</HStack>
							<HStack>
								<Text
									color={vaultBlue}
									fontFamily={Orbitron}
									fontWeight="semibold"
								>
									STYLE:
								</Text>
								<Text fontWeight="semibold" fontFamily={Orbitron}>
									{data.charStyle}
								</Text>
							</HStack>
							<HStack>
								<Text
									color={vaultBlue}
									fontFamily={Orbitron}
									fontWeight="semibold"
								>
									CLASS 1:
								</Text>
								<Text fontWeight="semibold" fontFamily={Orbitron}>
									{data.charClass1}
								</Text>
							</HStack>
							<HStack>
								<Text
									color={vaultBlue}
									fontFamily={Orbitron}
									fontWeight="semibold"
								>
									CLASS 2:
								</Text>
								<Text fontWeight="semibold" fontFamily={Orbitron}>
									{data.charClass2}
								</Text>
							</HStack>
						</FrameHexagon>
						<FrameHexagon palette="vaultRasin">
							<VStack align="left">
								<Wrap>
									<Text
										color={vaultBlue}
										fontFamily={Orbitron}
										fontWeight="semibold"
									>
										Ability Groups:
									</Text>
									<Text fontWeight="semibold" fontFamily={Orbitron}>
										{data.charAbilGroups.join(",  ")}
									</Text>
								</Wrap>
							</VStack>
						</FrameHexagon>
					</Wrap>
				</VStack>
			</ArwesThemeProvider>
		</Box>
	);
};

export default CharacterPrint;
