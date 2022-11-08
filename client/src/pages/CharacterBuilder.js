// importing utility dependancies
import Auth from "../utils/auth";
import CharacterOptions from "../utils/CB";

// import styling dependancies
import "../App.css";
import { Box, Container, Image, Link } from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
	Text,
} from "@arwes/core";

//bringing in the vault pallet
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

// extract username from token.
let username = Auth.loggedIn() ? Auth.getProfile().data.username : "";
console.log(username);

console.log(CharacterOptions);

function CharacterBuilder() {
	return (
		// overall containter
		<Container
			bg={vaultRasin}
			h="100%"
			height="100vh"
			width="100%"
			maxWidth="100vw"
			centercontent="true"
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
		>
			{/* Arwes theme add-on wrapper */}
			<ArwesThemeProvider>
				{/* Main view area */}
				<Box>
					<form>
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
