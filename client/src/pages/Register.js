//*this page is not needed*

// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutation";
// import {
// 	FormControl,
// 	Form,
// 	FormLabel,
// 	FormErrorMessage,
// 	FormHelperText,
// 	Input,
// 	Container,
// 	Box,
// 	Image,
// 	InputGroup,
// 	InputLeftAddon,
// 	ErrorMessage,
// } from "@chakra-ui/react";
// import {
// 	ArwesThemeProvider,
// 	Button as ButtonArwes,
// 	FrameHexagon,
// } from "@arwes/core";

// import "../App.css";

// import Auth from "../utils/auth";

// import logo from "../assets/imgs/VaultLogoforsite.png";
// const vaultRasin = "#272932";
// const vaultYellow = "#ffc857";
// const vaultBlue = "#4d7ea8";
// const vaultGreen = "#a4f9c8";
// const vaultPink = "#f72585";

// const RegisterForm = (props) => {
// 	const [userFormData, setUserFormData] = useState({
// 		email: "",
// 		password: "",
// 	});
// 	// const [validated] = useState(false);
// 	const [showAlert, setShowAlert] = useState(false);
// 	const [login] = useMutation(LOGIN_USER);

// 	const handleInputChange = (event) => {
// 		const { name, value } = event.target;
// 		setUserFormData({ ...userFormData, [name]: value });
// 	};

// 	const handleFormSubmit = async (event) => {
// 		event.preventDefault();
// 		console.log(userFormData);
// 		// check if form has everything (as per react-bootstrap docs)
// 		const form = event.currentTarget;
// 		// console.log(form);
// 		if (form.checkValidity() === false) {
// 			console.log("Data Missing - Form Validity Check");
// 			event.preventDefault();
// 			event.stopPropagation();
// 		}
// 		try {
// 			console.log("Recieving Data from User Form");
// 			const { data } = await login({
// 				variables: { ...userFormData },
// 			});
// 			console.log(data);
// 			if (!data) {
// 				throw new Error("something went wrong!");
// 			}
// 			console.log("User Authenticated");
// 			Auth.login(data.login.token);
// 			//
// 		} catch (err) {
// 			console.error(err);
// 			setShowAlert(true);
// 		}
// 		setUserFormData({
// 			email: "",
// 			password: "",
// 		});
// 	};
// 	return (
// 		<Container
// 			fontFamily="Signika, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
// 			bg={vaultRasin}
// 			height="100vh"
// 			width="100%"
// 			maxWidth="100vw"
// 			centerContent
// 		>
// 			<Box paddingTop="2rem" className="App-header">
// 				<Image src={logo} maxW="30%"></Image>
// 				<h1 className="spraypaint">Make a Killing</h1>
// 			</Box>
// 			<ArwesThemeProvider>
// 				<Box
// 					mt="2rem"
// 					pr="2rem"
// 					pl="2rem"
// 					pb="2rem"
// 					borderWidth="2px"
// 					borderColor={vaultYellow}
// 					borderRadius="15px"
// 					maxW="80%"
// 					background-color="#fff"
// 					boxShadow="0px 0px 40px 5px #4d7ea8"
// 				>
// 					<form onSubmit={handleFormSubmit}>
// 						<FormControl isRequired>
// 							<FormHelperText
// 								p=".2rem"
// 								mb=".2rem"
// 								fontSize="1.5rem"
// 								color={vaultYellow}
// 							>
// 								Provide Credentials for Records Access:
// 							</FormHelperText>
// 							<InputGroup size="md">
// 								{/* <FormLabel color={vaultYellow}>Email:</FormLabel> */}
// 								<InputLeftAddon
// 									color={vaultYellow}
// 									borderColor={vaultBlue}
// 									bg={vaultRasin}
// 									children="Email:"
// 								/>
// 								<Input
// 									color={vaultYellow}
// 									borderColor={vaultBlue}
// 									type="email"
// 									name="email"
// 									focusBorderColor={vaultBlue}
// 									// placeholder="EMAIL"
// 									onChange={handleInputChange}
// 									value={userFormData.email}
// 								/>
// 							</InputGroup>
// 						</FormControl>
// 						<FormControl isRequired isInvalid={showAlert} mb="1rem">
// 							<InputGroup pt=".5rem" size="md">
// 								{/* <FormLabel color={vaultYellow}>Password:</FormLabel> */}
// 								<InputLeftAddon
// 									color={vaultYellow}
// 									borderColor={vaultBlue}
// 									bg={vaultRasin}
// 									children="Password:"
// 								/>
// 								<Input
// 									color={vaultYellow}
// 									borderColor={vaultBlue}
// 									type="password"
// 									name="password"
// 									focusBorderColor={vaultBlue}
// 									autoComplete="true"
// 									onChange={handleInputChange}
// 									value={userFormData.password}
// 								/>
// 							</InputGroup>
// 							<FormErrorMessage color={vaultPink}>
// 								Credentials do not match Vault Records
// 							</FormErrorMessage>
// 						</FormControl>

// 						<ButtonArwes
// 							mt="2rem"
// 							type="submit"
// 							palette={vaultGreen}
// 							FrameComponent={FrameHexagon}
// 						>
// 							Login
// 						</ButtonArwes>
// 					</form>
// 				</Box>
// 			</ArwesThemeProvider>
// 		</Container>
// 	);
// };
// export default RegisterForm;
