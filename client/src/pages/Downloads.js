import BnWCS from "../assets/imgs/BnWfrontpage.PNG";
import ColorCS from "../assets/imgs/frontpage.PNG";

import React from "react";
import "../App.css";
import {
	Container,
	Image,
	VStack,
	HStack,
	Box,
	StackDivider,
	Link,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	Text,
	FrameHexagon,
} from "@arwes/core";

const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

function Downloads() {
	return (
		<Container bg={vaultRasin} height="100%" width="100%" maxWidth="100vw">
			<Box fontSize="2rem" padding="1rem" marginLeft="5%">
				<ArwesThemeProvider>
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
				<ArwesThemeProvider>
					<Link href="/" padding=".5rem">
						<VStack>
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								Return Home
							</ButtonArwes>
						</VStack>
					</Link>
				</ArwesThemeProvider>
			</Box>
		</Container>
	);
}

export default Downloads;
