// importing utility dependancies
import { useState } from "react";
import Auth from "../utils/auth";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";

import { useParams } from "react-router-dom";
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
	VStack,
} from "@chakra-ui/react";
import { HStack, Link, Text } from "@chakra-ui/react";
import { List, ListItem, UnorderedList } from "@chakra-ui/react";
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
					<VStack alignItems="left">
						<FrameHexagon inverted hover>
							<Text>MERC NAME: {character[0].charName}</Text>
						</FrameHexagon>
						<FrameHexagon inverted hover>
							<Text>SPECIES: {characterSpecies[0].name}</Text>
							<Text>STYLE: {characterStyle[0].name}</Text>
							<Text>CLASS 1: {characterClass1[0].name}</Text>
							<Text>CLASS 2: {characterClass2[0].name}</Text>
						</FrameHexagon>
						<FrameHexagon inverted hover>
							<Text>Ability Groups: {cleanedAbilityGroups.join(",  ")}</Text>
						</FrameHexagon>
						<FrameHexagon inverted hover>
							<Heading size="sm">Abilities:</Heading>
							<UnorderedList>
								{speciesBonuses.map((specBonus, index) => (
									<ListItem key={"SB" + index}>
										{specBonus.name}: {specBonus.desc}
									</ListItem>
								))}
								<Divider m="5px" />
								<ListItem>{characterStyle[0].benefit}</ListItem>
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
				</HStack>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterView;
