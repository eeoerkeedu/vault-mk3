import React from "react";

// import character builder files
import CharacterOptions from "../../utils/CharacterIndex";

// import styling dependancies
import {
	Box,
	Center,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Link,
	Text,
	Wrap,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Button as ButtonArwes } from "@arwes/core";
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

//Character constructor
const character = JSON.parse(localStorage.getItem("NewCharacter"));
console.log(character);

function ClassOptions() {
	const classList = CharacterOptions.classOptions;

	const charClass = {
		userChoice: "Assassain",
	};

	const handleStyleSubmit = async (event) => {
		console.log(charClass.userChoice);
		// character.species = charSpecies.userChoice;
		// localStorage.setItem("NewCharacter", JSON.stringify(character));
		// console.log(JSON.parse(localStorage.getItem("NewCharacter")));
	};

	return (
		<GridItem colSpan={6} area={"body"}>
			<Wrap>
				{classList.map((vClass) => (
					<Card maxW="25%" minW="300px" m="1%" key={vClass.name}>
						<CardHeader fontWeight="bold">{vClass.name}</CardHeader>+
						<Image src={vClass.image}></Image>
						<CardBody>{}</CardBody>
					</Card>
				))}
			</Wrap>
		</GridItem>
	);
}

export default ClassOptions;
