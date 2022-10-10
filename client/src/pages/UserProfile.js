import { useState, useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_USER } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutation";
import Auth from "../utils/auth";

import {
	Box,
	Container,
	Divider,
	ErrorMessage,
	FormControl,
	Form,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Heading,
	Input,
	Image,
	InputGroup,
	InputLeftAddon,
	Link,
	List,
	ListItem,
	Grid,
	GridItem,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalCloseButton,
	ModalFooter,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";
import "../App.css";

import logo from "../assets/imgs/VaultLogoforsite.png";
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

const UserProfile = () => {
	let { username } = useParams();

	const { loading, data, error } = useQuery(QUERY_USER, {
		variables: { username: username },
	});
	const user = data?.user || [];
	// const userId = user._id;
	const userNameVar = user.username;
	// console.log(userNameVar);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef(null);
	const finalRef = useRef(null);
	const [showAlert, setShowAlert] = useState(false);

	const [editUserData, setEditUserData] = useState({
		userId: "",
		username: "",
		email: "",
		password: "",
	});
	console.log(editUserData);
	const [updateUser] = useMutation(UPDATE_USER);

	if (loading) return "Loading...";

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEditUserData({ ...editUserData, [name]: value });
	};

	const handleUpdateUser = async (event) => {
		event.preventDefault();
		console.log(editUserData);

		try {
			console.log("Recieving Data from User Edit Form");
			const { data } = await updateUser({
				variables: { ...editUserData },
			});
			// console.log(data);
			if (!data) {
				throw new Error("something went wrong!");
			}
			console.log("Handshake Complete");
			localStorage.setItem(
				"vaultUsername",
				JSON.stringify(editUserData.username)
			);
			window.location.reload();
		} catch (err) {
			console.error(err.message);
			// setShowAlert(true);
		}
		setEditUserData({
			userId: "",
			username: "",
			email: "",
			password: "",
		});
	};

	return (
		<Container
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
			bg={vaultRasin}
			height="100vh"
			width="100%"
			maxWidth="100vw"
		>
			{Auth.loggedIn() ? (
				<>
					<Box paddingTop="2rem">
						<Image src={logo} maxW="20%"></Image>
						<Heading
							size="sm"
							fontFamily="Rock Salt,
								Oribitron,
								Impact,
								Haettenschweiler,
								'Arial Narrow Bold',
								sans-serif;"
							color={vaultPink}
						>
							Make a Killing
						</Heading>
					</Box>
					<Divider mt="2rem" />
					<Box mt="1rem">
						<ArwesThemeProvider>
							<Grid templateColumns="repeat(5, 1fr)" gap={1}>
								<GridItem colSpan="5">
									<Heading
										pb="1rem"
										fontFamily="Orbitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'"
									>
										Merc Username: {user.username}
									</Heading>
								</GridItem>

								<GridItem colSpan="1">
									<Heading color={vaultYellow} as="h3" size="md">
										Account Details:
									</Heading>
									<TableContainer>
										<Table size="sm">
											<Tbody>
												{/* <Tr>
													<Td>Username:</Td>
													<Td color={vaultGreen}>{user.username}</Td>
												</Tr> */}
												<Tr>
													<Td>Email:</Td>
													<Td color={vaultGreen}>{user.email}</Td>
												</Tr>
												<Tr>
													<Td>Password:</Td>
													<Td color={vaultGreen}>*************</Td>
												</Tr>
											</Tbody>
										</Table>
										<Box padding="1rem">
											{Auth.loggedIn() ? (
												<ButtonArwes
													palette={vaultGreen}
													FrameComponent={FrameHexagon}
													onClick={onOpen}
												>
													Edit Info
												</ButtonArwes>
											) : (
												""
											)}
										</Box>
										<Box padding="1rem">
											<ButtonArwes
												palette={vaultGreen}
												FrameComponent={FrameHexagon}
											>
												<Link href={`/${userNameVar}`}>Return Home</Link>
											</ButtonArwes>
										</Box>
									</TableContainer>
								</GridItem>
							</Grid>
							<Modal
								initialFocusRef={initialRef}
								finalFocusRef={finalRef}
								isOpen={isOpen}
								onClose={onClose}
							>
								<ModalOverlay />
								<ModalContent
									fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
									bg={vaultYellow}
								>
									<ModalHeader color={vaultRasin} fontWeight="black">
										Edit Your Vault Account
									</ModalHeader>
									<ModalCloseButton />
									<form onSubmit={handleUpdateUser}>
										<ModalBody color={vaultRasin} pb={6}>
											<FormControl>
												<FormLabel fontWeight="black">Username:</FormLabel>
												<Input
													color={vaultRasin}
													borderColor={vaultBlue}
													type="input"
													name="username"
													value={editUserData.username}
													onChange={handleInputChange}
													autoComplete="false"
												/>
											</FormControl>

											<FormControl mt={4}>
												<FormLabel fontWeight="black">Email:</FormLabel>
												<Input
													color={vaultRasin}
													borderColor={vaultBlue}
													ref={initialRef}
													type="email"
													name="email"
													value={editUserData.email}
													onChange={handleInputChange}
													autoComplete="false"
												/>
											</FormControl>

											<FormControl mt={4} isRequired>
												<FormLabel fontWeight="black">Password:</FormLabel>
												<Input
													color={vaultRasin}
													borderColor={vaultBlue}
													type="password"
													name="password"
													onChange={handleInputChange}
													autoComplete="false"
													value={editUserData.password}
												/>
												<FormControl
													display="none"
													value={(editUserData.userId = user._id)}
												></FormControl>
												<FormErrorMessage color={vaultPink}>
													Something Went Wrong! Please ensure info fields are
													properly filled out.
												</FormErrorMessage>
											</FormControl>
										</ModalBody>

										<ModalFooter>
											<Button
												bg={vaultYellow}
												color={vaultRasin}
												borderWidth="0px"
												colorScheme="blackAlpha"
												type="submit"
												mr={3}
											>
												Save
											</Button>
											<Button
												bg={vaultYellow}
												color={vaultRasin}
												borderWidth="0px"
												colorScheme="blackAlpha"
												onClick={onClose}
											>
												Cancel
											</Button>
										</ModalFooter>
									</form>
								</ModalContent>
							</Modal>
						</ArwesThemeProvider>
					</Box>
				</>
			) : (
				<Link to="/">
					You need to be logged in to view this page. Please login.
				</Link>
			)}
		</Container>
	);
};
export default UserProfile;
