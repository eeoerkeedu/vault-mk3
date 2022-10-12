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
	Divider,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Heading,
	Input,
	Image,
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
} from "@chakra-ui/react";
import {
	ArwesThemeProvider,
	Button as ButtonArwes,
	FrameHexagon,
} from "@arwes/core";
import "../App.css";

//bringing in the vault pallet and logo
import logo from "../assets/imgs/VaultLogoforsite.png";
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

const UserProfile = () => {
	// extracts username from params for checking against login token on page load
	let paramsUsername = useParams().username;
	// console.log(paramsUsername);

	// extract username from token.
	let username = Auth.getProfile().data.username;
	// console.log(username);

	// query's user data based on username from token
	const { loading, data } = useQuery(QUERY_USER, {
		variables: { username: username },
	});
	const user = data?.user || [];

	// discolosure (open, close) system for modals
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [userForm, setUserForm] = useState();
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
	console.log(editUserData);

	// update username state setup for input
	const [editUsernameData, setEditUsernameData] = useState({
		userId: "",
		newUsername: "",
	});
	console.log(editUsernameData);

	// extracts update user functions
	const [updateUser] = useMutation(UPDATE_USER);
	const [updateUsername] = useMutation(UPDATE_USERNAME);

	// handle input change for the update fields
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEditUserData({ ...editUserData, [name]: value });
	};

	const handleUsernameChange = (event) => {
		const { name, value } = event.target;
		setEditUsernameData({ ...editUsernameData, [name]: value });
	};

	// page loading response waiting on user data
	if (loading) return "Loading...";

	// modal pre-construction
	const EditUsernameModal = () => (
		<>
			<ModalHeader color={vaultRasin} fontWeight="black">
				Edit Your Vault Username
			</ModalHeader>
			<ModalCloseButton />
			<form onSubmit={handleUpdateUsername}>
				<ModalBody color={vaultRasin} pb={6}>
					{/* username field */}
					<FormControl isRequired mt={4}>
						<FormLabel fontWeight="black">New Username:</FormLabel>
						<Input
							color={vaultRasin}
							borderColor={vaultBlue}
							ref={initialRef}
							type="string"
							name="newUsername"
							value={editUsernameData.newUsername}
							onChange={handleUsernameChange}
							autoComplete="false"
						/>
					</FormControl>

					{/* userID control field */}
					<FormControl
						display="none"
						value={(editUsernameData.userId = user._id)}
					></FormControl>

					{/* error message */}
					<FormErrorMessage color={vaultPink}>
						Something Went Wrong!
					</FormErrorMessage>
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
		</>
	);

	const EditAccountModal = () => (
		<>
			<ModalHeader color={vaultRasin} fontWeight="black">
				Edit Your Vault Account
			</ModalHeader>
			<ModalCloseButton />
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
							Something Went Wrong! Please ensure info fields are properly
							filled out.
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
		</>
	);

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

	const handleUpdateUsername = async (event) => {
		event.preventDefault();
		// console.log(editUserData);

		try {
			console.log("Recieving Data from User Edit Form");
			const { data } = await updateUsername({
				variables: { ...editUsernameData },
			});
			console.log(data);
			if (!data) {
				throw new Error("something went wrong!");
			}
			console.log("Handshake Complete");
			window.location.replace(`/profile/${data.username}`);
		} catch (err) {
			console.error(err.message);
			// setShowAlert(true);
		}
		setEditUsernameData({
			userId: "",
			newUsername: "",
		});
	};

	// page rendering
	return (
		<Container
			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
			bg={vaultRasin}
			height="100vh"
			width="100%"
			maxWidth="100vw"
		>
			{/* Page Header */}
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
			{/* Auth restriction to prevent users who are not logged in from viewing profiles, also prevents other users editing profiles that they cannot log into.*/}
			{Auth.loggedIn() && username === paramsUsername ? (
				<Box mt="1rem">
					{/* Arwes theme add-on wrapper */}
					<ArwesThemeProvider>
						<Grid templateColumns="repeat(5, 1fr)" gap={1}>
							<GridItem colSpan="5">
								{/* username field and edit button */}
								<HStack>
									<Heading
										pb="1rem"
										fontFamily="Orbitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'"
									>
										Merc Username:
									</Heading>
									<Heading
										pb="1rem"
										color={vaultPink}
										fontFamily="Orbitron, Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'"
									>
										{user.username}
									</Heading>
									<Box padding="1rem">
										<ButtonArwes
											palette={vaultGreen}
											FrameComponent={FrameHexagon}
											onClick={() => {
												setUserForm(<EditUsernameModal />);
												onOpen();
											}}
										>
											Edit Username
										</ButtonArwes>
									</Box>
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
											onClick={() => {
												setUserForm(<EditAccountModal />);
												onOpen();
											}}
										>
											Edit Account Info
										</ButtonArwes>
									</Box>
									<Box padding="1rem">
										<ButtonArwes
											palette={vaultGreen}
											FrameComponent={FrameHexagon}
										>
											<Link href={`/${username}`}>Return Home</Link>
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
							<ModalContent
								fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
								bg={vaultYellow}
							>
								{userForm}
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
