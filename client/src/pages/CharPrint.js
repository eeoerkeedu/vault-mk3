// importing utility dependancies
import { useState } from "react";
import Auth from "../utils/auth";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";

// import styling dependancies
import "../App.css";
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
} from "@chakra-ui/react";
import { HStack, Text } from "@chakra-ui/react";
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

function CharacterPrint(props) {
	// super(props);
	// this.state = {
	// 	value: this.props.location.state,
	// };
	// const charToPrint = state;
	// console.log(charToPrint);
	return (
		// overall containter
		<Container
			fontFamily={Signika}
			padding="20px"
			width="100%"
			maxWidth="100vw"
			centerContent
			mb="100px"
		>
			{/* Arwes theme add-on wrapper */}
			<ArwesThemeProvider>
				{/* Main view area */}
				<Box
					width="95%"
					maxWidth="1000px"
					mt="2%"
					mb="2%"
					p="2%"
					borderWidth="2px"
					borderColor={vaultYellow}
					borderRadius="15px"
					boxShadow="0px 0px 40px 5px #4d7ea8"
					flex={1}
				>
					<VStack alignItems="left" flex>
						<Wrap>
							<VStack
								alignItems="left"
								maxW="400px"
								minW="250px"
								justify="space-around"
								minH="350px"
							>
								<FrameHexagon inverted hover>
									<HStack>
										<Heading
											color={vaultYellow}
											size="sm"
											fontFamily={Orbitron}
											fontWeight="bold"
										>
											MERC NAME:
										</Heading>
										<Heading size="sm" fontFamily={Orbitron} fontWeight="bold">
											{/* {charToPrint.charName} */}
										</Heading>
									</HStack>
								</FrameHexagon>
								<FrameHexagon inverted hover>
									<HStack>
										<Text
											color={vaultYellow}
											fontFamily={Orbitron}
											fontWeight="semibold"
										>
											SPECIES:
										</Text>
										<Text fontFamily={Orbitron} fontWeight="semibold">
											{/* {charToPrint.charSpecies} */}
										</Text>
									</HStack>
									<HStack>
										<Text
											color={vaultYellow}
											fontFamily={Orbitron}
											fontWeight="semibold"
										>
											STYLE:
										</Text>
										<Text fontWeight="semibold" fontFamily={Orbitron}>
											{/* {charToPrint.charStyle} */}
										</Text>
									</HStack>
									<HStack>
										<Text
											color={vaultYellow}
											fontFamily={Orbitron}
											fontWeight="semibold"
										>
											CLASS 1:
										</Text>
										<Text fontWeight="semibold" fontFamily={Orbitron}>
											{/* {charToPrint.charClass1} */}
										</Text>
									</HStack>
									<HStack>
										<Text
											color={vaultYellow}
											fontFamily={Orbitron}
											fontWeight="semibold"
										>
											CLASS 2:
										</Text>
										<Text fontWeight="semibold" fontFamily={Orbitron}>
											{/* {charToPrint.charClass2} */}
										</Text>
									</HStack>
								</FrameHexagon>
							</VStack>
						</Wrap>
					</VStack>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterPrint;
