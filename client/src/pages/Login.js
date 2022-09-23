import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";
import {
	FormControl,
	Form,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Button,
	Input,
	Container,
	Box,
	Image,
} from "@chakra-ui/react";

import "../App.css";

import Auth from "../utils/auth";

import logo from "../assets/imgs/VaultLogoforsite.png";
const vaultRasin = "#272932";
const vaultYellow = "#ffc857";
const vaultBlue = "#4d7ea8";
const vaultGreen = "#a4f9c8";
const vaultPink = "#f72585";

const LoginForm = () => {
	const [userFormData, setUserFormData] = useState({
		emailField: "",
		passwordField: "",
	});
	const [validated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [loginUser, { error }] = useMutation(LOGIN_USER);
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(userFormData);
		// check if form has everything (as per react-bootstrap docs)
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		try {
			const { data } = await loginUser({
				variables: { ...userFormData },
			});
			if (!data) {
				throw new Error("something went wrong!");
			}
			Auth.login(data.login.token);
			//
		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}
		setUserFormData({
			email: "",
			password: "",
		});
	};
	return (
		<Container bg={vaultRasin} height="100vh" width="100%" maxWidth="100vw">
			<Box paddingTop="3rem" className="App-header">
				<Image src={logo} maxW="40%"></Image>
				<h1 className="spraypaint">Make a Killing</h1>
			</Box>
			<div className="loginContainer">
				<FormControl isRequired>
					<FormHelperText>
						Please enter Mercenary credentials to log in:
					</FormHelperText>
					<Input
						size="md"
						type="email"
						name="emailField"
						placeholder="EMAIL"
						onChange={handleInputChange}
						value={userFormData.email}
					/>
					<FormErrorMessage type="invalid">Email is required.</FormErrorMessage>
				</FormControl>
				<FormControl isRequired>
					<Input
						size="md"
						type="password"
						name="passwordField"
						placeholder="PASSWORD"
						onChange={handleInputChange}
						value={userFormData.password}
					/>
					<FormErrorMessage>Password is required!</FormErrorMessage>
				</FormControl>
				<Button
					className="loginbtn"
					variant="success"
					type="submit"
					disabled={!(userFormData.email && userFormData.password)}
				>
					Log In
				</Button>
			</div>
		</Container>
	);
};
export default LoginForm;
