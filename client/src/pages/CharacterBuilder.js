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
	Select,
	Button,
	useDisclosure,
	HStack,
	VStack,
	Stack,
	Text,
	IconButton,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	DrawerFooter,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";
import Human from "../utils/VCharData/Human";

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

//CharacterOptions.speciesOptions.map((species) => {
//	console.log(species.name);
//});

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

	const { isOpen, onOpen, onClose } = useDisclosure();

	// handle input change for the update fields
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCharacterData({ ...characterData, [name]: value });
		console.log(document.getElementById("speciesSelect").value);
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
			padding="20px"
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
								px="2%"
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
						<FormControl isRequired px="2%" pb="5%">
							<FormLabel color={vaultYellow}>Species:</FormLabel>
							<HStack>
								<Select
									onChange={handleInputChange}
									name="species"
									value={characterData.species}
									bg={vaultBlue}
									size="lg"
									placeholder="Choose a Species"
									id="speciesSelect"
								>
									{CharacterOptions.speciesOptions.map((species) => (
										<option key={species.name}>{species.name}</option>
									))}
								</Select>
								<IconButton
									aria-label="More info"
									variant="outline"
									borderColor={vaultYellow}
									size="lg"
									color={vaultYellow}
									icon={<InfoIcon />}
									onClick={onOpen}
								/>
							</HStack>
						</FormControl>

						<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
							Next
						</ButtonArwes>
					</form>
				</Box>
			</ArwesThemeProvider>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader borderBottomWidth="1px">Human</DrawerHeader>
				<DrawerBody>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</DrawerBody>
			</DrawerContent>
			<Drawer placement="bottom" onClose={onClose} isOpen={isOpen}></Drawer>
		</Container>
	);
}

export default CharacterBuilder;
