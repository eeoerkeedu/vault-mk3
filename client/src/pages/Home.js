// importing logo and utility dependancies
import { useState, useEffect } from "react";
import logo from "../assets/imgs/VaultLogoforsite.png";
import Auth from "../utils/auth";

// import styling dependancies
import "../App.css";
import { Box, Container, Image, Link, ScaleFade } from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
	Text,
} from "@arwes/core";

//bringing in the vault pallet
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
// const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
// const vaultPink = "#f72585";

// extract username from token.
const username = Auth.getProfile().data.username;
// console.log(user);

// Page load greeting text for interactive feel, imcludes function to recognized user/loged in status.
const loadingText = [
	"Loading App......",
	"Establishing Connection......",
	"Building Encryption......",
	"Confirming User......",
	`Welcome Mercenary ${
		Auth.loggedIn() ? `--- ${username}` : "Please Register or Login"
	}`,
];

// page rendering
function Home() {
	// state indexing for loading text
	const [childrenIndex, setChildrenIndex] = useState(0);
	const duration = { enter: 5000, exit: 5000 };

	// runs through the loading text for use effect using timing
	useEffect(() => {
		const timeout = setTimeout(() => {
			const isLastIndex = childrenIndex === loadingText.length - 1;
			const nextIndex = isLastIndex ? 4 : childrenIndex + 1;
			setChildrenIndex(nextIndex);
		}, 500);
		return () => clearTimeout(timeout);
	}, [childrenIndex]);

	// logout event function, will be migrated to a user section in nav bar once that is built.
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	return (
		// overall containter for
		<Container
			bg={vaultRasin}
			height="100vh"
			width="100%"
			maxWidth="100vw"
			centercontent="true"
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
		>
			{/* Arwes theme add-on wrapper */}
			<ArwesThemeProvider>
				{/* Page header */}
				<Box paddingTop="3rem" className="App-header">
					<Image src={logo} maxW="40%"></Image>
					<h1 className="spraypaint">Make a Killing</h1>
				</Box>
				{/* Main view area */}
				<Box
					flex="1"
					color={vaultYellow}
					fontSize="2rem"
					padding="1rem"
					marginLeft="5%"
				>
					{/* dispalys loading text if not logged-in, and just presents user personalization if logged-in */}
					{Auth.loggedIn() ? (
						<Text id="loadingField" as="h1">
							{loadingText[4]}
						</Text>
					) : (
						<Text id="loadingField" as="h1" animator={{ duration }}>
							{loadingText[childrenIndex]}
						</Text>
					)}

					{/* page load scaling up "animation" */}
					<ScaleFade initialScale={0.75} in={true}>
						{/* Character builder page link */}
						<Link padding=".5rem">
							<ButtonArwes
								disabled
								palette={vaultGreen}
								FrameComponent={FrameHexagon}
							>
								Character Builder
							</ButtonArwes>
						</Link>
						{/* user character roster saved from builder, only shows when logged in */}
						{Auth.loggedIn() ? (
							<Link padding=".5rem">
								<ButtonArwes
									disabled
									palette={vaultGreen}
									FrameComponent={FrameHexagon}
								>
									View Characters Roster
								</ButtonArwes>
							</Link>
						) : (
							<></>
						)}
						{/* downloads page */}
						<Link href="/downloads" padding=".5rem">
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								Downloads
							</ButtonArwes>
						</Link>
						{/* View user's profile navigation and log-out button, only shows when logged in, otherwise shows login button. Will get moved to navbar when built. */}
						{Auth.loggedIn() ? (
							<>
								<Link href={`/profile/${username}`} padding=".5rem">
									<ButtonArwes
										palette={vaultGreen}
										FrameComponent={FrameHexagon}
									>
										View Profile
									</ButtonArwes>
								</Link>
								<Link href="/" padding=".5rem" onClick={logout}>
									<ButtonArwes
										palette={vaultGreen}
										FrameComponent={FrameHexagon}
									>
										Logout
									</ButtonArwes>
								</Link>
							</>
						) : (
							// login button
							<Link href="/login" padding=".5rem">
								<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
									Login
								</ButtonArwes>
							</Link>
						)}
					</ScaleFade>
				</Box>
			</ArwesThemeProvider>
		</Container>
	);
}

export default Home;
