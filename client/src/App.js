import logo from "./assets/imgs/VaultLogoforsite.png";
import "./App.css";
import {
	Container,
	Image,
	VStack,
	Text,
	Box,
	Fade,
	ScaleFade,
	Slide,
	SlideFade,
} from "@chakra-ui/react";

const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

// import NavbarComp from "./componets/Navbar/Navbar";
// import Footer from "./componets/Footer/Footer";

function App() {
	return (
		<Container bg={vaultRasin} h="100vw" maxW="100vw" centerContent>
			<VStack>
				<Box className="App-header">
					<Image src={logo} maxW="60%"></Image>
					<h1 className="spraypaint">Make a Killing</h1>
				</Box>
				<Box color={vaultYellow}>
					<Text>Loading App......</Text>
					<Text>Establishing Connection......</Text>
					<Text>Building Encryption......</Text>
					<Text>Confirming User......</Text>
					<Text color={vaultGreen}>Welcome Mercenary.</Text>
				</Box>
			</VStack>
		</Container>
	);
}

export default App;
