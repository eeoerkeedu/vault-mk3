import React from "react";

// import character builder files
import CharacterOptions from "../../utils/CharacterIndex";

// import styling dependancies
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Wrap,
	VStack,
	TableContainer,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Divider, GridItem, Heading, Text } from "@chakra-ui/react";
// import { Button as ButtonArwes } from "@arwes/core";
import "../../App.css";

//bringing in the vault pallet and fonts
// const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
// const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

//Character constructor
// console.log(JSON.parse(localStorage.getItem("NewCharacter")));
const character = JSON.parse(localStorage.getItem("NewCharacter"));

function SpeciesOptions() {
	const speciesList = CharacterOptions.speciesOptions;

	const charSpecies = {
		userChoice: "Human",
	};

	const handleSpeciesSelect = (event) => {
		//console.log(event.currentTarget.innerText);
		charSpecies.userChoice = event.currentTarget.innerText;
		// console.log(charSpecies.userChoice);
		character.charSpecies = charSpecies.userChoice;
		localStorage.setItem("NewCharacter", JSON.stringify(character));
		// console.log(JSON.parse(localStorage.getItem("NewCharacter")));
	};

	return (
		<GridItem colSpan={6} area={"body"}>
			<Tabs size="sm" isFitted variant="solid-rounded">
				<TabList>
					<Wrap>
						{speciesList.map((spec) => (
							<Tab
								fontSize=".9rem"
								fontWeight="bold"
								onClick={handleSpeciesSelect}
								key={spec.name + "tab"}
							>
								{spec.name}
							</Tab>
						))}
					</Wrap>
				</TabList>

				<TabPanels>
					{speciesList.map((spec) => (
						<TabPanel key={"tab" + spec.name}>
							<Wrap>
								<Heading color={vaultGreen} size="sm" fontFamily={Orbitron}>
									{spec.shortDec}
								</Heading>
								<Divider p=".5%" />
								{/* <HStack> */}
								<Text p=".5rem" fontFamily={Signika}>
									{spec.desc}
								</Text>
								<TableContainer>
									<Table w="30%" size="sm" variant="simple">
										<Thead fontFamily={Signika}>
											<Tr>
												<Th color={vaultBlue}>Stat</Th>
												<Th color={vaultBlue}>Base</Th>
												<Th color={vaultBlue}>Merc</Th>
												<Th color={vaultBlue}>Exem</Th>
												<Th color={vaultBlue}>WS</Th>
											</Tr>
										</Thead>
										<Tbody>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													STR
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.STR}
												</Td>
												<Td>{spec.stats.statsMerc.STR}</Td>
												<Td>{spec.stats.statsExemplar.STR}</Td>
												<Td>{spec.stats.statsWS.STR}</Td>
											</Tr>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													PHY
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.PHY}
												</Td>
												<Td>{spec.stats.statsMerc.PHY}</Td>
												<Td>{spec.stats.statsExemplar.PHY}</Td>
												<Td>{spec.stats.statsWS.PHY}</Td>
											</Tr>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													SPD
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.SPD}
												</Td>
												<Td>{spec.stats.statsMerc.SPD}</Td>
												<Td>{spec.stats.statsExemplar.SPD}</Td>
												<Td>{spec.stats.statsWS.SPD}</Td>
											</Tr>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													AGL
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.AGL}
												</Td>
												<Td>{spec.stats.statsMerc.AGL}</Td>
												<Td>{spec.stats.statsExemplar.AGL}</Td>
												<Td>{spec.stats.statsWS.AGL}</Td>
											</Tr>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													CRD
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.CRD}
												</Td>
												<Td>{spec.stats.statsMerc.CRD}</Td>
												<Td>{spec.stats.statsExemplar.CRD}</Td>
												<Td>{spec.stats.statsWS.CRD}</Td>
											</Tr>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													MRK
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.MRK}
												</Td>
												<Td>{spec.stats.statsMerc.MRK}</Td>
												<Td>{spec.stats.statsExemplar.MRK}</Td>
												<Td>{spec.stats.statsWS.MRK}</Td>
											</Tr>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													INT
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.INT}
												</Td>
												<Td>{spec.stats.statsMerc.INT}</Td>
												<Td>{spec.stats.statsExemplar.INT}</Td>
												<Td>{spec.stats.statsWS.INT}</Td>
											</Tr>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													PER
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.PER}
												</Td>
												<Td>{spec.stats.statsMerc.PER}</Td>
												<Td>{spec.stats.statsExemplar.PER}</Td>
												<Td>{spec.stats.statsWS.PER}</Td>
											</Tr>
											<Tr>
												<Td color={vaultYellow} fontWeight="bold">
													ESS
												</Td>
												<Td fontWeight="semibold">
													{spec.stats.statsBase.ESS}
												</Td>
												<Td>{spec.stats.statsMerc.ESS}</Td>
												<Td>{spec.stats.statsExemplar.ESS}</Td>
												<Td>{spec.stats.statsWS.ESS}</Td>
											</Tr>
										</Tbody>
									</Table>
								</TableContainer>
								{/* </HStack> */}

								<VStack>
									<Heading
										color={vaultGreen}
										pt="1%"
										size="sm"
										fontFamily={Orbitron}
									>
										Species Bonuses
									</Heading>
									<Text fontFamily={Signika}>
										{spec.bonuses[1].name}: {spec.bonuses[1].desc}
									</Text>
									<Divider m="1%" />
									<Text fontFamily={Signika}>
										{spec.bonuses[2].name}: {spec.bonuses[2].desc}
									</Text>
									{!spec.bonuses[3] ? (
										""
									) : (
										<>
											<Divider m="1%" />
											<Text fontFamily={Signika}>
												{spec.bonuses[3].name}: {spec.bonuses[3].desc}
											</Text>
										</>
									)}
								</VStack>
							</Wrap>
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</GridItem>
	);
}

export default SpeciesOptions;
