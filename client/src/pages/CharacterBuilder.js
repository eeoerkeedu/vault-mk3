// importing utility dependancies
//import Auth from "../utils/auth";
import { useState } from "react";

//import pages for use
import Species from "../components/CharacterBuilderComps/Species";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";

// import styling dependancies
import "../App.css";
import { Box, Container } from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";

//bringing in the vault pallet and fonts
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

//console.log(CharacterOptions);

function CharacterBuilder() {
	// // update character form state setup for input
	// const [characterData, setCharacterData] = useState({
	// 	charName: "",
	// 	species: "",
	// 	style: "",
	// 	class1: "",
	// 	class2: "",
	// });
	// // console.log(editUserData);

	// // handle input change for the update fields
	// const handleInputChange = (event) => {
	// 	const { name, value } = event.target;
	// 	setCharacterData({ ...characterData, [name]: value });
	// 	const speciesChoice = document.getElementById("speciesSelect").value;
	// 	console.log(speciesChoice);
	// 	speciesInfoDisplay(speciesChoice);
	// };

	// const handleSaveCharacter = async (event) => {
	// 	event.preventDefault();
	// 	console.log(characterData);

	// 	try {
	// 		console.log("Character Saved");
	// 		let minimizedChardata = JSON.stringify(characterData);
	// 		localStorage.setItem("SavedCharacter", minimizedChardata);
	// 		const savedChar = JSON.parse(localStorage.getItem("SavedCharacter"));

	// 		console.log(savedChar);
	// 	} catch (err) {
	// 		console.error(err.message);
	// 		// setShowAlert(true);
	// 	}
	// 	//*test if not reseting characer info ins't so bad.
	// 	// setCharacterData({
	// 	// 	charName: "",
	// 	// 	species: "",
	// 	// 	style: "",
	// 	// 	class1: "",
	// 	// 	class2: "",
	// 	// });
	// };

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
					mt="2%"
					mb="2%"
					p="2%"
					borderWidth="2px"
					borderColor={vaultYellow}
					borderRadius="15px"
					boxShadow="0px 0px 40px 5px #4d7ea8"
					flex={1}
				>
					{/* <Grid
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
					</Grid> */}
					<Species />
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterBuilder;
