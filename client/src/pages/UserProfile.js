// importing utility dependancies
import { useState, useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_USER } from "../utils/queries";
import { UPDATE_USER, UPDATE_USERNAME } from "../utils/mutation";
import Auth from "../utils/auth";

// import styling dependancies
import {
	Box,
	Container,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Heading,
	Input,
	Link,
	Grid,
	GridItem,
	Table,
	Tbody,
	Tr,
	Td,
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
	HStack,
	Text,
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";
import "../App.css";

//bringing in the vault pallet and logo
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";
const Signika =
	"Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";
const Orbitron = "Orbitron, Signika, -apple-system, Roboto, sans-serif";

const UserProfile = () => {
	// extracts username from params for checking against login token on page load
	let paramsUsername = useParams().username;
	// console.log(paramsUsername);

	// extract username from token.
	let username = Auth.getProfile().data.username;
	// console.log(Auth.getProfile().data);

	// query's user data based on username from token
	const { loading, data } = useQuery(QUERY_USER, {
		variables: { username: username },
	});
	const user = data?.user || [];

	// discolosure (open, close) system for modals
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef(null);
	const finalRef = useRef(null);

	//* Alerts if form isn't filled out properly, issue with always triggering so currently disabled.
	// const [showAlert, setShowAlert] = useState(false);

	// update user state setup for input
	const [editUserData, setEditUserData] = useState({
		userId: "",
		username: "",
		email: "",
		password: "",
	});
	// console.log(editUserData);

	// extracts update user function
	const [updateUser] = useMutation(UPDATE_USER);

	// handle input change for the update fields
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEditUserData({ ...editUserData, [name]: value });
	};

	// page loading response waiting on user data
	if (loading) return "Loading...";

	// handles user info update submittion and reloads page
	const handleUpdateUser = async (event) => {
		event.preventDefault();
		// console.log(editUserData);

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

	// page rendering
	return (
		<Container
			fontFamily={Signika}
			padding="40px"
			h="100%"
			height="100vh"
			width="100%"
			maxWidth="100vw"
			mb="100px"
		>
			{/* Auth restriction to prevent users who are not logged in from viewing profiles, also prevents other users editing profiles that they cannot log into.*/}
			{Auth.loggedIn() && username === paramsUsername ? (
				<Box>
					{/* Arwes theme add-on wrapper */}
					<ArwesThemeProvider>
						<Grid templateColumns="repeat(5, 1fr)" gap={1}>
							<GridItem colSpan="5">
								{/* username field and edit button */}
								<HStack>
									<Heading pb="1rem" fontFamily={Orbitron}>
										Merc Username:
									</Heading>
									<Heading pb="1rem" color={vaultPink} fontFamily={Orbitron}>
										{user.username}
									</Heading>
								</HStack>
							</GridItem>

							{/* account details section */}
							<GridItem colSpan="1">
								<Heading color={vaultYellow} as="h3" size="md">
									Account Details:
								</Heading>
								<TableContainer>
									<Table size="sm">
										<Tbody>
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

									{/* bottom of page buttons for navigation and requesting to edit the account's info */}
									<Box padding="1rem">
										<ButtonArwes
											palette={vaultGreen}
											FrameComponent={FrameHexagon}
											onClick={onOpen}
										>
											<Text fontFamily={Signika}>Edit Account Info</Text>
										</ButtonArwes>
									</Box>
								</TableContainer>
							</GridItem>
						</Grid>

						{/* modal for editing account details */}
						<Modal
							initialFocusRef={initialRef}
							finalFocusRef={finalRef}
							isOpen={isOpen}
							onClose={onClose}
						>
							<ModalOverlay />
							<ModalContent fontFamily={Signika} bg={vaultYellow}>
								<ModalHeader color={vaultRasin} fontWeight="black">
									Edit Your Vault Account
								</ModalHeader>
								<ModalCloseButton color={vaultRasin} />
								<form onSubmit={handleUpdateUser}>
									<ModalBody color={vaultRasin} pb={6}>
										{/* email field */}
										<FormControl isRequired mt={4}>
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

										{/* password update field */}
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

											{/* userID and username controls */}
											<FormControl
												display="none"
												value={(editUserData.userId = user._id)}
											></FormControl>
											<FormControl
												display="none"
												value={(editUserData.username = username)}
											></FormControl>

											{/* error message */}
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
			) : (
				// if user is not logged in then this displays instead
				<Link href="/">
					You need to be logged in to view this page. Please login.
				</Link>
			)}
		</Container>
	);
};
export default UserProfile;
