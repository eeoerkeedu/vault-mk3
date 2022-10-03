import logo from "../assets/imgs/VaultLogoforsite.png";
import React from "react";
import Auth from "../utils/auth";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import "../App.css";
import {
	Box,
	Container,
	Image,
	Link,
	ScaleFade,
	Tooltip,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
	Text,
} from "@arwes/core";

const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
// const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
// const vaultPink = "#f72585";

const username = JSON.parse(localStorage.getItem("vaultUsername"));
// console.log(user);
const loadingText = [
	"Loading App......",
	"Establishing Connection......",
	"Building Encryption......",
	"Confirming User......",
	`Welcome Mercenary ${
		Auth.loggedIn() ? `--- ${username}` : "Please Register or Login"
	}`,
];

function Home() {
	const [childrenIndex, setChildrenIndex] = React.useState(0);
	const duration = { enter: 5000, exit: 5000 };

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			const isLastIndex = childrenIndex === loadingText.length - 1;
			const nextIndex = isLastIndex ? 4 : childrenIndex + 1;
			setChildrenIndex(nextIndex);
		}, 500);
		return () => clearTimeout(timeout);
	}, [childrenIndex]);

	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	let { username } = useParams();
	// console.log(username);

	const { loading, data, error } = useQuery(QUERY_USER, {
		variables: { username: username },
	});
	// if (loading) return "Loading...";
	// if (error) return `Error! ${error.message}`;

	const user = data?.user || [];
	// console.log(user);

	return (
		<Container
			bg={vaultRasin}
			height="100vh"
			width="100%"
			maxWidth="100vw"
			centercontent="true"
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
		>
			<Box paddingTop="3rem" className="App-header">
				<Image src={logo} maxW="40%"></Image>
				<h1 className="spraypaint">Make a Killing</h1>
			</Box>

			<Box
				flex="1"
				color={vaultYellow}
				fontSize="2rem"
				padding="1rem"
				marginLeft="5%"
			>
				<ArwesThemeProvider>
					<Text id="loadingField" as="h1" animator={{ duration }}>
						{loadingText[childrenIndex]}
					</Text>
				</ArwesThemeProvider>
				<ScaleFade initialScale={0.75} in={true}>
					<ArwesThemeProvider>
						<Link padding=".5rem">
							<ButtonArwes
								disabled
								palette={vaultGreen}
								FrameComponent={FrameHexagon}
							>
								Character Builder
							</ButtonArwes>
						</Link>
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
						<Link href="/downloads" padding=".5rem">
							<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
								Downloads
							</ButtonArwes>
						</Link>
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
							<Link href="/login" padding=".5rem">
								<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
									Login
								</ButtonArwes>
							</Link>
						)}
					</ArwesThemeProvider>
				</ScaleFade>
			</Box>
		</Container>
	);
}

export default Home;
