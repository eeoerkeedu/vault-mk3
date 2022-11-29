import React from "react";

// import character builder files
import CharacterOptions from "../../utils/CharacterIndex";

// import styling dependancies
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Box,
	VStack,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
	Button,
	Center,
	Container,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Text,
} from "@chakra-ui/react";
import { Button as ButtonArwes, FrameHexagon, title } from "@arwes/core";
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

function Species() {
	const speciesList = CharacterOptions.speciesOptions;
	const specStats = [
		"STR",
		"PHY",
		"SPD",
		"AGL",
		"CRD",
		"MRK",
		"INT",
		"PER",
		"ESS",
	];
	console.log(speciesList);

	return (
		<Grid
			fontFamily={Orbitron}
			// h="100%"
			// w="100%"
			templateColumns="repeat(6, 1fr)"
			gridTemplateRows={"80px 1fr 70px"}
			gap={1}
			templateAreas={`	"header" 
								"species"
								"footer"`}
		>
			<GridItem h="80px" colSpan={6} area={"header"}>
				<Center height="60px">
					<Heading p="1%" size="md" color={vaultYellow}>
						Choose your Merc's Species
					</Heading>
				</Center>
			</GridItem>

			<GridItem colSpan={6} area={"species"}>
				<Tabs isFitted variant="enclosed">
					<TabList>
						{speciesList.map((spec) => (
							<Tab key={spec.name + "tab"}>{spec.name}</Tab>
						))}
					</TabList>
					<TabPanels>
						{speciesList.map((spec) => (
							<TabPanel key={spec.name + "tabpanel"}>
								<Heading color={vaultGreen} size="sm" fontFamily={Orbitron}>
									{spec.shortDec}
								</Heading>
								<Divider p=".5%" />
								<HStack>
									{" "}
									<Text p=".5rem" fontFamily={Signika}>
										{spec.desc}
									</Text>
									{/* <Heading
										color={vaultGreen}
										pt="1%"
										size="sm"
										fontFamily={Orbitron}
									>
										Species Stats
									</Heading> */}
									<Table w="30%" size="sm" variant="simple">
										<Thead fontFamily={Signika}>
											<Tr>
												<Th color={vaultBlue}>Stat</Th>
												<Th color={vaultBlue}>Base</Th>
												<Th color={vaultBlue}>Merc</Th>
												<Th color={vaultBlue}>Exemplar</Th>
												<Th color={vaultBlue}>World Shaper</Th>
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
								</HStack>

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
							</TabPanel>
						))}
					</TabPanels>
				</Tabs>
			</GridItem>

			{/* <GridItem colSpan={6} area={"body"}>
				<Text fontStyle="italic" fontFamily={Signika}>
					{speciesData}
				</Text>
			</GridItem> */}

			<GridItem colSpan={2} colStart={2} colEnd={3} area={"footer"}>
				<Center height="60px">
					<ButtonArwes disabled>
						<Text>PREV</Text>
					</ButtonArwes>
				</Center>
			</GridItem>
			<GridItem colSpan={2} colStart={5} colEnd={6} area={"footer"}>
				<Center height="60px">
					<ButtonArwes>
						<Text>NEXT</Text>
					</ButtonArwes>
				</Center>
			</GridItem>
		</Grid>
	);
}

export default Species;
