import React, { useState } from "react";

// import character builder files
import CharacterOptions from "../../utils/CharacterIndex";

// import styling dependancies
import {
	Divider,
	GridItem,
	Heading,
	Image,
	Text,
	Wrap,
	List,
	ListItem,
	Button,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Button as ButtonArwes, FrameHexagon } from "@arwes/core";
import "../../App.css";

//bringing in the vault pallet and fonts
// const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
//const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
// const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

//Character constructor
// const character = JSON.parse(localStorage.getItem("NewCharacter"));
// console.log(character);

function ClassOptions() {
	const classList = CharacterOptions.classOptions;

	// register state setup for user input
	const [charClasses] = useState({
		userChoice: [],
	});

	const cardSelection = (selectedCard) => {
		selectedCard.parentElement.parentElement.style.background = vaultBlue;
		selectedCard.style.fontSize = ".80rem";
		selectedCard.style.color = vaultGreen;
		selectedCard.textContent = "SELECTED";
	};

	const cardDeselection = (selectedCard) => {
		selectedCard.parentElement.parentElement.style.background = "";
		selectedCard.style.fontSize = "";
		selectedCard.style.color = "";
		selectedCard.textContent = "SELECT";
	};

	// handle user selecting and deselecting classes
	const handleClassChoice = (event) => {
		const { value } = event.target;
		const selectedCard = event.currentTarget;
		if (event.currentTarget.innerText === "SELECTED") {
			let position = charClasses.userChoice.indexOf(value);
			charClasses.userChoice.splice(position, 1);
			cardDeselection(selectedCard);
			return;
		} else if (charClasses.userChoice.length === 2) {
			console.log("max classes reached");
			return;
		} else {
			charClasses.userChoice.push(value);
			cardSelection(selectedCard);
		}
	};

	const chooseClass = (event) => {
		event.preventDefault();
		const character = JSON.parse(localStorage.getItem("NewCharacter"));
		character.charClasses = charClasses.userChoice;
		localStorage.setItem("NewCharacter", JSON.stringify(character));
		// console.log(JSON.parse(localStorage.getItem("NewCharacter")));
	};

	return (
		<GridItem colSpan={6} area={"body"}>
			<form onSubmit={chooseClass}>
				<Wrap justify="center">
					{classList.map((vClass) => (
						<Card
							borderRadius="15px"
							maxW="25%"
							minW="250px"
							m="1%"
							key={vClass.name}
						>
							<CardHeader p="15px" color={vaultYellow} fontWeight="bold">
								{vClass.name}
							</CardHeader>
							<Image borderRadius="15px" p="10px" src={vClass.imageSM}></Image>
							<CardBody fontFamily={Signika} p="10px">
								<Text>{vClass.shortdesc}</Text>
								<Divider m="5px" />
								<Heading color={vaultGreen} size="sm">
									Ability Groups
								</Heading>
								<List>
									<ListItem>{vClass.abilityGroups[0]}</ListItem>
									<ListItem>{vClass.abilityGroups[1]}</ListItem>
								</List>
							</CardBody>
							<CardFooter justify="space-between">
								<ButtonArwes FrameComponent={FrameHexagon} disabled>
									Info
								</ButtonArwes>
								<Button
									value={vClass.name}
									id={vClass.name}
									variant="ghost"
									onClick={handleClassChoice}
									type="submit"
								>
									Select
								</Button>
							</CardFooter>
						</Card>
					))}
				</Wrap>
			</form>
		</GridItem>
	);
}

export default ClassOptions;
