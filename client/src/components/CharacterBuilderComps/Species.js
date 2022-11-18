import React from "react";

// import character builder files
import CharacterOptions from "../../utils/CharacterIndex";

// import styling dependancies
import {
	Center,
	Container,
	Flex,
	Grid,
	GridItem,
	Text,
} from "@chakra-ui/react";
import { Button as ButtonArwes, FrameHexagon } from "@arwes/core";
import "../../App.css";

//bringing in the vault pallet and fonts
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

let speciesData = "No species selected";

function speciesInfoDisplay(species) {
	switch (species) {
		case "Human":
			speciesData = CharacterOptions.speciesOptions[0];
			break;

		case "Dwarf":
			speciesData = CharacterOptions.speciesOptions[1];
			break;

		case "Elf":
			speciesData = CharacterOptions.speciesOptions[2];
			break;

		case "Changeling":
			speciesData = CharacterOptions.speciesOptions[3];
			break;

		case "EOS":
			speciesData = CharacterOptions.speciesOptions[4];
			break;

		case "Faeborn":
			speciesData = CharacterOptions.speciesOptions[5];
			break;

		default:
			speciesData = "No species selected";
			break;
	}
}

function Species() {
	return (
		<Grid
			height="100%"
			templateColumns="repeat(6, 1fr)"
			templateRows="repeat(3, 1fr)"
			gap={1}
			templateAreas={`	"header" 
								"cards"
								"body" 
								"footer"`}
		>
			<GridItem colStart={6} rowStart={3}>
				<Center height="100px">
					<ButtonArwes>Next</ButtonArwes>
				</Center>
			</GridItem>
		</Grid>
	);
}

export default Species;
