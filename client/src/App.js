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

//imported routes
import Home from "./pages/Home";
import Login from "./pages/Login";
import Downloads from "./pages/Downloads";

// import NavbarComp from "./componets/Navbar/Navbar";
// import Footer from "./componets/Footer/Footer";

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	// link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/login" element={<Login />} /> */}
					<Route path="/downloads" element={<Downloads />} />
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
