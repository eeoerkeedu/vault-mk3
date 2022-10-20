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
	VStack,
	Spacer,
	Flex,
	Text,
	useMediaQuery,
	Heading,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";

//bringing in the vault pallet and logo
import logo from "../../assets/imgs/VaultLogoforsite.png";
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
	const [isLargerThan426] = useMediaQuery("(min-width: 426px)");

	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container
			fontFamily="Orbitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'"
			bg={vaultRasin}
			width="100%"
			maxWidth="100vw"
			padding="20px"
		>
			<Flex>
				<ArwesThemeProvider>
					{isLargerThan426 ? (
						<>
							<Link href="/">
								<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
									<Text py="5px">Home</Text>
								</ButtonArwes>
							</Link>
							<Spacer />

							<Link href="/">
								<Box
									display="flex"
									flexDirection="column"
									alignItems="center"
									justifyContent="center"
								>
									<Image src={logoWord1} maxH="100px"></Image>
								</Box>
							</Link>
						</>
					) : (
						<Link href="/">
							<Box
								display="flex"
								flexDirection="column"
								alignItems="center"
								justifyContent="center"
							>
								<Image src={logoWord1} maxH="100px"></Image>
							</Box>
						</Link>
					)}

					<Spacer />
					<Box>
						<ButtonArwes
							palette={vaultGreen}
							FrameComponent={FrameHexagon}
							onClick={onOpen}
						>
							<Text py="5px">Menu</Text>
						</ButtonArwes>
					</Box>

					<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
						<DrawerOverlay />
						<DrawerContent bg={vaultYellow}>
							<DrawerHeader shadow="lg" borderBottomWidth="1px">
								<Image src={logoWord1}></Image>
								<DrawerCloseButton color={vaultRasin} />
							</DrawerHeader>
							<DrawerBody>
								<VStack
									fontFamily="Orbitron, Signika, -apple-system, Roboto, sans-serif"
									placement="right"
									align="left"
								>
									<Link padding=".5rem" href="/">
										<ButtonArwes
											palette={vaultGreen}
											FrameComponent={FrameHexagon}
										>
											<Text align="left" color={vaultRasin}>
												Home
											</Text>
										</ButtonArwes>
									</Link>
									<Link padding=".5rem">
										<ButtonArwes
											disabled
											palette={vaultGreen}
											FrameComponent={FrameHexagon}
										>
											<Text align="left" color={vaultRasin}>
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
												<Text align="left" color={vaultRasin}>
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
											<Text align="left" color={vaultRasin}>
												Downloads
											</Text>
										</ButtonArwes>
									</Link>
									{Auth.loggedIn() ? (
										<>
											<Link href={`/profile/${username}`} padding=".5rem">
												<ButtonArwes
													palette={vaultGreen}
													FrameComponent={FrameHexagon}
												>
													<Text
														fontFamily="Orbitron, Signika, -apple-system, Roboto, sans-serif"
														placement="right"
														align="left"
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
														fontFamily="Orbitron, Signika, -apple-system, Roboto, sans-serif"
														placement="right"
														align="left"
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
												<Text
													fontFamily="Orbitron, Signika, -apple-system, Roboto, sans-serif"
													align="left"
													color={vaultRasin}
												>
													Login
												</Text>
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
