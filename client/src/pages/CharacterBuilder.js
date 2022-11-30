// importing utility dependancies
//import Auth from "../utils/auth";
import { useState } from "react";

//import pages for use
import SpeciesOptions from "../components/CharacterBuilderComps/Species";

// import character builder files
import CharacterOptions from "../utils/CharacterIndex";

// import styling dependancies
import "../App.css";
import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
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

function CharacterBuilder() {
	const [builderView, setBuilderView] = useState(0);

	const handlePageAdvance = (event) => {
		setBuilderView({ ...(builderView + 1) });
	};
	const characterStages = [
		<SpeciesOptions />,
		// <StyleOptions />,
		// <ClassesOptions />,
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
					{characterStages[builderView]}
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default CharacterBuilder;
