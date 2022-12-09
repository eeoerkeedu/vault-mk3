// importing utility dependancies
import Auth from "../utils/auth";
import { useState } from "react";

//import pages for use
import SpeciesOptions from "../components/CharacterBuilderComps/Species";
import StyleOptions from "../components/CharacterBuilderComps/CharBuildStyles";
import ClassOptions from "../components/CharacterBuilderComps/CharBuildClasses";
import CharDesc from "../components/CharacterBuilderComps/CharDesc";

// import styling dependancies
import "../App.css";
import { Box, Center, Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import { ArwesThemeProvider, Button as ButtonArwes } from "@arwes/core";

//bringing in the vault pallet and fonts
// const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
// const vaultBlue = "#4d7ea8";
// const vaultGreen = "#a4f9c8";
//const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

// extract username from token.
let username = Auth.loggedIn() ? Auth.getProfile().data.username : "";

function CharacterBuilder() {
	const [builderView, setBuilderView] = useState(0);

	const NextPage = (event) => {
		if (builderView === 3) {
			window.location.assign("/roster/" + { username });
			return;
		}
		setBuilderView(builderView + 1);
		//console.log(builderView);
	};
	const PreviousPage = (event) => {
		if (builderView === 0) {
			window.location.assign("/characterbuilder");
			return;
		}
		setBuilderView(builderView - 1);
		//console.log(builderView);
	};
	const characterStagesHeaders = [
		"Choose your Merc's Species",
		"Choose your Merc's Style",
		"Choose your Merc's Two Classes",
		"Last Step, Name Your Merc!",
	];
	const characterStages = [
		<SpeciesOptions />,
		<StyleOptions />,
		<ClassOptions />,
		<CharDesc />,
	];

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
					<Grid
						fontFamily={Orbitron}
						templateColumns="repeat(6, 1fr)"
						gridTemplateRows={"70px 1fr 70px"}
						gap={1}
						templateAreas={`	"header" 
											"body"
											"footer"`}
					>
						<GridItem h="80px" colSpan={6} area={"header"}>
							<Center height="60px">
								<Heading p="1%" size="md" color={vaultYellow}>
									{characterStagesHeaders[builderView]}
								</Heading>
							</Center>
						</GridItem>

						{characterStages[builderView]}

						<GridItem colSpan={2} colStart={2} colEnd={3} area={"footer"}>
							<Center height="60px">
								<ButtonArwes onClick={PreviousPage}>
									<Text>{builderView === 0 ? "RETURN" : "PREV"}</Text>
								</ButtonArwes>
							</Center>
						</GridItem>
						<GridItem colSpan={2} colStart={5} colEnd={6} area={"footer"}>
							<Center height="60px">
								<ButtonArwes onClick={NextPage}>
									<Text>{builderView === 3 ? "VIEW ROSTER" : "NEXT"}</Text>
								</ButtonArwes>
							</Center>
						</GridItem>
					</Grid>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterBuilder;
