import "./App.css";
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
import Navbar from "./components/Navbar/Navbar";
import PrintPageNav from "./components/Navbar/PrintPageNav";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Downloads from "./pages/Downloads";
import UserProfile from "./pages/UserProfile";
import CharacterBuilderInit from "./pages/CharacterBuilderInit";
import CharacterBuilder from "./pages/CharacterBuilder";
import CharacterRoster from "./pages/CharacterRoster";
import CharacterView from "./pages/CharView";
import CharacterPrint from "./pages/CharPrint";

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

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				{!window.location.pathname.includes("/print") ? (
					<Navbar />
				) : (
					""
					// <PrintPageNav />
				)}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:username" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/downloads" element={<Downloads />} />
					<Route path="/profile/:username" element={<UserProfile />} />
					<Route path="/characterbuilder" element={<CharacterBuilderInit />} />
					<Route path="/characterbuilder/app" element={<CharacterBuilder />} />
					<Route path="/roster/:username" element={<CharacterRoster />} />
					<Route
						path="/roster/characterview/:username/:id"
						element={<CharacterView />}
					/>
					<Route
						path="/roster/characterview/:username/:id/print"
						element={<CharacterPrint />}
					/>
				</Routes>
				{!window.location.pathname.includes("/print") ? <Footer /> : ""}
			</Router>
		</ApolloProvider>
	);
}

export default App;
