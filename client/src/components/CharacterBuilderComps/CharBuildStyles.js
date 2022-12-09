import React from "react";

// import character builder files
import CharacterOptions from "../../utils/CharacterIndex";

// import styling dependancies
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Divider, GridItem, Heading, Image, Text } from "@chakra-ui/react";
// import { Button as ButtonArwes } from "@arwes/core";
import "../../App.css";

//bringing in the vault pallet and fonts
// const vaultRasin = "#272932";
// const vaultYellow = "#ffc857";
// const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
// const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

//Character constructor
// console.log(JSON.parse(localStorage.getItem("NewCharacter")));
// const character = JSON.parse(localStorage.getItem("NewCharacter"));

function StyleOptions() {
	const styleList = CharacterOptions.styleOptions;
	//console.log(styleList);

	const charStyle = {
		userChoice: "Mystic",
	};

	const handleStyleSubmit = async (event) => {
		charStyle.userChoice = event.currentTarget.innerText;
		// console.log(charStyle.userChoice);
		const character = JSON.parse(localStorage.getItem("NewCharacter"));
		character.style = charStyle.userChoice;
		localStorage.setItem("NewCharacter", JSON.stringify(character));
		console.log(JSON.parse(localStorage.getItem("NewCharacter")));
	};

	return (
		<GridItem colSpan={6} area={"body"}>
			<Tabs isFitted variant="enclosed">
				<TabList>
					{styleList.map((style) => (
						<Tab
							fontWeight="bold"
							onClick={handleStyleSubmit}
							key={"tab" + style.name}
						>
							{style.name}
						</Tab>
					))}
				</TabList>
				<TabPanels>
					{styleList.map((style) => (
						<TabPanel key={style.name + "tabpanel"}>
							<Heading color={vaultGreen} size="sm" fontFamily={Orbitron}>
								{style.desc}
							</Heading>
							{/* <Divider p=".5%" /> */}
							<Image p="2%" src={style.img} />
							<Text p=".5rem" fontFamily={Signika}>
								{style.benefit}
							</Text>
							<Divider />
							<Heading color={vaultGreen} p="1%" size="sm">
								Style Bonuses:
							</Heading>
							<UnorderedList fontFamily={Signika}>
								<ListItem>
									{style.bonuses[1].name}: {style.bonuses[1].desc}
								</ListItem>
								<ListItem>
									{style.bonuses[2].name}: {style.bonuses[2].desc}
								</ListItem>
								<ListItem>
									{style.bonuses[3].name}: {style.bonuses[3].desc}
								</ListItem>
								<ListItem>
									{style.bonuses[4].name}: {style.bonuses[4].desc}
								</ListItem>
								<ListItem>
									{style.bonuses[5].name}: {style.bonuses[5].desc}
								</ListItem>
								<ListItem>
									{style.bonuses[6].name}: {style.bonuses[6].desc}
								</ListItem>
								<ListItem>
									{style.bonuses[7].name}: {style.bonuses[7].desc}
								</ListItem>
								<ListItem>
									{style.bonuses[8].name}: {style.bonuses[8].desc}
								</ListItem>
							</UnorderedList>
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</GridItem>
	);
}

export default StyleOptions;
