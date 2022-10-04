import "./App.css";
import React from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./utils/auth";

//imported routes
import Home from "./pages/Home";
import Login from "./pages/Login";
import Downloads from "./pages/Downloads";
import UserProfile from "./pages/UserProfile";

// import NavbarComp from "./componets/Navbar/Navbar";
// import Footer from "./componets/Footer/Footer";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
	uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("id_token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const username = JSON.parse(localStorage.getItem("vaultUsername"));

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:username" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/downloads" element={<Downloads />} />
					<Route path="/profile/:username" element={<UserProfile />} />
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
