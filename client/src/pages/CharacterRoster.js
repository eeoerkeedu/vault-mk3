// importing utility dependancies
import Auth from "../utils/auth";
import { useState } from "react";

// import styling dependancies
import "../App.css";
import { Box, Button, Center, Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	// Button as ButtonArwes,
	// FrameHexagon,
} from "@arwes/core";

//bringing in the vault pallet and fonts
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

// extract username from token.
// let username = Auth.loggedIn() ? Auth.getProfile().data.username : "";

function CharacterRoster() {
	const savedCharacters = JSON.parse(
		localStorage.getItem("SavedVaultCharacters")
	);
	// console.log(savedCharacters);

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
					<Grid
						fontFamily={Orbitron}
						templateColumns="repeat(6, 1fr)"
						gridTemplateRows={"70px 1fr"}
						gap={1}
						templateAreas={`	"header" 
											"body"`}
					>
						<GridItem h="80px" colSpan={6} area={"header"}>
							<Center height="60px">
								<Heading p="1%" size="lg" color={vaultYellow}>
									Saved Characters
								</Heading>
							</Center>
						</GridItem>
						<GridItem colSpan={6} area={"body"}>
							<TableContainer>
								<Table size="sm">
									<Tbody>
										<Tr color={vaultGreen}>
											<Td>View</Td>
											<Td>Name</Td>
											<Td>Species</Td>
											<Td>Style</Td>
											<Td>Classes</Td>
											<Td>Edit</Td>
											<Td>Delete</Td>
										</Tr>
										{savedCharacters.map((char, index) => (
											<Tr key={char.charName + index} fontFamily={Signika}>
												<Td>
													<Button disabled color={vaultRasin} bg={vaultYellow}>
														View
													</Button>
												</Td>
												<Td fontWeight="bold">{char.charName}</Td>
												<Td>{char.charSpecies}</Td>
												<Td>{char.charStyle}</Td>
												<Td>
													{char.charClasses[0] + " & " + char.charClasses[1]}
												</Td>
												<Td>
													<Button disabled bg={vaultBlue}>
														Edit
													</Button>
												</Td>
												<Td>
													<Button disabled bg={vaultPink}>
														Delete
													</Button>
												</Td>
											</Tr>
										))}
									</Tbody>
								</Table>
							</TableContainer>
						</GridItem>
					</Grid>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterRoster;
