// importing utility dependancies
//import Auth from "../utils/auth";
import { useState } from "react";

//import pages for use
import SpeciesOptions from "../components/CharacterBuilderComps/Species";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";

// import styling dependancies
import "../App.css";
import { Box, Center, Container, Heading, Link, Text } from "@chakra-ui/react";
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

//Character constructor
const character = {
	name: "NewCharacter",
	species: "",
	style: "",
	charClass1: "",
	charClass2: "",
};

//console.log(CharacterOptions);

function CharacterBuilderInit() {
	const handleCharacterInit = (event) => {
		//initialize the localally stored character
		//console.log("New Character Initialized");
		localStorage.setItem("NewCharacter", JSON.stringify(character));
		//console.log(JSON.parse(localStorage.getItem("NewCharacter")));
		window.location.assign(`/characterbuilder/app`);
	};

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
							<ButtonArwes
								disabled
								palette={vaultGreen}
								FrameComponent={FrameHexagon}
							>
								<Heading size="md" color={vaultBlue} fontFamily={Orbitron}>
									Edit a Character from your Roster
								</Heading>
							</ButtonArwes>
						</Center>
					</Box>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterBuilderInit;
