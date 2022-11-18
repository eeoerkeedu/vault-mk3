import React from "react";

// import character builder files
import CharacterOptions from "../../utils/CharacterIndex";

// import styling dependancies
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
	Button,
	Center,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Text,
} from "@chakra-ui/react";
import { Button as ButtonArwes, FrameHexagon, title } from "@arwes/core";
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

let speciesData = "Select a Species to view more info";

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
			fontFamily={Orbitron}
			height="100%"
			templateColumns="repeat(6, 1fr)"
			templateRows="repeat(4, 1fr)"
			gap={1}
			templateAreas={`	"header" 
								"species"
								"body" 
								"body2" 
								"footer"`}
		>
			<GridItem colSpan={6} area={"header"}>
				<Center height="60px">
					<Heading p="1%" size="md" color={vaultYellow}>
						Choose your Merc's Species
					</Heading>
				</Center>
			</GridItem>

			<GridItem colSpan={1} area={"species"}>
				<Button bg="null">
					<Card></Card>
				</Button>
			</GridItem>
			<GridItem colSpan={1} area={"species"}>
				<Button bg="null">
					<Card></Card>
				</Button>
			</GridItem>
			<GridItem colSpan={1} area={"species"}>
				<Card></Card>
			</GridItem>
			<GridItem colSpan={1} area={"species"}>
				<Card></Card>
			</GridItem>
			<GridItem colSpan={1} area={"species"}>
				<Card></Card>
			</GridItem>
			<GridItem colSpan={1} area={"species"}>
				<Card></Card>
			</GridItem>

			<GridItem colSpan={6} area={"body"}>
				<Text fontStyle="italic" fontFamily={Signika}>
					{speciesData}
				</Text>
			</GridItem>

			<GridItem colSpan={2} colStart={2} colEnd={3} area={"footer"}>
				<Center height="60px">
					<ButtonArwes disabled>
						<Text>PREV</Text>
					</ButtonArwes>
				</Center>
			</GridItem>
			<GridItem colSpan={2} colStart={5} colEnd={6} area={"footer"}>
				<Center height="60px">
					<ButtonArwes>
						<Text>NEXT</Text>
					</ButtonArwes>
				</Center>
			</GridItem>
		</Grid>
	);
}

export default Species;
