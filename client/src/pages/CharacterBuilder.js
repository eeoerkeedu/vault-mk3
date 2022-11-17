// importing utility dependancies
//import Auth from "../utils/auth";
import { useState } from "react";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";
import VaultStyles from "../utils/VCharData/Styles";
import VaultClasses from "../utils/VCharData/VaultClasses";

// import styling dependancies
import "../App.css";
import {
	Box,
	Container,
	FormControl,
	FormLabel,
	Select,
	Text,
	Grid,
	GridItem,
	Heading,
	Input,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";

//bringing in the vault pallet
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
//const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

// Character constructor
// class Character {
// 	constructor(name, species, style, charClass1, charClass2) {
// 		this.name = name;
// 		this.species = species;
// 		this.style = style;
// 		this.charClass1 = charClass1;
// 		this.charClass2 = charClass2;
// 	}
// }

console.log(CharacterOptions.speciesOptions);

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

function CharacterBuilder() {
	// update character form state setup for input
	const [characterData, setCharacterData] = useState({
		charName: "",
		species: "",
		style: "",
		class1: "",
		class2: "",
	});
	// console.log(editUserData);

	// handle input change for the update fields
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCharacterData({ ...characterData, [name]: value });
		const speciesChoice = document.getElementById("speciesSelect").value;
		console.log(speciesChoice);
		speciesInfoDisplay(speciesChoice);
	};

	const handleSaveCharacter = async (event) => {
		event.preventDefault();
		console.log(characterData);

		try {
			console.log("Character Saved");
			let minimizedChardata = JSON.stringify(characterData);
			localStorage.setItem("SavedCharacter", minimizedChardata);
			const savedChar = JSON.parse(localStorage.getItem("SavedCharacter"));

			console.log(savedChar);
		} catch (err) {
			console.error(err.message);
			// setShowAlert(true);
		}
		//*test if not reseting characer info ins't so bad.
		// setCharacterData({
		// 	charName: "",
		// 	species: "",
		// 	style: "",
		// 	class1: "",
		// 	class2: "",
		// });
	};

	return (
		// overall containter
		<Container
			fontFamily={Signika}
			padding="20px"
			bg={vaultRasin}
			h="100%"
			height="100vh"
			width="100%"
			maxWidth="100vw"
			centerContent
		>
			{/* Arwes theme add-on wrapper */}
			<ArwesThemeProvider>
				{/* Main view area */}
				<Box width="90%">
					<Grid
						templateColumns="repeat(3, 1fr)"
						templateRows="repeat(3, 1fr)"
						gap={5}
					>
						<form onSubmit={handleSaveCharacter}>
							<GridItem colSpan="2">
								<FormControl p="2%">
									<FormLabel color={vaultYellow}>Merc Name:</FormLabel>
									<Input
										name="charName"
										onChange={handleInputChange}
										value={setCharacterData.charName}
									/>
								</FormControl>
							</GridItem>
							<GridItem colSpan="2">
								<FormControl p="2%">
									<FormLabel color={vaultYellow}>
										Species: {speciesData.name}
									</FormLabel>
									<Select
										onChange={handleInputChange}
										name="species"
										value={characterData.species}
										bg={vaultBlue}
										size="lg"
										placeholder="Choose a Species"
										id="speciesSelect"
										fontFamily={Orbitron}
										fontWeight="bold"
									>
										{CharacterOptions.speciesOptions.map((species) => (
											<option key={species.name}>{species.name}</option>
										))}
									</Select>
								</FormControl>
							</GridItem>
							<GridItem colSpan="1">
								<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
									Save
								</ButtonArwes>
							</GridItem>
						</form>
					</Grid>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterBuilder;
