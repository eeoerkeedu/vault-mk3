// importing utility dependancies
import Auth from "../utils/auth";
import { useState, useRef } from "react";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";

// import styling dependancies
import "../App.css";
import {
	Box,
	Container,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Heading,
	Input,
	Link,
	Grid,
	GridItem,
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalCloseButton,
	ModalFooter,
	Radio,
	RadioGroup,
	Button,
	useDisclosure,
	HStack,
	VStack,
	Text,
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
const vaultPink = "#f72585";

// extract username from token.
let username = Auth.loggedIn() ? Auth.getProfile().data.username : "";
//console.log(username);

// Character constructor
class Character {
	constructor(name, species, style, charClass1, charClass2) {
		this.name = name;
		this.species = species;
		this.style = style;
		this.charClass1 = charClass1;
		this.charClass2 = charClass2;
	}
}

CharacterOptions.speciesOptions.map((species) => {
	console.log(species.name);
});

function CharacterBuilder() {
	// update character form state setup for input
	const [characterData, setCharacterData] = useState({
		name: "",
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
	};

	const handleSaveCharacter = async (event) => {
		event.preventDefault();
		console.log(characterData);

		try {
			console.log("Character Saved");
			localStorage.setItem("SavedCharacter", characterData);
			const savedChar = JSON.parse(localStorage.getItem("SavedCharacter"));

			console.log(savedChar);
		} catch (err) {
			console.error(err.message);
			// setShowAlert(true);
		}
		//*test if not reseting characer info ins't so bad.
		setCharacterData({
			name: "",
			species: "",
			style: "",
			class1: "",
			class2: "",
		});
	};

	return (
		// overall containter
		<Container
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
			padding="40px"
			bg={vaultRasin}
			h="100%"
			height="100vh"
			width="100%"
			maxWidth="100vw"
		>
			{/* Arwes theme add-on wrapper */}
			<ArwesThemeProvider>
				{/* Main view area */}
				<Box>
					<form onSubmit={handleSaveCharacter}>
						<FormControl isRequired p="2%">
							<FormHelperText
								p="2%"
								mb=".2rem"
								fontSize="1.5rem"
								color={vaultYellow}
							>
								Create your Merc
							</FormHelperText>
							<FormLabel color={vaultYellow}>Name:</FormLabel>
							<Input
								color={vaultYellow}
								borderColor={vaultBlue}
								type="string"
								name="name"
								focusBorderColor={vaultYellow}
								onChange={handleInputChange}
								value={characterData.name}
							/>
						</FormControl>
						<FormControl isRequired p="2%">
							<RadioGroup
								onChange={handleInputChange}
								value={characterData.species}
							>
								<HStack spacing={4}>
									{CharacterOptions.speciesOptions.map((species) => (
										<Radio key={species.name}>{species.name}</Radio>
									))}
								</HStack>
							</RadioGroup>
						</FormControl>

						<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
							Save
						</ButtonArwes>
					</form>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterBuilder;
