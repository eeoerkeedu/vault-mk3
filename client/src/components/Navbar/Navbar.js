//*Not called upon yet WIP component, needs chakra refactor

// importing utility dependancies
import Auth from "../../utils/auth";

// import styling dependancies
import {
	Box,
	Link,
	Image,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Container,
	Button,
	VStack,
	Spacer,
	Flex,
	Text,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";

//bringing in the vault pallet and logo
import logoWord1 from "../../assets/imgs/SocialMedfiaWatermark.png";
import logoWord2 from "../../assets/imgs/SocialMedfiaWatermarkYellow.png";
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

// extract username from local storage.
const username = Auth.loggedIn() ? Auth.getProfile().data.username : "";

function Navbar({ currentPage, handlePageChange }) {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container bg={vaultRasin} width="100%" maxWidth="100vw" padding=".5rem">
			<Flex>
				<Spacer />
				<ArwesThemeProvider>
					<ButtonArwes
						palette={vaultGreen}
						FrameComponent={FrameHexagon}
						onClick={onOpen}
					>
						<Text px="2rem">Menu</Text>
					</ButtonArwes>

					<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
						<DrawerOverlay />
						<DrawerContent bg={vaultYellow}>
							<DrawerHeader borderBottomWidth="1px">
								<Image dropShadow="true" src={logoWord1}></Image>
								<DrawerCloseButton color={vaultRasin} />
							</DrawerHeader>
							<DrawerBody>
								<VStack align="left">
									<Link padding=".5rem">
										<ButtonArwes
											disabled
											palette={vaultGreen}
											FrameComponent={FrameHexagon}
										>
											<Text
												fontFamily="Oribitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
												color={vaultRasin}
											>
												Character Builder
											</Text>
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
												<Text
													fontFamily="Oribitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
													color={vaultRasin}
												>
													View Characters Roster
												</Text>
											</ButtonArwes>
										</Link>
									) : (
										<></>
									)}
									{/* downloads page */}
									<Link href="/downloads" padding=".5rem">
										<ButtonArwes
											palette={vaultGreen}
											FrameComponent={FrameHexagon}
										>
											<Text
												fontFamily="Oribitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
												color={vaultRasin}
											>
												Downloads
											</Text>
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
													<Text
														fontFamily="Oribitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
														color={vaultRasin}
													>
														View Profile
													</Text>
												</ButtonArwes>
											</Link>
											<Link href="/" padding=".5rem" onClick={logout}>
												<ButtonArwes
													palette={vaultGreen}
													FrameComponent={FrameHexagon}
												>
													<Text
														fontFamily="Oribitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
														color={vaultRasin}
													>
														Logout
													</Text>
												</ButtonArwes>
											</Link>
										</>
									) : (
										// login button
										<Link href="/login" padding=".5rem">
											<ButtonArwes
												palette={vaultGreen}
												FrameComponent={FrameHexagon}
											>
												Login
											</ButtonArwes>
										</Link>
									)}
								</VStack>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</ArwesThemeProvider>
			</Flex>
		</Container>
	);
}
export default Navbar;
