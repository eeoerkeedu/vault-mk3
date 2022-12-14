import React, { useState } from "react";

// import styling dependancies
import { GridItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button as ButtonArwes, FrameHexagon } from "@arwes/core";
import "../../App.css";

//bringing in the vault pallet and fonts
// const vaultRasin = "#272932";
// const vaultYellow = "#ffc857";
// const vaultBlue = "#4d7ea8";
// const vaultGreen = "#a4f9c8";
// const vaultPink = "#f72585";
// const Signika =
// 	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
// const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

function CharDesc() {
	const [charName, setCharName] = useState({
		userChoice: "",
	});

	// handle input change
	const handleNaming = (event) => {
		const { value } = event.target;
		setCharName({ ...charName, userChoice: value });
	};

	const handleStyleSubmit = async (event) => {
		event.preventDefault();
		let newName = charName.userChoice;
		// console.log(newName);
		const character = JSON.parse(localStorage.getItem("NewCharacter"));
		character.charName = newName;
		localStorage.setItem("NewCharacter", JSON.stringify(character));
		let savedCharacters = JSON.parse(
			localStorage.getItem("SavedVaultCharacters")
		);
		if (savedCharacters.length === 5) {
			console.log("Max Saved Characters Limit Reached");
			window.alert(
				"Too many Characters in Roster! Max number of Vault Characters is 5 per user, please delete one to continue."
			);
			return;
		}
		savedCharacters.push(character);
		localStorage.setItem(
			"SavedVaultCharacters",
			JSON.stringify(savedCharacters)
		);
		//console.log(JSON.parse(localStorage.getItem("SavedVaultCharacters")));
	};

	return (
		<GridItem colSpan={6} area={"body"}>
			<form onSubmit={handleStyleSubmit}>
				<Input
					onChange={handleNaming}
					my="2%"
					size="lg"
					placeholder="Enter Merc Name"
				></Input>
				<ButtonArwes FrameComponent={FrameHexagon} type="submit">
					Save
				</ButtonArwes>
			</form>
		</GridItem>
	);
}

export default CharDesc;
