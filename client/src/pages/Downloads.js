// imports images from the charactersheets as somples
import BnWCS from "../assets/imgs/BnWfrontpage.PNG";
import ColorCS from "../assets/imgs/frontpage.PNG";

// import function dependancies
import Auth from "../utils/auth";

// import styling dependancies
import "../App.css";
import { Container, Image, VStack, Box, Link } from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";

//bringing in vault pallet
const vaultRasin = "#272932";
// const vaultYellow = "#ffc857";
// const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
// const vaultPink = "#f72585";

// extract username from local storage.
const username = JSON.parse(localStorage.getItem("vaultUsername"));

// page rendering
function Downloads() {
	return (
		// outer containter for the page
		<Container
			bg={vaultRasin}
			height="100%"
			h="100%"
			width="100%"
			maxWidth="100vw"
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Box fontSize="2rem">
				{/* Arwes theme add-on wrapper */}
				<ArwesThemeProvider>
					{/* link wrapped image and button for color character sheet */}
					<Link
						href="https://drive.google.com/uc?export=download&id=1ujtaj6cLMWkNciSMSI_06ti43rZMq1A7"
						isExternal
						padding=".5rem"
					>
						<VStack>
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								Character Sheet
							</ButtonArwes>
							<Image src={ColorCS} />
						</VStack>
					</Link>
					{/* link wrapped image and button for black and white character sheet */}
					<Link
						href="https://drive.google.com/uc?export=download&id=1fQGWojUorBwnfkshgvUJRhpxlqWUNwJz"
						isExternal
						padding=".5rem"
					>
						<VStack>
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								Character Sheet (Printer Friendly)
							</ButtonArwes>
							<Image src={BnWCS} />
						</VStack>
					</Link>
				</ArwesThemeProvider>
			</Box>
		</Container>
	);
}

export default Downloads;
