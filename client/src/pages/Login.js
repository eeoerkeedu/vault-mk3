import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutation";
import Auth from "../utils/auth";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Container,
	Box,
	Image,
	// InputGroup,
	// InputLeftAddon,
	// ErrorMessage,
	Checkbox,
	CheckboxGroup,
	Link,
	VStack,
	Modal,
	ModalContent,
	ModalCloseButton,
	ModalOverlay,
	ModalBody,
	ModalFooter,
	ModalHeader,
	useDisclosure,
	Button,
	HStack,
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

const loggedInUsername = JSON.parse(localStorage.getItem("vaultUsername"));

const LoginForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	const [userFormData, setUserFormData] = useState({
		email: "",
		password: "",
	});
	// const [validated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [login] = useMutation(LOGIN_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(userFormData);
		// check if form has everything (as per react-bootstrap docs)
		const form = event.currentTarget;
		// console.log(form);
		if (form.checkValidity() === false) {
			console.log("Data Missing - Form Validity Check");
			event.preventDefault();
			event.stopPropagation();
		}
		try {
			console.log("Recieving Data from User Form");
			const { data } = await login({
				variables: { ...userFormData },
			});
			console.log(data);
			if (!data) {
				throw new Error("something went wrong!");
			}
			console.log("User Authenticated");
			localStorage.setItem(
				"vaultUsername",
				JSON.stringify(data.login.user.username)
			);
			Auth.login(data.login.token);
		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}
		setUserFormData({
			email: "",
			password: "",
		});
	};

	const [showAlertRegister, setShowAlertRegister] = useState(false);
	const [addUser] = useMutation(ADD_USER);
	const [newUserFormData, setNewUserFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const handleRegistrationChange = (event) => {
		const { name, value } = event.target;
		setNewUserFormData({ ...newUserFormData, [name]: value });
	};

	const handleAddUser = async (event) => {
		event.preventDefault();
		console.log(newUserFormData);

		const form = event.currentTarget;

		if (form.checkValidity() === false) {
			console.log("Data Missing - Form Validity Check");
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			console.log("Recieving Data from Registration Form");
			const { data } = await addUser({
				variables: { ...newUserFormData },
			});
			console.log(data);
			if (!data) {
				throw new Error("something went wrong!");
			}
			console.log("User Registered");

			// Auth.login(data.login.token);
			//
		} catch (err) {
			console.error(err);
			setShowAlertRegister(true);
		}
		onClose();
		setNewUserFormData({
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
			centerContent
		>
			<Box paddingTop="2rem" className="App-header">
				<Image src={logo} maxW="30%"></Image>
				<h1 className="spraypaint">Make a Killing</h1>
			</Box>

			<ArwesThemeProvider>
				<Box
					mt="2rem"
					pr="2rem"
					pl="2rem"
					pb="2rem"
					borderWidth="2px"
					borderColor={vaultYellow}
					borderRadius="15px"
					maxW="80%"
					background-color="#fff"
					boxShadow="0px 0px 40px 5px #4d7ea8"
				>
					<form onSubmit={handleFormSubmit}>
						<FormControl isRequired>
							<FormHelperText
								p=".2rem"
								mb=".2rem"
								fontSize="1.5rem"
								color={vaultYellow}
							>
								Provide Credentials for Records Access:
							</FormHelperText>
							{/* <InputGroup size="md"> */}
							<FormLabel color={vaultYellow}>Email:</FormLabel>
							{/* <InputLeftAddon
									color={vaultYellow}
									borderColor={vaultBlue}
									bg={vaultRasin}
									children="Email:"
								/> */}
							<Input
								color={vaultYellow}
								borderColor={vaultBlue}
								type="email"
								name="email"
								focusBorderColor={vaultYellow}
								// placeholder="EMAIL"
								onChange={handleInputChange}
								value={userFormData.email}
							/>
							{/* </InputGroup> */}
						</FormControl>
						<FormControl isRequired isInvalid={showAlert} mt="1rem" mb="1rem">
							{/* <InputGroup pt=".5rem" size="md"> */}
							<FormLabel color={vaultYellow}>Password:</FormLabel>
							{/* <InputLeftAddon
									color={vaultYellow}
									borderColor={vaultBlue}
									bg={vaultRasin}
									children="Password:"
								/> */}
							<Input
								color={vaultYellow}
								borderColor={vaultBlue}
								type="password"
								name="password"
								focusBorderColor={vaultYellow}
								autoComplete="true"
								onChange={handleInputChange}
								value={userFormData.password}
							/>
							{/* </InputGroup> */}
							<FormErrorMessage color={vaultPink}>
								Credentials do not match Vault Records
							</FormErrorMessage>
						</FormControl>

						<ButtonArwes
							mt="2rem"
							type="submit"
							palette={vaultGreen}
							FrameComponent={FrameHexagon}
						>
							Login
						</ButtonArwes>
					</form>
				</Box>

				<HStack mt="1rem" paddingTop=".5rem" spacing="2rem">
					<ButtonArwes
						onClick={onOpen}
						palette={vaultGreen}
						FrameComponent={FrameHexagon}
					>
						Register
					</ButtonArwes>
					<Link
						href={Auth.loggedIn() ? `/${loggedInUsername}` : "/"}
						padding=".5rem"
					>
						<ButtonArwes palette={vaultGreen} FrameComponent={FrameHexagon}>
							Return Home
						</ButtonArwes>
					</Link>
				</HStack>

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
							Create a Vault account
						</ModalHeader>
						<ModalCloseButton />
						<form onSubmit={handleAddUser}>
							<ModalBody color={vaultRasin} pb={6}>
								<FormControl isRequired isInvalid={showAlertRegister}>
									<FormLabel fontWeight="black">Username:</FormLabel>
									<Input
										color={vaultRasin}
										borderColor={vaultBlue}
										placeholder="Username"
										type="input"
										name="username"
										value={newUserFormData.username}
										onChange={handleRegistrationChange}
									/>
								</FormControl>

								<FormControl mt={4} isRequired isInvalid={showAlertRegister}>
									<FormLabel fontWeight="black">Email:</FormLabel>
									<Input
										color={vaultRasin}
										borderColor={vaultBlue}
										ref={initialRef}
										placeholder="Email"
										type="email"
										name="email"
										value={newUserFormData.email}
										onChange={handleRegistrationChange}
									/>
								</FormControl>

								<FormControl mt={4} isRequired isInvalid={showAlertRegister}>
									<FormLabel fontWeight="black">Password:</FormLabel>
									<Input
										color={vaultRasin}
										borderColor={vaultBlue}
										placeholder="Password"
										type="password"
										// autoComplete="true"
										name="password"
										onChange={handleRegistrationChange}
										value={newUserFormData.password}
									/>
									<FormErrorMessage color={vaultPink}>
										Something Went Wrong! Please ensure info fields are properly
										filled out.
									</FormErrorMessage>
								</FormControl>

								{/* <FormControl mt={4}>
									<Checkbox
										color={vaultRasin}
										colorScheme="blackAlpha"
										defaultChecked
										name="joinMailing"
									>
										Join the Team Rex Games Email List
									</Checkbox>
								</FormControl> */}
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
		</Container>
	);
};
export default LoginForm;
