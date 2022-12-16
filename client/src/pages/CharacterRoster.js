// importing utility dependancies
import Auth from "../utils/auth";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { DELETE_CHARACTER } from "../utils/mutation";

// import styling dependancies
import "../App.css";
import { Box, Button, Center, Container, Link } from "@chakra-ui/react";
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

function CharacterRoster() {
	// extract username from token.
	const userId = Auth.loggedIn() ? Auth.getProfile().data._id : "";
	let username = Auth.getProfile().data.username;
	// console.log(userId + " " + username);

	// create the remove character mutation function
	const [deleteCharFromRoster] = useMutation(DELETE_CHARACTER);
	// query's user data based on username from token
	const { loading, data, error } = useQuery(QUERY_USER, {
		variables: { username: username },
	});

	if (error) return `Error! ${error.message}`;

	const userRoster = data?.user.savedCharacters || [];
	// console.log(userRoster);

	if (userRoster === "") {
		userRoster.push(JSON.parse(localStorage.getItem("SavedVaultCharacters")));
	}

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
							{loading ? (
								<Box>Loading...</Box>
							) : (
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
											{userRoster.map((char, index) => (
												<Tr key={char.charName + index} fontFamily={Signika}>
													<Td>
														<Link
															href={
																"/roster/characterview/" +
																username +
																"/" +
																char._id
															}
														>
															<Button color={vaultRasin} bg={vaultYellow}>
																View
															</Button>
														</Link>
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
														<Button
															onClick={() => {
																deleteCharFromRoster({
																	variables: {
																		userId: userId,
																		charId: char._id,
																	},
																});
															}}
															bg={vaultPink}
														>
															Delete
														</Button>
													</Td>
												</Tr>
											))}
										</Tbody>
									</Table>
								</TableContainer>
							)}
						</GridItem>
					</Grid>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterRoster;
