// importing utility dependancies
import { useState } from "react";
import Auth from "../utils/auth";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";

import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { DELETE_CHARACTER } from "../utils/mutation";

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
import { HStack, Link, Text } from "@chakra-ui/react";
import { List, ListItem, UnorderedList } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";
import { LoadingBars } from "@arwes/core";

//bringing in the vault pallet and fonts
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

function CharacterView() {
	//extract characterID from params
	let { id } = useParams();
	// console.log(id);

	const navigation = useNavigate();

	// extract username from token.
	const userId = Auth.loggedIn() ? Auth.getProfile().data._id : "";
	let username = Auth.getProfile().data.username;
	// console.log(userId + " " + username);

	// query's user data based on username from token
	const { loading, data, error } = useQuery(QUERY_USER, {
		variables: { username: username },
	});

	const [activate, setActivate] = useState(true);
	if (error) return `Error! ${error.message}`;
	if (loading)
		return (
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
						<LoadingBars animator={{ activate }} size={2} speed={4} full />
					</Box>
				</ArwesThemeProvider>
			</Container>
		);

	const userRoster = data?.user.savedCharacters || [];

	const character = userRoster.filter((char) => {
		return char._id === id;
	});
	console.log(CharacterOptions);

	const characterSpecies = CharacterOptions.speciesOptions.filter((spec) => {
		return spec.name === character[0].charSpecies;
	});
	const speciesBonuses = characterSpecies[0].bonuses;
	// console.log(speciesBonuses);

	const characterStyle = CharacterOptions.styleOptions.filter((style) => {
		return style.name === character[0].charStyle;
	});
	//console.log(characterStyle);
	// will need to evolve to cover the user choices
	const styleChoices = characterStyle[0].bonuses;

	const abilityGroups = [];
	const characterClass1 = CharacterOptions.classOptions.filter((class1) => {
		return class1.name === character[0].charClasses[0];
	});
	characterClass1[0].abilityGroups.forEach((ag) => abilityGroups.push(ag));

	const characterClass2 = CharacterOptions.classOptions.filter((class2) => {
		return class2.name === character[0].charClasses[1];
	});
	characterClass2[0].abilityGroups.forEach((ag) => abilityGroups.push(ag));
	const cleanedAbilityGroups = [...new Set(abilityGroups)];
	// console.log(cleanedAbilityGroups);

	const charToPrintData = {
		charName: character[0].charName,
		charSpecies: characterSpecies[0].name,
		charStyle: characterStyle[0].name,
		charClass1: characterClass1[0].name,
		charClass2: characterClass2[0].name,
		charAbilGroups: cleanedAbilityGroups,
		charAbilities: [speciesBonuses + characterStyle[0] + styleChoices[0].name],
	};

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
											{character[0].charName}
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
											{characterSpecies[0].name}
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
											{characterStyle[0].name}
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
											{characterClass1[0].name}
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
											{characterClass2[0].name}
										</Text>
									</HStack>
								</FrameHexagon>

								<FrameHexagon inverted hover>
									<VStack align="left">
										<Wrap>
											<Text
												color={vaultYellow}
												fontFamily={Orbitron}
												fontWeight="semibold"
											>
												Ability Groups:
											</Text>
											<Text fontWeight="semibold" fontFamily={Orbitron}>
												{cleanedAbilityGroups.join(",  ")}
											</Text>
										</Wrap>
									</VStack>
								</FrameHexagon>
							</VStack>
							<VStack
								maxW="480px"
								minW="250px"
								justify="space-around"
								minH="350px"
							>
								<FrameHexagon inverted hover>
									<Text
										color={vaultYellow}
										fontFamily={Orbitron}
										fontWeight="semibold"
										size="md"
									>
										Stats:
									</Text>
									<List flex={1}>
										<Wrap>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														STR:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.STR}
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														PHY:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.PHY}
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														SPD:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.SPD}
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														AGL:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.AGL}
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														CRD:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.CRD}
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														MRK:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.MRK}
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														INT:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.INT}
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														PER:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.PER}
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="semibold">
														ESS:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														{characterSpecies[0].stats.statsBase.ESS}
													</Text>
												</HStack>
											</ListItem>
										</Wrap>
									</List>
								</FrameHexagon>
								<FrameHexagon inverted hover>
									<Text
										color={vaultYellow}
										fontFamily={Orbitron}
										fontWeight="bold"
										size="md"
									>
										Composite Stats:
									</Text>
									<List flex={1}>
										<Wrap>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														FATE:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														3,
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														INIT:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														+12,
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														DEF:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														10,
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														DODGE USES:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														2,
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														DODGING DEF:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														12,
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														AV:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														12,
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														WILL:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														8,
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														MAX CP:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														8,
													</Text>
												</HStack>
											</ListItem>
											<ListItem>
												<HStack>
													<Text fontFamily={Orbitron} fontWeight="bold">
														MAGIC:
													</Text>
													<Text
														color={vaultYellow}
														fontWeight="semibold"
														fontFamily={Orbitron}
													>
														4,
													</Text>
												</HStack>
											</ListItem>
										</Wrap>
									</List>
								</FrameHexagon>
							</VStack>
						</Wrap>
						<FrameHexagon inverted hover>
							<Text
								color={vaultYellow}
								fontFamily={Orbitron}
								fontWeight="semibold"
								size="md"
							>
								Abilities:
							</Text>
							<UnorderedList>
								{speciesBonuses.map((specBonus, index) => (
									<ListItem key={"SB" + index}>
										{specBonus.name}: {specBonus.desc}
									</ListItem>
								))}
								<Divider m="5px" />
								<ListItem>
									{characterStyle[0].name}: {characterStyle[0].benefit}
								</ListItem>
								<ListItem>
									{styleChoices[0].name}: {styleChoices[0].desc}
								</ListItem>
								<Divider m="5px" />
							</UnorderedList>
						</FrameHexagon>
					</VStack>
				</Box>

				<HStack mt="1rem" paddingTop=".5rem" spacing="2rem">
					<Link href={`/roster/${username}`} padding=".5rem">
						<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
							Return to Roster
						</ButtonArwes>
					</Link>
					<Link
						isExternal
						onClick={() => {
							console.log(charToPrintData);
							navigation(
								"/roster/characterview/" + username + "/" + id + "/print",
								{ printData: charToPrintData }
							);
						}}
						// charToPrintData={charToPrintData}
						// href={"/roster/characterview/" + username + "/" + id + "/print"}
						padding=".5rem"
					>
						<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
							Preview
						</ButtonArwes>
					</Link>
				</HStack>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterView;
