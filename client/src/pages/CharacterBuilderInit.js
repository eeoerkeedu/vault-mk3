// importing utility dependancies
// import { useState, useEffect } from "react";
import Auth from "../utils/auth";

// import styling dependancies
import "../App.css";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";

//bringing in the vault pallet and fonts
//const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
//const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

// extract username from token.
let username = Auth.loggedIn() ? Auth.getProfile().data.username : "";

//Character constructor
const character = {
	charName: "",
	charSpecies: "Human",
	charStyle: "Mystic",
	charClasses: [],
	charSTR: 4,
	charPHY: 5,
	charSPD: 5,
	charAGL: 4,
	charCRD: 3,
	charMRK: 3,
	charINT: 3,
	charPER: 4,
	charESS: 3,
	charEXP: 0,
};

const SavedVaultCharacters = [];

function CharacterBuilderInit() {
	const handleCharacterInit = (event) => {
		// checks if user has reached limit of 5 characters
		let savedCharacters = JSON.parse(
			localStorage.getItem("SavedVaultCharacters")
		);
		if (savedCharacters !== null) {
			if (savedCharacters.length === 5) {
				console.log("Max Saved Characters Limit Reached");
				return;
			}
		}

		//initialize the locally stored character
		//console.log("New Character Initialized");
		localStorage.setItem("NewCharacter", JSON.stringify(character));
		//console.log(JSON.parse(localStorage.getItem("NewCharacter")));
		let existingRoster = JSON.parse(
			localStorage.getItem("SavedVaultCharacters")
		);
		if (existingRoster == null) {
			console.log("Creating Local character Save");
			localStorage.setItem(
				"SavedVaultCharacters",
				JSON.stringify(SavedVaultCharacters)
			);
		}
		window.location.assign(`/characterbuilder/app`);
	};

	return (
		// overall containter
		<Container
			fontFamily={Signika}
			padding="20px"
			// h="1200px"
			// height="100vh"
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
					<Box p="2%">
						<Center>
							<ButtonArwes
								onClick={handleCharacterInit}
								palette={vaultGreen}
								FrameComponent={FrameHexagon}
							>
								<Heading size="lg" color={vaultGreen} fontFamily={Orbitron}>
									+ Create a New Character +
								</Heading>
							</ButtonArwes>
						</Center>
						<Center pt="5%">
							{Auth.loggedIn() ? (
								<Link href={`/roster/${username}`} padding=".5rem">
									<ButtonArwes
										palette={vaultGreen}
										FrameComponent={FrameHexagon}
									>
										<Heading size="md" color={vaultBlue} fontFamily={Orbitron}>
											Edit a Character from your Roster
										</Heading>
									</ButtonArwes>
								</Link>
							) : (
								<ButtonArwes
									disabled
									palette={vaultGreen}
									FrameComponent={FrameHexagon}
								>
									<Heading size="md" color={vaultBlue} fontFamily={Orbitron}>
										Edit a Character from your Roster
									</Heading>
								</ButtonArwes>
							)}
						</Center>
					</Box>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterBuilderInit;
